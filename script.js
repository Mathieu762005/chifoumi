let choixUser = ""
let choixRobot = ["Pierre", "Ciseaux", "Feuille"]

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
    else if ((choixUser === 'Pierre' && robot === 'Ciseaux') || (choixUser === 'Ciseaux' && robot === 'Feuille') || (choixUser === 'Feuille') && (robot === 'Pierre')) {
        resultat = "Gagné"
    }
    else {
        resultat = "Perdu"
    }

    console.log(resultat)
}