const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const email = document.querySelector("#email");
const msg = document.querySelector("#message");
const consent = document.querySelector("#consent");
const radioBtn = document.querySelectorAll("input[name='query']");

document.querySelector('form').addEventListener("submit", (e) => {
  e.preventDefault();

  if (firstName.value === "") {
    document.querySelector(".first-name-error").style.display = "block";
    firstName.style.border = "1px ridge #d73c3c";
  }

  if (lastName.value === "") {
    document.querySelector(".last-name-error").style.display = "block";
    lastName.style.border = "1px ridge #d73c3c";
  }

  if (email.value === "") {
    document.querySelector(".email-empty").style.display = "block";
    email.style.border = "1px ridge #d73c3c";
  }

  if (!consent.checked) {
    document.querySelector(".consent-error").style.display = "block";
  }

  if (msg.value === "") {
    document.querySelector(".msg-error").style.display = "block";
    msg.style.border = "1px ridge #d73c3c";
  }

  const isRadioSelected = [...radioBtn].some((radio) => radio.checked);

  if (!isRadioSelected) {
    document.querySelector(".radio-error").style.display = "block";
  }

  if (
    firstName.value !== "" &&
    lastName.value !== "" &&
    email.value !== "" && !email.validity.valid &&
    consent.checked &&
    msg.value !== "" &&
    isRadioSelected
  ) {
document.querySelector('form').reset();
    document.querySelector(".success-msg").classList.add("show-success");

    setTimeout(() => {
      document.querySelector(".success-msg").classList.remove("show-success");
    }, 3000);
  }
});
