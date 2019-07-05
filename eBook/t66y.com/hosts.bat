@echo off
echo "请注意你的杀毒软件提示，一定要允许"
@echo  ########################################
@xcopy C:\Windows\system32\drivers\etc\hosts C:\Windows\system32\drivers\etc\hosts.bak\ /d /c /i /y
@echo  ########################################
@echo  hosts文件备份完毕，开始修改hosts文件
@echo
@echo #草榴社區 >>C:\Windows\System32\drivers\etc\hosts
@echo 104.25.32.112 t66y.com >>C:\Windows\System32\drivers\etc\hosts
@echo 104.25.31.112 t66y.com >>C:\Windows\System32\drivers\etc\hosts
@echo 104.27.68.93 t66y.com >>C:\Windows\System32\drivers\etc\hosts
@echo 104.27.69.93 t66y.com >>C:\Windows\System32\drivers\etc\hosts
@echo 2400:CB00:2048:1::6819:1F70 t66y.com >>C:\Windows\System32\drivers\etc\hosts
@echo 2400:CB00:2048:1::6819:2070 t66y.com >>C:\Windows\System32\drivers\etc\hosts
@echo #sex.com  >>C:\Windows\System32\drivers\etc\hosts
@echo 206.125.164.82 sex.com  >>C:\Windows\System32\drivers\etc\hosts
@echo 2607:FC10:1:400::82 sex.com  >>C:\Windows\System32\drivers\etc\hosts
@echo #佐拉 - 周曙光的个人网站 >>C:\Windows\System32\drivers\etc\hosts
@echo 104.28.27.52 zuola.com >>C:\Windows\System32\drivers\etc\hosts
@echo 104.28.26.52 zuola.com >>C:\Windows\System32\drivers\etc\hosts
@echo 2400:CB00:2048:1::681C:1B34 zuola.com >>C:\Windows\System32\drivers\etc\hosts
@echo 2400:CB00:2048:1::681C:1A34 zuola.com >>C:\Windows\System32\drivers\etc\hosts

echo   "hosts文件修改完成"
@ipconfig /flushdns
@echo   "刷新DNS完成"
 
echo  hosts文件修改完毕，按任意键恢复系统原始状态
@echo
@echo  ########################################
@pause > nul
@copy C:\Windows\System32\drivers\etc\hosts.bak\hosts C:\Windows\System32\drivers\etc\hosts /y
@echo
@echo off
echo  hosts文件恢复完毕，按任意键退出
@echo
@pause > nul
@exit
