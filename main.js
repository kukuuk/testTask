const description = document.querySelector('.card__description--p')
const btn = document.querySelector('.card__btn')

btn.addEventListener('click', () => {
    description.classList.toggle('card__description--active')
    btn.classList.toggle('card__btn--active')
})