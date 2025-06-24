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

    setTimeout(() => {
        document.getElementById("ecran").textContent = "attention !"
    }, "0000")
    setTimeout(() => {
        document.getElementById("ecran").textContent = "attention !!"
    }, "500")
    setTimeout(() => {
        document.getElementById("ecran").textContent = "attention !!!"
    }, "1000")
    setTimeout(() => {
        document.getElementById("ecran").textContent = "attention !"
    }, "1500")
    setTimeout(() => {
        document.getElementById("ecran").textContent = "attention !!"
    }, "2000")
    setTimeout(() => {
        document.getElementById("ecran").textContent = "attention !!!"
    }, "2500")
    setTimeout(() => {
        if (resultat == "Gagné") {
            document.getElementById("ecran").innerHTML = `<video autoplay id="attaquerouge" src="video/attaquerouge.mp4" width="1000"></video>`
        } else {
            document.getElementById("ecran").innerHTML = `<video autoplay id="attaqueblanc" src="video/attaqueblanc.mp4" width="1000"></video>`
        }
    }, "3000")
}
