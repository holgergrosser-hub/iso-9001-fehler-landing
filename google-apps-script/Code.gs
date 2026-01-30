// ========================================
// GOOGLE APPS SCRIPT: LEAD CAPTURE & AUTO EMAIL
// Für: QM-Guru ISO 9001 Freebie Landing Page
// ========================================

// KONFIGURATION - HIER ANPASSEN!
const CONFIG = {
  spreadsheetId: 'DEINE_GOOGLE_SHEETS_ID_HIER_EINFÜGEN', // Siehe Anleitung unten
  sheetName: 'Leads',
  pdfDownloadUrl: 'https://www.qm-guru.de/downloads/12-fehler-iso-9001.pdf',
  calendlyUrl: 'https://calendly.com/grosser-qmguru/termin-qm-system-iso-9001',
  senderEmail: 'kontakt@qm-guru.de', // Deine Gmail-Adresse
  senderName: 'Holger Grosser | QM-Guru'
};

// ========================================
// HAUPTFUNKTION: Empfängt Daten von Landing Page
// ========================================
function doPost(e) {
  try {
    // Parse eingehende Daten
    const data = JSON.parse(e.postData.contents);
    
    // Validierung
    if (!data.email || !data.name) {
      return ContentService.createTextOutput(JSON.stringify({
        success: false,
        error: 'Name und E-Mail sind erforderlich'
      })).setMimeType(ContentService.MimeType.JSON);
    }
    
    // 1. Lead in Google Sheets speichern
    saveLead(data);
    
    // 2. E-Mail verschicken
    sendWelcomeEmail(data);
    
    // 3. Erfolgreiche Antwort zurück
    return ContentService.createTextOutput(JSON.stringify({
      success: true,
      message: 'Lead erfolgreich gespeichert und E-Mail versendet'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    console.error('Fehler in doPost:', error);
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      error: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

// ========================================
// FUNKTION: Lead in Google Sheets speichern
// ========================================
function saveLead(data) {
  try {
    // Öffne Spreadsheet
    const ss = SpreadsheetApp.openById(CONFIG.spreadsheetId);
    let sheet = ss.getSheetByName(CONFIG.sheetName);
    
    // Falls Sheet nicht existiert, erstelle es
    if (!sheet) {
      sheet = ss.insertSheet(CONFIG.sheetName);
      
      // Header-Zeile
      const headers = [
        'Timestamp',
        'Name',
        'E-Mail',
        'Unternehmen',
        'Audit-Timeline',
        'Status',
        'Quelle'
      ];
      sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
      
      // Header formatieren
      sheet.getRange(1, 1, 1, headers.length)
        .setFontWeight('bold')
        .setBackground('#1e3a8a')
        .setFontColor('#ffffff');
    }
    
    // Neue Zeile hinzufügen
    const timestamp = new Date();
    const row = [
      timestamp,
      data.name || '',
      data.email || '',
      data.company || '',
      data.timeline || 'Nicht angegeben',
      'Neu',
      'Landing Page Freebie'
    ];
    
    sheet.appendRow(row);
    
    // Auto-Resize Spalten
    sheet.autoResizeColumns(1, 7);
    
    console.log('Lead gespeichert:', data.email);
    
  } catch (error) {
    console.error('Fehler beim Speichern:', error);
    throw error;
  }
}

// ========================================
// FUNKTION: Willkommens-E-Mail versenden
// ========================================
function sendWelcomeEmail(data) {
  try {
    const subject = 'Ihre ISO 9001 Checkliste + Strategiegespräch';
    
    const htmlBody = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 600px;
      margin: 0 auto;
    }
    .header {
      background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
      color: white;
      padding: 40px 30px;
      text-align: center;
      border-radius: 8px 8px 0 0;
    }
    .header h1 {
      margin: 0;
      font-size: 24px;
    }
    .content {
      background: #ffffff;
      padding: 30px;
      border: 1px solid #e5e7eb;
    }
    .button {
      display: inline-block;
      background: #1e40af;
      color: white;
      padding: 14px 28px;
      text-decoration: none;
      border-radius: 6px;
      font-weight: 600;
      margin: 10px 0;
    }
    .checklist {
      background: #f0f9ff;
      border-left: 4px solid #3b82f6;
      padding: 20px;
      margin: 20px 0;
      border-radius: 4px;
    }
    .checklist-item {
      margin: 10px 0;
    }
    .footer {
      background: #f9fafb;
      padding: 20px;
      text-align: center;
      font-size: 14px;
      color: #6b7280;
      border-radius: 0 0 8px 8px;
    }
  </style>
</head>
<body>
  <div class="header">
    <h1>🎉 Vielen Dank, ${data.name}!</h1>
  </div>
  
  <div class="content">
    <p>Hallo ${data.name},</p>
    
    <p>vielen Dank für Ihr Interesse an der Checkliste <strong>"Die 12 häufigsten Fehler, die ISO-Audits scheitern lassen"</strong>.</p>
    
    <p style="text-align: center; margin: 30px 0;">
      <a href="${CONFIG.pdfDownloadUrl}" class="button">📥 Jetzt Checkliste herunterladen</a>
    </p>
    
    <div class="checklist">
      <h3 style="margin-top: 0;">📋 Was Sie in der Checkliste finden:</h3>
      <div class="checklist-item">✓ Die 12 häufigsten Fehler bei ISO 9001 Audits</div>
      <div class="checklist-item">✓ Konkrete Lösungen aus 30 Jahren Praxis</div>
      <div class="checklist-item">✓ Praxistipps für schnelle Umsetzung</div>
      <div class="checklist-item">✓ Zeit- und Kosteneinsparungen</div>
    </div>
    
    <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
    
    <h3>🎯 Nächster Schritt: Kostenloses Strategiegespräch</h3>
    
    <p>Sie haben Fragen zur ISO-Zertifizierung? Buchen Sie ein kostenloses 30-Minuten-Strategiegespräch:</p>
    
    <p style="text-align: center; margin: 30px 0;">
      <a href="${CONFIG.calendlyUrl}" class="button">📅 Strategiegespräch buchen</a>
    </p>
    
    <p><strong>In diesem Gespräch klären wir:</strong></p>
    <ul>
      <li>Wo stehen Sie aktuell mit Ihrer ISO-Zertifizierung?</li>
      <li>Welche der 12 Fehler betreffen Sie?</li>
      <li>Wie sieht Ihr optimaler Weg zur Zertifizierung aus?</li>
    </ul>
    
    <p style="margin-top: 30px;"><em>Kein Verkaufsgespräch. Kein Druck. Nur klare Orientierung.</em></p>
    
    <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
    
    <p>Bei Fragen können Sie jederzeit antworten oder mich direkt kontaktieren.</p>
    
    <p>Ich freue mich auf den Austausch!</p>
    
    <p>Beste Grüße,<br>
    <strong>Holger Grosser</strong><br>
    <small>ISO-Experte | QM-Berater | 1000+ erfolgreiche Audits</small></p>
  </div>
  
  <div class="footer">
    <p><strong>QM-Guru.de</strong><br>
    Qualitätsmanagement pragmatisch umgesetzt</p>
    <p style="font-size: 12px; margin-top: 15px;">
      <a href="https://www.qm-guru.de" style="color: #3b82f6; text-decoration: none;">Website</a> | 
      <a href="${CONFIG.calendlyUrl}" style="color: #3b82f6; text-decoration: none;">Termin buchen</a>
    </p>
  </div>
</body>
</html>
    `;
    
    // Plain Text Alternative
    const plainBody = `
Hallo ${data.name},

vielen Dank für Ihr Interesse an der Checkliste "Die 12 häufigsten Fehler, die ISO-Audits scheitern lassen".

📥 JETZT HERUNTERLADEN:
${CONFIG.pdfDownloadUrl}

📋 WAS SIE IN DER CHECKLISTE FINDEN:
✓ Die 12 häufigsten Fehler bei ISO 9001 Audits
✓ Konkrete Lösungen aus 30 Jahren Praxis
✓ Praxistipps für schnelle Umsetzung
✓ Zeit- und Kosteneinsparungen

---

🎯 NÄCHSTER SCHRITT: Kostenloses Strategiegespräch

Sie haben Fragen zur ISO-Zertifizierung? Buchen Sie ein kostenloses 30-Minuten-Strategiegespräch:

📅 TERMIN BUCHEN:
${CONFIG.calendlyUrl}

IN DIESEM GESPRÄCH KLÄREN WIR:
• Wo stehen Sie aktuell mit Ihrer ISO-Zertifizierung?
• Welche der 12 Fehler betreffen Sie?
• Wie sieht Ihr optimaler Weg zur Zertifizierung aus?

Kein Verkaufsgespräch. Kein Druck. Nur klare Orientierung.

---

Bei Fragen können Sie jederzeit antworten oder mich direkt kontaktieren.

Ich freue mich auf den Austausch!

Beste Grüße,
Holger Grosser
ISO-Experte | QM-Berater | 1000+ erfolgreiche Audits

---
QM-Guru.de - Qualitätsmanagement pragmatisch umgesetzt
Website: https://www.qm-guru.de
Termin: ${CONFIG.calendlyUrl}
    `;
    
    // E-Mail versenden
    GmailApp.sendEmail(
      data.email,
      subject,
      plainBody,
      {
        htmlBody: htmlBody,
        name: CONFIG.senderName,
        replyTo: CONFIG.senderEmail
      }
    );
    
    console.log('E-Mail versendet an:', data.email);
    
  } catch (error) {
    console.error('Fehler beim E-Mail-Versand:', error);
    throw error;
  }
}

// ========================================
// TEST-FUNKTION: Zum Testen der E-Mail
// ========================================
function testEmail() {
  const testData = {
    name: 'Max Mustermann',
    email: 'DEINE_TEST_EMAIL@gmail.com', // HIER DEINE E-MAIL EINTRAGEN!
    company: 'Muster GmbH',
    timeline: '3-6 Monate'
  };
  
  sendWelcomeEmail(testData);
  Logger.log('Test-E-Mail versendet!');
}

// ========================================
// TEST-FUNKTION: Zum Testen des Lead-Speicherns
// ========================================
function testSaveLead() {
  const testData = {
    name: 'Test User',
    email: 'test@example.com',
    company: 'Test GmbH',
    timeline: 'In den nächsten 3 Monaten'
  };
  
  saveLead(testData);
  Logger.log('Test-Lead gespeichert!');
}

// ========================================
// ANLEITUNG: So verwendest du dieses Script
// ========================================
/*

SCHRITT 1: GOOGLE SHEET ERSTELLEN
----------------------------------
1. Öffne https://sheets.google.com
2. Erstelle ein neues Sheet
3. Benenne es: "QM-Guru Leads" (oder wie du willst)
4. Kopiere die Sheet-ID aus der URL:
   https://docs.google.com/spreadsheets/d/DIESE_LANGE_ID_HIER/edit
5. Füge die ID oben in CONFIG.spreadsheetId ein


SCHRITT 2: SCRIPT EINRICHTEN
-----------------------------
1. Im Google Sheet: Erweiterungen → Apps Script
2. Lösche den vorhandenen Code
3. Füge DIESEN kompletten Code ein
4. Passe CONFIG oben an (Sheet-ID, PDF-URL, etc.)
5. Speichern (Disketten-Symbol)


SCHRITT 3: TESTEN
------------------
1. Oben bei "testEmail": Trage DEINE E-Mail ein
2. Funktion auswählen: "testEmail"
3. Klicke auf "Ausführen" (Play-Button)
4. Beim ersten Mal: Berechtigungen erteilen
5. Prüfe deinen Posteingang → E-Mail sollte ankommen!

Dann teste auch "testSaveLead":
1. Funktion auswählen: "testSaveLead"
2. Ausführen
3. Prüfe dein Google Sheet → Neue Zeile sollte da sein!


SCHRITT 4: WEB APP DEPLOYEN
----------------------------
1. Oben rechts: "Bereitstellen" → "Neue Bereitstellung"
2. Typ: "Web-App"
3. Beschreibung: "Lead Capture v1"
4. Ausführen als: "Ich"
5. Zugriff: "Jeder" (WICHTIG!)
6. Bereitstellen
7. KOPIERE die Web-App URL (endet auf /exec)


SCHRITT 5: URL IN LANDING PAGE EINFÜGEN
----------------------------------------
Siehe separate Datei: landing_page_updated.html


WICHTIG: Bei Code-Änderungen
-----------------------------
1. Code ändern
2. Speichern
3. NEUE Bereitstellung erstellen (nicht alte updaten!)
4. NEUE URL kopieren
5. In Landing Page aktualisieren

*/
