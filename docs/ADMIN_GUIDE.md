# 🚀 ANLEITUNG: Landing Page auf Netlify deployen
## Für QM-Guru.de Administrator

---

## 👋 HALLO!

Diese Anleitung erklärt Schritt-für-Schritt, wie du die neue Landing Page **iso-9001-fehler.qm-guru.de** online bringst.

**Keine Sorge:** Du brauchst kein technisches Vorwissen. Wenn du QM-Guru.de verwalten kannst, schaffst du das auch! 💪

**Zeit:** 30 Minuten  
**Kosten:** 0€  
**Schwierigkeit:** ⭐⭐ (Einfach)

---

## 📚 INHALTSVERZEICHNIS

1. [Was ist Netlify?](#was-ist-netlify)
2. [Account erstellen](#account-erstellen)
3. [Landing Page hochladen](#landing-page-hochladen)
4. [Domain verbinden](#domain-verbinden)
5. [Fertig & Testen](#fertig-testen)
6. [Problemlösungen](#problemlösungen)

---

## 1️⃣ WAS IST NETLIFY?

### Einfach erklärt:

**Netlify = Dropbox für Webseiten**

Statt kompliziert per FTP auf einen Server hochzuladen, ziehst du bei Netlify einfach Dateien rein - fertig!

### Warum Netlify und nicht auf QM-Guru.de?

| Eigenschaft | Netlify | Server (FTP) |
|-------------|---------|--------------|
| **Einfachheit** | Drag & Drop | Kompliziert |
| **Speed** | Blitzschnell (CDN) | Langsamer |
| **Updates** | 10 Sekunden | 10 Minuten |
| **HTTPS** | Automatisch | Manuell |
| **Kosten** | 0€ | Server-Kosten |
| **Backup** | Automatisch | Manuell |

**Ergebnis:** Schneller, einfacher, kostenlos! ✅

---

## 2️⃣ ACCOUNT ERSTELLEN (5 Minuten)

### Schritt 1: Netlify öffnen

1. Öffne deinen Browser (Chrome, Firefox, Safari - egal)
2. Gehe zu: **www.netlify.com**
3. Du siehst eine Webseite mit grünem "Sign up" Button

![Netlify Homepage]

### Schritt 2: Registrieren

1. Klicke auf **"Sign up"** (oben rechts)

2. Du siehst 3 Optionen:
   - GitHub
   - GitLab  
   - Email ← **Diese nehmen!**

3. Wähle: **"Email"**

4. Fülle aus:
   ```
   E-Mail:   deine-email@qm-guru.de
   Passwort: [wähle ein sicheres Passwort]
   ```

5. Klicke: **"Sign up"**

### Schritt 3: E-Mail bestätigen

1. Prüfe dein Posteingang
2. E-Mail von Netlify: "Verify your email"
3. Klicke auf den **Bestätigungslink**
4. Browser öffnet Netlify → Du bist eingeloggt!

**✅ Account fertig!**

Du siehst jetzt das **Netlify Dashboard**:
- Oben links: "Team overview"
- Große Button: "Add new site"
- Noch leer, weil keine Seiten

---

## 3️⃣ LANDING PAGE HOCHLADEN (10 Minuten)

### Schritt 1: Dateien vorbereiten

**Von Holger bekommst du 3 Dateien:**
1. `landing_page_iso_freebie.html`
2. `holger-grosser.webp`
3. `favicon.ico` (kleines Logo)

**Auf deinem Computer:**

1. Erstelle einen **neuen Ordner** auf dem Desktop
2. Benenne ihn: **"iso-landing"**
3. **Kopiere alle 3 Dateien** in diesen Ordner

4. **WICHTIG - Hauptdatei umbenennen:**
   - Rechtsklick auf `landing_page_iso_freebie.html`
   - "Umbenennen"
   - Neuer Name: **`index.html`**

**Dein Ordner sieht jetzt so aus:**
```
iso-landing/
├── index.html              ← umbenannt!
├── holger-grosser.webp     ← Foto
└── favicon.ico             ← Logo
```

### Schritt 2: Auf Netlify hochladen

**Zurück im Netlify Dashboard:**

1. Klicke auf: **"Add new site"**

2. Wähle: **"Deploy manually"**

3. **Jetzt kommt's:**
   
   Du siehst eine große Box mit Text:
   ```
   "Drag and drop your site output folder here"
   ```

4. **Ziehe den GANZEN Ordner "iso-landing"** in diese Box
   
   (Nicht einzelne Dateien - den kompletten Ordner!)

5. Loslassen!

6. Netlify zeigt: 
   ```
   ⏳ Uploading 3 files...
   ⏳ Processing...
   ```

7. Nach 10-30 Sekunden:
   ```
   ✅ Site is live!
   ```

**GESCHAFFT!** Deine Seite ist online! 🎉

### Schritt 3: Seite testen

**Netlify zeigt dir jetzt eine URL:**
```
https://cheerful-panda-a1b2c3.netlify.app
```
(Die Wörter sind zufällig - bei dir anders!)

**Test:**
1. Klicke auf diese URL
2. Landing Page öffnet sich!
3. Scrolle durch die Seite
4. Siehst du Holgers Foto ganz unten?
5. Funktionieren die Buttons?

**✅ Alles okay? Super! Weiter zu Schritt 4!**

---

## 4️⃣ DOMAIN VERBINDEN (10 Minuten)

Jetzt machen wir aus  
`cheerful-panda-a1b2c3.netlify.app`  
↓  
`iso-9001-fehler.qm-guru.de`

### Teil A: Site-Name ändern (2 Min)

1. Im Netlify Dashboard: **"Site settings"** (Button oben)

2. Links im Menü: **"General"** → **"Site details"**

3. Du siehst:
   ```
   Site name: cheerful-panda-a1b2c3
   [Change site name]
   ```

4. Klicke: **"Change site name"**

5. Neuer Name: **`iso-9001-fehler`**

6. **"Save"** klicken

**Jetzt ist deine URL:**
```
https://iso-9001-fehler.netlify.app
```

**Schon besser!** ✓

### Teil B: Custom Domain hinzufügen (8 Min)

Jetzt verbinden wir deine eigene Domain.

#### B1: Domain in Netlify eintragen

1. Im Menü links: **"Domain management"**

2. Button: **"Add a domain"**

3. Eingabefeld erscheint. Trage ein:
   ```
   iso-9001-fehler.qm-guru.de
   ```

4. Klicke: **"Verify"**

5. Netlify sagt:
   ```
   ⚠️ Check DNS configuration
   ```

6. Du siehst jetzt **Anweisungen**:
   ```
   Add a CNAME record:
   
   Name:  iso-9001-fehler
   Value: iso-9001-fehler.netlify.app
   ```

**WICHTIG: Notiere dir diese Info!** Brauchst du gleich.

#### B2: DNS-Einstellungen anpassen

**Jetzt musst du zum Domain-Provider von QM-Guru.de**

**Wo hostet ihr QM-Guru.de?**
- IONOS (1&1)?
- Strato?
- DomainFactory?
- Andere?

**Ich erkläre es für IONOS - bei anderen ähnlich:**

##### Bei IONOS:

1. **Login bei IONOS**
   - Gehe zu: www.ionos.de
   - Login mit euren Zugangsdaten

2. **Domain-Verwaltung öffnen**
   - Menü: **"Domain & SSL"**
   - Klicke auf: **qm-guru.de**

3. **DNS-Einstellungen**
   - Button: **"DNS"** (oder "DNS-Einstellungen")
   - Du siehst eine Liste mit DNS-Records

4. **Neue Subdomain**
   - Button: **"Subdomain hinzufügen"** (oder "Neuer Eintrag")
   
   Fülle aus:
   ```
   Subdomain:  iso-9001-fehler
   Typ:        CNAME
   Ziel:       iso-9001-fehler.netlify.app
   TTL:        3600 (Standard)
   ```

5. **Speichern!**

##### Bei Strato:

1. Login bei Strato
2. **"Paket-Verwaltung"** → **"Domains"**
3. Wähle: **qm-guru.de**
4. **"Subdomain anlegen"**
   ```
   Name:               iso-9001-fehler
   Weitergeleitet auf: iso-9001-fehler.netlify.app
   Typ:                CNAME
   ```
5. Speichern

##### Bei anderen Providern:

**Generell:**
- Suche nach: "DNS-Einstellungen", "Subdomain", oder "CNAME"
- Erstelle einen **CNAME-Record**
- Host/Name: `iso-9001-fehler`
- Ziel/Value: `iso-9001-fehler.netlify.app`

#### B3: Warten

**DNS-Änderungen brauchen Zeit:**
- Minimum: 15 Minuten
- Normal: 1-2 Stunden  
- Maximum: 24 Stunden

**Das ist normal!** Kaffee trinken ☕

**Nach 15 Minuten - Erste Prüfung:**
1. Öffne: `https://iso-9001-fehler.qm-guru.de`
2. Funktioniert's?
   - **✅ JA:** Super, weiter zu Schritt 5!
   - **❌ NEIN:** Noch 30 Min warten, dann nochmal

**HTTPS wird automatisch aktiviert**
- Netlify macht das alleine
- Dauert 5-10 Minuten nach DNS
- Grünes Schloss im Browser = fertig!

---

## 5️⃣ FERTIG & TESTEN (5 Minuten)

### Final-Check:

**✅ Teste diese 4 Dinge:**

1. **Domain funktioniert:**
   - Öffne: https://iso-9001-fehler.qm-guru.de
   - Seite lädt?

2. **HTTPS aktiv:**
   - Grünes Schloss im Browser?
   - URL beginnt mit `https://`?

3. **Alle Inhalte sichtbar:**
   - Holgers Foto unten sichtbar?
   - Alle Farben korrekt?
   - Buttons klickbar?

4. **Mobile Test:**
   - Öffne auf Handy
   - Sieht gut aus?
   - Text lesbar?

**✅ Alles funktioniert?**

**🎉 HERZLICHEN GLÜCKWUNSCH!**

**Die Landing Page ist online!** 🚀

### Was du Holger sagen kannst:

```
✅ Landing Page ist live!
✅ URL: https://iso-9001-fehler.qm-guru.de
✅ HTTPS aktiv
✅ Alle Tests bestanden
✅ Ready für LinkedIn Ads!
```

---

## 6️⃣ PROBLEMLÖSUNGEN

### Problem: "Site name already taken"

**Bedeutet:** Name `iso-9001-fehler` ist schon vergeben

**Lösung:**
- Versuche: `iso-9001-fehler-guide`
- Oder: `iso-audit-fehler`
- Oder: `qm-iso-fehler`

### Problem: Foto wird nicht angezeigt

**Ursache:** Foto nicht mit hochgeladen

**Lösung:**
1. Prüfe Ordner: Sind alle 3 Dateien drin?
2. GANZEN Ordner hochladen (nicht einzelne Dateien!)
3. Nochmal deployen

### Problem: Domain funktioniert nach 24h nicht

**Ursache:** DNS-Konfiguration falsch

**Lösung:**
1. Prüfe DNS-Einstellungen beim Provider
2. Typ = CNAME (nicht A-Record!)
3. Name = `iso-9001-fehler`
4. Ziel = `iso-9001-fehler.netlify.app`

**Prüf-Tool:**
- Gehe zu: dnschecker.org
- Trage ein: `iso-9001-fehler.qm-guru.de`
- Typ: CNAME
- Zeigt es den Netlify-Link?

### Problem: HTTPS nicht aktiv

**Lösung:**
1. Warte 10 Minuten (passiert automatisch)
2. In Netlify: **"Domain management"**
3. Bei deiner Domain: **"HTTPS"**  
4. Button: **"Provision certificate"** klicken
5. 5 Min warten

### Problem: "Zugriff verweigert" beim Hochladen

**Ursache:** Nicht eingeloggt

**Lösung:**
1. Prüfe: Bist du eingeloggt? (Oben rechts: Dein Name?)
2. Neu einloggen
3. Nochmal versuchen

---

## 🔄 UPDATES MACHEN

**Wenn Holger später was ändern will:**

### Neue Version hochladen:

1. Holger gibt dir neue Dateien
2. Erstelle neuen Ordner mit neuen Dateien
3. Hauptdatei umbenennen zu `index.html`
4. In Netlify: Tab **"Deploys"**
5. Bereich: "Drag and drop your site folder here"
6. Ordner reinziehen
7. **Fertig!** Alte Version wird ersetzt.

**So einfach!** Updates in 30 Sekunden! ⚡

---

## 💰 KOSTEN

**Netlify Free Plan ist völlig ausreichend:**

```
Preis:              0€ / Monat
Websites:           Unbegrenzt
Traffic:            100 GB/Monat
Deployments:        Unbegrenzt  
Custom Domains:     Unbegrenzt
HTTPS:              Inklusive
Backup:             Automatisch
```

**100 GB = ca. 500.000 Besucher/Monat**

**Für eure Landing Page: PERFEKT!** ✅

---

## 📱 KONTAKTE & SUPPORT

**Netlify Support:**
- Website: www.netlify.com
- Docs: docs.netlify.com
- Community: answers.netlify.com

**Bei DNS-Problemen:**
- IONOS: 0721 / 960 123 45
- Strato: 030 / 300 146 0
- Dein Provider: [Support-Nummer]

**Bei Fragen zur Landing Page:**
- Holger fragen! 😊

---

## ✅ ZUSAMMENFASSUNG

**Was du gemacht hast:**

1. ✅ Netlify Account erstellt
2. ✅ Landing Page hochgeladen (Drag & Drop)
3. ✅ Site-Name geändert
4. ✅ Custom Domain verbunden
5. ✅ DNS konfiguriert
6. ✅ Getestet

**Ergebnis:**
- Landing Page ist online
- URL: https://iso-9001-fehler.qm-guru.de
- HTTPS sicher
- Schnell & professionell
- Bereit für LinkedIn Ads! 🚀

---

## 🎓 DU BIST EIN STAR!

**Glückwunsch!** Du hast gerade:
- Eine moderne Landing Page deployed
- Mit professioneller Domain
- Auf einer der besten Plattformen
- In unter einer Stunde
- Und das kostenlos!

**Das war gar nicht so schwer, oder?** 😊

Bei Fragen: Einfach Holger oder mich fragen!

**Viel Erfolg mit der Landing Page!** 🎉

---

**P.S.:** Nächster Schritt: LinkedIn Ads schalten und Leads sammeln! 💰
