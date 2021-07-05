window.addEventListener('DOMContentLoaded', () => {
    console.log('Dom is loaded')
})

const burgerBtn = document.querySelector('.toggle-nav')
const burgerIcon = burgerBtn.getElementsByTagName('i')[0]
const navMenu = document.querySelector('.nav')

function showNav() {

    navMenu.classList.toggle('open')
    if (navMenu.classList.contains('open')) {
        burgerIcon.style.color = 'white'
        burgerIcon.classList.remove('fa-bars')
        burgerIcon.classList.add('fa-times')
        burgerBtn.style.position = 'fixed'

    } else {
        burgerIcon.style.color = 'black'
        burgerIcon.classList.remove('fa-times')
        burgerIcon.classList.add('fa-bars')
        burgerBtn.style.position = 'absolute'
    }
}

burgerBtn.addEventListener('click', showNav)

const menuItems = navMenu.querySelectorAll('li')

function closeMenuNav() {
    navMenu.classList.remove('open')
    burgerIcon.style.color = 'black'
    burgerIcon.classList.remove('fa-times')
    burgerIcon.classList.add('fa-bars')
    burgerBtn.style.position = 'absolute'
}

menuItems.forEach(item => {

    item.addEventListener('click', closeMenuNav)
});


//Show certificate on mouse hover 
const certificateShow = document.getElementById('mouseover-certificate')
const certificate = document.querySelector('.certificate')
function showCertificate() {
    certificate.classList.add('active')
}

function hideCertificate() {
    certificate.classList.remove('active')
}

function moveCertificate(e) {
    certificate.style.left = e.clientX * .51 + 'px'
}

certificateShow.addEventListener('mouseenter', showCertificate)
certificateShow.addEventListener('mouseleave', hideCertificate)
certificateShow.addEventListener('mousemove', moveCertificate)


//Homescreen icon movement
const layers = document.querySelectorAll('.layer')
const windowSection = document.querySelector('.hero-section')

function movements(e) {
    layers.forEach(layer => {

        const speed = layer.getAttribute('data-speed')
        const x = (window.innerWidth - e.pageX * speed) / 100
        const y = (window.innerHeight - e.pageY * speed) / 100

        layer.style.transform = `translateX(${x}px) translateY(${y}px)`
    })
}



windowSection.addEventListener('mousemove', movements)

//Project section 
const tabsContainer = document.querySelector('.projects-left')
const projects = document.querySelectorAll('.projects-right')
const tabs = tabsContainer.querySelectorAll('li')


let currentProject = 1

const manualTab = (manual) => {
    projects.forEach(project => {
        project.classList.remove('active')

        tabs.forEach(tab => {
            tab.classList.remove('active')
        })
    })
    projects[manual].classList.add('active')
    tabs[manual].classList.add('active')

}


tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => {
        manualTab(i)
        currentProject = i
    })
})



//Contact form validation
const form = document.getElementsByTagName('form')[0]
const username = document.getElementById('username')
const email = document.getElementById('email')


form.addEventListener('submit', (e) => {
    e.preventDefault()

    formValidation()
})

const formValidation = (e) => {
    const usernameValue = username.value.trim()
    const emailValue = email.value.trim()



    //if username is empty throw an error
    if (usernameValue === '') {
        setErrorFor(username, 'Username cannot be blank!')
    } else {
        setSuccessFor(username)
    }

    //if email is empty
    if (emailValue === '') {
        setErrorFor(email, 'Email cannot be blank!')
        //check to see if email is valid with a regex
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Email is not valid')
    } else {
        setSuccessFor(email)
    }
}

function setErrorFor(input, message) {
    const formField = input.parentElement
    const small = formField.querySelector('small')

    small.innerText = message
    formField.className = 'form-field error'

}
setErrorFor()

function setSuccessFor(input) {
    const formField = input.parentElement;
    formField.className = 'form-field check'
}

//Check to see if email is valid with Regex
function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        .test(email);
}


