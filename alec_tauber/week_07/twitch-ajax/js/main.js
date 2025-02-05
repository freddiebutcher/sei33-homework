function GetAllStreams(){
    var arrStreams = [];
    var offset = 0;
    var total = -1;

    while(total < 0 || arrStreams.length < total) {
        $.ajax({
          type: 'GET',
          url: 'https://api.twitch.tv/kraken/search/streams?limit=100&offset=' + offset++ + '&q=starcraf',
          headers: {'Client-ID': 'xxx'},
          success: function(json) {
            arrStreams.push(json.streams);
            console.log(json);
            console.log(arrStreams);
        });
    }

    return arrStreams;
}

const form = document.querySelector('form');

form.addEventListener('submit', function (event) {
  event.preventDefault(); // Disable navigation to a new page.

  const title = document.getElementById('book_title').value;

  const xhr = new XMLHttpRequest();
  const url = `https://www.googleapis.com/books/v1/volumes?q=title:${ title }`;
  xhr.open('GET', url);
  xhr.send(); // Asynchronous

  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) return;

    const data = JSON.parse( xhr.responseText );

    const cover = data.items[0].volumeInfo.imageLinks.thumbnail;
    document.getElementById('cover').setAttribute('src', cover);
  };

});
