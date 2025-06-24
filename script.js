for (let i = 0; i < buttons.lenght; i++) {
    if (joueur === robot) {
        result = "Egalité"
    } else if (joueur == "pierre" && robot == "ciseaux") {
        result = "Gagner"
    } else if (joueur == "ciseaux" && robot == "papier") {
        result = "Gagner"
    } else if (joueur == "papier" && robot == "pierre") {
        result = "Gagner"
    }
    else if (joueur == "ciseaux" && robot == "pierre") {
        result = "perdu"
    } else if (joueur == "papier" && robot == "ciseaux") {
        result = "perdu"
    } else if (joueur == "pierre" && robot == "papier") {
        result = "perdu"
    }
}