function toggle() {
    var toggle = document.getElementById('toggle');
    var main = document.getElementById('main');
    var aftermain = document.getElementById('aftermain');
    var toggleafter = document.getElementById('toggleafter');

    main.style.display  = 'none';
    toggle.style.display = 'none';
    aftermain.style.position = 'relative';
    aftermain.style.marginTop = '-120px';
    toggleafter.style.display = 'block';
}

function toggleafteri() {
    var toggle = document.getElementById('toggle');
    var main = document.getElementById('main');
    var aftermain = document.getElementById('aftermain');
    var toggleafteri = document.getElementById('toggleafteri');

    main.style.display  = 'block';
    toggle.style.display = 'block';
    
    toggleafteri.style.display = 'none';


}