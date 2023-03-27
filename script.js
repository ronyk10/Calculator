//récupération du DOM 
const touches = [...document.querySelectorAll('.bouton')];  //on va sélect dans le documents tous les élem qui ont la classe bouton, on les mets entre [] parce que sinon on obtient une nodeList
const listeKeycode = touches.map(touche => touche.dataset.key);//on veut prendre tous les élements du tableau touches, et on récupère leurs data-key. Pour ça, utiliser map()
const ecran = document.querySelector('.ecran');

document.addEventListener('keydown', (e) => {
    // lorsque tu vas presser une touche de ton clavier, son keycode sera récupéré et affiché. e = évenement

    const valeur = e.keyCode.toString();
    calculer(valeur)
})

document.addEventListener('click', (e) => {

    const valeur = e.target.dataset.key; //là on récupère le datakey de la touche sur laquelle on aura cliqué
    calculer(valeur)

})

const calculer = (valeur) => {
    if (listeKeycode.includes(valeur)) { //si la touche qu'on entre fait partie de la calculatrice
        console.log(listeKeycode)
        switch (valeur) {
            case '8': // si on entre la touche C dont le keycode est 8
                ecran.textContent = ""; //on vide l'écran
                break
            case '13': // quand on va appuyer sur =
                const calcul = eval(ecran.textContent); //éval sert à évaluer qqch, on l'occurence ici, calculer les nombres qui seront à l'écran
                ecran.textContent = calcul //renvoyer le calcul à l'écran
                break;
            default: //les autres touches
                const indexkeyCode = listeKeycode.indexOf(valeur)
                const touche = touches[indexkeyCode]; //l'index du keycode sera égal à celui de la touche
                ecran.textContent += touche.innerHTML;

        }
    }
}

window.addEventListener('error', (e) => { //cas d'erreur, si on entre n'importe quoi
    alert('Une erreur est survenue dans votre calcul : ' + e.message)
})
