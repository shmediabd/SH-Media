#Requires AutoHotkey v2.0

#HotIf WinActive("ahk_exe AfterFX.exe")

+PgDn::Send "{PgDn 5}"
+PgUp::Send "{PgUp 5}"

!PgDn::Send "{PgDn 10}"
!PgUp::Send "{PgUp 10}"

#HotIf