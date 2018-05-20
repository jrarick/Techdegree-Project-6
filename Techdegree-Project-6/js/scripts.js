$('video').mediaelementplayer({
    features: [
      'playpause',
      'duration',
      'progress',
      'fullscreen',
    ],
    stretching: 'responsive',
});

var caption = $('p > span');

$('video').on('timeupdate', function () {
  for (let i = 0; i < caption.length; i += 1) {
    var dataStart = caption[i].getAttribute('data-start');
    var dataEnd = caption[i].getAttribute('data-end');

    if ((video.currentTime > dataStart) && (video.currentTime < dataEnd)) {
      caption[i].style.color = 'orange';
    } else {
      caption[i].style.color = 'black';
    }
  }
});
