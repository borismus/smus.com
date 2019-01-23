// TODO: Refactor into proper classes!
function InspirataGallery(params) {
  var uid = params.uid;
  var el = params.el;
  var url = GALLERY_ROOT + uid + '.json';
  return UrlGallery(url);
}

function UrlGallery(url) {
  loadJson(url, onJson);
}

var PROJECT_ID = 'project-4121485576010625868';
var GALLERY_ROOT = 'https://' + PROJECT_ID + '.firebaseio.com/users/';
var GALLERY_PADDING = 20;

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
  var root = document.createElement('div');
  for (var key in obj) {
    var data = obj[key];
    var el = createGalleryImage(data);
    gallery.insertBefore(el, gallery.children[0]);
  }
  gallery.appendChild(root);

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
function createGalleryImage(item) {
  var el = document.createElement('div');
  el.classList.add('item');
  el.classList.add('image');

  var dims = getDimensions(item);
  el.style.width = dims.width + 'px';
  el.style.height = (dims.height + 0) + 'px';
  el.style.marginBottom = GALLERY_PADDING + 'px';

  // Pre-download the preview if it exists, then download the full size image.
  if (item.preview) {
    const preview = new Image();
    preview.src = item.preview.url;
    preview.onload = () => {
      a.style.backgroundImage = 'url(' + item.preview.url + ')';
      downloadFull(item);
    };
  } else {
    downloadFull(item);
  }

  function downloadFull() {
    const full = new Image();
    full.src = item.image.url;
    full.onload = () => {
      a.style.backgroundImage = 'url(' + item.image.url + ')';
    }
  }

  var a = document.createElement('a');
  a.href = item.url;
  a.style.backgroundRepeat = 'no-repeat';
  a.style.backgroundSize = dims.width + 'px ' + dims.height + 'px';
  a.style.backgroundColor = getColor(item.color);
  el.appendChild(a);


  if (item.caption) {
    var label = document.createElement('label');
    label.innerText = item.caption;
    el.appendChild(label);
  }

  var time = document.createElement('time');
  if (item.createdDate) {
    time.innerText = formatDate(item.createdDate);
  }
  el.appendChild(time);

  return el;
}

var ALLOWED_WIDTH = [400, 200, 100];
function getDimensions(item) {
  // Pre-scale the items.
  var origWidth = item.image.width;
  var origHeight = item.image.height;
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
  console.log('Item %s using width %d', item.caption, width);

  var aspect = origWidth / origHeight;
  var height = width / aspect;
  return {width: width, height: height};
}

function getTextDimensions(item) {
  return {width: 400, height: 300};
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

