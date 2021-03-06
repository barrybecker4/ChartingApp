/**
 * Serves HTML of the application for HTTP GET requests.
 *
 * @param {Object} e event parameter that can contain information
 *     about any URL parameters provided.
 */
function doGet(e) {
  var template = HtmlService.createTemplateFromFile('Index');

  // Build and return HTML in IFRAME sandbox mode.
  return template.evaluate()
      .setTitle('Dashboard demo')
      .setSandboxMode(HtmlService.SandboxMode.IFRAME);
}


/**
 * Return all data from first spreadsheet as an array. Can be used
 * via google.script.run to get data without requiring publication
 * of spreadsheet.
 * From gist.github.com/mogsdad/24518dff348ad14d3929
 *
 * Returns null if spreadsheet does not contain more than one row.
 */
function getSpreadsheetData() {
  var sheetId = '1TVzDS3ab-VZNNCNxkhO5yBmK7CC5AhLWgL48tRfWJmk';  // spreadsheet ID. 
  var data = SpreadsheetApp.openById(sheetId).getSheets()[0].getDataRange().getValues();
  return (data.length > 1) ? data : null;
}