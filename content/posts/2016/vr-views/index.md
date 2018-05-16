Embedding VR content on the web
===============================
posted: 2016-03-31

During a two week trip to India, I took over 1000 shots, including photos,
videos and a few photospheres. A picture is worth one thousand words, but how
many pictures is a photosphere worth? We may never know, but I digress. My
favorite photosphere was of friends posing inside one of the turrets of the
Jaigarh Fort:

<iframe class="vrview" width="100%" height="300px" allowfullscreen frameborder="0" src="//storage.googleapis.com/vrview/index.html?image=//smus.com/vr-views/india-photosphere-4096.jpg&preview=//smus.com/vr-views/india-photosphere-1024.jpg&is_stereo=false"></iframe>
<script>
function DeviceMotionSender(){if(!this.isIOS_()){return}window.addEventListener("devicemotion",this.onDeviceMotion_.bind(this),false);this.iframes=document.querySelectorAll("iframe.vrview")}DeviceMotionSender.prototype.onDeviceMotion_=function(e){var message={type:"DeviceMotion",deviceMotionEvent:this.cloneDeviceMotionEvent_(e)};for(var i=0;i<this.iframes.length;i++){var iframe=this.iframes[i];var iframeWindow=iframe.contentWindow;if(this.isCrossDomainIframe_(iframe)){iframeWindow.postMessage(message,"*")}}};DeviceMotionSender.prototype.cloneDeviceMotionEvent_=function(e){return{acceleration:{x:e.acceleration.x,y:e.acceleration.y,z:e.acceleration.z},accelerationIncludingGravity:{x:e.accelerationIncludingGravity.x,y:e.accelerationIncludingGravity.y,z:e.accelerationIncludingGravity.z},rotationRate:{alpha:e.rotationRate.alpha,beta:e.rotationRate.beta,gamma:e.rotationRate.gamma},interval:e.interval}};DeviceMotionSender.prototype.isIOS_=function(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream};DeviceMotionSender.prototype.isCrossDomainIframe_=function(iframe){var html=null;try{var doc=iframe.contentDocument||iframe.contentWindow.document;html=doc.body.innerHTML}catch(err){}return html===null};var dms=new DeviceMotionSender;
</script>

I captured this using the photosphere camera which ships with Android. It's
embedded into my blog using [VR View][vrview], which [launched
today][vrview-blog]. The embed above lets you include an interactive photosphere
right in your website, which is especially fun on mobile, where the image reacts
directly to your phone's movements. You can view it in full screen mode, and
even in Cardboard mode (only on mobile).

But you know what's cooler than a photosphere? A stereo photosphere! And
luckily, you can capture stereo photospheres using [Cardboard Camera][ccam], and
then use a VR View to [embed them too][sample-pano]. You can even embed mono or
[stereo videos][sample-video]. Check out [the docs][vrview] for more info. Eager
to hear what you think!

[vrview]: https://developers.google.com/cardboard/vrview
[vrview-blog]: https://developers.googleblog.com/2016/03/introducing-vr-view-embed-immersive.html
[ccam]: https://play.google.com/store/apps/details?id=com.google.vr.cyclops&hl=en
[sample-pano]: https://storage.googleapis.com/vrview/examples/pano/index.html
[sample-video]: https://storage.googleapis.com/vrview/examples/video/index.html
