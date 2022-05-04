//création du pop uppour les boutons envoyer

const bouttons = document.querySelectorAll('.form-button');
const modal = document.getElementById('modal')
for(let i = 0; i < bouttons.length; i++) {
    let boutton = bouttons[i];
    boutton.addEventListener('click', function (e) {
        e.preventDefault();
        modal.style.display = 'block';
    })
} 
document.getElementById('modal').style.position = "relative";
document.getElementById('modal').style.top = "-100px";
