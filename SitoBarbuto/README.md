# Sito Dal Barbuto

## Dove cambiare il menu
- Modifica il file `menu.txt`.
- Ogni sezione inizia con `#`.
- Ogni piatto e' scritto cosi: `Nome | Prezzo | Descrizione`.
- La descrizione e' facoltativa.

Esempio:
# Primi
Pasta alla norma | 9.00 | Pomodoro, melanzane, ricotta salata

## Contatti
I contatti sono dentro `index.html`.
Cerca la sezione `Contatti` e aggiorna indirizzo, telefono e orari.

## Logo
Salva il logo in `assets/logo.png`.
Se il file non esiste, il logo non verra' mostrato.

## Mappa
La mappa usa Google Maps con indirizzo in `index.html`.
Se vuoi cambiare indirizzo, sostituisci il link dentro l'iframe nella sezione `Contatti`.

## Prenotazioni
Il blocco prenotazioni e' un placeholder. Quando decidi il widget, lo inseriamo nel blocco `#prenotazioni`.

## Anteprima locale
Per vedere il menu renderizzato da `menu.txt` in locale, avvia un piccolo server:

python -m http.server

Poi apri `http://localhost:8000`.
