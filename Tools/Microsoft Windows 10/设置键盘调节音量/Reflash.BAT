@echo off
taskkill /im explorer.exe /f
ping -n 2 127.0.0.1 > nul
start c:\windows\explorer.exe