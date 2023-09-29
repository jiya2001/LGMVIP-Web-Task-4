let screen = document.getElementById('screen');
let buttons = document.querySelectorAll('button');
let screenValue = '';
for (item of buttons){
    item.addEventListener('click', (e) =>{
         buttonText = e.target.innerText;
        console.log('Button text is', buttonText);
        if (buttonText == 'X'){
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;

        }
        else if (buttonText == 'C'){
            screenValue = "";
            screen.value = screenValue;

        }
        else if (buttonText == '='){
            screen.Value = eval(screenValue);
        }
        else if (buttonText == 'CE'){
            screen.Value =screen.value.substr(0,screen.value.length - 1);

        }
        else if(buttonText == 'sin'){
            screen.Value = Math.sin(screen.Value);
        }
        else if(buttonText == 'cos'){
            screen.Value = Math.cos(screen.Value);
        }
        else if(buttonText == 'tan'){
            screen.Value = Math.tan(screen.Value);
        }
        else if(buttonText == 'e'){
            screen.Value = 2.71828182846;
        }
        else if(buttonText == 'log'){
            screen.Value = Math.log(screen.Value);
        }
        else if(buttonText == 'π'){
            screen.Value = 3.141592265359;
        }
        else if(buttonText == '√'){
            screen.Value = Math.sqrt(screen.Value,2);
        }
        else if(buttonText == '^'){
            screen.Value = Math.pow(screen.Value,2);
        }
        else if(buttonText == 'x!'){
            var k,num,j;
            j=1
            num=screen.value;
            for(k=1;k<=num;k++){
                j=j*k;
            }
            k=k-1;
                screen.value = j;
            }
             else{
                screenValue += buttonText;
                screen.Value =screenValue
             }
    })
}