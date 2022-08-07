const liste_planete = document.querySelectorAll('#planete > li')
const titre_planete = document.querySelector('.titre-paragraphe');
const paragraphe = document.querySelector('.paragraphe');
const distance = document.querySelector('#distance');
const temps = document.querySelector('#temps');
const image = document.querySelector('.image-planete');

liste_planete[0].classList.add('toggle')
liste_planete.forEach((item) => {
    item.addEventListener('click', function(e) {
        switch(e.target.id) {
            case "moon" :
                image.src = "/assets/destination/image-moon.png"
                titre_planete.innerHTML = "MOON"
                paragraphe.innerHTML = "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites."
                distance.innerHTML = "384,700 KM"
                temps.innerHTML = "3 DAYS"
                liste_planete[0].classList.add('toggle')
                liste_planete[1].classList.remove('toggle')
                liste_planete[2].classList.remove('toggle')
                liste_planete[3].classList.remove('toggle')
                break;
            case "mars" :
                image.src = "/assets/destination/image-mars.png"
                titre_planete.innerHTML = "Mars"
                paragraphe.innerHTML = "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!"
                distance.innerHTML = "255 MIL KM"
                temps.innerHTML = "9 MONTHS"
                liste_planete[0].classList.remove('toggle')
                liste_planete[1].classList.add('toggle')
                liste_planete[2].classList.remove('toggle')
                liste_planete[3].classList.remove('toggle')
                break;
            case "europa" :
                image.src = "/assets/destination/image-europa.png"
                titre_planete.innerHTML = "EUROPA"
                paragraphe.innerHTML = "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin."
                distance.innerHTML = "628 MIL KM"
                temps.innerHTML = "3 YEARS"
                liste_planete[0].classList.remove('toggle')
                liste_planete[1].classList.remove('toggle')
                liste_planete[2].classList.add('toggle')
                liste_planete[3].classList.remove('toggle')
                break;
            case "titan" :
                image.src = "/assets/destination/image-titan.png"
                titre_planete.innerHTML = "TITAN"
                paragraphe.innerHTML = "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn"
                distance.innerHTML = "1.6 BIL KM"
                temps.innerHTML = "7 YEARS"
                liste_planete[0].classList.remove('toggle')
                liste_planete[1].classList.remove('toggle')
                liste_planete[2].classList.remove('toggle')
                liste_planete[3].classList.add('toggle')
                break;
        }
    })
})