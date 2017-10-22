/**
 * Adds a custom menu to the active spreadsheet
 * Adds menu items to up load file to gDrive and
 * to load a water meter data file into a master spreadsheet.
 * The onOpen() function, when defined, is automatically invoked whenever the
 * spreadsheet is opened.
 * For more information on using the Spreadsheet API, see
 * https://developers.google.com/apps-script/service_spreadsheet
 */

function onOpen() {
  var ui = SpreadsheetApp.getUi();
  // Or DocumentApp or FormApp.
  ui.createMenu('GDK Menu')
    .addItem('UpLoad Meter Data to Drive', 'openDialog')
    .addItem('Load Meter Data to Spreadsheet', 'doclistUI')
    .addItem('Load Meter Data to Spreadsheet - static', 'importGDKCSV')
    .addItem('Update Fusion Table', 'sync')
    .addToUi();
}

/*
function onOpen() {
    SpreadsheetApp.getUi().createMenu('Picker')
        .addItem('Show Picker', 'showPicker')
        .addToUi()
}
*/

/**
 * Displays an HTML-service dialog in Google Sheets that contains client-side
 * JavaScript code for the Google Picker API.
 */
function showPicker() {
    var html = HtmlService.createHtmlOutputFromFile('filepicker.html')
        .setWidth(600)
        .setHeight(425)
        .setSandboxMode(HtmlService.SandboxMode.IFRAME);
    SpreadsheetApp.getUi().showModalDialog(html, 'Select Folder');
}

function getOAuthToken() {
    DriveApp.getRootFolder();
    return ScriptApp.getOAuthToken();
}