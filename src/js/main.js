
//функция которая добавляет класс .webp в html, для браузеров, которые поддерживают этот формат
// JS - ФУНКЦИЯ ОПРЕДЕЛЕНИЯ ПОДДЕРЖКИ WEBP

function testWebP(callback) {

  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

  if (support == true) {
    document.querySelector('#main').classList.add('webp');
  } else {
    document.querySelector('#main').classList.add('no-webp');
  }
});

// ==============================
//coll-back function  для стилей шрифтов
function cb() {
  cb()
}

// =====================================