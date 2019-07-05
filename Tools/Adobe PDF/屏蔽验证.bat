@echo off
echo "请注意你的杀毒软件提示，一定要允许"
@echo  ########################################
@xcopy C:\Windows\system32\drivers\etc\hosts C:\Windows\system32\drivers\etc\hosts.bak\ /d /c /i /y
@echo  ########################################
@echo  hosts文件备份完毕，开始修改hosts文件
@echo 127.0.0.1 activate.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 activate.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 practivate.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 lmlicenses.wip4.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 lm.licenses.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 na1r.services.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 hlrcv.stage.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 3dns.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 3dns-1.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 3dns-2.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 3dns-3.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 3dns-4.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 3dns-5.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 activate.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 activate.wip1.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 activate.wip2.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 activate.wip3.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 activate.wip4.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 activate-sea.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 activate-sjc0.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 adobe-dns.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 adobe-dns-1.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 adobe-dns-2.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 adobe-dns-3.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 adobe-dns-4.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 adobeereg.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 ereg.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 ereg.wip.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 ereg.wip1.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 ereg.wip2.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 ereg.wip3.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 ereg.wip4.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 hl2rcv.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 practivate.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 practivate.adobe.ipp >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 practivate.adobe.newoa >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 practivate.adobe.ntp >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 wip.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 wip1.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 wip2.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 wip3.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 wip4.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 wwis-dubc1-vip100.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 wwis-dubc1-vip101.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 wwis-dubc1-vip102.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 wwis-dubc1-vip103.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 wwis-dubc1-vip104.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 wwis-dubc1-vip105.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 wwis-dubc1-vip106.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 wwis-dubc1-vip107.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 wwis-dubc1-vip108.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 wwis-dubc1-vip109.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 wwis-dubc1-vip110.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 wwis-dubc1-vip111.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 wwis-dubc1-vip112.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 wwis-dubc1-vip113.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 wwis-dubc1-vip114.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 wwis-dubc1-vip115.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 wwis-dubc1-vip116.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 wwis-dubc1-vip117.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 wwis-dubc1-vip118.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 wwis-dubc1-vip119.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 wwis-dubc1-vip120.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 wwis-dubc1-vip121.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 wwis-dubc1-vip122.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 wwis-dubc1-vip123.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 wwis-dubc1-vip124.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 wwis-dubc1-vip125.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 wwis-dubc1-vip30.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 wwis-dubc1-vip31.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 wwis-dubc1-vip32.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 wwis-dubc1-vip33.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 wwis-dubc1-vip34.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 wwis-dubc1-vip35.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 wwis-dubc1-vip36.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 wwis-dubc1-vip37.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 wwis-dubc1-vip38.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 wwis-dubc1-vip39.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 wwis-dubc1-vip40.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 wwis-dubc1-vip41.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 wwis-dubc1-vip42.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 wwis-dubc1-vip43.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 wwis-dubc1-vip44.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 wwis-dubc1-vip45.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 wwis-dubc1-vip46.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 wwis-dubc1-vip47.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 wwis-dubc1-vip48.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 wwis-dubc1-vip49.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 wwis-dubc1-vip50.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 wwis-dubc1-vip51.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 wwis-dubc1-vip52.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 wwis-dubc1-vip53.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 wwis-dubc1-vip54.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 wwis-dubc1-vip55.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 wwis-dubc1-vip56.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 wwis-dubc1-vip57.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 wwis-dubc1-vip58.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 wwis-dubc1-vip59.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 wwis-dubc1-vip60.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 wwis-dubc1-vip60.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 activate.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 practivate.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 ereg.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 activate.wip3.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 wip3.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 3dns-3.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 3dns-2.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 adobe-dns.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 adobe-dns-2.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 adobe-dns-3.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 ereg.wip3.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 activate-sea.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 wwis-dubc1-vip60.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 activate-sjc0.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 wwis-dubc1-vip60.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 wwis-dubc1-vip61.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 wwis-dubc1-vip62.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 wwis-dubc1-vip63.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 wwis-dubc1-vip64.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 wwis-dubc1-vip65.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 wwis-dubc1-vip66.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 wwis-dubc1-vip67.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 wwis-dubc1-vip68.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 wwis-dubc1-vip69.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 wwis-dubc1-vip70.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 wwis-dubc1-vip71.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 wwis-dubc1-vip72.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 wwis-dubc1-vip73.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 wwis-dubc1-vip74.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 wwis-dubc1-vip75.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 wwis-dubc1-vip76.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 wwis-dubc1-vip77.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 wwis-dubc1-vip78.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 wwis-dubc1-vip79.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 wwis-dubc1-vip80.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 wwis-dubc1-vip81.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 wwis-dubc1-vip82.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 wwis-dubc1-vip83.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 wwis-dubc1-vip84.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 wwis-dubc1-vip85.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 wwis-dubc1-vip86.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 wwis-dubc1-vip87.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 wwis-dubc1-vip88.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 wwis-dubc1-vip89.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 wwis-dubc1-vip90.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 wwis-dubc1-vip91.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 wwis-dubc1-vip92.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 wwis-dubc1-vip93.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 wwis-dubc1-vip94.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 wwis-dubc1-vip95.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 wwis-dubc1-vip96.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 wwis-dubc1-vip97.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 wwis-dubc1-vip98.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 wwis-dubc1-vip99.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 crl.versign.net >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 ood.opsource.net >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 activate.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 practivate.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 ereg.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 activate.wip3.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 wip3.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 3dns-3.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 3dns-2.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 adobe-dns.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 adobe-dns-2.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 adobe-dns-3.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 ereg.wip3.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 activate-sea.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 wwis-dubc1-vip60.adobe.com >>C:\Windows\System32\drivers\etc\hosts
@echo 127.0.0.1 activate-sjc0.adobe.com >>C:\Windows\System32\drivers\etc\hosts
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