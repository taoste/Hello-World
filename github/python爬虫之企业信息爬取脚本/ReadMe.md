- [python爬虫之企业信息爬取脚本 | 下载世界](https://v2rayhome.github.io/2021/01/27/python-1/)

> 天眼查、企查查必备爬虫脚本！

> 可以通过以下爬虫获取批量企业的相关信息！
>>  代码简单好用！
>>  注意时间间隔不要太短！防止被封！

```
# -*- coding: utf-8 -*-
import requests
import json
import urllib
import re
from faker import Faker
fake = Faker()
header={'User-Agent': fake.user_agent()}
 
name = input("请输入公司名称")
 
data = urllib.parse.quote(str(name))
 
url = 'https://aiqicha.baidu.com'
url1='https://aiqicha.baidu.com/s?q='+data+'&t=0'
 
s= requests.Session()
res1 = s.get(url = url,headers =header)
res2 = s.post(url = url1,headers =header)
 
pattern = 'pid\":\"(\d{14})'
rel = re.findall(pattern,res2.text)
 
detail_url='https://aiqicha.baidu.com/detail/basicAllDataAjax?pid='+rel[0]  #只爬第一个，想要爬取的话加循环
res3 = s.get(url= detail_url,headers = header)
res3.text.encode('utf-8').decode('unicode_escape')
result = json.loads(res3.text) #返回的企业信息JSON串  可以根据自己需要提取
```
