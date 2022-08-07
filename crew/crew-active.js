const rond = document.querySelectorAll('.rond');
const grade = document.querySelector('.grade');
const personnage = document.querySelector('.personnage');
const paragraphe = document.querySelector('.paragraphe');
const image = document.querySelector('.image-personnage');


rond[0].classList.add('rond-click')
rond.forEach((item) => {
    item.addEventListener('click', function(e) {
        console.log(e.target.id)
        switch (e.target.id) {
        case "un" :
            grade.innerHTML ="COMMANDER"
            personnage.innerHTML ="DOUGLAS HURLEY"
            paragraphe.innerHTML ="Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
            image.src ='../assets/crew/image-douglas-hurley.png'
            rond[0].classList.add('rond-click');
            rond[1].classList.remove('rond-click');
            rond[2].classList.remove('rond-click');
            rond[3].classList.remove('rond-click');
            break;
        case "deux" :
            grade.innerHTML ="MISSION SPECIALIST"
            personnage.innerHTML ="MARK SHUTTLEWORTH"
            paragraphe.innerHTML ="Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space touris"
            image.src ='../assets/crew/image-mark-shuttleworth.png'
            rond[0].classList.remove('rond-click');
            rond[1].classList.add('rond-click');
            rond[2].classList.remove('rond-click');
            rond[3].classList.remove('rond-click');
            break;
        case "trois" :
            grade.innerHTML ="PILOT"
            personnage.innerHTML ="VICTOR GLOVER"
            paragraphe.innerHTML ="Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. "
            image.src ='../assets/crew/image-victor-glover.png'
            rond[0].classList.remove('rond-click');
            rond[1].classList.remove('rond-click');
            rond[2].classList.add('rond-click');
            rond[3].classList.remove('rond-click');
            break;
        case "quatre" :
            grade.innerHTML ="FLIGHT ENGINEER"
            personnage.innerHTML ="ANOUSHEH ANSARI"
            paragraphe.innerHTML ="Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. "
            image.src ='../assets/crew/image-anousheh-ansari.png'
            rond[0].classList.remove('rond-click');
            rond[1].classList.remove('rond-click');
            rond[2].classList.remove('rond-click');
            rond[3].classList.add('rond-click');
            break;
        }
        
    })
});
