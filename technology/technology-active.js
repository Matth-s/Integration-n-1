const menu = document.querySelectorAll('.rond');
const chiffre = document.querySelectorAll('.numero-rond')
const span1 = document.querySelector('#un-span');
const span2 = document.querySelector('#deux-span');
const titre = document.querySelector('.titre-corps-de-texte');
const paragraphe = document.querySelector('.paragraphe-corps-de-texte');
const image = document.querySelector('.vehicule');

menu[0].classList.add('rond-click')
chiffre[0].classList.add('chiffre-click')


menu.forEach((item) => {
    item.addEventListener('click', function(e) {
        switch(e.target.id) {
            case "un" :
                titre.innerHTML = "LAUNCH VEHICULE"
                paragraphe.innerHTML = "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
                image.src ='../assets/technology/image-launch-vehicle-portrait.jpg'
                menu[0].classList.add('rond-click');
                menu[1].classList.remove('rond-click');
                menu[2].classList.remove('rond-click');

                chiffre[0].classList.add('chiffre-click');
                chiffre[1].classList.remove('chiffre-click');
                chiffre[2].classList.remove('chiffre-click');
                break;
            case "deux":
                titre.innerHTML = "SPACEPORT"
                paragraphe.innerHTML = "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch"
                image.src ='../assets/technology/image-spaceport-portrait.jpg'
                menu[0].classList.remove('rond-click');
                menu[1].classList.add('rond-click');
                menu[2].classList.remove('rond-click');

                chiffre[0].classList.remove('chiffre-click');
                chiffre[1].classList.add('chiffre-click');
                chiffre[2].classList.remove('chiffre-click');
                break;
            case "trois":
                titre.innerHTML = "SPACE CAPSULE"
                paragraphe.innerHTML = "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
                image.src ='../assets/technology/image-space-capsule-portrait.jpg'
                menu[0].classList.remove('rond-click');
                menu[1].classList.remove('rond-click');
                menu[2].classList.add('rond-click');

                chiffre[0].classList.remove('chiffre-click');
                chiffre[1].classList.remove('chiffre-click');
                chiffre[2].classList.add('chiffre-click');
                break;
        }
    })
});

chiffre.forEach((item) => {
    item.addEventListener('click', function(e) {
        console.log(e.target.id)
        switch(e.target.id) {
            case "un-span" :
                titre.innerHTML = "LAUNCH VEHICULE"
                paragraphe.innerHTML = "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
                image.src ='../assets/technology/image-launch-vehicle-portrait.jpg'
                menu[0].classList.add('rond-click');
                menu[1].classList.remove('rond-click');
                menu[2].classList.remove('rond-click');

                chiffre[0].classList.add('chiffre-click');
                chiffre[1].classList.remove('chiffre-click');
                chiffre[2].classList.remove('chiffre-click');
                break;
            case "deux-span":
                titre.innerHTML = "SPACEPORT"
                paragraphe.innerHTML = "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch"
                image.src ='../assets/technology/image-spaceport-portrait.jpg'
                
                menu[0].classList.remove('rond-click');
                menu[1].classList.add('rond-click');
                menu[2].classList.remove('rond-click');

                chiffre[0].classList.remove('chiffre-click');
                chiffre[1].classList.add('chiffre-click');
                chiffre[2].classList.remove('chiffre-click');
                break;
            case "trois-span":
                titre.innerHTML = "SPACE CAPSULE"
                paragraphe.innerHTML = "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
                image.src ='../assets/technology/image-space-capsule-portrait.jpg'
                menu[0].classList.remove('rond-click');
                menu[1].classList.remove('rond-click');
                menu[2].classList.add('rond-click');

                chiffre[0].classList.remove('chiffre-click');
                chiffre[1].classList.remove('chiffre-click');
                chiffre[2].classList.add('chiffre-click');
                break;
        }
    })
});
