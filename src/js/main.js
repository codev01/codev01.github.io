let indexOpen = 0;

let btnTab = document.querySelectorAll('.nav--content_button');
let contentTab = document.querySelectorAll('.row');

function tabCurrent(thisTab) {
    let idCurrent = thisTab.dataset.row;

    for (let i = 0; i < btnTab.length; i++) {
        btnTab[i].classList.remove('current');
    }
    thisTab.classList.add('current');

    for (let i = 0; i < contentTab.length; i++) {
      if (idCurrent === contentTab[i].id) {
        contentTab[i].classList.add('current');
      } else {
        contentTab[i].classList.remove('current');
      }
    }
}

for (let i = 0, len = btnTab.length; i < len; i++) {
  btnTab[i].onclick = function() {
   tabCurrent(this);
  }
}

tabCurrent(btnTab[indexOpen]);
