const allLinks = document.getElementsByTagName('a')        
const allCards = document.getElementsByClassName('card')  
const logoTitleOld = document.getElementById('logoTitle') 

const header = document.querySelector('header')                  
const logoTitle = document.querySelector('#logoTitle')           
const firstCard = document.querySelector('.card:nth-of-type(1)') 

const imageFirstCard = firstCard.querySelector('img')  
const titleFirstCard = firstCard.querySelector('h2')    
const subtitleFirstCard = firstCard.querySelector('h3') 
const textFirstCard = firstCard.querySelector('p')      

const link1FirstCard = textFirstCard.nextElementSibling  
const link2FirstCard = link1FirstCard.nextElementSibling 

const links = document.querySelectorAll('nav a')

links.forEach(link => console.log(link.textContent))

const linksRealArray = Array.from(links)

console.log(linksRealArray.find(link => link.textContent === 'Home'))

logoTitle.textContent = 'Lambda Dog'
titleFirstCard.textContent = 'I rulez'
subtitleFirstCard.textContent = 'obviously'
textFirstCard.textContent = 'Puggorino tungg puggorino, waggy wags. thicc wow such tempt. Very jealous pupper doing me a frighten puggorino very taste wow, borkdrive. Smol big ol fluffer pupperino fluffer, waggy wags ruff blep.'
link2FirstCard.textContent = 'Dog Ipsum'



logoTitle.className = 'logo heading banana'
imageFirstCard.src = 'https://herepup.com/wp-content/uploads/2015/12/Dog-Advice-1-1.jpg'

link1FirstCard.setAttribute('href', 'https://www.pexels.com/search/dog/')
link2FirstCard.setAttribute('href', 'https://doggoipsum.com/')




header.classList.add('sky')
header.classList.remove('sky')
setInterval(() => header.classList.toggle('sky'), 1000)

header.style.fontSize = '2em'

const blogLink = document.createElement('a')
blogLink.textContent = 'Blog'
blogLink.href = '#'
document.querySelector('nav').appendChild(blogLink)

const secondCard = firstCard.cloneNode(true)
document.querySelector('.card-group')
  .appendChild(secondCard)



header.remove()
document.body.prepend(header)



const data =   {
  "contact": {
    "contact-heading" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  }
};

const contactHeading = document.querySelector('.contact-heading');
const address = document.querySelector('.address');
const phone = document.querySelector('.phone');
const email = document.querySelector('.email');
contactHeading.textContent = data["contact"]["contact-heading"];
address.textContent = data["contact"]["address"];
phone.textContent = data["contact"]["phone"];
email.textContent = data["contact"]["email"];
