


const API_URL_CM = 'https://cmnet.communitymashup.net/'

var request = new XMLHttpRequest()

//Request an die API
function getName () {
  request.open('GET', API_URL_CM)
  request.setRequestHeader('X-Requested-With', 'XMLHttpRequest')
  //Response-Type JSON
  request.responseType = 'json'
  request.onload = function () {
    //Bei einer 200er Response können wir weitermachen
    
      //Response in Variabel speichern
      var newNameJSON = this.response;
      console.log(newNameJSON);
    
  }
  request.send()
}

function generateName() {
  getName()
}