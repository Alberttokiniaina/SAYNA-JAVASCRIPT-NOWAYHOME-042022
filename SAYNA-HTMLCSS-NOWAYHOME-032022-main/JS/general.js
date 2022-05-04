//création duhover pour les deux boutons
//créér une variable pour appeler l'élément bouton 1 dans le html
var button1 = document.querySelectorAll('.button1');
for(let i = 0; i < button1.length; i++){
    function mouseOver1 (){
        button1[i].style.color = "var(--white-ad-color)";
        button1[i].style.backgroundColor = "var(--primary-ad-color)";
        button1[i].style.border = "var(--white-ad-color) 2px solid";
        button1[i].fontWeight = "bold";
        button1[i].style.boxShadow = '5px 5px 20px var(--white-ad-color)';
    }
    
    function mouseOut1 (){
        button1[i].style.backgroundColor = "var(--white-ad-color)";
        button1[i].style.color = "var(--primary-ad-color)";
        button1[i].style.boxShadow = "none";
    }    
    button1[i].addEventListener("mouseover", mouseOver1); //ajouter le mouseOver à la fonction pour appliquer le style du hover
    button1[i].addEventListener("mouseout", mouseOut1); //le mouseOut pour retourner au style initial lors du retirement de la souris
}

//Ajoutez un hover pour le bouton 2
var button2 = document.querySelector('.button2');
function mouseOver2 (){
    button2.style.backgroundColor = "var(--white-ad-color)";
    button2.style.color = "var(--primary-ad-color)";
    button2.style.boxShadow = "0px 7px 10px var(--white-ad-color)";
}

function mouseOut2(){
    button2.style.backgroundColor = "";
    button2.style.color = "var(--white-ad-color)";
    button2.style.boxShadow = "none";
}

button2.addEventListener("mouseover", mouseOver2);
button2.addEventListener("mouseout", mouseOut2);

//création du hover pour les icones dans le footer
var footer = document.querySelectorAll('i');
for(let i = 0; i < footer.length; i++){
    function hoverOnFooter(){
        footer[i].style.color = "var(--white-ad-color)";
    }
    
    function hoverOffFooter() {
        footer[i].style.color = "var(--black-ad-color)";
    }

    footer[i].addEventListener("mouseover", hoverOnFooter);
    footer[i].addEventListener("mouseout", hoverOffFooter); 
}


//Le surlignement des rubriques du menu dans le header
var header = document.querySelectorAll('ul li a');
for(let i = 0; i < header.length; i++){
    function hoverOnHeader(){
        header[i].style.textDecoration = "line-through";
    }
    
    function hoverOffHeader(){
        header[i].style.textDecoration ="none";
    }
    header[i].addEventListener("mouseover", hoverOnHeader);
    header[i].addEventListener("mouseout", hoverOffHeader);
}

//Fade in de gauche vers droite des titres
let ratio = .1;

const options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
}

const handeIntersect = function (entries, observer) {
    entries.forEach(function(entry) {
        if(entry.intersectionRatio > ratio){
            entry.target.clasList.add('reveal-visible')
            observer.unobserve(entry.target)
        } else {
            console.log('invisible');
        }
    })
}

const observer = new IntersectionObserver(handeIntersect, options);
observer.observe(document.querySelector('.reveal'));
