const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const numbers = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]
   
let password1=document.getElementById("password1")

let password2=document.getElementById("password2")

function start(event){
    event.preventDefault()
    let length = event.target.chars.valueAsNumber
    let useNumbers = event.target.numbers.checked;
    let useLetters = event.target.letters.checked;
    let useSymbols = event.target.symbols.checked;
    let characters = [];
    if(useNumbers){
       characters = [...characters, ...numbers]
    }
    if(useLetters){
        characters = [...characters,...letters]
    }
    if(useSymbols){
        characters = [...characters, ...symbols]
    }
    
    let p1 = generatePassword(length, characters)    
    let p2 = generatePassword(length, characters)    
    password1.textContent = p1
    password2.textContent = p2
}

function generatePassword(length, characters){
    let password = ""
    for(let i = 0; i < length; i++) {
        password+= characters[Math.floor(Math.random()*characters.length)];
    }
    return password
}

function copy(element){
    //   navigator.clipboard.writeText(element.innerText);
    let text = element.innerText;
    let textArea = document.createElement("textarea")
    textArea.width="1px"
    textArea.height="1px"
    textArea.background ="transparent"
    textArea.value = text;
    document.body.append(textArea)
    textArea.select()
    document.execCommand("copy")
    document.body.removeChild(textArea)
    let btn = document.getElementById('btn');
    btn.className += " spinny"
    btn.addEventListener('animationend',function(){
        console.log('animation finished, removing class')
        btn.className = "generate"
    })
}
