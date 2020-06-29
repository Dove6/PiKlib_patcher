# PiKlib patcher
Universal DLL patcher for unlocking hidden features of PiKlib and BlooMoo libraries

*Read this in other language: [polski](README.pl.md).*

### Try it!
The most conveniet way is to use [online version](https://dove6.github.io/projects/PiKlib_patcher/).  
Also, the software can be run locally (using a web server), but an Internet connection is required for fetching patch data stored using Google Sheets:  
[releases](https://github.com/Dove6/dePIKczer/releases)

### How it works
1. The "uploaded" library file is recognized basing on its checksum.
2. User chooses the functionality of final product.
3. Library bytes are modified according to difference hexdumps generated with [xxd](https://linux.die.net/man/1/xxd) and [diff](https://linux.die.net/man/1/diff). It allows for applying more than one patch at once (if only they are compatible with each other).
