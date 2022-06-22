function save() {

  var canvas = document.getElementById("can");
  var dataURL = canvas.toDataURL();
  var ctx = canvas.getContext('2d');

  document.getElementById("canvasimg").src = dataURL;
  document.getElementById("canvasimg").style.display = "inline"
 

  //document.getElementById("canvasimg").style.border = "0px solid";
  //var dataURL = canvas.toDataURL();
  //document.getElementById("canvasimg").src = dataURL;
  //document.getElementById("canvasimg").style.display = "inline";
  
}

// JSON Object
fetch('https://jsonplaceholder.typicode.com/posts', {
	method: 'POST',
	body: JSON.stringify({
		title: 'New Pirate Captain',
		body: 'Arrrrrr-ent you excited?',
		userId: 3
	}),
	headers: {
		'Content-type': 'application/json; charset=UTF-8'
	}
}).then(function (response) {
	if (response.ok) {
		return response.json();
	}
	return Promise.reject(response);
}).then(function (data) {
	console.log(data);
}).catch(function (error) {
	console.warn('Something went wrong.', error);
});