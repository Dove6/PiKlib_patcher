# PiKlib patcher
Uniwersalny patcher DLL służący do aktywacji ukrytych funkcji bibliotek PiKlib i BlooMoo

*Read this in other language: [English](README.md).*

### Wypróbuj!
Najwygodniej użyć [wersji online](https://dove6.github.io/projects/PiKlib_patcher/).  
Możliwe jest również lokalne uruchomienie aplikacji (poprzez serwer WWW), jednakże do pobrania bazy danych łatek przechowywanej w Arkuszach Google wymagane jest połączenie internetowe:  
[releases](https://github.com/Dove6/dePIKczer/releases)

### Jak to działa
1. Wgrany plik biblioteki jest rozpoznawany na podstawie jego sumy kontrolnej.
2. Użytkownik wybiera funkcjonalność produktu wyjściowego.
3. Następuje binarna modyfikacja pliku oparta na liście zmian wygenerowanej z pomocą programów [xxd](https://linux.die.net/man/1/xxd) oraz [diff](https://linux.die.net/man/1/diff). Pozwala to na nałożenie więcej niż jednej łatki na raz (jeśli tylko te ze sobą nie kolidują).
