document.addEventListener('DOMContentLoaded', function () {
    let input = document.querySelector('#inputbox');
    let buttons = document.querySelectorAll('button');
    let string = "";
    buttons.forEach(button => {
        button.addEventListener('click', (e) =>{
            if(e.target.innerHTML == 'AC' || e.target.style.color === 'green'){
                string = "";
                input.value = string;

            }
            else if(e.target.innerHTML == 'C'){
                string = string.slice(0, -1);
                input.value = string;

            }
            else if(e.target.innerHTML === '='){
                string = eval(string);
                input.value = string;
                string= "";
            }
            else{string = string + e.target.innerHTML;
                input.value = string;
            }
        });
    });
});
