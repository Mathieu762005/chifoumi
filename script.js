let choixUser = ""
let choixRobot = ["coup de pied", "sagesse", "atomisation"]
let pointRobot = 0
let pointUser = 0

document.getElementById("ecranRobot").innerText = "Manche gagné : 0"
document.getElementById("ecranUser").innerText = "Manche gagné : 0"

function getChoice(choix) {
    choixUser = choix
    console.log(choixUser)
    jeux()
}

function jeux() {
    choixUser
    robot = choixRobot[Math.floor(Math.random() * choixRobot.length)]

    if (choixUser === robot) {
        resultat = "Egalité"
    }
    else if ((choixUser === 'coup de pied' && robot === 'sagesse') || (choixUser === 'sagesse' && robot === 'atomisation') || (choixUser === 'atomisation') && (robot === 'coup de pied')) {
        resultat = "Gagné"
    }
    else {
        resultat = "Perdu"
    }

    if (resultat == "Gagné") {
        document.getElementById("ecran").innerHTML = `<video autoplay id="attaquerouge" src="video/attaquerouge.mp4" width="1400"></video>`
        pointRobot++;
        setTimeout(() => {
            document.getElementById("ecran").innerText = "manche gagner :" + " " + pointRobot
            document.getElementById("ecranRobot").innerText = "Manche gagné : " + pointRobot
        }, 13000);
        setTimeout(() => {
            document.getElementById("ecran").innerHTML = `<video muted autoplay loop src="video/combat.mp4" width="1400"></video>`
        }, 16000);
    } else if (resultat == "Perdu") {
        document.getElementById("ecran").innerHTML = `<video autoplay id="attaqueblanc" src="video/attaqueblanc .mp4" width="1400"></video>`
        pointUser++
        setTimeout(() => {
            document.getElementById("ecran").innerText = "manche gagner :" + " " + pointUser
            document.getElementById("ecranUser").innerText = "Manche gagné : " + pointUser
        }, 6500);
        setTimeout(() => {
            document.getElementById("ecran").innerHTML = `<video muted autoplay loop src="video/combat.mp4" width="1400"></video>`
        }, 9500);
    } else {
        document.getElementById("ecran").innerHTML = `<video autoplay id="attaqueblanc" src="video/egalité.mp4" width="1400"></video>`
        setTimeout(() => {
            document.getElementById("ecran").innerText = "manche : " + "égalité"
        }, 9000);
        setTimeout(() => {
            document.getElementById("ecran").innerHTML = `<video muted autoplay loop src="video/combat.mp4" width="1400"></video>`
        }, 11000);
    }
}