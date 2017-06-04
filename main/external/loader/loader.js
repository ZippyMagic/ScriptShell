
/* CodeShell Loader
Copyright CodeShell LTE 2017
Version {{version}}
*/

(function () {
  'use-strict';
  
  
  var MIN_HEIGHT = "300";
  

    var IN_CODE = document.getElementById("codeshell-in-code").innerHTML;
    var OUT_CODE = document.getElementById("codeshell-out-code").innerHTML;
    var TABLE_SIZE = document.getElementById("codeshell-table-size").innerHTML;
    // Begin loading scripts and CSS
    var ELEMENT = document.createElement('script');
    ELEMENT.src = 'https://raw.githubusercontent.com/ZippyMagic/ScriptShell/master/main/main.js';
    
    var ELEMENT = document.createElement('link');
    ELEMENT.rel = 'stylesheet';
    ELEMENT.type = 'text/css'
    ELEMENT.href = 'https://raw.githubusercontent.com/ZippyMagic/ScriptShell/master/css/table.css';
  
    var ELEMENT = document.createElement('link');
    ELEMENT.rel = 'stylesheet';
    ELEMENT.type = 'text/css'
    ELEMENT.href = 'https://raw.githubusercontent.com/ZippyMagic/ScriptShell/master/css/font.css';
  
    // Begin Creation
    
    var ELEMENT = document.createElement('div');
    ELEMENT.id = 'wrapper';
    
    var ELEMENT = document.createElement('div');
    ELEMENT.class = 'topbar';
    document.getElementById('wrapper').appendChild(ELEMENT);
    
    var ELEMENT = document.createElement('a');
    ELEMENT.id = 'script';
    ELEMENT.href = 'https://zippymagic.github.io/ScriptShell/info.html';
    document.getElementById('topbar').appendChild(ELEMENT);
    
    var ELEMENT = document.createElement('a');
    ELEMENT.id = 'res';
    ELEMENT.href = 'https://zippymagic.github.io/ScriptShell/info.html';
    document.getElementById('topbar').appendChild(ELEMENT);
    
    var ELEMENT = document.createElement('div');
    ELEMENT.class = 'table';
    document.getElementById('wrapper').appendChild(ELEMENT);
    
    var ELEMENT = document.createElement('textarea');
    ELEMENT.rows = TABLE_SIZE;
    ELEMENT.cols = '50';
    ELEMENT.id = 'cInput';
    ELEMENT.id = 'left';
    ELEMENT.class = 'codeshell';
    if (IN_CODE !== "") {
      ELEMENT.value = IN_CODE;
    }
    document.getElementById('table').appendChild(ELEMENT);
    
    var ELEMENT = document.createElement('textarea');
    ELEMENT.rows = TABLE_SIZE;
    ELEMENT.cols = '50';
    ELEMENT.id = 'cOutput';
    ELEMENT.class = 'codeshell';
    if (OUT_CODE !== "") {
      ELEMENT.value = OUT_CODE;
    }
    document.getElementById('table').appendChild(ELEMENT);
    
    var ELEMENT = document.createElement('button');
    ELEMENT.class = 'btn';
    ELEMENT.onclick = runCode(document.getElementById('cInput').value);
    ELEMENT.id = 'f';
    
    document.getElementById('wrapper').appendChild(ELEMENT);
    
    var ELEMENT = document.createElement('p');
    var TEXT = document.createTextNode("Powered by: ");
    ELEMENT.appendChild(TEXT);
    ELEMENT.class = 'f';
    ELEMENT.id = 'cred';
    ELEMENT.style = 'float: center; position: center; text-align: center;';
    ELEMENT.class = 'codeshell';
    
    var ELEMENT = document.createElement('a');
    var TEXT = document.createTextNode("CodeShell™");
    ELEMENT.appendChild(TEXT);
    ELEMENT.href = 'https://github.com/ZippyMagic/CodeShell';
    ELEMENT.class = 'codeshell';
    document.getElementById('cred').appendChild(ELEMENT);
})();
