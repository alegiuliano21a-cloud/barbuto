# Sito Dal Barbuto

## Dove cambiare il menu
- Modifica il file `menu.txt`.
- Ogni giorno inizia con `@` (es. `@lun`, `@mar`, `@mer`).
- Ogni sezione inizia con `#`.
- Ogni piatto e' scritto cosi: `Nome | Prezzo | Descrizione`.
- La descrizione e' facoltativa.

Esempio:
@lun
# Primi
Pasta alla norma | 9.00 | Pomodoro, melanzane, ricotta salata

## Contatti
I contatti sono dentro `index.html`.
Cerca la sezione `Contatti` e aggiorna indirizzo, telefono e orari.

## Logo
Salva il logo in `assets/logo.png`.
Se vuoi la versione ottimizzata, aggiungi anche `assets/logo.webp`.

## Mappa
La mappa usa Google Maps con consenso (click-to-load).
Per cambiare indirizzo, aggiorna `data-embed-src` nella sezione `Contatti` di `index.html`.

## Pagine legali
Le pagine `privacy.html` e `cookie.html` sono pronte e collegate nel footer.

## Prenotazioni
Il blocco prenotazioni e' un placeholder. Quando decidi il widget, lo inseriamo nel blocco `#prenotazioni`.

## Analytics
Per Cloudflare Web Analytics attiva la funzione dal pannello Cloudflare Pages.
Non serve inserire script manuali nel codice.

## Anteprima locale
Per vedere il menu renderizzato da `menu.txt` in locale, avvia un piccolo server:

python -m http.server

Poi apri `http://localhost:8000`.
