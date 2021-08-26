- 【实测笔记】2020-11-26 10:00（周四） 龙运营-永久激活有效 | LEGe-WEGE 2021年8月26日 17点14分 实测永久激活有效
<blockquote>
::解除原先金钥<br/>
slmgr.vbs -upk<br/>
::选择金钥，请依照底下的金钥列表作选择<br/>
slmgr.vbs -ipk BXW2K-N7JJT-TK3PJ-QYY3Y-FGDGY<br/>
::设定KMS伺服器<br/>
slmgr.vbs -skms 172.17.0.29<br/>
::启动<br/>
slmgr.vbs -ato<br/>
::显示KMS相关资讯<br/>
slmgr.vbs -dlv<br/>
</blockquote>

- 看看win10查看激活信息的详细方法: 
- <blockquote>
1、使用 Windows + R组合快捷键打开运行命令框运行： slmgr.vbs -dlv 命令。<br/>
. 可以查询到Win10的激活信息，包括：激活ID、安装ID、激活截止日期等信息。<br/>
. 看不懂的继续往下。<br/>
. 2、运行： slmgr.vbs -dli 命令可以查询到操作系统版本、部分产品密钥、许可证状态等。<br/>
. 3、运行：slmgr.vbs -xpr 命令可以查询Win10是否永久激活。（√）<br/>
. 4、运行：winver 命令可以查询系统内核版本，以及注册用户信息。<br/>
</blockquote>

- 最新windows xp sp3序列号(通过正版验证) MRX3F-47B9T-2487J-KWKMF-RPWBY(工行版)

[Win10专业版激活密钥分享](http://www.xitongzhijia.net/xtjc/20180117/117935.html)-系统之家

Win10专业版激活密钥：　　W269N-WFGWX-YVC9B-4J6C9-T83GX  ( slmgr /skms kms.03k.org [2021-2-24 正月十三 09:45（周三） 音控笔记本-续期激活180天有效至☞2021/8/23 周一 9:45:07 过期](https://github.com/RelianceHK/RelianceHK.github.io/tree/master/bak) )

Win10专业版激活密钥(win10专业版N)：　　MH37W-N47XK-V7XM9-C7227-GCQG9

　　（ 由于激活密钥不能保证100%激活，推荐使用[Win10激活工具](http://www.xitongzhijia.net/zt/78039.html)。/【[激活工具(HEU_KMS_Activator)](https://github.com/taoste/Hello-World/blob/master/Tools/Microsoft%20Windows%2010/Win10%20ESD%E4%B8%80%E9%94%AE%E8%BD%AC%E6%8D%A2ISO%E5%B7%A5%E5%85%B7/Sys-Tools.rar?raw=true)】）
  
  - 《[地表最强悍win10版本-win10专业工作站版本永久激活方法](https://mp.weixin.qq.com/s/rfPE4o_tuOu3BPUukvXXwA)》（2019-10-16）
  
> win10专业工作站版本激活密钥：

>> Windows 10 Pro for Workstation Key：BX9P2-R2N2V-Q98CQ-4KBV8-W46FH

> 正常情况下直接输入密钥即可永久激活，如果直接输入密钥无法激活，可以采用电话激活或者强制导入密钥的方法激活。
当然，每个密钥都具有时效性和激活次数限制，如果密钥失效或者被用完，小编vx: jhtd004 ，获取最新可用密钥。

> 《[没有最强，只有更强，win10专业工作站1903版本激活密钥和key](https://www.jianshu.com/p/e28a0c3237e7)》(2019.07.11 15:59:32) - 简书 

------------------------------------------------------------------------

- 《[打造论坛最强一站式重装系统必备工具合集--强迫症的福音（持续更新）](https://www.52pojie.cn/thread-1086029-1-1.html)》 - 『精品软件区』 - 吾爱破解 - LCG - LSG |安卓破解|病毒分析|破解软件| www.52pojie.cn  

------------------------------------------------------------------------

> 《[fdisk/mbr 命令是什么，主引导区是什么？](https://www.jb51.net/os/other/41881.html)》_其它系统_操作系统_脚本之家 

> [Google](https://www.google.com/search?q=win10引导修复工具) ：《[Windows引导修复](https://blog.csdn.net/oouxx/article/details/80151524)》 - oouxx的博客 - CSDN博客 【[PDF](https://taoste.github.io/Hello-World/Tools/Microsoft%20Windows%2010/Win10%20ESD%E4%B8%80%E9%94%AE%E8%BD%AC%E6%8D%A2ISO%E5%B7%A5%E5%85%B7/Windows%E5%BC%95%E5%AF%BC%E4%BF%AE%E5%A4%8D%20-%20oouxx%E7%9A%84%E5%8D%9A%E5%AE%A2%20-%20CSDN%E5%8D%9A%E5%AE%A2.pdf)】
```
【BIOS】

出错情况一：由于病毒或者误操作，将C:\bootmgr，C:\boot\bcd，C:\windows\system32\winload.exe 
任一文件删除，可想而知，肯定无法启动啦。
解决方法：从网上下载，或者从别人电脑上将此文件复制进自己U盘，通过winPE进入系统，将这些文件放到相应位置。
出错情况二：上述文件都还在，但是一不小心将开机引导条目删除，双系统的同学知道，开机时会让你选进哪个系统，
就是指那个，单系统的话就一个系统，不会让你选直接就进了。

解决方法：用U盘制作PE进入系统（设置U盘为首选启动项，或者按f12）
进去后应该会有引导修复工具，用bootice引导修复工具,菜单栏选择BCD编辑，新建BCD,选择C:\boot\bcd,
进入编辑界面后，按照下图填写（以Windows10为例）。然后重启就能正常进入系统了。 
```

> 《[如何修复Windows 10引导记录损坏故障](https://jingyan.baidu.com/article/1876c8526112f5890b137638.html)》-百度经验  

> 《[win10如何进入高级启动模式?win10开机F8没反应](https://jingyan.baidu.com/article/75ab0bcbcec227d6874db275.html)》-百度经验   

------------------------------------------------------------------------

- 《[**在 macOS Mojave 上通过 Boot Camp 安装最新的 Windows 10**](https://imtx.me/archives/2725.html)》 | [I'm TualatriX](https://imtx.me/)  

- 《[**MacBook Pro 2018 和 MacBook Pro 2017 对比评测**](https://imtx.me/archives/2724.html)》 | [I'm TualatriX](https://imtx.me/)   

------------------------------------------------------------------------

**引用：**[【Win10激活工具】N66U 全改造，KMS Server、ARIA2、SWAP、SSR Server、SSH 安全](https://ppundsh.github.io/posts/87f1/) | [Flymia 凡事用心之事](https://ppundsh.github.io/)

Windows启动 [来源3]（https://ppundsh.github.io/posts/87f1/#fn:3 ）

用系统管理员许可权输入以下命令：

```
::解除原先金钥
slmgr.vbs -upk
::选择金钥，请依照底下的金钥列表作选择
slmgr.vbs -ipk W269N-WFGWX-YVC9B-4J6C9-T83GX
::设定KMS伺服器
slmgr.vbs -skms 172.17.0.29
::启动
slmgr.vbs -ato
::显示KMS相关资讯
slmgr.vbs -dlv
```
<img src="https://camo.githubusercontent.com/fb8fedc644d61c58ce8b617d4f673893396bd1da/68747470733a2f2f692e696d6775722e636f6d2f756a785a3951462e706e673f7261773d74727565?raw=true"/>

【[参考](https://ppundsh.github.io/posts/87f1/)】[引用](https://github.com/ppundsh/ppundsh.github.io/blob/master/posts/87f1/index.html)：

[Windows 10](https://zh.wikipedia.org/wiki/Windows_10%E7%89%88%E6%9C%AC%E5%88%97%E8%A1%A8) [各版本](https://www.zhihu.com/question/33657445) 产品密钥:

<table>
<thead>
<tr>
<th>Windows 10 作業系統版本</th>
<th>KMS 客戶端設定金鑰</th>
</tr>
</thead>
<tbody>
<tr>
<td>Windows 10 專業版</td>
<td>W269N-WFGWX-YVC9B-4J6C9-T83GX</td>
</tr>
<tr>
<td>Windows 10 Professional N</td>
<td>MH37W-N47XK-V7XM9-C7227-GCQG9</td>
</tr>
<tr>
<td>Windows 10 企業版</td>
<td>NPPR9-FWDCX-D2C8J-H872K-2YT43</td>
</tr>
<tr>
<td>Windows 10 企業 N</td>
<td>DPH2V-TTNVB-4X9Q3-TJR4H-KHJW4</td>
</tr>
<tr>
<td>Windows 10 教育</td>
<td>NW6C2-QMPVW-D7KKK-3GKT6-VCFB2</td>
</tr>
<tr>
<td>Windows 10 教育 N</td>
<td>2WH4N-8QGBV-H22JP-CT43Q-MDWWJ</td>
</tr>
<tr>
<td>Windows 10 企業版 2015 LTSB</td>
<td>WNMTR-4C88C-JK8YV-HQ7T2-76DF9</td>
</tr>
<tr>
<td>Windows 10 Enterprise 2015 LTSB N</td>
<td>2F77B-TNFGY-69QQF-B8YKP-D69TJ</td>
</tr>
<tr>
<td>Windows 10 企業 2016 LTSB</td>
<td>DCPHK-NFMTC-H88MJ-PFHPY-QJ4BJ</td>
</tr>
<tr>
<td>Windows 10 企業 2016 LTSB N</td>
<td>QFFDN-GRT3P-VKWWX-X7T3R-8B639</td>
</tr>
</tbody>
</table>
--------------------------------------------------------

- 《[送Win10专业版/家庭版激活密钥|赠Win10各版本激活密钥最新分享](http://www.xitongzu.com/jc/32382.html)》 - 系统族 (发布时间:2019-10-18)

```
一、Win10各版本激活密钥：

1、win10家庭版永久密钥

　　Win 10 Home （Core） Edition OEM版

　　OEM NON SLP:

　　[Key]：KCYRD-QNR4K-6RY36-MPQMM-F9CHG

　　[Key]：YNG79-9PXTP-4RDWY-67P9V-CYT3T

　　Win 10 Home（Core） Retail零售版

　　[Key]：2RKXW-PFNVQ-4R49T-TCQBT-3V63V

　　[Key]：4THMG-NFHRJ-WWQGD-CK8PM-X4R7H

　　[Key]：64HKH-N3RTH-63XBV-QB2DF-R3KQV

　　[Key]：C7BNF-CV9HF-T82R9-RRX4M-K763V

　　[Key]：4THMG-NFHRJ-WWQGD-CK8PM-X4R7H

2、win10专业版永久激活密钥

　　Win 10 Professional Volume:MAK批量授权版

　　[Key]：BXW2K-N7JJT-TK3PJ-QYY3Y-FGDGY

　　[Key]：TNBWH-T4GVX-QQ2VD-GWXYF-VMH3B

　　[Key]：NJ7PR-KTK74-RQBBG-3C2TW-W44DB

　　[Key]：RG7ND-MT8WG-FVD78-RQ8YX-BKMQB

　　[Key]：WTBNX-Y7BPK-JV4QP-C82YG-C9XTY

　　[Key]：FMH4B-BNFJ7-WQWHB-3DT93-2WF9M

　　Win 10 Professional Retail零售版

　　[Key]：28YMN-RMKKW-4PKDK-MHVB2-XTPKG

　　[Key]：28TWN-9VDVQ-CKQ4M-J8BJM-XBT6T

　　[Key]：28JGX-WN9C4-VHWCG-HPHPW-CPQGT

　　[Key]：H8NRX-YCJY2-K8V2T-PHT7F-FC2KG

　　[Key]：C69YJ-9TN28-43YY2-82FP3-BG9TT

　　[Key]：2X7P3-NGJTH-Q9TJF-8XDP9-T83GT

3、win10企业版产品密钥

　　Win 10 Enterprise Volume:MAK批量授权版

　　[Key]：N4KHC-23X7Y-FHCDH-6F2Q4-YTDF4

　　[Key]：PN9QD-8RKPX-9Q2T9-WKG37-4C2JR

　　[Key]：W77WN-TP36G-VBJFX-C77HK-2YT44

　　[Key]：8QPWX-N9JB8-74W2J-4W2R4-FC2JR

　　[Key]：9DKNB-8HTHW-V7TBP-77K4V-G6PJR

　　[Key]：9XN4J-QPX7Q-BYHHV-WWH96-9KXR4

　　Win 10 EnterpriseS 2016 Volume:MAK （ Enterprise LTSB ）长期服务分支

　　[Key]：JFVW7-XNC3Y-TD2M6-HFCD2-GQ8WQ

　　[Key]：PGDVN-GKX6K-MGJDR-CRVDV-HXPJQ

4、win10教育版序列号

　　Win 10 Education Volume:MAK批量授权版

　　[Key]：WQX7T-XN7BH-GY44W-BTM32-9QBM3

　　[Key]：QYYHN-DJB2P-7XWGC-D9BHT-WXCJD

　　Win 10 Education N Volume:MAK批量授权版

　　[Key]：VJGPC-QNQWQ-TD22C-J26V8-MTDFX

　　

送Win10专业版/家庭版激活密钥|赠Win10各版本激活密钥最新分享



二、Windows10 KMS客户端安装密钥Volume:GVLK

　　Windows 10 专业版：W269N-WFGWX-YVC9B-4J6C9-T83GX

　　Windows 10 专业版 N：MH37W-N47XK-V7XM9-C7227-GCQG9

　　Windows 10 专业工作站：NRG8B-VKK3Q-CXVCJ-9G2XF-6Q84J

　　Windows 10 专业工作站 N：9FNHH-K3HBT-3W4TD-6383H-6XYWF

　　Windows 10 专业教育版：6TP4R-GNPTD-KYYHQ-7B7DP-J447Y

　　Windows 10 专业教育版 N：YVWGF-BXNMC-HTQYQ-CPQ99-66QFC

　　Windows 10 教育版：NW6C2-QMPVW-D7KKK-3GKT6-VCFB2

　　Windows 10 教育版 N：2WH4N-8QGBV-H22JP-CT43Q-MDWWJ

　　Windows 10 企业版：NPPR9-FWDCX-D2C8J-H872K-2YT43

　　Windows 10 企业版 N：DPH2V-TTNVB-4X9Q3-TJR4H-KHJW4

　　Windows 10 企业版 G：YYVX9-NTFWV-6MDM3-9PT4T-4M68B

　　Windows 10 企业版 G N：44RPN-FTY23-9VTTB-MP9BX-T84FV

　　Windows 10 企业版 LTSC 2019：M7XTQ-FN8P6-TTKYV-9D4CC-J462D

　　Windows 10 企业版 N LTSC 2019：2NFX-8DJQP-P6BBQ-THF9C-7CG2H

小编所要分享的Win10各版本激活密钥，到这里就全部分享完了，如果还有用户使用未激活的Win10系统，可以来上面的内容里，找对应版本的密钥去进行激活，希望本文分享之后，能有更多的用户成功激活好Win10系统。
```

- 《[2019最新win10专业工作站版永久一键激活操作步骤](http://www.laoyoutiao.net/dnjc/win10jc_701.html)》 -老油条装机大师 (2019-10-17)
```
输入命令：

::解除原先金钥
slmgr.vbs -upk
::选择金钥，请依照底下的金钥列表作选择
slmgr /ipk VK7JG-NPHTM-C97JM-9MPGT-3V66T
::设定KMS伺服器(或者 zh.us.to)
slmgr /skms ms kms.03k.org 
::启动
slmgr /ato
::显示KMS相关资讯
slmgr.vbs -dlv
```

