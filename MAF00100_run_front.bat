@ECHO OFF

SET BatFileName=%~n0
SET JobName=%BatFileName:~0,8%

call venv\Scripts\activate
start "%JobName%" npm run serve