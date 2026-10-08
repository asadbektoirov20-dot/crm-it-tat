const addNew = document.querySelector('.addNew')
const form = document.querySelector('form')
const tana = document.querySelector('.hide')
const exit = document.querySelector('.exit')
const add = document.querySelector('#add')
const inputNumber = document.querySelector('#number')
const inputName = document.querySelector('#name')
const inputYonalish = document.querySelector('#yonalish')
const inputData = document.querySelector('#data')
const odamlar = document.querySelector('.odamlar')




form.style.display = 'none'


addNew.addEventListener('click', () => {
    form.style.display = 'flex'
    tana.style.filter = 'blur(8px)'
})

exit.addEventListener('click', (e) => {
    form.style.display = 'none'
    e.preventDefault()
    tana.style.filter = 'none'
})


add.addEventListener('click', (e) => {
    e.preventDefault()
    form.style.display = 'none'
    tana.style.filter = 'none'

    const odam3 = document.createElement('div')

    odam3.classList.add('odam')
    odam3.innerHTML = `
   <div>
     <button class="nuqtacha">...</button>

                     <img src="https://upload.wikimedia.org/wikipedia/commons/8/8b/Valeriy_Konovalyuk_3x4.jpg" alt=""
                        style="width: 70px; height: 70px; border-radius: 50%; background-position: center; background-repeat: no-repeat; background-size: cover;">
                    <h3 class="name-odam">${inputName.value}</h3>
                    <p class="ppp">${inputYonalish.value}</p>

                    <button class="call"><img src="https://cdn-icons-png.flaticon.com/128/7572/7572096.png"
                            alt=""></button>
                    <button class="email"><img src="https://cdn-icons-png.flaticon.com/128/15889/15889542.png"
                            alt=""></button>
   </div>
    `

    odamlar.appendChild(odam3)
})

