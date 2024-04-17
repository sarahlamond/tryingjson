let outputElement = document.getElementById('outputElement');
let outputParagraph = document.getElementById('outputParagraph');
let contentGridElement = document.getElementById('contentGrid');

var rellax;

let jsonDatabase = [
  {
    "title" : "SNACKTIME",
    "picture_url" : "https://p16-tm-sg.tiktokmusic.me/img/tos-alisg-i-0000/8db87b63f17347b1b98d71d3b0e04632~c5_750x750.image",
    "color" : "#247d64",
    "songs" : ["Pineapple Kryptonite", "Free Your Mind", "CANDY", "Fantastico", "Happy Hormones"]
  },
  {
    "title" : "wakage ga itaru",
    "picture_url" : "https://i.ebayimg.com/images/g/lUoAAOSwCSRlHj3i/s-l400.jpg",
    "color" : "#247d3f",
    "songs" : ["shiken zenya", "mayoeba toutoshi", "masage Canavaro", "koi geba", "amayo no seppun", "stripper ni eikou wo", "okami no uta", "chirachirachirami shiken toujitsu", "toumei boy", "rakuen nite watashi jigoku", "shiritai"]
  },
  {
    "title" : "ICHIJIKIKOKU",
    "picture_url" : "https://lastfm.freetls.fastly.net/i/u/300x300/8a6869bce406a164d97f34c648bed5b6.jpg",
    "color" : "#24497d",
    "songs" : ["JANAINDAYO", "SEISHUN WO KIRISAKU HADO", "Giri Giri", "Suki Lie", "OTONABLUE", "OTOME NO BIGAKU", "ODORU HONNO 001"]
  },
  {
    "title" : "Tokyo Calling",
    "picture_url" : "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/44/88/d4/4488d48b-0e9f-5251-1cb8-4326743cdf93/197190087666.jpg/1200x1200bb.jpg",
    "color" : "#69171c",
    "songs" : ["single"]
  },
  {
    "title" : "Toryanse",
    "picture_url" : "https://m.media-amazon.com/images/I/51lQ+LozXpL._UXNaN_FMjpg_QL85_.jpg",
    "color" : "#8f1556",
    "songs" : ["single"]
  },
  {
    "title" : "HELLO",
    "picture_url" : "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/dc/45/81/dc4581c1-7957-1271-3349-552fbb39e62b/198391011832.jpg/1200x1200bb.jpg",
    "color" : "#0d0208",
    "songs" : ["single"]
  },
];

for (var i = 0; i < jsonDatabase.length; i++) {
  createElementProper(jsonDatabase[i]);
}

rellax = new Rellax('.rellax');

function createElementProper(incomingJSON) {

  let newContentElement = document.createElement("DIV");
  newContentElement.style.backgroundColor = incomingJSON['color'];
  newContentElement.classList.add('contentItem');

  let newContentHeading = document.createElement("H3");
  newContentHeading.classList.add('contentTitle');
  newContentHeading.innerText = incomingJSON['title'];
  newContentElement.appendChild(newContentHeading);

  let newContentSongList = document.createElement("p");
  newContentElement.appendChild(newContentSongList);

  for (var i = 0; i < incomingJSON['songs'].length; i++) {
    var currentSongString = incomingJSON['songs'][i];
    var newSongItem = document.createElement("p");
    newSongItem.setAttribute('data-aos', 'fade-up');
    newSongItem.innerText = currentSongString;
    newContentSongList.appendChild(newSongItem);
  }

  let newImage = document.createElement("IMG");
  newImage.setAttribute('data-aos', 'fade-up');
  newImage.classList.add("footerImage");
  newImage.src = incomingJSON['picture_url'];
  newContentElement.appendChild(newImage);

  contentGridElement.appendChild(newContentElement);

}