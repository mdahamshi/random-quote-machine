
import $ from "jquery";
import 'jquery-color';
class Aya {
  constructor(){
    this.ayaUrl = 'https://api.alquran.cloud/v1/ayah/';
    this.maxAya = 6235;
    this.ayaUrlSufix = '/ar.asad';
    this.fetchedAya = '';
    this.ayaResp = {};
    this.shortAya = 20;
    this.longAya = 500;
    this.colors = [
    '#16a085',
    '#27ae60',
    '#2c3e50',
    '#f39c12',
    '#e74c3c',
    '#9b59b6',
    '#FB6964',
    '#342224',
    '#472E32',
    '#BDBB99',
    '#77B1A9',
    '#73A857'
  ];
  }


  getRandomAyaNum(){
    return Math.floor(Math.random() * this.maxAya);
  }
  getRandomAyaUrl(number = null){
    let randomAya = number;
    if(number < 1 || number > this.maxAya)
      randomAya = this.getRandomAyaNum();

    return `${this.ayaUrl}${randomAya}${this.ayaUrlSufix}`;
  }

  fetchAya(number = null) {

  const ayaThis = this;
  return new Promise(function(res, rej) {
  $.ajax({
    headers: {
      Accept: 'application/json'
    },
    url: ayaThis.getRandomAyaUrl(number),
    success: function (ayaObj) {
      // console.log(ayaObj);
      if(ayaObj.data.text.length < ayaThis.shortAya || ayaObj.data.text.length > ayaThis.longAya){
        ayaThis.getAya();
        rej(ayaObj);
      }
      ayaThis.ayaResp = ayaObj;
      ayaThis.fetchedAya = {
        ayaText: ayaObj.data.text,
        suraName: ayaObj.data.surah.name,
        ayaNum: ayaObj.data.numberInSurah
      }
      res(ayaObj);

    }
  });
  });
}

getAya(number = null) {
  const ayaThis = this;
  if(typeof number == 'object')
    number = null;

  this.fetchAya(number).then(function(resp){
  const fetchedAya = ayaThis.fetchedAya;
  let currentAya = fetchedAya.ayaText;
  let currentSura= fetchedAya.suraName;

  $('#tweet-ayah').attr(
    'href',
    'https://twitter.com/intent/tweet?hashtags=ayah&text=' +
      encodeURIComponent('"' + currentAya + '" ' + currentSura)
  );

    $('#whats-ayah').attr(
    'href',
    'whatsapp://send?text=' +
      encodeURIComponent('"' + currentAya + '" ' + currentSura)
  );

  $('#fb-ayah').attr(
    'href',
    'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(window.location.href)
  );

  $('.aya-text').animate({ opacity: 0 }, 500, function () {
    $(this).animate({ opacity: 1 }, 500);
    $('#text').text(currentAya);
  });

  $('.aya-sorah').animate({ opacity: 0 }, 500, function () {
    $(this).animate({ opacity: 1 }, 500);
    $('#surah').html(currentSura);
    $('#aya-num').html(fetchedAya.ayaNum);
  });

  var color = Math.floor(Math.random() * ayaThis.colors.length);
  var newcolor = ayaThis.colors[color];
  $('html body').animate(
    {
      backgroundColor: newcolor,
      color: newcolor
    },
    1000
  );
  $('.button').animate(
    {
      backgroundColor: newcolor
    },
    1000
  );


  }).catch(function(err){
  });

}
}



const projectName = 'random-aya-machine';






export default Aya;
