const form = document.getElementById("form");





//function to validate inputs

const validateInputs = (id) => {
  let inputsVal = document.getElementById(id).value;
  const idVal = document.getElementById(id);

  const icon = idVal.parentElement.querySelector("#icon");

  if (startWithChar(inputsVal.charAt(0)) || containsSpecialChar(inputsVal)) {
    formVal = idVal.parentElement;
    formVal.className = "form-group error";
    icon.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>';
    icon.style.color = "red";
    return true;
  }
  if (inputsVal === "  " || inputsVal.length <= 5) {
    formVal = idVal.parentElement;
    formVal.className = "form-group error";

    icon.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>';
    icon.style.color = "red";
    return false;
  } else {
    formVal = idVal.parentElement;
    formVal.className = "form-group success";

    icon.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    icon.style.color = "green";
  }
};



//this function is used to validate the time input
const validateTime = (id) => {
  let inputsVal = document.getElementById(id).value;
  const idVal = document.getElementById(id);

  const icon = idVal.parentElement.querySelector("#icon");

  if (!inputsVal.match(/^[0-9]*$/)) {
    formVal = idVal.parentElement;
    formVal.className = "form-group error";
    icon.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>';
    icon.style.color = "red";
    return true;
  }
  if (inputsVal === "  " || inputsVal < 1 || inputsVal >= 60) {
    formVal = idVal.parentElement;
    formVal.className = "form-group error";

    icon.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>';
    icon.style.color = "red";
    return false;
  } else {
    formVal = idVal.parentElement;
    formVal.className = "form-group success";

    icon.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    icon.style.color = "green";
  }
};



//check the starting character of the input
const startWithChar = (char) => {
  const startsWith = /[`_+-]/;
  return startsWith.test(char);
};

//check if any special characters in the input
const containsSpecialChar = (str) => {
  const specialChar = /[`!@#$%^&*()\=\[\]{};':"\\|,.<>\/?~]/;
  return specialChar.test(str);
};



//this function is used change the source name
const changeVal = () => {
  const source = document.getElementById("source").value;

  const nameVal = document.querySelectorAll("#nameVal");
  nameVal.forEach((val)=>{
    switch (source) {
      case "AWS":
        val.innerText = source;
  
      case "GCS":
        val.innerText = source;
  
      case "FireBase":
        val.innerText = source;
    
        case "AZURE":
          val.innerText = source;
      
      }
  })
  
};
