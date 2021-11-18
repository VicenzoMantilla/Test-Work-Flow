// SELECTORS
const fullname = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const date = document.getElementById('date');
const status = document.getElementById('status');
const url = "mongodb+srv://Sabrina:basd1234@basd-rr.gdgvl.mongodb.net/BaSD-RR?retryWrites=true&w=majority"
const data = document.querySelectorAll('input')

// FUNCTIONS
function showSuccess(i){
    data[i].classList.add('success');
}
function showError(i){
    data[i].classList.add('error');
}
function remove(i){
    data[i].classList.remove('error');
    data[i].classList.remove('success');
}
function nameVerify(){
    let nameControl = fullname.value;
    let symbolsName = /([@"'.?*+^$#])/;
    let numbersName = /[0-9]/;
    if (
        nameControl !== "" &&
        nameControl.length > 0 &&
        nameControl.length >= 8 &&
        nameControl.indexOf(' ') >= 1 &&
        !nameControl.match(symbolsName) &&
        !nameControl.match(numbersName)
        ){
        return true;
    }else{
        return false;
    }
}
function emailVerify(){
    let emailControl = email.value;
    let dotCom = /.com/;
    let tag = /@/;
    let emailSymbols = /(?<=@)[a-z]/;
    if(
        emailControl !== '' &&
        emailControl.length >= 6 &&
        emailControl.match(dotCom) &&
        emailControl.match(tag) &&
        emailControl.match(emailSymbols)
    ){
        return true;
    }else{
        return false;
    }
}
function phoneVerify(){
    let phoneControl = phone.value;
    let symbols = /(-)/;
    if(
        phoneControl !== '' &&
        phoneControl !== null &&
        !isNaN(phoneControl) &&
        phoneControl.length >= 7 &&
        phoneControl.indexOf(' ') == -1 &&
        !phoneControl.match(symbols)
    ){
        return true;
    }else{
        return false;
    }
}
function createApplicant (){
    let inputsData = {
        fullname : data[0].value,
        email : data[1].value,
        date : data[2].value,
        phone : data[3].value,
        status : data[4].value
    }
    fetch(url, {
        method: "POST",
        body: JSON.stringify(inputsData),
        headers: {
          "Content-Type": "application/json",
        },
      })
}
// EVENTS 
fullname.addEventListener('blur',()=>{
    if (nameVerify()){
        showSuccess(0);
    }else{
        showError(0);
    }
})
fullname.addEventListener('focus',()=>{
    remove(0); 
})
email.addEventListener('blur',()=>{
    if(emailVerify()){
        showSuccess(1);
    }else{
        showError(1);
    }
})
email.addEventListener('focus',()=>{
    remove(1);
})
phone.addEventListener('blur',()=>{
    if(phoneVerify()){
        showSuccess(3);
    }else{
        showError(3);
    }
})
phone.addEventListener('focus',()=>{
    remove(3);
})
// METHODS CALLS