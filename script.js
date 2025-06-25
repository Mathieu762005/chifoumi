let choixUser = ""
let choixRobot = ["coup de pied", "sagesse", "atomisation"]

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
        setTimeout(() => {
            document.getElementById("ecran").innerHTML = `<video muted autoplay loop src="video/combat.mp4" width="1400"></video>`
        }, 1000);
    } else {
        document.getElementById("ecran").innerHTML = `<video autoplay id="attaqueblanc" src="video/attaqueblanc .mp4" width="1400"></video>`
        setTimeout(() => {
            document.getElementById("ecran").innerHTML = `<video muted autoplay loop src="video/combat.mp4" width="1400"></video>`
        }, 1000);
    }
}