const numbers = document.querySelectorAll('.numbers')
const submit = document.querySelector('.submit')
const container = document.querySelector('.container')
const containerBtns = document.querySelectorAll('.container')
const thanks = document.querySelector('.thanks')
const selected = document.querySelector('.selected')
const btns = document.querySelectorAll('.btn')

container.addEventListener('click', (e) => {
    const id = e.target.dataset.id

    btns.forEach((btn) => {
        btn.classList.remove('active')
    })

    if (id) {
        e.target.classList.add('active')
        selected.textContent = `You selected ${id} out of 5`
    }
})

submit.addEventListener('click', () => {
    container.style.display = 'none'
    thanks.style.display = 'flex'
})
