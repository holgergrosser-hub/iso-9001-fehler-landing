# Google Apps Script - Lead Capture System

## 📋 Überblick

Dieses Script empfängt Leads von der Landing Page, speichert sie in Google Sheets und versendet automatisch eine E-Mail mit PDF-Download und Calendly-Link.

---

## 🚀 Setup

### Schritt 1: Google Sheet erstellen

1. Gehe zu: https://sheets.google.com
2. Erstelle neues Sheet
3. Benenne: "QM-Guru Leads"
4. Kopiere die Sheet-ID aus der URL:
   ```
   https://docs.google.com/spreadsheets/d/1NgfZOQCAc.../edit
                                        ^^^^^^^^^^
                                        Diese ID kopieren!
   ```

### Schritt 2: Script einrichten

1. Im Google Sheet: **Erweiterungen → Apps Script**
2. Lösche vorhandenen Code
3. Kopiere kompletten Code aus `Code.gs`
4. **CONFIG anpassen** (Zeile 9-16):
   ```javascript
   const CONFIG = {
     spreadsheetId: 'DEINE_SHEET_ID_HIER',
     pdfDownloadUrl: 'https://www.qm-guru.de/downloads/12-fehler-iso-9001.pdf',
     calendlyUrl: 'https://calendly.com/grosser-qmguru/termin-qm-system-iso-9001',
     senderEmail: 'kontakt@qm-guru.de',
     senderName: 'Holger Grosser | QM-Guru'
   };
   ```
5. Speichern (Strg+S)

### Schritt 3: Testen

**E-Mail-Test:**
1. Funktion wählen: `testEmail`
2. Zeile 148: Deine E-Mail eintragen
3. Ausführen (▶ Button)
4. Berechtigungen erteilen (beim ersten Mal)
5. E-Mail sollte in 10-30 Sek ankommen

**Sheet-Test:**
1. Funktion wählen: `testSaveLead`
2. Ausführen
3. Prüfe Google Sheet → Neue Zeile sollte erscheinen

### Schritt 4: Web-App deployen

1. Oben rechts: **Bereitstellen → Neue Bereitstellung**
2. Typ: **Web-App**
3. Einstellungen:
   - Beschreibung: "Lead Capture v1"
   - Ausführen als: **Ich**
   - Zugriff: **Jeder** (WICHTIG!)
4. **Bereitstellen** klicken
5. **URL KOPIEREN** (endet auf `/exec`)

### Schritt 5: URL in Landing Page eintragen

1. Öffne `/landing-page/index.html`
2. Suche Zeile ~590:
   ```javascript
   const GOOGLE_SCRIPT_URL = 'DEINE_GOOGLE_APPS_SCRIPT_URL_HIER_EINFÜGEN';
   ```
3. Ersetze mit deiner kopierten URL
4. Speichern
5. Commit & Push zu GitHub
6. Netlify deployed automatisch!

---

## 🔄 Code-Änderungen

**WICHTIG:** Bei Code-Änderungen:

1. Code in Apps Script Editor ändern
2. Speichern
3. **NEUE Bereitstellung erstellen** (nicht alte updaten!)
4. Neue URL kopieren
5. In Landing Page eintragen
6. Commit & Push

**NIEMALS** die alte Bereitstellung updaten - erstelle immer eine neue!

---

## 📊 Was das Script macht

### doPost() - Hauptfunktion
- Empfängt POST-Request von Landing Page
- Validiert Daten (Name & E-Mail erforderlich)
- Ruft saveLead() und sendWelcomeEmail() auf
- Gibt Erfolg/Fehler zurück

### saveLead() - Speichern
- Öffnet Google Sheet
- Erstellt Sheet "Leads" falls nicht vorhanden
- Fügt Header-Zeile hinzu (beim ersten Mal)
- Speichert Lead-Daten:
  - Timestamp
  - Name
  - E-Mail
  - Unternehmen
  - Audit-Timeline
  - Status: "Neu"
  - Quelle: "Landing Page Freebie"

### sendWelcomeEmail() - E-Mail
- Erstellt HTML-E-Mail mit:
  - Personalisierte Anrede
  - PDF-Download-Link
  - Calendly-Termin-Link
  - Übersicht der 12 Fehler
  - Call-to-Action
- Sendet via Gmail
- Plain-Text Alternative inklusive

### testEmail() - Test
- Sendet Test-E-Mail
- Für lokales Testen

### testSaveLead() - Test
- Speichert Test-Lead im Sheet
- Für lokales Testen

---

## 🐛 Troubleshooting

### E-Mail kommt nicht an
**Lösungen:**
- Spam-Ordner prüfen
- Apps Script: "Ausführungen" → Log prüfen
- `senderEmail` in CONFIG korrekt?
- Gmail-Berechtigung erteilt?

### Lead wird nicht gespeichert
**Lösungen:**
- Sheet-ID in CONFIG korrekt?
- Apps Script: "Ausführungen" → Fehler?
- Sheet-Name = "Leads"?
- Berechtigungen erteilt?

### Landing Page: "Formular funktioniert nicht"
**Lösungen:**
- Script URL korrekt in index.html?
- URL endet auf `/exec` (nicht `/dev`)?
- Web-App Zugriff = "Jeder"?
- Neue Bereitstellung nach Code-Änderung?

### CORS-Error
**Lösungen:**
- Sollte NICHT passieren wegen `mode: 'no-cors'`
- Web-App Zugriff = "Jeder" prüfen
- Neue Bereitstellung erstellen

---

## 📈 Monitoring

**Apps Script Dashboard:**
- Menü: "Ausführungen" → Zeigt alle Requests
- Filter nach: Erfolg / Fehler
- Zeigt Fehler-Messages
- Zeigt Execution-Time

**Google Sheet als CRM:**
- Alle Leads an einem Ort
- Filtere nach Status, Timeline, Datum
- Exportiere für Analysen

**Empfohlene Sheet-Spalten:**
```
A: Timestamp          - Wann kam der Lead?
B: Name               - Vollständiger Name
C: E-Mail             - Kontakt-E-Mail
D: Unternehmen        - Firmenname
E: Audit-Timeline     - Wann steht Audit an?
F: Status             - Neu / Kontaktiert / Termin / Kunde
G: Quelle             - Landing Page Freebie
H: Tage seit Lead     - =TODAY()-A2
I: Follow-up nötig?   - =IF(AND(F2="Neu",H2>3),"JA","")
```

---

## 🔐 Sicherheit

**Best Practices:**
- ✅ Keine Passwörter im Code
- ✅ Keine API-Keys im Code
- ✅ Sheet-ID ist ok (nicht geheim)
- ✅ E-Mail-Adressen sind ok (öffentlich)
- ✅ Web-App läuft unter deinem Account

**Wichtig:**
- Web-App Zugriff = "Jeder" ist sicher!
- Script validiert alle Eingaben
- Nur POST-Requests akzeptiert
- Automatisches Logging

---

## 📊 Performance

**Erwartete Zeiten:**
- Request → Response: 1-3 Sekunden
- E-Mail-Versand: 5-10 Sekunden
- Sheet-Speicherung: < 1 Sekunde

**Limits (Google Apps Script):**
- Executions: 20.000 / Tag
- E-Mails: 100 / Tag (Consumer Gmail)
- E-Mails: 1.500 / Tag (Google Workspace)

**Für euer Volumen:** Völlig ausreichend! ✅

---

## 🔄 Updates & Versioning

**Version 1.0.0 (Januar 2026)**
- ✅ Initial Release
- ✅ Lead Capture
- ✅ Auto-Response E-Mail
- ✅ Google Sheets Integration
- ✅ Calendly Integration

**Geplante Features:**
- Follow-up E-Mail-Sequenz
- Zapier Integration
- Webhook für Slack
- Advanced Analytics

---

## 📞 Support

**Bei Problemen:**
1. Prüfe "Ausführungen" in Apps Script
2. Prüfe Google Sheet auf Fehler
3. Teste mit testEmail() und testSaveLead()
4. Siehe Troubleshooting-Sektion oben

**Docs:**
- Apps Script: https://developers.google.com/apps-script
- Gmail Service: https://developers.google.com/apps-script/reference/gmail
- Spreadsheet Service: https://developers.google.com/apps-script/reference/spreadsheet

---

## 📜 Code-Struktur

```javascript
// CONFIG
const CONFIG = { ... }

// HAUPTFUNKTION
function doPost(e) { ... }

// HELPER FUNCTIONS
function saveLead(data) { ... }
function sendWelcomeEmail(data) { ... }

// TEST FUNCTIONS
function testEmail() { ... }
function testSaveLead() { ... }
```

**Clean & Übersichtlich!** ✅

---

**Viel Erfolg mit dem Lead-System!** 🚀
