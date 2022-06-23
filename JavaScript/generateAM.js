//TODO
//- Bildgröße vereinheitlichen
//- Position der Bilder ändern ggf. Sidebar/Toggle-Fkt
//- Größe der Data-Base kontrollieren und Random-Zahl daran anpassen

const inputValueAM = document.getElementById('genAM')
const avatarAM = document.getElementById('avaAM')

const API_URL_AM = 'https://kitsu.io/api/edge/characters/:id/'

var request = new XMLHttpRequest()

//Request an die API mit Übergabe der ID
function getCharacterAM (id) {
  const URL_AM = API_URL_AM.replace(':id', id)
  request.open('GET', URL_AM)
  request.setRequestHeader('X-Requested-With', 'XMLHttpRequest')
  //Response-Type JSON
  request.responseType = 'json'
  request.onload = function () {
    //Vorgabe des Ready-State nach API-Documentation
    if (this.readyState === 4 && this.status === 200) {
      //Response in Variabel speichern
      var newAMCharacterJSON = this.response;
      console.log(newAMCharacterJSON);
      //Image-URL aus der Response filtern
      var imagePathAM = newAMCharacterJSON.data.attributes.image.original;
      //Image-URL des Avatars dynamisch setzen
      avatarAM.setAttribute('src', imagePathAM)
    } 
  }
  request.send()
}

//Generiert eine zufällige ID-Zahl und das dazugehörige Element
function generateAM() {
  const choosenNumberAM = Math.floor(Math.random() * 100) + 1;
  getCharacterAM(choosenNumberAM)
}

//Funktion des Delete-Buttons
function deleteAM() {
      document.getElementById("avaAM").setAttribute('src', "");
}