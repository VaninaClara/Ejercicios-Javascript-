let focusInput = document.querySelector('focus');

focusInput.addEventListener('focus', function(event){
   console.log(event.target.value);
}
);
