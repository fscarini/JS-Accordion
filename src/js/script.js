const accordions = document.querySelectorAll('.accordion')

accordions.forEach(accordion =>{
    accordion.addEventListener('click', () =>{
        const text = accordion.querySelector('.accordion-text')
        text.classList.toggle('active')
    })

})