var form = document.querySelector('form');
var inps = document.querySelectorAll('input[type="text"]');
var h4 = document.querySelector('h4');
var btn = document.querySelector('button');

form.addEventListener('submit' , function(eve) {
    eve.preventDefault();
    
    for (var i = 0; i < inps.length; i++){
        if(inps[i].value.trim() === ''){
            h4.textContent = 'Error, some fields are blank';
            h4.style.color = 'red';
            break;
        }else{
            h4.textContent = ''
        }
    }  



});

