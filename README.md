# info

Öffentliche Seiten für Kunden des Malerbetriebs Bäßgen.

**Live unter https://info.ichbindermaler.de** über GitHub Pages.

Bewusst unter der Betriebsdomain, nicht unter `ichbindeinmaler.de`:
Ein Bäßgen-Kunde soll eine Adresse sehen, die er vom Fahrzeug kennt.

---

## Dateien

| Datei | Zweck | Zustand |
|---|---|---|
| `index.html` | Landingpage hinter dem QR-Code | geplant |
| `urlaub.html` | Kampagnenseite | geplant |
| `feedback.html` | anonyme Mitarbeiter-Umfrage | geplant |
| `pflegekarte.html` | Pflegehinweise nach dem Auftrag | geplant |
| `status.html` | Baustellenstatus für Kunden | geplant |
| `CNAME` | von GitHub angelegt — **nicht löschen** | — |

---

## Warum das Feedbackformular hier liegt und nicht in `baustelle`

Es ist anonym. Wenn ein Mitarbeiter es über seinen persönlichen
Token-Link öffnen müsste, würde er es nicht für anonym halten — egal
was technisch passiert. Deshalb: eigener Link, für alle gleich, kein
Token, kein Login. Als QR-Code im Aufenthaltsraum aushängen.

---

## Was hier nie hineingehört

- **Dateinamen ändern.** `index.html` liegt im Root, damit QR-Codes ohne
  Dateinamen auskommen: kürzere URL, gröberes Muster, besser scannbar
  auf einem staubigen Aufkleber.
- Kundendaten, Preise, interne Informationen — alles hier ist öffentlich
  lesbar, auch rückwirkend über die Git-Historie
- `CNAME` löschen: dann fällt die Domain ab

---

## Offen

- Alle Seiten noch nicht hochgeladen
- `feedback.html` braucht n8n
