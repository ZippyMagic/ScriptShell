function runCode(e) {
  eval(e);
  var l = document.getElementById('cOutput').value;
  document.getElementById('cOutput').value = l + "Command Ran! Did it work out the way you intended?";
}
