var GALLERY_PADDING = 20;
var gallery = document.querySelector('#gallery');

function onLoad() {
  // Load the inspiration URL.
  loadJson('https://boiling-heat-5202.firebaseio.com/inspiration.json', onJson);
  //loadJson('/static/data/inspiration.json', onJson);
}

function loadJson(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);

  xhr.onload = function(e) {
    if (this.status == 200) {
      callback(JSON.parse(this.response));
    }
  };

  xhr.send();
}

function onJson(obj) {
  for (var key in obj) {
    var data = obj[key];
    var el = createGalleryItem(data);
    gallery.insertBefore(el, gallery.children[0]);
  }

  // Initialize masonry.
  var msnry = new Masonry(gallery, {
    itemSelector: '#gallery .item',
    isFitWidth: true,
    gutter: GALLERY_PADDING
  });
}

/**
 * Gallery items consist of an element with a background image, a label that
 * appears on hover.
 *
 * <div class='item'>
 *   <a href="#" style='background-image: url(http://i.imgur.com/wT7oJeL.jpg);'></a>
 *   <label>Awesome photography website</label>
 *   <time>Jun 1 2015</time>
 * </div>
 */
function createGalleryItem(item) {
  var el = document.createElement('div');
  el.classList.add('item');

  var dims = getDimensions(item);
  el.style.width = dims.width + 'px';
  el.style.height = (dims.height + 0) + 'px';
  el.style.marginBottom = GALLERY_PADDING + 'px';

  var a = document.createElement('a');
  a.href = item.url;
  a.style.backgroundImage = 'url(' + item.imgSrc + ')';
  a.style.backgroundRepeat = 'no-repeat';
  a.style.backgroundSize = dims.width + 'px ' + dims.height + 'px';
  a.style.backgroundColor = getColor(item.color);


  var label = document.createElement('label');
  label.innerText = item.title;

  var time = document.createElement('time');
  if (item.date) {
    time.innerText = formatDate(item.date);
  }

  el.appendChild(a);
  el.appendChild(label);
  el.appendChild(time);

  return el;
}

var ALLOWED_WIDTH = [800, 400, 200, 100];
function getDimensions(item) {
  // Pre-scale the items.
  var origWidth = item.width/2;
  var origHeight = item.height/2;
  var width;
  // Scale down the image to one of the allowed sizes.
  for (var i = 0; i < ALLOWED_WIDTH.length; i++) {
    var allowedWidth = ALLOWED_WIDTH[i];
    if (origWidth > allowedWidth) {
      width = allowedWidth;
      break;
    }
  }
  // If we weren't able to determine width, set it.
  if (!width) {
    width = ALLOWED_WIDTH[ALLOWED_WIDTH.length - 1];
  }
  console.log('Item %s using width %d', item.title, width);

  var aspect = origWidth / origHeight;
  var height = width / aspect;
  return {width: width, height: height};
}

function formatDate(value) {
  var monthNames = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  var date = new Date(value);
  var year = date.getFullYear();
  var monthIndex = date.getMonth();
  var monthName = monthNames[monthIndex];
  var day = date.getDate();
  return monthName + ' ' + day + ' ' + year;
}

function getColor(colorArray) {
  if (!colorArray) {
    return '#eee';
  }
  return 'rgb(' +
      colorArray[0] + ', ' +
      colorArray[1] + ', ' +
      colorArray[2] +
  ')';
}

window.addEventListener('load', onLoad);

