
const inputValueAM = document.getElementById('genAM')
const avatarAM = document.getElementById('avaAM')

const API_URL_AM = 'https://kitsu.io/api/edge/characters/:id/'

var request = new XMLHttpRequest()

//Request an die API
function getCharacterAM (id) {
  const URL_AM = API_URL_AM.replace(':id', id)
  request.open('GET', URL_AM)
  request.setRequestHeader('X-Requested-With', 'XMLHttpRequest')
  //Response-Type JSON
  request.responseType = 'json'
  request.onload = function () {
    //Bei einer 200er Response können wir weitermachen
    if (this.status === 200) {
      //Response in Variabel speichern
      var newAMCharacterJSON = this.response;
      console.log(newAMCharacterJSON);
      //Image-URL aus der Response filtern
      var imagePathAM = newAMCharacterJSON.data.attributes.image.original;
      console.log(imagePathAM);
      //Image-URL des Ava dynamisch setzen
      avatarAM.setAttribute('src', imagePathAM)
    } 
  }
  request.send()
}

//Generiert eine zufällige Zahl und den dazugehörigen Namen
function generateAM() {
  const choosenNumberAM = Math.floor(Math.random() * 100) + 1;
  getCharacterAM(choosenNumberAM)
}

//Funktion des Delete-Buttons für Namen
function deleteAM() {
      document.getElementById("avaAM").setAttribute('src', "");
}