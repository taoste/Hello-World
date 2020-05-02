      
- [引用](): [优雅高效地使用 Windows](http://saili.science/2016/10/17/windows-use/) | Alex LEE's Blog ( 2019-03-15 )
 
<hr>

<p>『优雅』、『高效』，可以理解为自然不慌乱，简洁不杂乱，高效不散乱，流畅不混乱。
      实际上是指优化电脑工作环境，让电脑的使用更加快速高效。
      而且在当前国内的环境来看，更应该加上一条，即尽可能的避免流氓软件的骚扰。
      确切的来讲，电脑使用环境的优化与获得更高的使用效率是一个颇长的过程，牵涉到不断的学习与总结。
      这里的总结，当然仅仅是个人的一些看法，无法适应所有人的需求或满足所有人的看法/好恶，仅供抛砖引玉。</p>
<a id="more"></a>

<blockquote>
<p><a href="http://love.appinn.com/" target="_blank" rel="noopener">我最喜爱的软件windows版</a><br><a href="http://www.jeffjade.com/2015/10/19/2015-10-18-Efficacious-win-software/" target="_blank" rel="noopener">Windows下效率必备软件</a></p>
</blockquote>
<h1 id="win10">WIN10</h1>
<p>对于懒得捣鼓的人们，自己喜欢怎么样的系统就选择怎么样的吧，木有推荐，只有习惯。相比之下，我觉得WIN10多出了快捷键和分屏功能，不用点点点的去找了。其他功能基本没啥区别，也没有体会。</p>
<h2 id="开启管理员账户">开启管理员账户</h2>
<p>Win10管理员账户Administrator默认关闭和隐藏，就是防止这个高权限账户被<code>滥用</code>影响系统安全。不过我们有时候也需要开启该账户，以便完成一些特殊任务。但我们在登录Windows10管理员账户后却发现，所有Windows应用都无法运行，甚至有部分用户反映连开始菜单都无法打开（个别现象），因为Win10的开始菜单也是Windows应用。</p>
<p>方法一</p>
<ul>
<li>按住键盘<code>Windows+R</code></li>
<li>输入：<code>secpol.msc</code>，回车(确认)，来到<code>本地安全策略编辑器</code></li>
<li>依次打开：安全设置&gt;本地策略&gt;安全选项&gt;用户帐户控制：用于内置管理员帐户的管理审批模式，然后，双击或者右键属性，选择<code>已启用</code>，点击应用，再点确定</li>
<li>重启电脑</li>
</ul>
<p>方法二</p>
<ul>
<li>打开控制面板</li>
<li>依次打开：管理工具–本地安全策略–本地策略–安全选项，找到<code>用户帐户控制:用于内置管理员帐户的管理审批模式式</code>，双击或者右键属性，选择<code>已启用</code>，点击应用，再点确定</li>
<li>重启电脑</li>
</ul>
<p>方法三</p>
<ul>
<li>如果上述方法不成功，按住键盘，Windows+R，按下之后，在里头输入：regedit，回车，打开注册表编辑器。 在注册表编辑器中定位到以下位置（依次打开）<code>HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\System</code>。</li>
<li>在右边找到<code>FilterAdministratorToken</code>，双击后将数值数据改为<code>1</code>后点击<code>确定</code>。注意：如果右边没有这个<code>FilterAdministratorToken</code>，则需要手动在右边空白处点击鼠标右键，新建DWORD（32位）值，并更名为<code>FilterAdministratorToken</code>，将其数值数据改为1。</li>
<li>依次找到<code>HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\System \UIPI</code>，右边有个默认的项，将它的值改成1。</li>
<li>重启电脑</li>
</ul>
<div id="shortcut-key">

</div>
<h2 id="快捷键技巧">快捷键技巧</h2>
<blockquote>
<p><a href="http://iknow.lenovo.com/detail/dc_KB022222.html" target="_blank" rel="noopener">Win10方便快捷的操作小技巧</a></p>
</blockquote>
<ul>
<li>Win+E：调出资源管理器。</li>
<li>Win+D：显示桌面</li>
<li>Win+X：打开简易版开始菜单，这个用来启动一些系统级程序还是很方便的。</li>
<li>Win+A：激活操作中心</li>
<li>Win+Tab：Win7时代的Flip3D（3D窗口切换器），到了Win10中变成了虚拟桌面切换器。</li>
<li>多桌面，提高效率：<code>WIN+TAB</code>新建多桌面。
<ul>
<li>Win+Ctrl+D：创建新的虚拟桌面</li>
<li>Win+Ctrl+F4：关闭当前虚拟桌面</li>
<li>Win+Ctrl+左/右方向键：切换虚拟桌面</li>
</ul></li>
<li>Win+左/右/上/左上/左下/右上/右下：将窗口快速缩放至1/2分屏、1/4分屏，其中1/4分屏为Win10新增功能，对应快捷键为Win+左上/左下/右上/右下。更多功能介绍<a href="http://www.pconline.com.cn/win10/674/6748976.html" target="_blank" rel="noopener">点击</a>查看。</li>
<li>Win+M：最小化所有窗口</li>
<li>Win+L：锁定系统</li>
<li>Win+P：投影到投影仪或第二个显示器</li>
<li>Win + R ：Run，打开运行窗口</li>
<li>Alt + 双击 ：查看文件属性</li>
</ul>
<h2 id="开始菜单布局备份还原">开始菜单布局备份还原</h2>
<p>在WIn10系统中，我们可以在开始菜单上添加常用软件的磁贴，并可以随心摆放磁贴位置。</p>
<p>win10开始菜单布局备份还原的操作方法：</p>
<ol style="list-style-type: decimal">
<li>在Win10系统下，打开此电脑中的一个盘符，然后在空白处点击右键，在弹出菜单中选择<code>新建/文件夹</code>菜单项，建立一个新的文件夹；</li>
<li>把新建文件夹重命名为start（或其他）；</li>
<li>按下Win+R打开运行窗口，输入命令powershell，然后点击确定按钮；</li>
<li>这时就会打开Windows Powershell窗口，在这里输入命令<code>Export-startlayout –path c:\start\start.xml</code>，其中<code>c：\start</code>就是我们刚刚在上面建立的文件夹，你可以根据自己实际情况来设置相应的路径；</li>
<li>按下回车键后，就会在新文件夹中备份好开始菜单的布局文件；</li>
<li>如果需要恢复开始菜单布局的话，只需要再次打开Windows Powershell命令行窗口，然后输入命令<code>import-startlayout -layoutpath c:\start\start.xml -mountpath c:</code>，按下回车键后，即可恢复布局！</li>
</ol>
<h2 id="在线账户改用本地账户">在线账户改用本地账户</h2>
<p>本地启用Administrator，然后登陆Microsoft账户，结果就导致本地Administrator和Mircrosoft合二为一，且没有断开连接和改用本地账户选项。</p>
<p>具体操作如下：</p>
<ol style="list-style-type: decimal">
<li>按下WIN+R打开运行，输入regedit 回车，打开注册表编辑器；</li>
<li>定位于<code>HKEY_LOCAL_MACHINE\SAM\SAM</code>，这时我们无法看到SAM下的任何东西，其实是有的！右键点击 <strong>选择权限</strong>；选中Administrator 然后设置为完全控制。</li>
<li>回到注册表，F5 刷新一下，这时我们就可以看到<code>HKEY_LOCAL_MACHINE\SAM\SAM</code>下还有东西了，再定位到<code>\Domains\Account\Users\Names\</code>；</li>
<li><p>记下<code>Names\Administrator</code>项默认值 <code>0x{ID}</code>，并记下ID（每个电脑不同），然后我们就可以到User下选中<code>0x{ID}</code>；存在如下几个键值数据项，对其删除。 <figure class="highlight plain"><table><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br><span class="line">3</span><br><span class="line">4</span><br><span class="line">5</span><br></pre></td><td class="code"><pre><span class="line">Surname</span><br><span class="line">InternetUserName</span><br><span class="line">InternetUID</span><br><span class="line">InternetSID</span><br><span class="line">InternetProviderGUID</span><br></pre></td></tr></table></figure></p></li>
<li>删除之后，重启电脑，这时你会发现登录界面还是需要密码的【登录名也还是微软帐户的名字】，你还是用你之前的密码登录；</li>
<li>回到桌面，右键点击【此电脑】管理，然后找到【用户和组】-【用户】，找到Administrator，把全名去掉，应用；</li>
<li><p>右键点击更改密码，清除密码，如果你还不需要的话，注销一下试试，是不是变回到Administrator了呢。</p></li>
</ol>
<h2 id="右键卡顿bug修复">右键卡顿BUG修复</h2>
<p>2017年10月17下午4点微软推送了win10秋季创意者更新版1709的更新补丁，不少用户在更新完成后反应在桌面上右键会有卡顿1秒的现象。右键空白处时，会出现小阵的卡顿才弹出右键菜单，重启电脑依然存在这个卡顿问题出现这样的情况似乎因为显卡驱动的菜单也导致的。</p>
<p>步骤：</p>
<ol style="list-style-type: decimal">
<li>在小娜框中搜索 <code>regedit</code> 按下回车键打开 注册表编辑器；</li>
<li>在注册表中依次展开：计算机<code>\HKEY_CLASSES_ROOT\Directory\Background\shellex\ContextMenuHandlers</code> 也可以在注册表的顶部地址栏中直接粘贴该段地址；</li>
<li>展开<code>ContextMenuHandlers</code> ，我们可以看到下面有3-5个项，我们只保留 <code>new</code> 和 <code>workFolders</code> 两个项，将其他的项删除即可。</li>
<li>删除后关闭注册表，在桌面单击右键，发现问题解决，不会有卡顿的现象，点击右键会马上弹出菜单！</li>
</ol>
<h2 id="双硬盘卡顿">双硬盘卡顿</h2>
<p>莫名其妙出现SSD+机械双硬盘假死的问题，暂时无法解决，可以参考如下链接尝试：<a href="https://answers.microsoft.com/zh-hans/windows/forum/windows_10-performance/%E5%AE%89%E8%A3%85windows/b3f3a31d-a118-4c65-8b2a-7896c37bfb4e?rtAction=1475154264985&amp;auth=1" target="_blank" rel="noopener">安装Windows 10周年更新后出现冻屏</a>，<a href="http://www.pconline.com.cn/win10/830/8307500.html" target="_blank" rel="noopener">Win10周年版系统冻结修复方案</a>，<a href="https://www.zhihu.com/question/50821797" target="_blank" rel="noopener">方法1</a>，<a href="http://www.pconline.com.cn/win10/739/7395324.html" target="_blank" rel="noopener">方法2</a>，<a href="https://jingyan.baidu.com/article/3f16e003f73b7b2591c10383.html" target="_blank" rel="noopener">方法3</a>。</p>
<h2 id="远程桌面身份验证错误">远程桌面身份验证错误</h2>
<p>升级至win10 最新版本10.0.17134，远程桌面连接Window Server时报错信息如下：<code>出现身份验证错误，要求的函数不正确，这可能是由于CredSSP加密Oracle修正。</code></p>
<p>解决方法：</p>
<ol style="list-style-type: decimal">
<li>运行 <code>gpedit.msc</code></li>
<li>本地组策略：<code>计算机配置&gt;管理模板&gt;系统&gt;凭据分配&gt;加密Oracle修正</code>，选择启用并选择易受攻击。</li>
</ol>
<h2 id="开机自动拨号上网">开机自动拨号上网</h2>
<p>方法一：</p>
<ol style="list-style-type: decimal">
<li>在计算机中找到<code>C:\Windows\System32\rasphone.exe</code>（创建快捷方式放在桌面上方便）双击运行，也可以用<code>win+R</code>打开<code>运行</code>输入<code>rasphone.exe</code></li>
<li>把这个快捷方式放到系统开机启动文件夹<code>C:\ProgramData\Microsoft\Windows\Start Menu\Programs</code>下的<code>启动</code>里就可以开机启动了</li>
</ol>
<p>方法二：</p>
<ol style="list-style-type: decimal">
<li>打开记事本输入 ：<code>CreateObject(&quot;WScript.Shell&quot;).run&quot;Rasdial 宽带连接 帐号 密码&quot;,0</code></li>
<li>将句中帐号密码改为你的宽带连接帐户和密码，将记事本另存为:<code>自动拨号.vbs</code></li>
<li>把<code>自动拨号.vbs</code>文件拖到启动文件夹<code>C:\Users\你的用户名\\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup</code>里去就可以开机自动连接了。</li>
</ol>
<p>方法三：</p>
<ol style="list-style-type: decimal">
<li>打开记事本输入（第一行空行），并另存为<code>自动拨号.bat</code>文件。右键此文件，可以直接跳转所在目录。<strong>更多设置在菜单栏<code>工具</code>-<code>选项</code>中</strong>。</li>
</ol>
<p><figure class="highlight plain"><table><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br></pre></td><td class="code"><pre><span class="line"></span><br><span class="line">Rasdial ADSL 你的帐号 你的密码</span><br></pre></td></tr></table></figure></p>
<ol style="list-style-type: decimal">
<li>把<code>自动拨号.bat</code>文件拖到启动文件夹<code>C:\Users\你的用户名\\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup</code>里去就可以开机自动连接了。</li>
</ol>
<p>方法四：第三方使用软件。</p>
<h1 id="系统设置">系统设置</h1>
<h2 id="桌面">桌面</h2>
<p>可以只留一个回收站在桌面，每天关机前可以清理已完成工作，也可以很好的区分待完成工作。一些常用软件可以直接锁定在任务栏，直接点击就可以打开。同时也可以将常用软件固定在开始菜单，点击<code>WIN</code>就可以快速进入。</p>
<p>对于技术控，可以结合AutoHotkey设置系统的快捷键，快速启动程序。</p>
<p>可以把常用的文件夹、应用软件拖到任务栏，这样就会在资源管理器的跳转列表里固定，以后在任务栏直接右键就可以找到。习惯使用资源管理器导航栏。把常用的工作文件夹<code>固定到快速访问</code>，或者建立库文件快速访问。</p>
<div id="autohotkey">

</div>
<h2 id="autohotkey">AutoHotkey</h2>
<p><strong><a href="https://autohotkey.com/" target="_blank" rel="noopener">AutoHotkey</a></strong> 是一个windows下的开源、免费、自动化软件工具。它由最初旨在提供键盘快捷键的脚本语言驱动(称为：<strong>热键</strong>)，随着时间的推移演变成一个完整的脚本语言。但你不需要把它想得太深，你只需要知道它可以简化你的重复性工作，一键自动化启动或运行程序等等；以此提高我们的<strong>工作效率</strong>，改善<strong>生活品质</strong>；通过按键映射，鼠标模拟，定义宏等。详细教程点击<a href="https://autohotkey.com/boards/viewtopic.php?t=4278" target="_blank" rel="noopener">轻松学会弹指神功</a>，<a href="https://fjxhkj.github.io/ahk_doc/zh-cn/docs/Tutorial.htm" target="_blank" rel="noopener">AutoHotkey 初学者向导</a>查看。</p>
<p>打开你的文本编辑器（notepad、或gVIM），新建一个文件为<code>myhotkey.ahk</code>。双击以后我们会看到任务栏右下角有个<code>H</code>图标，就表示它在运行了。我们在里面写入相应的映射代码然后右击<code>H</code>选择&quot;reload this script&quot;执行它就可以开始使用AutoHotkey里面设置好的功能了。</p>
<p>为了方便修改该脚本，你可以将其放置于你觉得方便的位置，丝毫不影响，双击可运行之。我们还可以为该脚本设置开机自启动，只需要将该脚本生成一个<code>快捷方式</code>，然后将此快捷方式放置到程序自启动文件夹<code>C:\ProgramData\Microsoft\Windows\Start Menu\Programs\StartUp</code>之下即可。</p>
<blockquote>
<p><strong>#</strong> 号代表 <strong><em>Win</em></strong> 键；<br><strong>!</strong> 号代表 <strong><em>Alt</em></strong> 键；<br><strong>^</strong> 号代表 <strong><em>Ctrl</em></strong> 键；<br><strong>+</strong> 号代表 <strong><em>shift</em></strong> 键；<br><strong>::</strong> 号(两个英文冒号)起分隔作用；<br><strong>run</strong>，程序完整路径，非常常用 的 AHK 命令之一;<br><strong>;</strong> 号代表 注释后面一行内容；</p>
</blockquote>
<p>热键是通过一对::创建的. 按键名或组合按键名必须在<code>::</code><strong>左边</strong>. 代码则跟在后面, 以<code>Return</code>结束.热字串在要触发的文本两边各有一对::. 替换后的文本在第二对::的<strong>右边</strong>.</p>
<figure class="highlight plain"><table><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br><span class="line">3</span><br><span class="line">4</span><br><span class="line">5</span><br><span class="line">6</span><br><span class="line">7</span><br><span class="line">8</span><br><span class="line">9</span><br><span class="line">10</span><br><span class="line">11</span><br><span class="line">12</span><br><span class="line">13</span><br><span class="line">14</span><br><span class="line">15</span><br><span class="line">16</span><br><span class="line">17</span><br><span class="line">18</span><br><span class="line">19</span><br><span class="line">20</span><br><span class="line">21</span><br><span class="line">22</span><br><span class="line">23</span><br><span class="line">24</span><br><span class="line">25</span><br><span class="line">26</span><br><span class="line">27</span><br><span class="line">28</span><br><span class="line">29</span><br><span class="line">30</span><br><span class="line">31</span><br><span class="line">32</span><br><span class="line">33</span><br><span class="line">34</span><br><span class="line">35</span><br><span class="line">36</span><br><span class="line">37</span><br><span class="line">38</span><br><span class="line">39</span><br><span class="line">40</span><br><span class="line">41</span><br><span class="line">42</span><br><span class="line">43</span><br><span class="line">44</span><br><span class="line">45</span><br><span class="line">46</span><br><span class="line">47</span><br><span class="line">48</span><br><span class="line">49</span><br></pre></td><td class="code"><pre><span class="line">; 运行程序，选择Alt键组合来打开本地应用程序。</span><br><span class="line"></span><br><span class="line">!n::</span><br><span class="line">Run Notepad ; “notepad”是“运行”对话框中的命令之一</span><br><span class="line">Return  ; 热键内容结束,这之后的内容将不会触发.</span><br><span class="line"></span><br><span class="line">!n::</span><br><span class="line">Run D:\Program Files (x86)\Sublime Text 3\sublime_text.exe</span><br><span class="line">Return  ; 热键内容结束,这之后的内容将不会触发.</span><br><span class="line"></span><br><span class="line">!b::</span><br><span class="line">Run https://www.baidu.com/ ; 极速打开网页，Win键来呼出网页</span><br><span class="line">Return  ; 热键内容结束,这之后的内容将不会触发.</span><br><span class="line"></span><br><span class="line">; 现在你决定发送一些按键到一个程序中. 你可以使用 Send 命令. Send 表示发送按键,模拟打字或按键操作.</span><br><span class="line"></span><br><span class="line">^!c:: ; 当我们按下CTRL+ALT+C时将会在文档中输入以下格式的文字</span><br><span class="line">Send Sincerely,&#123;Enter&#125;Poison_Kissreturn</span><br><span class="line">Return  ; 热键内容结束,这之后的内容将不会触发.</span><br><span class="line"></span><br><span class="line">^b:: ; Ctrl &amp; b 热键</span><br><span class="line">   send, &#123;ctrl down&#125;c&#123;ctrl up&#125;  ; 复制选定的文本. 也可以使用^c, 但这种方法更加可靠.</span><br><span class="line">   SendInput, [b]&#123;ctrl down&#125;v&#123;ctrl up&#125;[/b] ; 粘贴所复制的文本,并在文本前后加上加粗标签.</span><br><span class="line">Return  ; 热键内容结束,这之后的内容将不会触发.</span><br><span class="line"></span><br><span class="line">; 缩写快速打出常用语。再加空格、或 tab、或回车，就可以触发缩写，根据输入不同方式（-()[]&#123;&#125;&apos;:;&quot;/\,.?!`n `t（注意 `n 是回车，`t 是 Tab）输出的内容后也相应附加了触发方式。</span><br><span class="line"></span><br><span class="line">::/mail::gmail@gmail.com</span><br><span class="line">::/jeff::http://www.jeffjade.com/</span><br><span class="line">::btw::By the way   ; 替换&quot;btw&quot;为&quot;By the way&quot;, 当你按下结束符的时候.</span><br><span class="line">:*:btw::By the way  ; 替换&quot;btw&quot;为&quot;By the way&quot;而不需要按下结束符.</span><br><span class="line"></span><br><span class="line">; 几乎所有AHK内置的特殊按键，**花括号是必须的**. 它将告诉AutoHotkey `&#123;!&#125;` 表示 &quot;感叹号&quot; ,而不是要 &quot;发送 Alt 键击&quot;。</span><br><span class="line"></span><br><span class="line">; 复制，粘贴工作，定制宏：选中你要复制的文本，按住windows微标键+q就可以做这一样一个过程：Ctrl+C、Alt+tab、Ctrl+V。</span><br><span class="line">#c::</span><br><span class="line">Send ^c!&#123;tab&#125; ^v</span><br><span class="line">Return</span><br><span class="line"></span><br><span class="line">; 一键拷贝文件路径，只需要Ctrl+shift+c即可拷贝文件路径</span><br><span class="line">^+c::</span><br><span class="line">; null=</span><br><span class="line">send ^c</span><br><span class="line">sleep,200</span><br><span class="line">clipboard=%clipboard% ;%null%</span><br><span class="line">tooltip,%clipboard%</span><br><span class="line">sleep,500</span><br><span class="line">tooltip,</span><br><span class="line">return</span><br></pre></td></tr></table></figure>

<h2 id="鼠标手势">鼠标手势</h2>
<p><a href="http://www.iplaysoft.com/wgestures.html" target="_blank" rel="noopener">WGestures</a>，优秀实用的全局鼠标手势工具软件，高手必备效率神器！</p>
<h2 id="杀毒防御">杀毒防御</h2>
<p>微软自己的杀毒防御武器Windows Defender，日常使用完全够了。也推荐使用<a href="https://www.huorong.cn/" target="_blank" rel="noopener">火绒安全</a>软件，还可以拦截弹窗。</p>
<ul>
<li>平时下载软件尽可能到<strong>官网下载软件</strong>，对于软件内的捆绑安装，除非你需要，否则一律<strong>取消那些捆绑安装的选择框</strong>。</li>
<li><strong>建议远离各种第三方杀毒软件</strong>，可能会出现各种捆绑的软件、弹广告。</li>
</ul>
<h2 id="清理工具">清理工具</h2>
<div class="note info">
<p>
ccleaner<a href="http://www.piriform.com/download" target="_blank" rel="noopener">官方下载</a>。使用教程点击<a href="http://jingyan.baidu.com/album/b87fe19ed739d4521835681f.html" target="_blank" rel="noopener">教程1</a>和<a href="http://bbs.leishen.cn/thread-18903-1-1.html" target="_blank" rel="noopener">教程2</a>查看
</p>
</div>
<div id="ccleaner">

</div>
<ul>
<li>使用CCleaner免费版即可替代第三方杀毒软件进行系统清理，可以集成在回收站右键、设置开机自动运行等。建议每天或者每周进行清理。
<ul>
<li>先把语言设置为简体中文，方法为：在左侧选择<code>Options</code>标签，在右侧点击最上面的<code>Settings</code>，然后在<code>Language</code>下拉列表中选择<code>Chinese（Simplifide）</code>即可把软件界面切换为简体中文。</li>
</ul></li>
<li><a href="http://www.appinn.com/sdelete-for-windows/" target="_blank" rel="noopener">SDelete</a> 是著名的微软 Sysinternals 免费工具集软件之一，用来安全的、不可恢复的删除文件，以及多次擦除剩余空间</li>
<li>针对<code>找不到该项目无法删除</code>的问题，首先新建一个txt文件，把下面的代码复制到里面，然后另保存<code>aaa.bat</code>，这个文件名<code>aaa</code>要和你想要删除的那个文件或文件夹的名字一样。接下来把想要删除的那个文件拖动到刚才的bat文件上,并刷新即可。 <figure class="highlight plain"><table><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br></pre></td><td class="code"><pre><span class="line">DEL /F /A /Q \\?\%1</span><br><span class="line">RD /S /Q \\?\%1</span><br></pre></td></tr></table></figure></li>
</ul>
<h2 id="软媒魔方">软媒魔方</h2>
<p>功能非常多，同时各个功能的程序又是独立分开的，常用的有设置大师、优化大师以及清理大师。建议下载绿色版，并禁止自启动。点击<a href="http://mofang.ruanmei.com/" target="_blank" rel="noopener">官方下载</a>，推荐下载完整绿色版。</p>
<h2 id="windows更新">Windows更新</h2>
<p>对于无法安装某些更新，可以使用<a href="https://gallery.technet.microsoft.com/scriptcenter/reset-windows-update-agent-d824badc" target="_blank" rel="noopener">脚本</a>，对Windows Agent进行一次恢复，看下效果。如果不行，试试<a href="https://support.microsoft.com/zh-cn/help/971058/how-do-i-reset-windows-update-components" target="_blank" rel="noopener">关于Windows Update组件重置的方法</a>，看下重置组件后是否能正常进行安装。系统下可能存在的所有三方安全程序和优化软件建议您全部移除掉。</p>
<p>也可以尝试如下步骤：</p>
<ol style="list-style-type: decimal">
<li><code>Win+r</code>，输入：<code>msconfig</code></li>
<li>点击<code>服务</code>标签卡，选择<code>隐藏所有的微软服务</code>，然后点击全部禁用（若您启用了指纹识别功能，请不要关闭相关服务）</li>
<li>点击<code>启动</code>标签卡, 点击<code>打开任务管理器</code>，然后禁用全部启动项并确定</li>
<li>重启设备。当弹出<code>系统配置实用程序</code>的时候，选中此对话框中的<code>不再显示这条信息</code>并点击确定</li>
<li>按<code>Win+R</code>输入<code>services.msc</code>打开 找到<code>Windows Update</code>停止</li>
<li>打开此电脑C盘：<code>\Windows\SoftwareDistribution</code>当中<code>Download</code> 和<code>DataStore</code>进行删除</li>
<li>按照1的步骤启动<code>Windows Update</code></li>
<li>然后重启电脑</li>
</ol>
<p><a href="http://www.chuyu.me/zh-Hans/index.html" target="_blank" rel="noopener">Dism++</a>是由初雨团队采用微软内部API编写的一款开源免费的实用工具。Dism++作为第三版清理工具更加深入系统底层，功能和清理效果都非常不错。它具有功能如：空间回收、更新清理、系统优化、CompactOS、Windows Update、完整ESD支持、ESD转ISO、WIM/ESD互转，Imagex、ISO生成器、引导修复、系统备份、系统还原、春哥附体、驱动管理等，兼容Windows Vista/7/8/8.1/10平台。</p>
<div class="note warning">
<p>
不要用清理垃圾功能乱精简，会导致系统无法封装。
</p>
</div>
<h2 id="卸载win10内置应用">卸载Win10内置应用</h2>
<p>自从微软开始大力推广Windows应用商店和Win10通用应用，干干净净全新安装的Windows10系统也预装了大批的应用。如果说其中的Xbox游戏、Microsoft Edge浏览器、Cortana微软小娜、应用商店是体验Windows10的新特性必不可少的应用，那么其它的日历、邮件、Groove音乐、电影和电视、照片、天气、OneNote好像没有不让卸载的必要。并且这些预装应用很多都未提供卸载选项。</p>
<p>下面就来分享一下如何卸载这些Win10自带的应用：</p>
<ul>
<li>推荐使用<a href="#ccleaner">CCleaner工具</a>卸载Win10内置应用，在左侧选择<code>Options</code>标签，在右侧点击最上面的<code>Settings</code>，然后在<code>Language</code>下拉列表中选择<code>Chinese（Simplifide）</code>即可把软件界面切换为简体中文。然后点击左侧的<code>工具</code>标签，右侧默认显示的就是<code>卸载</code>标签，在软件列表中你即可看到Win10系统的内置应用。选中想要卸载的应用，再点击右侧的卸载按钮即可完成卸载。</li>
<li>第二种方法就是利用PowerShell命令：
<ol style="list-style-type: decimal">
<li>在系统搜索框中输入<code>Powershell</code>，然后在顶部显示的搜索结果<code>Windows Powershell</code>上点击右键，选择<code>以管理员身份运行</code>。</li>
<li>然后在打开的窗口中输入以下代码：<code>Get-AppxPackage *应用名称* | Remove-AppxPackage</code>，回车运行，就会卸载Win10系统中对应的应用。卸载Win10常用内置应用的具体命令可以<a href="http://www.windows10.pro/windows-powershell-uninstall-win10-built-in-application/" target="_blank" rel="noopener">点击</a>查看。<strong>当执行Xbox删除命令后，会跳出一大段错误提示，我们不必理会，实际上Xbox应用已经成功删除了</strong>。</li>
<li>如果想要卸载Win10系统安装的所有应用，那么只需运行 <code>Get-AppxPackage -AllUsers | Remove-AppxPackage</code> 即可。当我们新建一个账户后，预装的应用就会被重新安装，不过我们可以通过命令 <code>Get-AppXProvisionedPackage -online | Remove-AppxProvisionedPackage –online</code> 来避免这一情况的发生。</li>
</ol></li>
</ul>
<div class="note warning">
<p>
谨慎全部卸载，自从win10年度更新到1607 RS1版本后，无法对应用商店进行恢复，恢复到初始设置也没有用，只能重装。如果没有更新到1607 RS1版本，想恢复应用商店，<a href="http://www.thewindowsclub.com/windows-store-app-missing-windows-10" target="_blank" rel="noopener">点击</a>可以参考文档。输入命令<code>Get-AppXPackage *WindowsStore* -AllUsers | Foreach {Add-AppxPackage -DisableDevelopmentMode -Register &quot;$($_.InstallLocation)\AppXManifest.xml&quot;}</code>，并重启。
</p>
</div>
<h2 id="禁止开机启动浏览器">禁止开机启动浏览器</h2>
<blockquote>
<p><strong>不要使用如下方法</strong>：<del>打开<code>关闭Windows网络链接状态指示器的活动测试</code>，然后点击<code>已启用</code></del>。会导致网络链接指示失效。虽然可以链接网络，但网络中心链接显示失效，会出现未知问题。</p>
</blockquote>
<ol style="list-style-type: decimal">
<li>在开始菜单按钮上单击右键，点击<code>运行</code>；</li>
<li>在框中输入：<code>regedit</code> 点击确定打开注册表编辑器；</li>
<li>在注册表左侧依次展开：<code>HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\NlaSvc\Parameters\Internet</code>；　</li>
<li>在右侧双击打开【EnableActiveProbing】，将默认的<code>1</code>改为<code>0</code> 然后点击确定即可。</li>
</ol>
<div class="note warning">
<p>
可能存在网络中心链接延迟显示链接，存在IPV4链接失效问题
</p>
</div>
<h2 id="自定义电池阈值">自定义电池阈值</h2>
<p>在经过设置电池阈之后：只要连接电源，若电池的电量在阈值范围内，电池才会进入充电状态。若电量在阈值之外，电源与电池为断开状态，整机纯粹依靠电源供电。所以自定义电池阈值就是为了让每个人都能根据自己 插电/外出 的比例，自己选择一个合适的百分比，避免电池电量过低，续航不够的情况出现。所以，自定义电源阈值的最佳使用情况就是：长时间不外出，大部分情况下都有连接电源，那么你可以将电池阈值设置为 55%~65% 左右，让电池始终处于这一区间内，那么电池也就达到了最佳保存状态，从而保护了电池的寿命。</p>
<p>在默认情况下，ThinkPad 电池阈值的范围是 55%~60%, 其他商务品牌若有类似设置开关，有的虽然不支持自定义，但是也会直接将电量限制在 50%~65% 之间。</p>
<p>最后，避免在长期高温中使用电池，是影响电池效率的重要因素。平时使用时也尽量不要完全耗尽电池，那样并没有什么好处。</p>

> 《<a href="http://www.win10xiazai.com/win10/11204.html">Win10怎么设置电池阈值</a>》:

<h1 id="实用软件">实用软件</h1>
<h2 id="护眼宝">护眼宝</h2>
<p>电脑工作者必备，为你的手机、电脑开启护眼模式。过滤屏幕有害蓝光，让你夜间阅读更舒适，并有疲劳提醒、健康分析等功能，是保护眼睛、改善睡眠的小助手。</p>
<p>推荐使用<a href="http://huyanbao.com/" target="_blank" rel="noopener">护眼宝</a>和<a href="https://justgetflux.com/" target="_blank" rel="noopener">f.lux</a>两款软件。个人使用的是护眼宝，没有弹窗干扰，没有使用f.lux过，更多f.lux介绍<a href="http://www.iplaysoft.com/flux.html" target="_blank" rel="noopener">点击</a>查看。</p>
<div id="adblock">

</div>
<h2 id="广告屏蔽">广告屏蔽</h2>
<ul>
<li>同时拦截网络广告和视频广告：推荐使用<a href="https://chrome.google.com/webstore/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm" target="_blank" rel="noopener">uBlock Origin</a>
<ul>
<li>或者使用<a href="http://www.adtchrome.com/" target="_blank" rel="noopener">广告终结者</a>（<a href="https://chrome.google.com/webstore/detail/%E5%B9%BF%E5%91%8A%E7%BB%88%E7%BB%93%E8%80%85/fpdnjdlbdmifoocedhkighhlbchbiikl" target="_blank" rel="noopener">广告终结者CHROME插件</a>）</li>
<li>或者<a href="http://www.admflt.com/" target="_blank" rel="noopener">阿呆喵</a>（开源，无广告，静默，还能自定义拦截弹窗广告并导出拦截规则）软件，配置文件<a href="https://pan.baidu.com/s/17wfU2jKmnYkum-CQiiXEkw" target="_blank" rel="noopener">下载</a>（密码：ls2i）。</li>
<li>或者<del><a href="https://www.yiclear.com/download/" target="_blank" rel="noopener">广告净化器</a>（<a href="https://chrome.google.com/webstore/detail/%E5%B9%BF%E5%91%8A%E5%87%80%E5%8C%96%E5%99%A8/cbiaicifbmeokbhollcjfeaoakmppfeh" target="_blank" rel="noopener">广告净化器CHROME插件</a>）</del>。2018年6月22日更新，视频拦截规则有点问题，暂时不推荐。</li>
<li>或者<del><a href="http://www.ad-safe.com/" target="_blank" rel="noopener">ADSafe净网大师</a>（<a href="http://dl.ad-safe.com/pc_v4/plugin/update/index.html" target="_blank" rel="noopener">净网大师CHROME插件</a>）</del>。</li>
</ul></li>
<li>拦截弹窗。<a href="http://www.admflt.com/" target="_blank" rel="noopener">阿呆喵</a>或者使用<a href="https://www.huorong.cn/" target="_blank" rel="noopener">火绒安全</a>软件里面的拦截弹窗插件。</li>
<li>支持全平台广告屏蔽工具：付费的<a href="http://www.appinn.com/adguard-lizhi/" target="_blank" rel="noopener">Adguard</a> （<a href="https://chrome.google.com/webstore/detail/adguard-adblocker/bgnkhhnnamicmpeenaelnjfhikgbkllg?hl=zh-CN" target="_blank" rel="noopener">Adguard 广告拦截器CHROME插件</a>）（<a href="https://www.chunjingku.com/soft/240.html" target="_blank" rel="noopener">Adguard v6.1中文纯净破解版</a>）</li>
</ul>
<p>自定义拦截规则：</p>
<ul>
<li><a href="https://www.fanboy.co.nz/filters.html" target="_blank" rel="noopener">Fanboy Ultimate List</a></li>
<li>Fanboy's Ultimate List: <code>https://fanboy.co.nz/r/fanboy-ultimate.txt</code></li>
<li>easylistchina国内网站规则: <code>https://easylist-downloads.adblockplus.org/easylistchina.txt</code></li>
<li>easylist国外网站规则: <code>https://easylist.to/easylist/easylist.txt</code></li>
</ul>
<h2 id="局域网鼠键控制">局域网鼠键控制</h2>
<p>我们之前介绍过一款相当神奇的软件 <a href="http://www.iplaysoft.com/synergy.html" target="_blank" rel="noopener">Synergy</a>，它可以让你实现使用一套键盘与鼠标同时控制多台不同的电脑，让你的鼠标指针可以在它们不同的屏幕之间穿梭，非常的方便实用！然而，我们也提到它的一个小缺点，虽然它能在不同电脑间拷贝粘贴文本，但不能拷贝文件。</p>
<p>而微软推出的 Mouse without Borders (无界鼠标) 免费工具就解决了这个问题！它是 Microsoft Garage“车库”团队的一个创新软件项目，和 Synergy 一样，在配置好之后，你的鼠标指针就可以在屏幕的边缘移动到另一台电脑去，进而方便地操作它们。不仅如此，无界鼠标还实现了不同电脑间的文件拷贝与文件拖放，灰常的好玩且实用。更多设置<a href="http://www.iplaysoft.com/mouse-without-borders.html" target="_blank" rel="noopener">点击</a>查看。</p>
<p>无界鼠标各机平等，Synergy分服务端与客户端。无界鼠标仅针对Windows电脑，Synergy具备超强跨系统能力。无界鼠标可跨电脑传文件并共享剪贴板，Synergy只能复制/粘贴文字。无界鼠标有同步控制功能，Synergy支持“死角”大小调节。无界鼠标支持4台电脑，Synergy理论上支持15台电脑。</p>
<p><a href="http://www.inputdirector.com/downloads.html" target="_blank" rel="noopener">Input Director</a> 是款 Windows 下的一套鼠标键盘控制多台电脑工具。Input Director 有许多小特性，比方说支持多台电脑之间共享剪贴板，非常方便。但很可惜，它并不像无界鼠标那样完美地支持文件拖放的传输，只能复制/粘贴那些已经在局域网共享中的文件。除此之外，还有就是VPN支持/多显示器支持/数据传输加密/Win+L锁定屏幕/Ctrl+Alt+Del热键支持/在其他电脑上打开本机文件/同时向多台电脑传输键鼠动作等等一些小特性，在<a href="http://www.inputdirector.com/quickstart-usage.html" target="_blank" rel="noopener">官方网站</a>上有详细的说明。更多设置<a href="http://www.appinn.com/input-director/" target="_blank" rel="noopener">点击</a>查看。</p>
<h2 id="局域网文件访问监视软件">局域网文件访问监视软件</h2>
<p>互相分享文件是常事，虽然用飞鸽传输可以点对点分享文件，但 Windows 的文件分享功能还是无法替代的，这个时候怎么知道谁在浏览我的数据呢？当你的共享文件夹被访问时，ShareWatcher 会通知并且显示细节，如文件的浏览、操作等。你也可以设置让 ShareWatcher 在系统托盘显示信息。</p>
<div class="note info">
<p>
<a href="http://pan.baidu.com/s/1c2Mm9GG" target="_blank" rel="noopener">百度网盘下载链接</a>，密码：2s5z
</p>
</div>
<ol style="list-style-type: decimal">
<li>点击<code>ShareWatcher</code>中的<code>setup</code>安装，退出软件。</li>
<li>点击<code>Patch-URET</code>中的<code>All.Codeline.Software-patch</code>，找到安装目录<code>C:\Program Files (x86)\CodeLine\ShareWatcher</code>中<code>CodeLineKey.External.dll</code>文件，进行破解补丁。</li>
</ol>
<h2 id="局域网组建">局域网组建</h2>
<p><a href="http://www.appinn.com/zerotier-one/" target="_blank" rel="noopener">ZeroTier</a>是一款非常简单易用的内网穿透工具，不需要配置，就能实现虚拟局域网的组建，让你可以在外也能连回家中、学校、办公室的电脑获取资料，数据。</p>
<h2 id="局域网投影">局域网投影</h2>
<p><a href="https://jingyan.baidu.com/article/63acb44a2e307661fcc17e11.html" target="_blank" rel="noopener">将电脑屏幕拓展到安卓平板</a>。</p>
<div id="search">

</div>
<h2 id="文件查找工具">文件查找工具</h2>
<h3 id="everything">Everything</h3>
<p><a href="https://www.voidtools.com/downloads/" target="_blank" rel="noopener">官方下载地址</a>。打开压缩包后，直接运行<code>Everything.exe</code>，查找你需要的文件。相比系统搜索工具，速度很快。<strong>建议解压后将<code>Everything.exe</code>固定在任务栏经常使用</strong>。</p>
<p><a href="https://wenku.baidu.com/view/793afe29ccbff121dd3683ac.html" target="_blank" rel="noopener">使用指南</a>：搜索<code>hosts</code>，默认非全字匹配，在菜单栏<code>搜索</code>项中可缩小搜索范围，若选择<code>全字匹配</code>，可以看到<code>hosts</code>文件。右键此文件，可以直接跳转所在目录。更多设置在菜单栏<code>工具</code>-<code>选项</code>中。</p>
<h3 id="listary">Listary</h3>
<p>Listary，作为一款Windows文件浏览增强工具，可以为你 Windows 的「文件浏览对话框」、「资源管理器」等增加非常方便的文件快速定位、实时全盘搜索、常用文件夹收藏、打开历史、快速切换到已打开的路径、快捷右键菜单等一系列非常非常实用和高效的功能。与此同时，它还能与很多第三方应用集成，包括鼎鼎大名的Total Commander，还有WinRAR，7zip，FileZilla等等。Listary 体积小巧，而且运行快速，即便在低配置的电脑上常驻系统使用也不会察觉有丝毫拖慢速度的现象。</p>
<p><a href="http://www.ddooo.com/softdown/39673.htm" target="_blank" rel="noopener">破解版下载地址</a>，点击<code>Listary.Pro.5.00.Build.2410.exe</code>安装即可。然后在右下角图标右键选项设置工具条快捷键。只要不跟系统或者别的软件热键相冲突即可。</p>
<ul>
<li>使用 Listary 之后，你完全不需像一般的搜索软件那样去找搜索框或启动窗口来进行输入，<strong>在资源管理器或对话框的界面下，只需直接按键盘，输入字母就能轻松定位和操作文件了</strong>（非常赞的一点是它竟然能支持用拼音缩写来匹配中文文件名），善加使用可以节省大量的鼠标移动和点击，极大的提升文件操作效率。</li>
<li>在任一窗体下使用快捷键即可激活Listary，同时光标会自动定位在Listary的输入窗口 ，只要直接开始输入，Listary就自动进行匹配了。使用快捷键可以在启动程序模式与常规模式间进行切换。 Listary的匹配总共有三种，分别为命令，路径，启动程序。</li>
<li>激活Listary之后点击有爱心标识的收藏按钮，就可以打开自己的收藏列表，能够更快捷的打开自己常用的软件或者文件。</li>
<li>激活Listary之后点击历史记录，就可以打开自己最近打开的文件或者文件夹。</li>
<li>激活Listary之后点击快捷功能，就可以弹出一些常用的功能，个人最喜欢的是显示隐藏文件和显示文件扩展名。</li>
<li>只要输入文件名的一部分就可以找到这个文件，支持中文与英文。比如，我输入<code>测试 md</code>就可以搜索到<code>测XX试OO.md</code>这个文件。自然，输入的越多，返回的结果越精确。随着使用记录的积累，常用的文件或程序会获得更高的优先级。</li>
</ul>
<h2 id="文件复制软件">文件复制软件</h2>
<p>文件复制软件仍是人们日常生活中最常用的软件之一，续而感叹Windows自带复制工具先天不足，比如：不支持断点续传；传输速度较慢；替换/重命名操作设计不合理。幸好，第三方替代品百花齐放。</p>
<p><a href="https://xbeta.info/fastcopy-teracopy-extremecopy-supercopier.htm" target="_blank" rel="noopener">文件复制软件评测：FastCopy、TeraCopy、ExtremeCopy、Supercopier</a>本着公平公正客观的原则去测试对比、评析4位参赛选手。</p>
<p>如果在节约开支的基础上选择一款复制软件，FastCopy绝对是你最好的选择。轻量级、免安装、传输效率高，支持32/64位系统。ExtremeCopy在简约的界面中添加了许多细节功能，这一点值得称赞。同时，软件的传输表现也是本次评测中最好的。可惜免费版阉割了太多核心功能且不支持Win 8。觉得软件不错的朋友大可购买专业版，顺便支持一下开发者。Teracopy界面最为美观，但是效率低下的事实不可无视。如果你更在意的是传输效率而非表象，或许FastCopy和ExtremeCopy更适合你。</p>
<div class="note info">
<p>
<a href="http://vdisk.weibo.com/s/Ac9sE2hU6W5Y" target="_blank" rel="noopener">Fastcopy第三方汉化版</a>，<a href="https://ipmsg.org/tools/fastcopy.html" target="_blank" rel="noopener">官网下载地址</a>
</p>
</div>
<div id="google">

</div>
<h2 id="科学上网">科学上网</h2>
<p><a href="https://github.com/Alvin9999/new-pac/wiki" target="_blank" rel="noopener">自由上网方法</a>介绍了多种不同的方法，可以根据自己的喜好进行使用。</p>
<ul>
<li>最最简单的方法是访问<a href="http://dir.scmor.com/google/" target="_blank" rel="noopener">谷歌镜像地址</a>，不过可能存在不安全因素，<font color="red">不建议登陆账号使用</font>。</li>
<li>第二种配置方法就是<a href="#hosts">更换HOSTS</a>，不过好用的hosts越来越不好获取。</li>
<li>如果更换HOSTS不能满足要求，则需要使用<a href="#ipv6">IPv6服务</a>或<a href="#goagent">抗封锁强小软件</a>（推荐使用，结合插件<a href="#switchyomega">Proxy SwitchyOmega</a>）或<a href="#shadowsocks">自建服务器</a>（PAC自动判断代理）。</li>
</ul>
<div id="chrome">

</div>
<h3 id="谷歌浏览器">谷歌浏览器</h3>
<div class="note info">
<p>
推荐使用<a href="https://www.google.com/intl/zh-CN_ALL/chrome/" target="_blank" rel="noopener">谷歌浏览器</a>：<a href="https://www.google.com.hk/" target="_blank" rel="noopener">谷歌搜索引擎主页</a>，<a href="https://scholar.google.com/" target="_blank" rel="noopener">谷歌学术主页</a>。
</p>
</div>
<p>如果想设置默认引擎（在新标签页直接搜索）为<a href="https://www.google.com.hk/" target="_blank" rel="noopener">谷歌搜索引擎</a>，则需要在浏览器引擎设置里面<strong>添加</strong>google项：<code>https://www.google.com.hk/search?q=%s</code>，并设置为默认。</p>
<p>插件推荐：</p>
<ul>
<li><a href="https://chrome.google.com/webstore/detail/vimium/dbepggeogbaibhgnhhndojpepiihcmeb/related?hl=en" target="_blank" rel="noopener">Vimium插件</a>让Chrome起飞。任何时候你需要帮助的时候可以按？(<code>shilft+/</code>)来调出帮助菜单，同时显示了所有快捷键的说明。所有的操作都是通过键盘的快捷键来操作。如果想点击页面上的某个连接时，在命令模式下，按 f 键之后就会对页面上所有可点击的连接或按钮进行编码，然后再输入相应的编码完成点击或者复制连接操作。查看<a href="http://www.jeffjade.com/2015/10/19/2015-10-18-chrome-vimium/" target="_blank" rel="noopener">常用快捷键说明</a>。</li>
<li><a href="https://chrome.google.com/webstore/detail/nooboss-extensions-manage/aajodjghehmlpahhboidcpfjcncmcklf" target="_blank" rel="noopener">二管家插件</a>用来管理 Chrome 扩展的扩展，它能够在不打开扩展程序界面的情况下开启或者关闭扩展，还能根据规则在需要的时候打开扩展，以减少内存占用。还有一个可以根据当前网站推荐扩展的社区、下载 crx 文件、查看权限等功能。详细规则匹配设置可以查看<a href="https://github.com/AInoob/NooBoss" target="_blank" rel="noopener">Github源代码库说明</a>。</li>
</ul>
<p>使用技巧：</p>
<ul>
<li>新版本<a href="https://www.google.cn/chrome/browser/desktop/index.html" target="_blank" rel="noopener">chrome浏览器</a>默认会自动舍弃标签页，用于节省系统内存。在地址栏输入<code>chrome://flags/#automatic-tab-discarding</code>，设置为停用即可。</li>
<li>Chrome浏览器中，需要手动点击才能查看flash控件。在Chrome高版本中，plugins 页面被移除后，可以访问: <code>chrome://settings/content</code> 调整 Flash、PDF 的设置。如果你想让所有网站都默认启用 flash 不用一个个的添加，可以访问：<code>chrome://flags/#run-all-flash-in-allow-mode</code> 选择允许。</li>
<li>强制域名使用 HTTPS（SSL）访问设置：在 Chrome 浏览器上输入链接 <code>chrome://net-internals/#hsts</code> （可复制此地址粘贴到地址栏），回车。在 Domain 栏里，输入需要访问的域名如 google.com/google.com.hk/googleapis.com ，并勾选下面的两个复选框，点击 <code>Add</code> 按钮即可。此时，您无需每次在因为跳回非加密连接中断后手动添加 HTTPS 前缀。对于其他的浏览器，请在对应浏览器的插件目录中查找类似 <code>HTTPS Everywhere</code> 的插件，它将自动帮助您强制所有可能的 HTTPS 连接。倘若您想要撤销上述变更，在下方的 <code>Delete Domain</code> 区域里，在 Domain 栏里输入您想要撤销规则的域名（例如 google.com），并点击 <code>Delete</code> 按钮即可。</li>
<li><a href="https://zhuanlan.zhihu.com/p/58111436" target="_blank" rel="noopener">禁用<code>请停用以开发者模式运行的扩展程序</code>提示</a>（<a href="https://sourceforge.net/projects/x64dbg/files/snapshots/" target="_blank" rel="noopener">snapshots</a>）。</li>
</ul>
<div id="hosts">

</div>
<h3 id="更换hosts">更换HOSTS</h3>
<ul>
<li>自动替换hosts文件：在<a href="https://laod.cn/hosts/" target="_blank" rel="noopener">laod.org</a>（需注册，找到<code>老D服务器&amp;百度网盘hosts下载</code>，点击<code>文件下载</code>，选择<code>老D服务器</code>或者<code>百度网盘</code>下载）等中找到文件自行下载。然后<code>以管理员运行批处理命令'Windows自动替换脚本'</code>，hosts会自动替换。如果无法替换请先退出360等安全软件。<del>备用下载地址：<a href="https://pan.baidu.com/s/1mhiK6IO" target="_blank" rel="noopener">网盘下载</a>（非最新host，更新时间可查看文件的修改时间）。</del></li>
<li>手动覆盖<code>hosts</code>文件：手动将上述地址中的<code>hosts</code>文件拖出，并覆盖替换文件夹<code>C:\Windows\System32\drivers\etc</code>中的原文件（直接复制此路径到文件夹上面的地址栏或者使用<a href="#search"><code>everything</code></a>找到此文件夹）。如果无法替换请先退出360等安全软件。</li>
</ul>
<div id="ipv6">

</div>
<h3 id="使用ipv6服务">使用IPv6服务</h3>
<p><font color="red">请确保</font>：自己的机器支持IPv6，自己的网络支持IPv6。打开浏览器，访问<a href="http://ipv6-test.com/" target="_blank" rel="noopener">IPv6test.com</a>，页面上<code>IPv6 connectivity</code>一项如果显示<code>Supported</code>，或者能够访问<a href="http://bt.byr.cn/" target="_blank" rel="noopener">BYR BT</a>，说明前提条件满足。</p>
<blockquote>
<p><a href="http://ncs.hust.edu.cn/xsfw/IPV6fw.htm" target="_blank" rel="noopener">华中科技大学校园网</a>已实现IPv4/IPv6双栈覆盖，如果不确定是否已经接入或接入存在问题，可以<a href="http://ncs.hust.edu.cn/fujian/140923548ozg.rar" target="_blank" rel="noopener">点击下载 脚本程序</a>帮助设置，注意在windows 95 Vista/7及之后的系统中，需右键点击该程序，选择使用管理员权限运行上述命令。</p>
</blockquote>
<p>总的来说，这个方法是靠访问网站的IPv6地址。如果要去的网站没有IPv6地址，那就没辙。</p>
<ol style="list-style-type: decimal">
<li>如果之前使用过谷歌插件<a href="#switchyomega">Proxy SwitchyOmega</a>，需要将情景模式从<code>自动切换</code>切换为<code>直接连接</code>，不再使用代理软件。</li>
<li>让电脑知道一个网站的IPv6地址，有两个法子<a href="#fn1" class="footnoteRef" id="fnref1"><sup>1</sup></a>（可以同时使用）：
<ul>
<li>修改hosts文件。随时更新的<a href="https://raw.githubusercontent.com/lennylxx/ipv6-hosts/master/hosts" target="_blank" rel="noopener">Hosts</a>文件托管在<a href="https://github.com/lennylxx/ipv6-hosts/" target="_blank" rel="noopener">ipv6-hosts</a>大家可以参考。将<a href="https://raw.githubusercontent.com/lennylxx/ipv6-hosts/master/hosts" target="_blank" rel="noopener">Hosts</a>文件内容复制到系统的hosts文件（在不同操作系统中的位置不同。在Windows下，它的默认路径是： <code>%SystemRoot%\system32\drivers\etc\hosts</code>）。改完hosts，就可以使用Google的服务了。当然，我们还可以继续下面一步，来个双保险。</li>
<li>使用IPv6 DNS服务器。Google提供公共<a href="https://developers.google.com/speed/public-dns/docs/using" target="_blank" rel="noopener">DNS解析服务</a>解析IPv6地址（<code>2001:4860:4860::8888</code>，<code>2001:4860:4860::8844</code>）。将它们设为首选DNS服务器。如果手机通过WiFi接入IPv6网络，修改DNS服务器地址为Google DNS服务器的地址，那么手机也能访问Google了。（在Chrome浏览器地址栏中输入: <code>chrome://net-internals/#dns</code>可以看到浏览器的DNS解析记录。）</li>
</ul></li>
</ol>
<div class="note info">
<p>
也可以使用内置版浏览器（<a href="https://github.com/Alvin9999/new-pac/wiki/GoAgent-ipv6%E7%89%88" target="_blank" rel="noopener">GoAgent ipv6版</a>，<a href="https://github.com/Alvin9999/new-pac/wiki/GoProxy-ipv6%E7%89%88" target="_blank" rel="noopener">GoProxy ipv6版</a>）的<a href="https://github.com/Alvin9999/new-pac/wiki/ipv6%E5%BC%80%E5%90%AF%E6%96%B9%E6%B3%95" target="_blank" rel="noopener">ipv6开启方法</a>，不过未测试成功，看起来比较麻烦。
</p>
</div>
<div id="goagent">

</div>
<h3 id="抗封锁强小软件">抗封锁强小软件</h3>
<p>详细使用方式点击查看<a href="https://github.com/Alvin9999/new-pac/wiki/%E6%8A%97%E5%B0%81%E9%94%81%E5%BC%BA%E5%B0%8F%E8%BD%AF%E4%BB%B6" target="_blank" rel="noopener">抗封锁强小软件</a>。</p>
<p>为了避免出现无法访问国内网址的问题，建议结合<a href="https://chrome.google.com/webstore/detail/proxy-switchyomega/padekgcemlokbadohgkifijomclgjgif?utm_source=chrome-app-launcher-info-dialog" target="_blank" rel="noopener">Proxy SwitchyOmega谷歌插件</a>使用<a href="#fn2" class="footnoteRef" id="fnref2"><sup>2</sup></a>。</p>
<div id="switchyomega">

</div>
<p>以下举例说明代理软件的快速配置：</p>
<div class="note warning">
<p>
对于部分宽带连接无法访问的情况，需要<a href="https://github.com/shadowsocks/shadowsocks-windows/issues/1502" target="_blank" rel="noopener">修改连接名称为英文名称</a>，然后断开链接重连即可。
</p>
</div>
<div class="note info">
<p>
固定IP网络环境建议使用Ultrasurf，youtube速度不错。动态IP网络环境建议使用Psiphon（Ultrasurf<a href="#Ultrasurf-setting">需要每次连接更改IP</a>），但youtube速度较慢。
</p>
</div>
<ol style="list-style-type: decimal">
<li>下载<a href="https://pan.baidu.com/s/1Q0LtIx9LaXj-zES6tnvBZw" target="_blank" rel="noopener">科学上网快速配置</a>（提取码: bhx7）文件。</li>
<li>解压后删除<code>u.ini</code>文件（保留压缩包），运行<code>U****.exe</code>程序（勾选<code>无界分享</code>）。连接成功后安装<a href="#chrome">谷歌浏览器</a>和<a href="https://chrome.google.com/webstore/detail/proxy-switchyomega/padekgcemlokbadohgkifijomclgjgif?utm_source=chrome-app-launcher-info-dialog" target="_blank" rel="noopener">谷歌浏览器插件Proxy SwitchyOmega</a>。</li>
<li><p>进入 Proxy SwitchyOmega 的设置界面，点击<code>导出导入-从备份文件恢复</code>，导入设置备份文件<code>OmegaOptions.bak</code>。</p>
<img src="http://wx4.sinaimg.cn/large/645f3b4dly1fxdeyjzvdqj208g08xdfw.jpg"> <img src="https://github.com/FelisCatus/SwitchyOmega/wiki/images/t1/step2.png">
<div id="Ultrasurf-setting">

</div></li>
<li>退出<code>U****.exe</code>程序，重新<strong>解压覆盖</strong>，运行<code>U****.exe</code>程序。由于网络变动，一般情况下你需要按照下面步骤修改对应端口。
<ul>
<li>查看<code>1</code>处是否连接成功，并记住<code>2</code>处的IP地址。 <img src="http://wx2.sinaimg.cn/large/645f3b4dly1fxdewazrrij20a5089mx5.jpg"></li>
<li>进入插件的设置界面，点击<code>Ultrasurf</code>情景模式，将代理服务器的值改为<code>2</code>处的IP地址。 <img src="http://wx3.sinaimg.cn/large/645f3b4dly1fxdf0uc28sj218g0o4gmd.jpg"></li>
<li>点击<code>3</code>处<code>应用选项</code>，并关闭设置标签页。</li>
</ul></li>
<li>点击 Proxy SwitchyOmega 插件栏，选择<code>自动切换</code>模式。</li>
<li><p>设置成功后，进行<a href="#chrome">谷歌浏览器设置</a>。如果访问网页中有资源未加载成功，则插件图标上会有提示。<strong>不影响页面浏览就不必修改</strong>。点<code>插件菜单里未加载的资源</code>，根据网页需求选择<code>虚情景模式GoAgent</code>或<code>直接连接</code>就可以了。</p></li>
</ol>
<p>你也可以自由下载其他抗封锁强小软件，为切换使用准备。以下举例说明结合<code>Freegate</code>、<code>Psiphon</code>和<code>Ultrasurf</code>使用<code>虚情景模式</code>。</p>
<ol style="list-style-type: decimal">
<li>下载代理软件。
<div id="Ultrasurf">

</div>
<ul>
<li>Ultrasurf（<a href="https://nofile.io/f/JrQZSVgTr5A#963314168deb8c74" target="_blank" rel="noopener">下载地址</a>，<a href="http://www.babel.cc/share.do?s=2973065029822749" target="_blank" rel="noopener">备用下载地址</a>）
<div id="freegate">

</div></li>
<li>Freegate（<a href="https://nofile.io/f/kJGDhxY8vdN#963314168deb8c74" target="_blank" rel="noopener">下载地址</a> ，<a href="http://www.babel.cc/share.do?s=1571455430407789" target="_blank" rel="noopener">备用下载地址</a>），<a href="http://jingpin.org/unblock-blocked-sites-by-freegate/" target="_blank" rel="noopener">如何使用自由门</a>
<div id="psiphon">

</div></li>
<li>Psiphon（<a href="https://nofile.io/f/yn7SbPyWXXM#8f632a37f431b327" target="_blank" rel="noopener">下载地址</a>，<a href="http://www.babel.cc/share.do?s=6166540161520013" target="_blank" rel="noopener">备用下载地址</a>）
<div id="lantern">

</div></li>
<li><p>Lantern（<a href="https://github.com/getlantern/lantern" target="_blank" rel="noopener">蓝灯最新版下载地址</a>）</p>
<blockquote>
<p>lantern退出后如果某些网站无法正常访问，需要在网络设置中手动取消代理设置，重启后可能需要再次手动关闭。运行过一次灯笼之后你可能会出现各种问题，请通过IE浏览器初始化网络设置，如果不行就无能为力。（更多详情<a href="http://www.jianshu.com/p/07b4889c7bc4" target="_blank" rel="noopener">点击</a>查看。）</p>
</blockquote></li>
</ul></li>
<li>进入 Proxy SwitchyOmega 的设置界面，点击<code>导出导入-从备份文件恢复</code>，导入设置备份文件<code>OmegaOptions.bak</code>。备份文件已经新建情景模式并修改对应代理端口，如果无法访问，按照如下具体方式进行配置。
<ul>
<li>请仔细阅读您所使用的代理软件说明，<strong>尤其是不要填错了代理协议（常见的有HTTP或SOCKS）</strong>。</li>
<li>新建情景模式，选择<code>代理服务器</code>，并重命名为<a href="#Ultrasurf">Ultrasurf</a>（可以任意设置）。<font color="blue">根据软件界面显示</font>，<a href="#Ultrasurf-setting">设置代理的端口号</a>。</li>
<li>新建情景模式，选择<code>代理服务器</code>，并重命名为<code>Freegate</code>（可以任意设置），适用于<a href="#freegate">Freegate</a>、<a href="#psiphon">Psiphon</a>。SwitchyOmega设置代理地址为<code>127.0.0.1:8580</code>。<font color="blue">为了同步Freegate的访问，设置<a href="#psiphon">赛风</a>的本地代理端口HTTP/HTTPS也为<code>8580</code></font>（也可以设置其他端口号，不过也要更改相应的SwitchyOmega设置）。 <img src="https://github.com/FelisCatus/SwitchyOmega/wiki/images/t1/step3.png"></li>
<li>（<font color="red">测试失败</font>）新建情景模式，<del>选择<code>PAC模式</code>，如Lantern，并重命名为<code>Lantern</code>（可以任意设置）</del>。然后进行如下设置：
<ul>
<li>首先获取Lantern的代理脚本文件<code>proxy_on.pac</code>。打开<code>Lantern</code>，在设置中确认设置了系统代理。然后打开 <code>IE -&gt; Internet选项 -&gt; 连接 -&gt;局域网设置</code>，复制<code>pac地址</code>备用（一般勾选后可以复制，然后取消勾选。请完整复制，新版后面有token）。</li>
<li>将第一步中的<code>pac地址</code>填入情景模式<code>PAC 网址</code>框，点击<code>立即更新情景模式 -&gt; 应用选项</code>，会发现脚本更新了一大串内容。</li>
</ul></li>
<li>为了批量切换代理服务器，新建情景模式，选择<code>虚情景模式</code>（配合<code>自动切换模式</code>使用），并重命名为<code>GoAgent</code>（可以任意设置）。</li>
<li>点击SwitchyOmega插件栏，选择<code>自动切换</code>模式。然后进入情景模式<code>自动切换-切换规则</code>（切换规则是在访问<code>条件设置</code>的域名时候使用后面设置的<code>情景模式</code>），在切换规则最后一排中，将<code>规则列表规则</code>前面的框打√，再将后面的<code>情景模式</code>设置为<code>GoAgent</code>（虚情景模式）。如果需要添加规则，模仿已有的规则模式输入即可。
<ul>
<li><code>规则列表设置</code>中：规则列表格式设置为<code>autoproxy</code>，规则列表网址为：<code>https://raw.githubusercontent.com/gfwlist/gfwlist/master/gfwlist.txt</code>，最后点击<code>立即更新情景模式</code>即可。最后点击<code>应用选项</code>。 <img src="https://github.com/FelisCatus/SwitchyOmega/wiki/images/t1/step6.png"></li>
</ul></li>
</ul></li>
<li>取消代理软件的全局设置：
<ul>
<li>Ultrasurf：打开Ultrasurf，点击<code>高级设置</code>，勾选<code>不自动设定系统代理</code>。</li>
<li>Freegate：在Freegate的设置选项卡里勾选<code>不设置IE代理</code>，选择CHROME浏览器的文件夹位置。至于其他设置根据喜好自己设置，<font color="blue">推荐不开机启动，不自动启动浏览器</font> 。（<del>局域网设置—去掉代理服务器设置</del>）</li>
<li>Lantern：默认情况下Lantern是会设置系统代理的。打开<a href="http://127.0.0.1:16823/" target="_blank" rel="noopener">lantern界面</a>，去掉<code>Lantern的系统代理</code>，此时局域网代理设置也会被清空。</li>
</ul></li>
<li>根据代理服务器的网络情况，点击<code>插件栏</code>，点击<code>虚情景模式GoAgent</code><font color="red">右边下拉框</font>选择对应的情景模式，实现一键批量设置代理服务器。</li>
</ol>
<div id="shadowsocks">

</div>
<h3 id="自建服务器">自建服务器</h3>
<p>有电脑的朋友，建议你学习一下<a href="https://github.com/Alvin9999/new-pac/wiki/%E8%87%AA%E5%BB%BAss%E6%9C%8D%E5%8A%A1%E5%99%A8%E6%95%99%E7%A8%8B" target="_blank" rel="noopener">自己搭建SS或SSR教程</a>。整个教程分三步：第一步：购买VPS服务器；第二步：一键部署VPS服务器；第三步：一键加速VPS服务器 （谷歌BBR加速，推荐）。</p>
<p>为保证每位用户都能够分配到一定的带宽资源，<a href="https://github.com/Alvin9999/new-pac/wiki/ss%E5%85%8D%E8%B4%B9%E8%B4%A6%E5%8F%B7" target="_blank" rel="noopener">SSR免费账号</a>进行了单线程限速处理，单线程限速75kb/s左右。如果自己搭建服务器就没有这个限制。</p>
<div class="note info">
<p>
Windows SSR客户端 <a href="https://github.com/shadowsocksr-backup/shadowsocksr-csharp/releases" target="_blank" rel="noopener">下载地址</a> <a href="https://nofile.io/f/6Jm7WJCyOVv/ShadowsocksR-4.7.0-win.7z" target="_blank" rel="noopener">备用下载地址</a>，MAC SSR客户端 <a href="https://github.com/shadowsocksr-backup/ShadowsocksX-NG/releases" target="_blank" rel="noopener">下载地址</a> <a href="https://nofile.io/f/jgMWFwCBonU#ab0d3c3b6ac54482" target="_blank" rel="noopener">备用下载地址</a>，<a href="https://github.com/the0demiurge/CharlesScripts/blob/master/charles/bin/ssr" target="_blank" rel="noopener">Linux客户端一键安装配置使用脚本(使用方法见注释)</a>，安卓 SSR客户端 <a href="https://github.com/shadowsocksr-backup/shadowsocksr-android/releases" target="_blank" rel="noopener">下载地址</a> <a href="https://nofile.io/f/GRWw7PbADrc#1c6c32f969e7f5d9" target="_blank" rel="noopener">备用下载地址</a>
</p>
</div>
<h2 id="下载工具">下载工具</h2>
<div id="idm">

</div>
<h3 id="idm">IDM</h3>
<p>IDM 在下载 http和 ftp 方面的能力是毋庸置疑的，只要资源没问题，基本都可以跑满速。还可以<a href="https://zhuanlan.zhihu.com/p/34135244" target="_blank" rel="noopener">嗅探网页音视频并下载</a>。但不能直接下载种子文件，不过可以先利用网盘离线然后用IDM下载（更多内容可以点击查看<a href="https://sli1989.github.io/2017/03/31/bdy/">百度云盘下载工具</a>）。更多设置问题查看<a href="https://www.internetdownloadmanager.cn/idm/24771" target="_blank" rel="noopener">IDM下载器使用技巧</a>。</p>
<ol style="list-style-type: decimal">
<li>下载安装<a href="https://pan.baidu.com/s/1bbK3SGw2keLASVyXU-uBUg" target="_blank" rel="noopener">IDM</a>（提取码: ahdb）。当系统报毒时，<font color="blue">请添加<code>riched32.dll</code>文件信任</font> 。</li>
<li>安装完成后，<strong>重启浏览器</strong>。</li>
</ol>
<div class="note info">
<p>
正常情况下，点击选择下载或者右键选择使用IDM下载，会跳转到IDM下载页面。如果失效，需要手动查看下载链接（在chrome中<code>ctrl+j</code>查看），并复制下载链接到IDM或者迅雷，建立下载任务。
</p>
</div>
<div class="note warning">
<p>
安装破解版IDM软件后，不要升级。如果有弹窗提示升级，请点击取消或者关闭。
</p>
</div>
<h2 id="同步软件">同步软件</h2>
<div class="note info">
<p>
<a href="http://pan.baidu.com/s/1bo2PXhl" target="_blank" rel="noopener">GoodSync破解版下载</a>（密码：ms4j）
</p>
</div>
<p>安装方法：</p>
<ol style="list-style-type: decimal">
<li>首先运行压缩包中的<code>GoodSync-Setup.exe</code>安装程序进行安装原版程序!</li>
<li>运行压缩包中的<code>KG_ttrar.exe</code>！</li>
<li>启动GoodSync程序,选择激活!激活方式选择通过浏览器激活!随便输入你的用户名，序列号按照XXX-XXX-XXX-XXX的样式输入！比如输入111-111-111-111等！点击下一步，随便输入你的个人信息，输入什么都行，重点是能继续点击下一步就可以！</li>
<li>在这一步程序会给出一长串的注册代码,复制这段注册代码到<code>KG_ttrar.exe</code>,然后点击<code>generate</code>按钮生成激活代码!用刚刚获得的激活号注册程序！</li>
</ol>
<p>使用方法：<font color="red">请注意同步方向，防止被旧文件覆盖</font>。</p>
<ol style="list-style-type: decimal">
<li>初次使用会提示新建任务，任意命名即可。</li>
<li><p>选择任务类型，后期可以自行设置同步类型，点击下图所示即可进入选项。</p>
<blockquote>
<p><code>常规</code>--<code>同步方向</code>中可以设置<code>双向（同时同步两侧变化的文件）</code>、<code>单向左往右</code>（从左侧完全复制到右侧）、<code>单向右往左（从右侧完全复制到左侧）</code>。 <img src="http://ww4.sinaimg.cn/large/645f3b4djw1f8pj4qlw34j20m80c2gmx.jpg"></p>
</blockquote></li>
<li>本地硬盘间同步：选择好<code>同步类型</code>，<code>左右侧文件夹位置</code>后，点击下面的<code>分析</code>，会出现左右侧不同文件的对比，仔细核对是否符合你要同步的方向（一般<code>同步方向</code>设置好后不会有问题），点击<code>同步</code>等待同步完成即可。</li>
<li><p>网络硬盘间同步设置方法：账户设置：<code>菜单栏</code>--<code>工具</code>--<code>goodsync connect设置</code>--勾选<code>使用goodsync connect链接我的计算机</code>--<code>next</code>--<code>新建goodsync connect账户</code>--<code>输入对应信息</code>--<code>next</code>--<code>设置windows用户</code>--<code>next</code>--<code>apply</code>。完成账户设置。</p>
<blockquote>
<p>网络硬盘间同步使用方法：在不同计算机之间同步时，需要两台电脑同时进行上述设置并登录上面设置的goodsync connect账户。在文件夹地址<code>浏览</code>点击<code>goodsync connect</code>即可看到登录中的硬盘地址。按照<code>本地硬盘间同步</code>步骤继续进行即可。</p>
</blockquote></li>
<li><p>该同步软件还支持部分网盘同步，不过网速、网盘空间限制，用处不大，按照相应提示进行即可。</p></li>
</ol>
<h2 id="分享设备间内容">分享设备间内容</h2>
<blockquote>
<p><a href="http://www.ifanr.com/app/668324" target="_blank" rel="noopener">手机电脑互传文件的 10 个免费工具</a></p>
</blockquote>
<p><a href="http://www.appinn.com/pasteasy/" target="_blank" rel="noopener">Pasteasy</a> 是一款利用局域网传输，瞬间自动复制粘贴电脑内容到手机，手机内容到电脑的工具，支持文本、照片、链接、截图等。支持 Mac、Windows、iOS、Android。由于没有通过互联网传输数据，所以你的图片、文本内容是安全的，也不会受墙的影响。</p>
<div class="note info">
<p>
下载地址：<a href="http://www.pasteasy.com/" target="_blank" rel="noopener">官方主页</a> | <a href="https://itunes.apple.com/cn/app/pasteasy/id906277880?mt=12" target="_blank" rel="noopener">App Store</a> | <a href="https://play.google.com/store/apps/details?id=com.tinkerstuff.pasteasy.v2" target="_blank" rel="noopener">Google Play</a> : <a href="http://pan.baidu.com/s/1hqq1qJU" target="_blank" rel="noopener">百度盘</a>
</p>
</div>
<h2 id="文本编辑器">文本编辑器</h2>
<div id="notepad">

</div>
<h3 id="notepad">Notepad++</h3>
<p>Notepad++，是在微软视窗环境之下的一个免费的代码编辑器。它使用较少的CPU功率，降低电脑系统能源消耗，但轻巧且执行效率高，使得Notepad++可完美地取代微软视窗的记事本。内置支持多达27种语法高亮度显示(包括各种常见的源代码、脚本，能够很好地支持.nfo文件查看)，还支持自定义语言；可自动检测文件类型，根据关键字显示节点，节点可自由折叠/打开，还可显示缩进引导线，代码显示得很有层次感；可打开双窗口，在分窗口中又可打开多个子窗口，允许快捷切换全屏显示模式(F11)，支持鼠标滚轮改变文档显示比例；提供了一些有用工具，如邻行互换位置、宏功能等；可显示选中文本的字节数 (而不是一般编辑器所显示的字数，这在某些情况下，比如 软件本地化 很方便)。<a href="http://shandian.biz/395.html" target="_blank" rel="noopener">Notepad++使用教程</a></p>
<p><a href="https://www.crifan.com/files/doc/docbook/rec_soft_npp/release/htmls/index.html" target="_blank" rel="noopener">【crifan推荐】轻量级文本编辑器，Notepad最佳替代品：Notepad++</a>主要介绍了笔者crifan推荐的轻量级文本编辑器，Notepad最佳替代品：Notepad++，内容主要包含notepad，notepad2，notepad++，ultraEdit的比较，使用Notepad++前要了解的知识，Notepad++的插件，Notepad++的安装过程，Notepad++的各种常见和不常见的功能的详解。</p>
<h2 id="在线协作">在线协作</h2>
<ul>
<li><a href="https://shimo.im" target="_blank" rel="noopener">石墨文档</a>，重新支持分享给匿名用户看，可以共享编辑，其微信公众号能够快速访问编辑。推荐使用，体验不错。</li>
<li><a href="https://yiqixie.com" target="_blank" rel="noopener">一起写</a>，支持分享给匿名用户看，可以共享编辑。请先使用微信登陆。如果先使用邮箱账号无法绑定微信账户。目前体验不好，非常慢。</li>
<li><a href="https://note.youdao.com" target="_blank" rel="noopener">有道云笔记</a>，支持分享给匿名用户看，文档分享出来的链接广告多。更新支持分享权限设置，编辑和评论。</li>
</ul>
<div id="feed">

</div>
<h2 id="feed制作">Feed制作</h2>
<p>对于很多上班族来说，关注重要网站的通知公告信息是每天上班的必修课，然而很多官方网站并不提供 Feed 源，利用<a href="http://www.feed43.com/" target="_blank" rel="noopener">Feed43</a> 可以为没有 Feed 的网页生成 rss 格式的 Feed 地址，即可解决烦恼。</p>
<p>使用教程：</p>
<ul>
<li><a href="http://www.appinn.com/feed43/" target="_blank" rel="noopener">为没有 Feed 的网页生成 RSS 格式订阅源</a></li>
<li><a href="https://sspai.com/post/34320" target="_blank" rel="noopener">利用 Feed43，将任意网页制作成 RSS 订阅源</a></li>
<li><a href="http://feed43.com/step-by-step.html" target="_blank" rel="noopener">Step-by-step example of feed setup</a></li>
<li><a href="http://fivefilters.org/content-only/" target="_blank" rel="noopener">Full-Text RSS Feeds</a></li>
</ul>
<p>在线rss阅读器则推荐使用<a href="https://www.inoreader.com/welcome" target="_blank" rel="noopener">inoreader</a>和<a href="https://feedly.com" target="_blank" rel="noopener">Feedly</a>。Feedly网站的交互体验好，第三方客户端没广告，不用科学上网也可以同步数据。但国内需要科学上网，免费用户只有100个订阅额度，搜索功能和整合服务是需要付费，而且费用高。原本feedly pro才有的功能，inoreader免费用户都有，比如搜索订阅源和整合第三方服务evernote、onenote之类的。但广告比较多，不过使用屏蔽软件即可。第三方测评可以查看<a href="http://louishan.com/articles/feedly-to-inoreader.html" target="_blank" rel="noopener">RSS订阅服务Feedly转到InoReader</a>。</p>
<div id="pdf">

</div>
<h2 id="pdf工具">PDF工具</h2>
<div class="note info">
<p>
<a href="https://pan.baidu.com/s/1pNkh3S3" target="_blank" rel="noopener">PDF工具合辑</a>，密码:h936
</p>
</div>
<ul>
<li>PDFXCHANGE：PDF查看、组合、提取等，提供了虚拟打印，提供了word里面转PDF插件，可以模拟打印生成PDF。</li>
<li>Adobe Acrobat XI Pro：PDF查看、编辑等，用于pdf另存为其他格式很有帮助，可以模拟打印生成PDF。</li>
<li>Adobe Illustrator CS6：PDF编辑工具，海报等制作.</li>
</ul>
<h2 id="截图软件">截图软件</h2>
<p>FSCapture支持滚屏截图、录屏，更多查看设置。FSCapture<a href="http://www.metsky.com/archives/415.html" target="_blank" rel="noopener">使用教程</a>。</p>
<div class="note info">
<p>
FSCapture<a href="http://pan.baidu.com/s/1slhEZdN" target="_blank" rel="noopener">破解版网盘下载</a>，密码：djyk
</p>
</div>
<h2 id="gif-制作">Gif 制作</h2>
<p>Screen To Gif 是一个GIF动态图片录制软件，它可以直接帮我们屏幕上的画面下来的画面输出成Gif动画，而且操作相当简单。录影时时会有个取景用的方框，我们可以任意移动方框的位置，只要在方框内的就会被录影下来，随时按键盘上指定的快速键即可随时录影、暂停、停止。录影完成后，还可一步一步检视被录下来的画面，如果哪些画面你不要的话，还可个别删除掉，相当简单且方便。</p>
<div class="note info">
<p>
<a href="https://www.screentogif.com/downloads.html?l=zh_cn" target="_blank" rel="noopener">官网下载地址</a>
</p>
</div>
<h2 id="qq微信语音播放器">QQ/微信语音播放器</h2>
<p><a href="http://www.louyue.com/weixinplayer.htm" target="_blank" rel="noopener">楼月微信语音播放器</a> 是一款用来播放微信语音聊天文件 amr、aud 专属格式的播放器，并且可以保存为 WAV 格式。</p>
<p>要播放语音文件，首先要导出。Android 设备位于 Tencent路径下，iOS 设备比较麻烦，位于备份文件的 AppDomain-com.tencent.xin 路径下。当然最简单的是选择收藏，在收藏文件夹中寻找（选择：文件---内置SD卡---Tencent---MicroMsg，然后把MicroMsg这个文件夹导出到电脑桌面，然后在文件夹里面搜索.silk文件 ，这些silk文件就是收藏的声音文件）。然后就可以将 amr、aud 文件拖到<a href="http://www.louyue.com/weixinplayer.htm" target="_blank" rel="noopener">楼月微信语音播放器</a>界面中，可以直接播放，也可以保持为 WAV 格式。</p>
<blockquote>
<p>本软件支持播放以下语音文件：<br>1，安卓手机微信语音文件（.amr格式），保存位置：<code>手机盘符/tencent/MicroMsg/32位字符组成的文件夹/voice2/</code>，点击此处了解导出方法<br>2，苹果手机微信语音文件（.aud格式），保存位置：<code>Documents/32位字符组成的文件夹/Audio/…</code>，点击此处了解导出方法。<br>3， 安卓手机QQ语音文件（.slk格式），保存位置：<code>tencent/MobileQQ/QQ号码/ppt/</code><br>4，苹果手机QQ语音文件（.amr格式），保存位置：<code>Documents/QQ号码/Audio/</code>，点击此处了解导出方法。<br>5，电脑版QQ语音文件（.amr格式），保存位置：<code>C:/Users/电脑用户名/我的文档/Tencent Files/QQ号/Audio/</code> 。</p>
</blockquote>
<div id="greasyfork">

</div>
<h2 id="用户脚本">用户脚本</h2>
<p>用户脚本为您增强对浏览体验的控制权。在安装之后，它们可自动为您访问的网站添加功能，或使其更加易用、更加清新。</p>
<ol style="list-style-type: decimal">
<li>安装用户脚本管理器。要使用用户脚本，<a href="https://greasyfork.org/zh-CN" target="_blank" rel="noopener">您首先需要安装一个用户脚本管理器</a>。根据您使用的浏览器不同，可用的用户脚本管理器也有所不同。</li>
<li>安装用户脚本。在 <a href="https://greasyfork.org/zh-CN" target="_blank" rel="noopener">Greasy Fork</a> 上的用户脚本是由其他用户编写并向全世界发表的，您可以免费和轻松地安装。查找您想尝试的用户脚本。在您找到想要的用户脚本后，点击用户脚本页面上绿色的安装按钮，您的用户脚本管理器将询问您是否安装。</li>
</ol>
<h2 id="小工具">小工具</h2>
<ul>
<li><a href="http://www.appinn.com/frequency-generator/" target="_blank" rel="noopener">频率发生器</a> 是一款能够让你的 Android 设备播放不同频率的声音的应用，支持 1Hz ~ 22000Hz 范围，而人类的正常听觉范围是 20Hz ~ 20000Hz 之间。</li>
<li><a href="https://www.appinn.com/xricheng-calendar-wechat/" target="_blank" rel="noopener">晓日程</a> 是一款可以在微信里与朋友一起使用的日历工具，与朋友一起确定社交聚会、团队行动的时间，还能确认参与人员。也可以用来订阅常用的日历，比如比赛、电影、新闻等等。</li>
<li><a href="https://www.appinn.com/ieasemusic/" target="_blank" rel="noopener">ieaseMusic</a> 是一款非常漂亮的网易云音乐播放器，为了解决死链的问题，ieaseMusic 还聚合了 QQ 音乐，酷狗音乐、百度音乐的高品质音乐。</li>
<li><a href="https://www.appinn.com/singplay/" target="_blank" rel="noopener">SingPlay</a> 是一款全能消音 K 歌 App，可以帮用户实现音乐的一键消音，同时不需要任何的复杂的参数调整。</li>
<li><a href="https://www.appinn.com/speedtest-isp-maps/" target="_blank" rel="noopener">SpeedTest</a> 是一款流行的网络速度测试工具，线路遍布全球，包括非常多的中国线路，最近更新了多线程测速，以及在 Android 版本上添加了运营商信号地图覆盖功能，能够直接在地图上看到网络信号覆盖情况。</li>
<li><a href="https://www.appinn.com/baidupcs-go/" target="_blank" rel="noopener">BaiduPCS-Go</a> 是一款开源的百度盘下载工具，命令行式操作，可以用来下载百度盘账号内的文件，支持获取下载直链、离线下载、多并发、秒传文件等功能，拥有 Win、macOS、Linux 客户端，以及支持在 Android 和 iOS 使用。</li>
<li><a href="https://www.appinn.com/bigtype-for-windows/" target="_blank" rel="noopener">BigType</a> 是一款可以解放双眼的 Windows 工具，它能够在键盘光标周围短暂的显示放大镜，并在几秒钟后消失，便于用户看清楚输入的内容。</li>
<li>太鼓达人（日语：太鼓の達人）是一款历史悠久的敲鼓游戏，玩具需要配合音乐敲打乐器或者屏幕来完成正确的节奏。这个名为 <a href="https://www.appinn.com/taiko-web/" target="_blank" rel="noopener">taiko-web</a> 的开源项目是一个 太鼓达人 模拟器，它可以让你在电脑浏览器或者手机浏览器上直接敲鼓，推荐使用 Chrome 浏览器。</li>
<li><a href="https://www.appinn.com/berkanan-for-ios/" target="_blank" rel="noopener">Berkanan</a> 是一款不需要移动数据网络，也不需要无线网络，有蓝牙就能连、无需注册、P2P 连接、点到点加密，适合于人员密集到 Wi-Fi 与移动网络都不可用的时候使用。</li>
<li><a href="https://www.appinn.com/simple-savr/" target="_blank" rel="noopener">Simple.Savr</a> 真是一个神奇的网站，它能够帮你在同一个局域网的不同电脑、设备的浏览器中自动同步文本以及文件，只需要打开一个网站就能实现，非常的简单非常的酷</li>
<li><a href="https://www.appinn.com/ccyixia/" target="_blank" rel="noopener">CC助手</a> 是一款 Windows 与 macOS 平台的剪贴板管理工具，只需要复制两次（ctrl/⌘ + C + C），就能将剪贴板内容收藏进 CC助手中，支持文件，进而二次处理，包括 todo、Pin、分类整理、生成二维码等操作，使用体验非常流畅。</li>
<li><a href="https://www.appinn.com/location-sms/" target="_blank" rel="noopener">Location SMS</a> 是一款没有 4G 信号时也能让紧急联系人获取你地理位置的 Android 应用，只需要发送一条短信即可。另外还能当作寻找手机时使用，支持电子围栏。</li>
</ul>
<h3 id="图片工具">图片工具</h3>
<ul>
<li><a href="https://www.appinn.com/screentogif/" target="_blank" rel="noopener">ScreenToGif</a> 是一款开源的录屏、摄像头录像、画板录制工具，还带有一个视频编辑器，并能最终导出视频文件，或者 GIF 动画的 Windows 软件，身材小巧，便携版压缩包仅仅 900Kb，单可执行文件</li>
<li><a href="http://www.appinn.com/id-watermark-online/" target="_blank" rel="noopener">水水的证件</a> 是一款能够为身份证添加水印的在线工具，让你能够在享受在线实名制服务的同时，防止不良商家将你的实名信息拿走倒卖。</li>
<li><a href="https://www.appinn.com/brush-ninja/" target="_blank" rel="noopener">Brush Ninja</a> 是一款简单易用的免费动画制作工具，拥有在线版本与 macOS 客户端，可以非常方便的创作出 gif 动画，就算是青小蛙这样的新手，也能画出几笔。</li>
<li><a href="https://www.appinn.com/remove-image-background-online/" target="_blank" rel="noopener">Remove Image Background</a> 是最近非常火爆的人像照片背景去除工具，只需要上传一张带有人像的照片，它就会帮你自动扣掉背景，全自动、5秒完成，免费。</li>
<li><a href="https://www.appinn.com/squoosh/" target="_blank" rel="noopener">Squoosh!</a> 是前几日 Google 开源发布的一款专门用来压缩图片的在线服务，支持 JPG、PNG、WebP 等格式的极限压缩，从青小蛙试用这几天的效果来看，比 TinyPNG 要强悍一点点。</li>
<li><a href="https://www.appinn.com/kimcy929-screenrecorder-for-android/" target="_blank" rel="noopener">Screen Recorder</a> 是一款屏幕录制应用，免费、无广告，支持录制时绘屏，简单的视频剪辑、游戏启动器、截屏等功能。</li>
</ul>
<div class="footnotes">
<hr>
<ol>
<li id="fn1"><p><a href="http://blog.yuantops.com/tech/config-ipv6-to-bypass-gfw-in-bupt/" target="_blank" rel="noopener">北邮校园网通过配置IPv6使用Google服务</a><a href="#fnref1">↩</a></p></li>
<li id="fn2"><p><a href="https://github.com/FelisCatus/SwitchyOmega/wiki/GFWList" target="_blank" rel="noopener">SwitchyOmega 配合 GFWList 项目使用的场合</a><a href="#fnref2">↩</a></p></li>
</ol>
</div>

      
    </div>
