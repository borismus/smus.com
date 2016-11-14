var DURATION = 5000;
var SCENE_LIST = ['discovery', 'rattlesnake', 'whiskey'];

var vrView;

function onLoad() {
  vrView = new VRView.Player('#vrview', {
    width: '100%',
    height: 400,
    image: 'blank.png',
    is_stereo: false,
    is_debug: false
  });
  vrView.on('ready', onVRViewReady);
}

function onVRViewReady() {
  currentScene = 0;
  loadScene(SCENE_LIST[currentScene], true);

  setInterval(advanceSlide, DURATION);
}

function advanceSlide() {
  currentScene = (currentScene + 1) % SCENE_LIST.length;
  loadScene(SCENE_LIST[currentScene], false);
}

function loadScene(name, is_autopan) {
  var preview = name + '_1024.jpg';
  var image = name + '_4096.jpg';
  vrView.setContent({
    image: image,
    preview: preview,
    is_stereo: true,
    is_autopan_off: !is_autopan
  });
}


window.addEventListener('load', onLoad);
