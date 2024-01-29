const faqs = document.querySelectorAll('li');

faqs.forEach((question) => {
    question.addEventListener('click', () => {
        question.classList.toggle('active');
        const img = question.querySelector('img');
        if(question.classList.contains('active')){
            img.src = "./assets/images/icon-minus.svg";
        }else{
            img.src = "./assets/images/icon-plus.svg";
        }
    });
})
