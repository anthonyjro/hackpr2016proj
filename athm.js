//athm.js


var request = new XMLHttpRequest();

request.open('POST', 'http://athmapi.westus.cloudapp.azure.com/athm/requestSession
');

request.setRequestHeader('Content-Type', 'application/json');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

var body = {
  'commUsername': 'emanueAA',
  'commPassword': 'realmort'
};

request.send(JSON.stringify(body));

