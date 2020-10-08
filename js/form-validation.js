const checkInput = (field, button) => {
  let errorMessage = document.querySelector('.input-warning');
  let ifManyError = 'Введите не больше 200 символов. Сейчас: ';
  let ifLessError = 'Введите не менее 10 символов. Сейчас: ';
  let currentLength = field.value.length;

  const handleEvent = event => {
    if(event == 'error'){
      field.classList.add('warning');
      errorMessage.classList.add('input-warning_active');
      button.disabled = true;
      handleChanges();
    }else{
      field.classList.remove('warning');
      errorMessage.classList.remove('input-warning_active');
      button.disabled = false;
    }
  };

  const handleChanges = () => {
    field.addEventListener('input', () => {
      if(field.value.length > 200){
        errorMessage.textContent = ifManyError + field.value.length;
      } else if(field.value.length < 10){
        errorMessage.textContent = ifLessError + field.value.length;
      } else{
        handleEvent('success');
      }
    });
  };

  if(currentLength >= 10 && currentLength <= 200){
    return true;
  }else if(currentLength > 200){
    handleEvent('error');
    errorMessage.textContent = ifManyError + currentLength;
  }else if(currentLength < 10){
    handleEvent('error');
    errorMessage.textContent = ifLessError + currentLength;
  }
};