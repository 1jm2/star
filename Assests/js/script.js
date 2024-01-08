
let selectedDivs = [];

function toggleSelection(div) {
    if (selectedDivs.includes(div)) {
        selectedDivs = selectedDivs.filter(selected => selected !== div);
        div.style.border = '2px solid gray';
        div.style.color = 'black';
    } else {
        selectedDivs.push(div);
        div.style.border = '2px solid blue';
        div.style.color = 'blue';

    }
}

function printSelectedDivs() {
    if (selectedDivs.length === 0) {
        alert("Select atleast 1 Question.");
        return;
    }
    const printWindow = window.open('', '_self');
    printWindow.document.open();
    printWindow.document.write('<html style="border: 1px solid black; user-select: none; list-style:none; padding:12px; ">');
    printWindow.document.write('<head>');
printWindow.document.write('<title></title>');
  
    printWindow.document.write('<style>');
    printWindow.document.write('.container { display: flex; justify-content: space-between; align-items: center; padding: 20px; }');
    printWindow.document.write('.top-left { flex: 1; }');
    printWindow.document.write('.top-right { flex: 1; text-align: right; }');
    printWindow.document.write('.school-name-input { flex: 1; text-align: center; width: 400px; }');
    printWindow.document.write('html { font-size: 20px; }');
    printWindow.document.write('</style>');
    printWindow.document.write('</head>');
    printWindow.document.write('<body style="font-size: 12px;">');
    printWindow.document.write('<div class="container" style="border: 0.2px solid black; line-height: 1px; height:55px;">');
    printWindow.document.write('<div class="top-left">');
    printWindow.document.write('<p>Marks: <input type="text" maxlength="3" style="width: 23px; border: none;" placeholder="30"></p>');
    printWindow.document.write('<p>Standard: 12th</p>');
    printWindow.document.write('</div>');
    printWindow.document.write('<div>')
    printWindow.document.write('<img src="https://imgall.whatfontis.com/index.php?p=refresh&id=288310&text=Cadmus%20Science%20Schools"style="width:300px; height: 44px; margin-top: 10px;"><br><h4 style="text-align: center; margin-top: 5px;"><input type="text" placeholder="Unit Test" style="border:none; font-size: 17px; font-weight:600; text-align:center; font-family: Segoe UI"></h4>');
    printWindow.document.write('</div>')
    printWindow.document.write('<div class="top-right">');
    printWindow.document.write('<p>Subject: <input type="text" style="border:none; display:inline-block; width: 65px;"></p>');
    printWindow.document.write('<p>Time: <span id=""><input type="text" style="width: 43px; border: none;" maxlength="9" placeholder="1 hour"> </span></p>');
    printWindow.document.write('</div>');
    printWindow.document.write('</div>');
    printWindow.document.write('</body>');
    printWindow.document.write('</html>');

    printWindow.document.write('</body></html>');

    // Add viewport meta tag to new window
    printWindow.document.write('<meta name="viewport" content="width=device-width, initial-scale=0.6">');
    printWindow.document.write('<link rel="stylesheet" type="text/css" href="css/ch.css">'); 
    // Add the preconnect links and font stylesheet link to the new window
    printWindow.document.write('<link rel="preconnect" href="https://fonts.googleapis.com">');
    printWindow.document.write('<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>');
    printWindow.document.write('<link href="https://fonts.googleapis.com/css2?family=Noto+Serif+Gujarati&family=Rasa&display=swap" rel="stylesheet">'); 
    // Add a custom CSS style to change the fon
    printWindow.document.write('<style>');
    printWindow.document.write('.custom-list {list-style: none;display:flex;justify-content: space-between; width:100%;margin-top:1px;justify-content:space-evenly;position: relative; left:-27px;/* Hide the default list style */}.custom-list li {display: inline-block;counter-increment: custom-counter;  margin-right: 10px; /* Adjust spacing between items */}.answer{margin-bottom:-2px;margin-top:-2px;text-transform: capitalize;}.custom-list li::before {content: counter(custom-counter, upper-alpha) ". "; /* Use uppercase alphabetical characters with a period */}.answer{margin-top:-24px;position:relative;left:-10px;shaddow:10px; font-family;guj, serief; width: 100px; font-weight: 600;list-style-type: disc;} @font-face {font-family: guj;src: url(/Assests/fonts/guj.woff);}');
    printWindow.document.write('</style>');
    printWindow.document.write('<style>');
    printWindow.document.write('div {');
    printWindow.document.write('    font-family: guj; font-size: 16px; /* Change the font family here */');
    printWindow.document.write('}');

    printWindow.document.write('div li {');
    printWindow.document.write('list-style-type: upper-alpha; display:inline-block;line-height:15px;flex:1;');
    printWindow.document.write('}');
    printWindow.document.write('</style>');
    // Adding a header of q-paper
    printWindow.document.write('<select style="appearance: none; border:none;font-size:16px; font-weight: 500; margin-top: 3px;margin-bottom:-10px; margin-left: 1px; font-family:guj; list-style-type:disc;"><option >&starf;&nbsp;&nbsp;<p>નીચેના પ્રશ્નોના જવાબ આપેલ વિકલ્પોમાંથી શોધીને (&#9633; માં ) લખો. </p>: </option><option >&starf;&nbsp;&nbsp;<p>નીચેના વિકલ્પોના જવાબ  સાચા બને તેમ લખો . </p>: </option><option >&starf;&nbsp;&nbsp;<p>નીચેની વ્યાખ્યા આપો.  </p>: </option><option >&starf;&nbsp;&nbsp;<p> નીચેના વિધાનો ખરા(&#9745;)કે ખોટા(&#9746;) છે તે જણાવો.   </p>: </option><option >&starf;&nbsp;&nbsp;<p>નીચેના પ્રશ્નોના મુદાસર ઉતર લખો. </p>: </option><option >&starf;&nbsp;&nbsp;<p>નીચેના પ્રશ્નોના એક-એક વાક્યોમાં ઉતર આપો.  </p>: </option><option >&starf;&nbsp;&nbsp;<p>નીચેની ખાલીજગ્યા પૂરો . </p>: </option><option >&starf;&nbsp;&nbsp;<p> નીચેનાના માગ્યા મુજબ જવાબ આપો . </p>: </option></select><br><br>');

    printWindow.document.write('</head><body>');

    selectedDivs.forEach((div, index) => {
        printWindow.document.write('<div style="margin-left: 8px; font-family:guj; font-size:17px; ">' + (index + 1) + '.     ' + div.innerHTML + '</div>');

    });
    // Add the external script tag to the new window
    printWindow.document.write('<script src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js?config=default&ver=1.3.11"></script>');
  printWindow.document.write('<script src="/js/updatetitle.js"></script>');
printWindow.document.write('<script src="/js/pagesizea4.js"></script>');
  
  

    // Add a print button for the new window
    printWindow.document.write('<button class="btn btn-primary" onclick="window.print()" style="font-size: 20px; text-align: center; font-weight: 600; background: white; border:none; font-family:guj; margin-left: 280px;">&starf;&nbsp;&nbsp;All The Best&nbsp;&nbsp;&starf;</button>');

    printWindow.document.write('</body></html>');
    printWindow.document.close();

};