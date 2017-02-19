var firstVal =0;
var secondVal =1;
var result = 0;
function fibonacci(){
result = firstVal+secondVal;
firstVal = secondVal;
secondVal = result;
	return result;
}
var node = document.getElementById('mainDiv');

for(var i=0; i<10;i++){	
  var newNode = document.createElement('div');
  var height_width = fibonacci();
	newNode.style.width = height_width+"px";
	newNode.style.height = height_width+"px";	
  newNode.className  = "blue";
	node.appendChild(newNode);
}
