# 🚀 ISO 9001 Fehler Landing Page
## Lead Generation System für QM-Guru.de

[![Netlify Status](https://api.netlify.com/api/v1/badges/YOUR-BADGE-ID/deploy-status)](https://app.netlify.com/sites/iso-9001-fehler/deploys)

**Live URL:** https://iso-9001-fehler.qm-guru.de

---

## 📋 Überblick

Landing Page + Lead Capture System für das Freebie "Die 12 häufigsten Fehler, die ISO 9001 Audits scheitern lassen"

### Features:
- ✅ SEO-optimierte Landing Page
- ✅ Google Apps Script Lead Capture
- ✅ Automatische E-Mail-Versendung
- ✅ Google Sheets CRM
- ✅ PDF-Download
- ✅ Calendly-Integration

---

## 📁 Verzeichnisstruktur

```
iso-9001-fehler-landing/
│
├── /landing-page/              # Landing Page Dateien
│   ├── index.html              # Hauptseite (SEO-optimiert)
│   ├── holger-grosser.webp     # Autor-Foto
│   └── favicon.ico             # Browser-Icon
│
├── /google-apps-script/        # Backend System
│   ├── Code.gs                 # Haupt-Script
│   └── README.md               # Script-Dokumentation
│
├── /assets/                    # Zusätzliche Assets
│   ├── freebie-pdf/
│   │   └── 12-fehler-iso-9001.html
│   └── images/
│
├── /docs/                      # Dokumentation
│   ├── DEPLOYMENT.md           # Deployment-Anleitung
│   ├── SEO.md                  # SEO-Optimierungen
│   └── ADMIN_GUIDE.md          # Admin-Anleitung
│
├── /linkedin-ads/              # Marketing
│   └── kampagnen.md            # LinkedIn Ad-Kampagnen
│
├── README.md                   # Diese Datei
├── .gitignore                  # Git-Ignores
└── netlify.toml                # Netlify-Konfiguration
```

---

## 🚀 Quick Start

### Option 1: Netlify Deploy Button (Empfohlen)

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/DEIN-USERNAME/iso-9001-fehler-landing)

1. Klicke auf den Button
2. Verbinde mit GitHub
3. Wähle Repository
4. Deploy!

### Option 2: Manuelles Deployment

1. **Repository clonen:**
   ```bash
   git clone https://github.com/DEIN-USERNAME/iso-9001-fehler-landing.git
   cd iso-9001-fehler-landing
   ```

2. **Auf Netlify deployen:**
   - Drag & Drop `/landing-page` Ordner auf Netlify
   - Oder: Netlify mit GitHub verbinden (automatisches Deployment)

3. **Custom Domain:**
   - In Netlify: Domain settings
   - Add: `iso-9001-fehler.qm-guru.de`
   - CNAME bei Domain-Provider erstellen

---

## ⚙️ Setup

### 1. Landing Page
- Datei: `/landing-page/index.html`
- SEO-optimiert für "ISO 9001 Fehler"
- Responsive Design
- Conversion-optimiert

### 2. Google Apps Script
```
1. Öffne Google Sheets
2. Erstelle neues Sheet: "QM-Guru Leads"
3. Erweiterungen → Apps Script
4. Kopiere Code aus: /google-apps-script/Code.gs
5. Konfiguriere CONFIG (Sheet-ID, URLs, etc.)
6. Deploy als Web-App
7. URL in index.html eintragen
```

Siehe: `/google-apps-script/README.md`

### 3. Custom Domain
```
DNS bei Domain-Provider:

Type:  CNAME
Name:  iso-9001-fehler
Value: iso-9001-fehler.netlify.app
TTL:   3600
```

---

## 📊 System-Flow

```
LinkedIn Ad
    ↓
Landing Page (iso-9001-fehler.qm-guru.de)
    ↓
Formular ausgefüllt
    ↓
Google Apps Script
    ↓
    ├─→ Google Sheets (Lead gespeichert)
    └─→ Gmail (Auto-Response)
            ↓
            User erhält:
            - PDF-Download-Link
            - Calendly-Termin-Link
    ↓
Sales Call
    ↓
Kunde! 💰
```

---

## 🔧 Konfiguration

### Landing Page (index.html)

**Google Apps Script URL eintragen (Zeile ~590):**
```javascript
const GOOGLE_SCRIPT_URL = 'DEINE_WEB_APP_URL_HIER';
```

### Google Apps Script

**CONFIG anpassen (Zeile 9-16):**
```javascript
const CONFIG = {
  spreadsheetId: 'DEINE_GOOGLE_SHEETS_ID',
  pdfDownloadUrl: 'https://www.qm-guru.de/downloads/12-fehler-iso-9001.pdf',
  calendlyUrl: 'https://calendly.com/grosser-qmguru/termin-qm-system-iso-9001',
  senderEmail: 'kontakt@qm-guru.de',
  senderName: 'Holger Grosser | QM-Guru'
};
```

---

## 🎯 SEO-Optimierungen

**Meta-Tags:**
- Title: "ISO 9001: Die 12 häufigsten Fehler | Kostenloser Leitfaden"
- Description: Optimiert für Conversion
- Keywords: ISO 9001, ISO Audit, QM Fehler, etc.

**Structured Data:**
- Schema.org Markup
- Open Graph (Social Media)
- Twitter Cards

**Performance:**
- WebP-Bilder
- Inline CSS
- Optimierte Fonts

**Mobile:**
- Responsive Design
- Touch-optimiert
- Fast Loading

Siehe: `/docs/SEO.md`

---

## 📈 KPIs & Tracking

**Erwartete Metriken:**
```
CPL (Cost per Lead):       < 35€
CTR (Click-Through-Rate):  > 1,0%
Conversion Rate:           > 10%
Webinar Attendance:        > 40%
Call-to-Close:             > 15%
```

**ROI-Kalkulation:**
```
2 Kunden/Monat à 5.000€:
- Umsatz:     10.000€
- Ad-Kosten:     500€
- Gewinn:      9.500€
- ROI:        1.900%
```

---

## 🔄 Updates & Maintenance

### Landing Page updaten:
1. Ändere `index.html`
2. Commit & Push zu GitHub
3. Netlify deployed automatisch!

### Google Script updaten:
1. Ändere Code in Apps Script Editor
2. Neue Bereitstellung erstellen
3. Neue URL in `index.html` eintragen
4. Commit & Push

### Freebie PDF updaten:
1. Neue PDF erstellen
2. Auf Server/Drive hochladen
3. URL in Google Apps Script CONFIG updaten

---

## 🐛 Troubleshooting

### Landing Page lädt nicht
- Prüfe Netlify Deploy Status
- Prüfe DNS-Einstellungen
- Warte 15 Min - 2 Std (DNS-Propagation)

### Formular funktioniert nicht
- Google Apps Script URL korrekt?
- Script deployed als Web-App?
- Zugriff = "Jeder"?

### E-Mail kommt nicht an
- Spam-Ordner prüfen
- Apps Script: "Ausführungen" → Fehler?
- Sheet-ID in CONFIG korrekt?

Siehe: `/docs/ADMIN_GUIDE.md` → Problemlösungen

---

## 📞 Support

**Technische Fragen:**
- GitHub Issues: https://github.com/DEIN-USERNAME/iso-9001-fehler-landing/issues

**Netlify:**
- Docs: https://docs.netlify.com
- Community: https://answers.netlify.com

**Google Apps Script:**
- Docs: https://developers.google.com/apps-script

---

## 📜 Lizenz

© 2026 Holger Grosser | QM-Guru.de  
Alle Rechte vorbehalten.

---

## 🎉 Changelog

### Version 1.0.0 (Januar 2026)
- ✅ Initiales Release
- ✅ SEO-optimierte Landing Page
- ✅ Google Apps Script Integration
- ✅ Auto-Response E-Mail System
- ✅ Calendly-Integration
- ✅ LinkedIn Ad-Kampagnen

---

## 🚀 Roadmap

### Phase 1 (Woche 1-2)
- [x] Landing Page entwickeln
- [x] Google Apps Script erstellen
- [ ] Deployment auf Netlify
- [ ] Erste Test-Leads

### Phase 2 (Woche 3-4)
- [ ] LinkedIn Ads schalten (10€/Tag)
- [ ] A/B-Testing
- [ ] Conversion-Optimierung
- [ ] Webinar vorbereiten

### Phase 3 (Monat 2)
- [ ] Skalierung (20-30€/Tag)
- [ ] Follow-up Automatisierung
- [ ] Analytics-Integration
- [ ] SEO-Optimierung

### Phase 4 (Monat 3+)
- [ ] Retargeting-Kampagnen
- [ ] E-Mail-Sequenzen
- [ ] Weitere Freebies
- [ ] OnlineCert Integration

---

**Erstellt mit ❤️ von Claude & Holger**

**Let's generate some leads! 🚀**
