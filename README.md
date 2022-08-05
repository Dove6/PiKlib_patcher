# PiKlib patcher

Universal DLL patcher for unlocking hidden features of PiKlib and BlooMoo libraries

*Read this in other language: [polski](README.pl.md).*

### Running

The software is available [online](https://dove6.github.io/PiKlib_patcher/)!

Also, it can be run [locally](https://github.com/Dove6/PiKlib_patcher/releases/latest) using a web server (it is required by `fetch` function).

### How it works

1. The "uploaded" library file is recognized based on its checksum.
2. User chooses the functionality of final product.
3. Library bytes are modified according to difference hexdumps generated with [xxd](https://linux.die.net/man/1/xxd) and [diff](https://linux.die.net/man/1/diff). It allows for applying more than one patch at once (if only they are compatible with each other).
