# 📋 GOOGLE APPS SCRIPT DEPLOYMENT - STEP BY STEP ANLEITUNG

## ✅ WAS DU BRAUCHST:
- Google-Konto (Gmail)
- 15 Minuten Zeit
- Die beiden Dateien:
  - `google_apps_script_lead_capture.gs`
  - `landing_page_iso_freebie.html`

---

## 🚀 SCHRITT 1: GOOGLE SHEET ERSTELLEN (2 Minuten)

### 1.1 Neues Sheet erstellen
1. Gehe zu: https://sheets.google.com
2. Klicke auf: **"+ Neu erstellen"** (oben links)
3. Ein neues Google Sheet öffnet sich

### 1.2 Sheet benennen
1. Oben links auf "Unbenanntes Dokument" klicken
2. Umbenennen zu: **"QM-Guru Leads"**
3. Enter drücken

### 1.3 Sheet-ID kopieren
1. Schau in die URL deines Sheets:
   ```
   https://docs.google.com/spreadsheets/d/1a2b3c4d5e6f7g8h9i0/edit
                                        ^^^^^^^^^^^^^^^^^
                                        DAS ist die Sheet-ID
   ```
2. **KOPIERE die Sheet-ID** (der lange Teil zwischen `/d/` und `/edit`)
3. Speichere sie in einem Textdokument (brauchst du gleich!)

**Beispiel:**
- URL: `https://docs.google.com/spreadsheets/d/1NgfZOQCAciUVZXKtrgoNz0-vQX31VSf3/edit`
- Sheet-ID: `1NgfZOQCAciUVZXKtrgoNz0-vQX31VSf3`

---

## 🚀 SCHRITT 2: APPS SCRIPT EINRICHTEN (5 Minuten)

### 2.1 Apps Script Editor öffnen
1. Im Google Sheet oben in der Menüleiste:
   **Erweiterungen** → **Apps Script**
2. Ein neues Tab öffnet sich mit dem Apps Script Editor

### 2.2 Code einfügen
1. Du siehst vorhandenen Code (function myFunction...)
2. **LÖSCHE ALLES** (Strg+A, dann Delete)
3. **KOPIERE** den kompletten Code aus `google_apps_script_lead_capture.gs`
4. **FÜGE IHN EIN** (Strg+V)

### 2.3 Konfiguration anpassen
1. Ganz oben im Code findest du:
   ```javascript
   const CONFIG = {
     spreadsheetId: 'DEINE_GOOGLE_SHEETS_ID_HIER_EINFÜGEN',
     ...
   ```

2. **ERSETZE** `'DEINE_GOOGLE_SHEETS_ID_HIER_EINFÜGEN'` mit deiner kopierten Sheet-ID:
   ```javascript
   spreadsheetId: '1NgfZOQCAciUVZXKtrgoNz0-vQX31VSf3',
   ```

3. Prüfe auch diese Zeilen:
   ```javascript
   pdfDownloadUrl: 'https://www.qm-guru.de/downloads/12-fehler-iso-9001.pdf',
   calendlyUrl: 'https://calendly.com/grosser-qmguru/termin-qm-system-iso-9001',
   senderEmail: 'kontakt@qm-guru.de',
   senderName: 'Holger Grosser | QM-Guru'
   ```
   → Sollten schon richtig sein!

### 2.4 Projekt benennen & speichern
1. Oben links auf "Unbenanntes Projekt" klicken
2. Umbenennen zu: **"QM-Guru Lead Capture"**
3. **Speichern** klicken (Disketten-Symbol) oder **Strg+S**

---

## 🚀 SCHRITT 3: TESTEN (3 Minuten)

### 3.1 Test-E-Mail konfigurieren
1. Scrolle im Code ganz nach unten zur Funktion `testEmail()`
2. Finde diese Zeile:
   ```javascript
   email: 'DEINE_TEST_EMAIL@gmail.com',
   ```
3. **ERSETZE** mit DEINER echten E-Mail-Adresse:
   ```javascript
   email: 'holger@qm-guru.de',
   ```

### 3.2 E-Mail-Test durchführen
1. Oben in der Dropdown-Liste: Wähle **"testEmail"**
2. Klicke auf **"Ausführen"** (Play-Button ▶)
3. **BEIM ERSTEN MAL**: Popup erscheint

   → **"Berechtigungen prüfen"** klicken
   → Dein Google-Konto auswählen
   → **"Erweitert"** klicken (unten links)
   → **"Zu QM-Guru Lead Capture wechseln (unsicher)"** klicken
   → **"Zulassen"** klicken

4. Nach 10-30 Sekunden: **Prüfe dein Posteingang!**
   - Du solltest eine E-Mail erhalten haben
   - Betreff: "Ihre ISO 9001 Checkliste + Strategiegespräch"
   - Mit deinem Namen "Max Mustermann"

**✅ E-Mail angekommen? PERFEKT! Weiter zu 3.3**  
**❌ Keine E-Mail? Prüfe:**
- Spam-Ordner
- Ist die E-Mail-Adresse richtig geschrieben?
- Im Apps Script unten: "Ausführungen" → Fehler anzeigen?

### 3.3 Sheet-Test durchführen
1. Oben in der Dropdown-Liste: Wähle **"testSaveLead"**
2. Klicke auf **"Ausführen"** (Play-Button ▶)
3. Gehe zurück zu deinem Google Sheet (anderes Tab)
4. **REFRESH** die Seite (F5)
5. Du solltest jetzt sehen:
   - Header-Zeile (blau): Timestamp | Name | E-Mail | ...
   - Darunter eine Zeile mit: Test User | test@example.com | ...

**✅ Zeile da? SUPER! Weiter zu Schritt 4**  
**❌ Nichts da?**
- Prüfe die Sheet-ID im CONFIG
- Im Apps Script: "Ausführungen" → Fehler?

---

## 🚀 SCHRITT 4: WEB-APP DEPLOYEN (2 Minuten)

### 4.1 Deployment erstellen
1. Im Apps Script Editor oben rechts:
   **"Bereitstellen"** → **"Neue Bereitstellung"**

2. Popup öffnet sich → **Zahnrad-Symbol** klicken (neben "Typ auswählen")

3. **"Web-App"** auswählen

4. Einstellungen:
   ```
   Beschreibung: Lead Capture v1
   
   Ausführen als: Ich (DEINE_EMAIL@gmail.com)
   
   Zugriff: Jeder
   ```

5. **"Bereitstellen"** klicken

### 4.2 Web-App URL kopieren
1. Popup zeigt: "Bereitstellung erfolgreich erstellt"
2. Du siehst eine **Web-App URL**:
   ```
   https://script.google.com/macros/s/AKfyc....../exec
                                          ^^^^^^^^
                                          Lange zufällige Zeichenkette
   ```

3. **KOPIERE DIE KOMPLETTE URL!**
   - Klicke auf "Kopieren" Button
   - ODER markiere und Strg+C

4. **SPEICHERE DIE URL** in einem Textdokument!
   → Du brauchst sie gleich für die Landing Page

**WICHTIG:** Die URL endet auf `/exec` (nicht `/dev`)

---

## 🚀 SCHRITT 5: LANDING PAGE AKTUALISIEREN (1 Minute)

### 5.1 URL in Landing Page einfügen
1. Öffne die Datei `landing_page_iso_freebie.html`
2. Suche nach (Strg+F):
   ```javascript
   const GOOGLE_SCRIPT_URL = 'DEINE_GOOGLE_APPS_SCRIPT_URL_HIER_EINFÜGEN';
   ```

3. **ERSETZE** den Platzhalter mit deiner kopierten URL:
   ```javascript
   const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfyc.../exec';
   ```

4. **SPEICHERN!** (Strg+S)

---

## 🚀 SCHRITT 6: LANDING PAGE DEPLOYEN (2 Minuten)

### Option A: Netlify (empfohlen, kostenlos)

1. Gehe zu: https://app.netlify.com/drop
2. **Ziehe** die Datei `landing_page_iso_freebie.html` ins Fenster
3. Netlify uploaded automatisch
4. Du bekommst eine URL wie:
   ```
   https://magical-unicorn-123456.netlify.app
   ```

5. **TESTE DIE SEITE:**
   - Öffne die URL
   - Scrolle zum Formular
   - Fülle es aus mit TEST-DATEN
   - Klicke "Herunterladen"

6. **PRÜFE:**
   - Bekommst du die Erfolgs-Meldung?
   - Kommt die E-Mail an (nach 10-30 Sek)?
   - Ist der Lead im Google Sheet?

**✅ Alles funktioniert? GLÜCKWUNSCH! Du bist fertig!** 🎉

### Option B: Eigener Server

1. Lade `landing_page_iso_freebie.html` auf deinen Server
2. Verfügbar unter: `www.qm-guru.de/iso-freebie.html`
3. Teste wie oben

---

## 🚀 SCHRITT 7: CUSTOM DOMAIN (Optional)

Falls du eine eigene Domain willst (z.B. `freebie.qm-guru.de`):

### Bei Netlify:
1. In deinem Netlify Dashboard: **"Domain settings"**
2. **"Add custom domain"**
3. Domain eingeben: `freebie.qm-guru.de`
4. DNS-Einstellungen bei deinem Domain-Provider:
   ```
   Type: CNAME
   Name: freebie
   Value: magical-unicorn-123456.netlify.app
   ```

---

## ⚠️ WICHTIG: BEI CODE-ÄNDERUNGEN

Falls du später etwas am Google Apps Script änderst:

1. Code im Apps Script Editor ändern
2. **Speichern** (Strg+S)
3. **NEUE Bereitstellung erstellen:**
   - "Bereitstellen" → "Neue Bereitstellung"
   - NICHT "Bereitstellungen verwalten"!
4. **NEUE URL kopieren**
5. **In Landing Page aktualisieren**
6. **Landing Page neu deployen**

**NIEMALS die alte URL updaten** - erstelle immer eine neue Bereitstellung!

---

## 🎯 CHECKLISTE: IST ALLES FERTIG?

- [ ] Google Sheet erstellt
- [ ] Sheet-ID kopiert und im Script eingefügt
- [ ] Apps Script Code eingefügt
- [ ] Test-E-Mail erfolgreich empfangen
- [ ] Test-Lead im Sheet sichtbar
- [ ] Web-App deployed
- [ ] Web-App URL kopiert
- [ ] URL in Landing Page eingefügt
- [ ] Landing Page deployed
- [ ] End-to-End Test erfolgreich
- [ ] E-Mail kommt an
- [ ] Lead wird gespeichert

**Alle Checkboxen ✅? PERFEKT!**

---

## 🐛 TROUBLESHOOTING

### Problem: "Berechtigungen fehlen"
**Lösung:** Apps Script → "Ausführen" → Berechtigungen erteilen

### Problem: "Keine E-Mail kommt an"
**Lösung:**
- Spam-Ordner prüfen
- In Apps Script: "Ausführungen" → Log prüfen
- Ist senderEmail in CONFIG richtig?

### Problem: "Lead wird nicht gespeichert"
**Lösung:**
- Sheet-ID korrekt?
- Apps Script: "Ausführungen" → Fehler?
- Sheet-Name = "Leads"?

### Problem: "Landing Page Formular funktioniert nicht"
**Lösung:**
- Apps Script URL richtig eingefügt?
- Endet URL auf `/exec`?
- Browser-Konsole öffnen (F12) → Fehler?

### Problem: "CORS Error"
**Lösung:**
- Sollte NICHT passieren wegen `mode: 'no-cors'`
- Prüfe: Ist Web-App Zugriff = "Jeder"?
- Neue Bereitstellung erstellen

---

## 📞 NEXT STEPS

**Jetzt kannst du:**

1. ✅ LinkedIn Ads auf die Landing Page schalten
2. ✅ Leads automatisch sammeln
3. ✅ E-Mails automatisch versenden
4. ✅ Google Sheet als CRM nutzen
5. ✅ Follow-ups manuell machen

**Optional - Nächste Level:**
- Zapier Integration für weitere Automatisierung
- Google Analytics Tracking
- A/B-Testing mit verschiedenen Headlines
- Retargeting Pixel

---

## 📊 MONITORING

**Täglich checken:**
- Google Sheet → Neue Leads?
- Gmail → E-Mails wurden versendet?
- Calendly → Neue Termine gebucht?

**Wöchentlich analysieren:**
- Wie viele Leads?
- Wie viele E-Mails geöffnet?
- Wie viele Termine gebucht?
- Conversion Rate?

---

**Viel Erfolg! 🚀**

Bei Fragen: Einfach melden!
