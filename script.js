const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const email = document.querySelector("#email");
const msg = document.querySelector("#message");
const consent = document.querySelector("#consent");
const radioBtns = document.querySelectorAll("input[name='query']");
const pattern = /^[\dA-Za-z]+@[A-Za-z]+\.[A-Za-z]{2,}/

document.querySelector('form').addEventListener("submit", (e) => {
  e.preventDefault();

  if (firstName.value === "") {
    document.querySelector('#first-name-error').textContent = 'This field is required'
  }

  if (lastName.value === "") {
    document.querySelector("#last-name-error").textContent = 'This field is required'
  }

  if (email.value === "") {
    document.querySelector("#email-error").textContent = 'This field is required';
  }

  if (!consent.checked) {
    document.querySelector("#consent-error").textContent = 'To submit this form,please consent to being contacted'
  }

  if (msg.value === "") {
    document.querySelector("#msg-error").textContent = 'This field is required'
  }

  const isRadioSelected = [...radioBtns].some((radio) => radio.checked);

  if (!isRadioSelected) {
    document.querySelector("#radio-error").textContent = 'Please select a query type'
  }

  if (
    firstName.value !== "" &&
    lastName.value !== "" &&
    email.value !== "" && email.validity.valid &&
    consent.checked &&
    msg.value !== "" &&
    isRadioSelected
  ) {
    console.log("form submitted");
    
document.querySelector('form').reset();
    document.querySelector(".success-msg").classList.add("show-success");

    setTimeout(() => {
      document.querySelector(".success-msg").classList.remove("show-success");
    }, 3000);
  }
});

firstName.addEventListener('input',(e)=>{
  console.log(e.target.value);
  
  if (e.target.value.length >  0) {
    
    document.querySelector('#first-name-error').textContent = ''
  }
})

lastName.addEventListener('input',(e)=>{
if (e.target.value.length >  0) {
    
    document.querySelector('#last-name-error').textContent = ''
  }
})

email.addEventListener('input',(e)=>{

  const str = e.target.value;
  if (!pattern.test(str)) {
    document.querySelector('#email-error').textContent = 'Please enter a valid email address'
  }
  else{
    document.querySelector('#email-error').textContent = '';
  }
})

radioBtns.forEach((radioBtn)=>{
  radioBtn.addEventListener('click',(e)=>{
    console.log(e);
    document.querySelector('#radio-error').textContent = '';
    
  })
})

msg.addEventListener('input',(e)=>{
if (e.target.value.length >  0) {
    
    document.querySelector('#msg-error').textContent = ''
  }
})

consent.addEventListener('change',(e)=>{
  if (e.target.checked) {
    document.querySelector('#consent-error').textContent = '';
  }
 
})


