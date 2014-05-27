// Define spreadsheet URL.
var mySpreadsheet = 'https://docs.google.com/spreadsheet/pub?key=0AhYg5rCBZ2z9dGFuZ1hVRUozWFFlOXlHUUNudUt2amc&single=true&gid=1&output=html';

// Load an entire sheet.
$('#statistics').sheetrock({
  url: mySpreadsheet,
  sql: "select B,C,D,E, F where D = 'Wedding' order by B desc",
  chunkSize: 20  
});