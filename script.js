
// Window Onload functionality goes here
window.onload = function(){}


function createImage(){
	
	var bgColor = document.getElementById('bgcolor').value;
	var textColor = 'white';
	var textValue = getTextValue();

	var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');
    var centerX = canvas.width / 2;
    var centerY = canvas.height / 2;
    var radius = 255;

	// Drawing Circle
    context.beginPath();
    context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
    context.fillStyle = bgColor;
    context.fill();
	context.lineWidth = 1;
    context.strokeStyle = bgColor;
    context.stroke();
    
	// Printing text
    context.fillStyle = textColor;
    context.textAlign = 'center'; 
    context.font = '280px Arial';
    context.textBaseline = 'middle';
    context.fillText(textValue, centerX, centerY);
	
	var downloadButton = document.getElementById('downloadButton');
	
	downloadButton.style.display = "block";
	canvas.style.display = "block";
	
   // Event handler for download
	downloadButton.onclick = function(){
    download(canvas, 'myimage.png');
	}
 }


/* Canvas Donwload */
function download(canvas, filename) {
  /// create an "off-screen" anchor tag
  var lnk = document.createElement('a'), e;

  /// the key here is to set the download attribute of the a tag
  lnk.download = filename;

  /// convert canvas content to data-uri for link. When download
  /// attribute is set the content pointed to by link will be
  /// pushed as "download" in HTML5 capable browsers
  lnk.href = canvas.toDataURL("image/png;base64");

  /// create a "fake" click-event to trigger the download
  if (document.createEvent) {
    e = document.createEvent("MouseEvents");
    e.initMouseEvent("click", true, true, window,
                     0, 0, 0, 0, 0, false, false, false,
                     false, 0, null);

    lnk.dispatchEvent(e);
  } else if (lnk.fireEvent) {
    lnk.fireEvent("onclick");
  }
}


function getTextValue(){
  var name = document.getElementById('name').value;
  var nameArray = name.split(' ');
  if(nameArray.length > 1)
  {
	return nameArray.map((item) => item[0]).join('').toUpperCase().slice(0,2);
  } else {
	return (nameArray.length === 1 ? nameArray[0].toUpperCase().slice(0,2) : '');  
  }
}
