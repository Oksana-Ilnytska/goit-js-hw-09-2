const formEl = document.querySelector('.feedback-form');
  const formData = {
    email: "",
     message: ""
  };
  const keyItem = "feedback-form-state";

  formEl.addEventListener('input', e => {
    formData.email = formEl.elements.email.value; 
    formData.message = formEl.elements.message.value;
    localStorage.setItem(keyItem,JSON.stringify(formData));
  });

  document.addEventListener('DOMContentLoaded', () => {
    const lsData = localStorage.getItem(keyItem);
  
    
    if (lsData) {
      try {
      const parsedData = JSON.parse(lsData);
      formData.email = parsedData.email || ""; 
      formData.message = parsedData.message || "";

      formEl.elements.email.value = formData.email; 
      formEl.elements.message.value = formData.message;
    } catch (error) {
      console.error(error);
    }
  }
}); 

formEl.addEventListener('submit', e => {
  e.preventDefault();
  if (formData.email === "" || formData.message === "") {
    alert(`«Fill please all fields»`);
    return;
  } else {
   console.log(formData);
   localStorage.removeItem(keyItem); 
   formEl.reset();
   formData.email = "";
   formData.message = "";
  }
})