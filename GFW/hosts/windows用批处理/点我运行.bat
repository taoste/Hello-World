@echo off 
echo √√    √√  √√√      √√√√  √√√√√    √√√√
echo   √    √  √      √  √      √  √  √  √  √      √
echo   √    √  √      √  √              √      √
echo   √√√√  √      √    √√          √        √√
echo   √    √  √      √        √        √            √
echo   √    √  √      √          √      √              √
echo   √    √  √      √  √      √      √      √      √
echo √√    √√  √√√    √√√√      √√√    √√√√
echo ----------------------------------------------------------- 
echo  乐哥在线  Choong.net/ 
echo  首先感谢Google Hosts组织提供本hosts（欢迎大家前去项目参与维护）
echo  项目地址：https://github.com/googlehosts/hosts
echo -----------------------------------------------------------
copy "%~dp0hosts" "%SystemRoot%\System32\drivers\etc\hosts"
ipconfig /flushdns
pause