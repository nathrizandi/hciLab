const form = document.getElementById('register-form');
const nameInput = document.getElementById('name');
const ageInput = document.getElementById('age');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const checkboxInput = document.getElementById('check-box');


// register_btn.addEventListener("click",)

form.addEventListener('submit', e =>{
    e.preventDefault();
    validateInputs();

    if(isFormValid() == true){
        form.submit();
    }else{
        e.preventDefault();
    }
});

function isFormValid(){
    const inputContainers = form.querySelectorAll('.input-field');
    let result = true;
    inputContainers.forEach((container)=>{
        if(container.classList.contains('error')){
            result = false;

        }
    });
    return result;
}

const setError = (element) =>{
    const inputControl = element.parentElement;
    // const errorDisplay = inputControl.querySelector('.error');

    // errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('sucess');
 
}

const setSuccess = (element) =>{
    const inputControl = element.parentElement;
    // const errorDisplay = inputControl.querySelector('.error');

    // errorDisplay.innerText = '';
    inputControl.classList.add('sucess');
    inputControl.classList.remove('error');
 
}
const validateInputs = () =>{
    const nameValue = nameInput.value.trim();
    const ageValue = ageInput.value.trim();
    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value.trim();
    

    //validate name
    function firstIsUppercase(str){
        if(str.length === 0){
            return false;
        }
        return str.charAt(0).toUpperCase() === str.charAt(0);
    }

    // console.log(firstIsUppercase(nameValue));

    if(nameValue === ''){
        setError(nameInput);
    }else if(!firstIsUppercase(nameValue)){
        setError(nameInput);
    }else{
        setSuccess(nameInput);
    }
    
    if(ageValue === ''){
        setError(ageInput);
    }else if(ageValue < 7){
        setError(ageInput);
    }else{
        setSuccess(ageInput);
    }

    var at = emailValue.indexOf("@");
    var dot = emailValue.indexOf(".");

    if(emailValue === ''){
        setError(emailInput);
    }else if(at<1||dot<at+2||dot+2 >=emailValue.length){
        setError(emailInput);
    }else if(!emailValue.value.match(gmail)){
        setError(emailInput);
    }else{
        setSuccess(emailInput);
    }

    if(passwordValue === ''){
        setError(passwordInput);
    }else if(passwordValue.length <8){
        setError(passwordInput);
    }else if(passwordValue.length >15){
        setError(passwordInput);
    }else{
        setSuccess(passwordInput);
    }

    if(!checkboxInput.checked){
         alert("Please check (I have agree to the Term of Service & Privacy Policy)'s box to finish the register");
    }

};

