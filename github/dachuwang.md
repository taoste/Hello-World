# [大厨网](https://github.com/microIBM/gdby_github_repo#大厨网) 
大厨网隶属于一亩田集团自营事业部，成立于2015年2月9日。

# 大厨网域名划分总体规划
- 线上服务根域名：  *.dachuwang.com
- 测试服务子域名：  *.test.dachuwang.com
- 预发布环境子域名：*.beta.dachuwang.com
- 线上服务子域名:
    - www PC站，前期仅用于放置大厨网宣传页
    - s 服务域，封装了系统基础资源数据及其CRUD操作、各种基础服务
    - api 基础业务接口域，跨系统的基础业务接口
    - app H5站，面向采购客户的前台商城（承载平台包括：微信公众号、移动浏览器、android客户端、ios客户端等潜在的移动承载平台）
    - crm CRM系统，面向销售团队
    - wms 仓储管理系统，面向库管分拣人员团队
    - tms 物流调度系统，面向司机团队
    - bi 数据分析决策系统，面向数据分析，商业分析团队
    - hop 运营支撑系统，面向运营人员，提供商品、分类、活动、营销、推送等支持
    - 其他系统，根据业务发展，划分出新的域名和业务系统，面向特定的系统角色
- 系统代码及接口组织的相关约定:
    - 总的web系统代码仓库在一起，并根据业务拆分成不同的项目文件夹，公用shared下的模型/库/辅助函数，系统之间相对独立
    - 不同的二级系统域名，提供api.xxx 这个三级域名，作为前后端分离时使用的接口地址
    - 对于跨系统的通用接口，放在api这个二级域名下
    - 对于跨系统，跨语言的基础服务接口，放在s这个二级域名下
    - 数据传输接口，如无特殊情况，统一使用JSON
- dachuwang开发目录结构
    - sql 存储sql文件变化
        - 规范：初次建立表结构，sql文件命名：表名.sql,表结构更新：表名.update.次数.sql
    - web 项目目录:
        - system 公用CI框架核心
        - shared 公用项目类库，helper，config
        - applications 所有应用目录:
            - demo 样例目录 (子目录结构以此为例)
                - www 前端展示:
                    - debug 开发目录 
                    - release 打包
                - api 后端接口
                    - 返回数据以json格式：必须包含status req_time 单条记录返回info,多条list,涉及到分页还有total和current_page,返回失败，则需要error_code,msg
            - crm 客户关系管理系统
                - ...
            - hop 运营系统
                - ...
            - s 对内的服务域
            - api 对外其他系统开放的接口域

# ui-router 路由规则
---

###Dependency
`angular.module('xxx',['ui.router'])`
---

###Router示例代码
```javascript
    angular.module('dachuwang')
        .config(function($urlRouteProvider, $stateProvider) {
            $urlRouterProvider.otherwise('/');
            $stateProvider
                .state('home_page', {
                    url : '/',
                    templateUrl : 'homepage.html',
                    controller : 'homepageController',
                    resolve : {
                        foo : function() {
                            return {key : 'value'};
                        },
                        bar : function($http) {
                            return $http.get('/someurl');
                        },
                        another : function($q, $timeout) {
                            var defered = $q.defer();
                            $timeout(function() {
                                defered.resolve('hello router');
                            }, 3000);
                            return defered.promise;
                        }
                    }
                })
                .state('order_page', {
                    url : '/order',      //mathces 127.0.0.1:3000/order 
                    templateUrl : 'xxx.html',
                    controller : 'xxxController'
                })
                .state('order_page.list', {
                url : '/list',      //matches 127.0.0.1:3000/order/list
                    templateUrl : 'ttt.html',
                    controller : 'tttController'
                });
        });
```
---

###url中含参数的情况

* 简单参数 `url : '/list/{product_id}'` matches `/list/something`
* 带正则   `url : '/list/{product_id:[0-9]{1,8}}'` matches `/list/335`
* query parameters `url : '/list?param1&param2'` mathces `/list?param1=aaa&param2=bbb`

---

###url中参数的获取方式
在controller中注入$stateProvider
```javascript
    .controller('listController', ['$stateParams', function($stateParams) {
        console.log($stateParams.param1, $stateParams.param2);  // aaa bbb
    }])
```
---

###resolve中对象的获取
```javascript
    .controller('homepageController', function($scope, foo, bar, another) {
        console.log(foo.key);  // value
    })
```

###模板使用
index.html  
```html
    ...
    <div ui-view></div>
    ...
```
路由会把模板加到ui-view的指令div内
---

###比较灵活的用法
```javascript
    .state('parent', {
        url : '/parent',
        views : {
            '' : {
                templateUrl : 'parent.html',
                controller : 'parentController'
            },
            'child1@parent' : {
                templateUrl : 'child1.html',
                controller : 'child1Controller'
            },
            'child2@parent' : {
                templateUrl : 'child2.html',
                controller : 'child2Controller'
            }
        }
    })
```
index.html
```html
    <div ui-view></div>
```
parent.html
```html
    ...
    <div ui-view=child2></div>
    ...
    <div ui-view=child1></div>
    ...
```
以上路由会匹配到/parent时，把parent加载到index.html的div中，并且把child1.html和child2.html加载到parent.html对应的地方

---

---
###数据库设计规范
---

##一、数据库设计原则

- 1) 范式要求
通俗地理解三个范式，对于数据库设计大有好处。在数据库设计中，为了更好地应用三个范式，就必须通俗地理解三个范式(通俗地理解是够用的理解，并不是最科学最准确的理解)： 
    - 第一范式：1NF是对属性的原子性约束，要求属性具有原子性，不可再分解，即没有表中表； 
    - 第二范式：2NF是对记录的惟一性约束，要求记录有惟一标识，即实体的惟一性； 
    - 第三范式：3NF是对字段冗余性的约束，即任何字段不能由其他字段派生出来，它要求字段没有冗余。 
没有冗余的数据库设计可以做到。但是，没有冗余的数据库未必是最好的数据库，有时为了提高运行效率，就必须降低范式标准，适当保留冗余数据。具体做法是：在概念数据模型设计时遵守第三范式，降低范式标准的工作放到物理数据模型设计时考虑。降低范式就是增加字段，允许冗余。
- 2)每个表必须有主键
每个表必须有主键，最好是设计一个ID字段作为主键，尽量不使用复合主键。
- 3)每个业务表都必须有时间戳字段和状态字段
每个涉及到与业务相关的表，都必须有时间戳字段:created_time、updated_time和状态字段:status
- 4)字段类型的使用
    如果项目或软件需要考虑支持多种数据库，那么，在建数据库表时，字段类型尽量要使用各个数据库都通用且含义相同的类型，如：CHAR，VARCHAR，DECIMAL/NUMBER/NUMERIC等。尽量少使用INT，DATE，TIMESTAMP等字段类型。对于时间类型的字段，可以用NUMERIC来存储，存储的值为时间的毫秒数(用java的System.currentTimeMillis())。

##二、数据库设计字符规范

采用26 个英文字母(区分大小写)和0-9 这十个自然数,加上下划线'_'组成,共63 个字符.不能出现其他字符(注释除外).
注意事项:
- 1) 以上命名都不得超过30 个字符的系统限制.变量名的长度限制为29(不包括标识字符@).
- 2) 数据对象、变量的命名都采用英文字符,禁止使用中文命名.绝对不要在对象名的字符之间留空格.
- 3) 小心保留词,要保证你的字段名没有和保留词、数据库系统或者常用访问方法冲突.
- 4) 保持字段名和类型的一致性,在命名字段并为其指定数据类型的时候一定要保证一致性.假如数据类型在一个表里是整数,那在另一个表里可就别变成字符型了.


##三、数据库命名规范

数据库名使用小写英文以及下划线组成.比如:

```
my_db
snepr
```
备份数据库名使用正式库名加上备份时间组成,如:

```
dbname_20070403
```
##四、数据库表命名规范

数据表名使用小写英文以及下划线组成
比如:

```
info_user
system_destination
```
信息类采用：info_xxx
文件类采用：file_xxx
关联类采用：inter_xxx
备份数据表名使用正式表名加上备份时间组成,如:

```
info_user_20070403
system_destination_20070403
```
##五、字段命名规范

字段名称使用单词组合完成,首字母小写,后面单词的首字母大写,最好是带表名前缀.
如web_user 表的字段:

```
user _id
user_name
```
如果表名过长，可以取表名的前5 个字母。如果表名为多个单词组合，可以取前一个单词，外加后续其它单词的首字母作为字段名。
表与表之间的相关联字段要用统一名称,如info_user 表里面的userId 和group 表里面的userId 相对应；业务流水号统一采用：表名_seq；

##六、外键命名规范

外键名称为FK_表名A_表名B_关联字段名；
其中表名和关联字段名如果过长，可以取表名、关联字段名的前5 个字母。
如果表名、关联字段为多个单词组合，可以取前一个单词，外加后续其它单词的
首字母作为字段名。
如：FK_user_token_user_phnum；


##七、字段类型规范

规则:用尽量少的存储空间来存数一个字段的数据.
比如能用int 的就不用char 或者varchar
能用varchar(20)的就不用varchar(255)
时间戳字段尽量用int 型，如created:表示从'1970-01-01 08:00:00'开始的int 秒数，采用英文单词的过去式；gmtCreated:表示datetime 类型的时间，
即形如'1980-01-01 00:00:00'的时间串，Java 中对应的类型为Timestamp

##八、索引使用原则：

- 1) 逻辑主键使用唯一的成组索引,对系统键(作为存储过程)采用唯一的非成组索引,对任何外键列采用非成组索引.考虑数据库的空间有多大,表如何进行访问,还有这些访问是否主要用作读写.
- 2) 大多数数据库都索引自动创建的主键字段,但是可别忘了索引外键,它们也是经常使用的键,比如运行查询显示主表和所有关联表的某条记录就用得上.
- 3) 不要索引blob/text 等字段,不要索引大型字段(有很多字符),这样作会让索引占用太多的存储空间.
- 4) 不要索引常用的小型表
不要为小型数据表设置任何键,假如它们经常有插入和删除操作就更别这样作了.对这些插入和删除操作的索引维护可能比扫描表空间消耗更多的时间.

##九、sql 语句规范

所有 sql 关键词全部大写,比如SELECT,UPDATE,FROM,ORDER,BY 等,表名与字段名不需要大写
如:

```
SELECT COUNT(*) FROM cdb_members WHERE userName= 'aeolus';
```
##十、其他设计技巧

- 1) 避免使用触发器
触发器的功能通常可以用其他方式实现.在调试程序时触发器可能成为干扰.
假如你确实需要采用触发器,你最好集中对它文档化.
- 2) 避免使用存储过程
- 3) 使用常用英语(或者其他任何语言)而不要使用拼音首字母缩写

---
# 前端环境搭建
- 下载git仓库中的最新代码
- 修改npm的安装包下载镜像地址为淘宝的镜像地址：
```
alias cnpm="npm --registry=https://registry.npm.taobao.org \
--cache=$HOME/.npm/.cache/cnpm \
--disturl=https://npm.taobao.org/dist \
--userconfig=$HOME/.cnpmrc"

# Or alias it in .bashrc or .zshrc
$ echo '\n#alias for cnpm\nalias cnpm="npm --registry=https://registry.npm.taobao.org \
  --cache=$HOME/.npm/.cache/cnpm \
    --disturl=https://npm.taobao.org/dist \
      --userconfig=$HOME/.cnpmrc"' >> ~/.zshrc && source ~/.zshrc
```
- 进入前端的www目录下的debug中，输入cnpm install && bower install 安装相关依赖包
- 可将node_modules 和 bower_components 移到 根目录下，再通过软链链接到www目录，从而共享安装包，免去重复下载之苦

---


- gulp 基本指令
    - 打开调试 进入www/debug， 输入 gulp serve，再在浏览器中输入127.0.0.1:3000 监听当前效果，进行调试
    - 打包 进入www/debug, 输入 gulp build，完成打包（一般会在上线前统一打包一次，开发过程中，无需打包）

