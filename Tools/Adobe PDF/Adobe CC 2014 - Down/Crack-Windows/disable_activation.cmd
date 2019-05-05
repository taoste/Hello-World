SET NEWLINE=^& echo.

FIND /C /I "activate.adobe.com" %WINDIR%\system32\drivers\etc\hosts
IF %ERRORLEVEL% NEQ 0 ECHO %NEWLINE%^127.0.0.1                   activate.adobe.com>>%WINDIR%\system32\drivers\etc\hosts

FIND /C /I "practivate.adobe.com" %WINDIR%\system32\drivers\etc\hosts
IF %ERRORLEVEL% NEQ 0 ECHO ^127.0.0.1                   practivate.adobe.com>>%WINDIR%\system32\drivers\etc\hosts

FIND /C /I "lmlicenses.wip4.adobe.com" %WINDIR%\system32\drivers\etc\hosts
IF %ERRORLEVEL% NEQ 0 ECHO ^127.0.0.1                   lmlicenses.wip4.adobe.com>>%WINDIR%\system32\drivers\etc\hosts

FIND /C /I "lm.licenses.adobe.com" %WINDIR%\system32\drivers\etc\hosts
IF %ERRORLEVEL% NEQ 0 ECHO ^127.0.0.1                   lm.licenses.adobe.com>>%WINDIR%\system32\drivers\etc\hosts

FIND /C /I "na1r.services.adobe.com" %WINDIR%\system32\drivers\etc\hosts
IF %ERRORLEVEL% NEQ 0 ECHO ^127.0.0.1                   na1r.services.adobe.com>>%WINDIR%\system32\drivers\etc\hosts

FIND /C /I "hlrcv.stage.adobe.com" %WINDIR%\system32\drivers\etc\hosts
IF %ERRORLEVEL% NEQ 0 ECHO ^127.0.0.1                   hlrcv.stage.adobe.com>>%WINDIR%\system32\drivers\etc\hosts

