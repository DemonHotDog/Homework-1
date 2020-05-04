window.onload = function() {
	var itemContainer = document.getElementById('itemList');
	
    for(var counter = 1; counter <= 9; counter = counter + 1) {
      var imageName = `url(products/candy${counter}.jpg)`;
	  itemContainer.appendChild(makeNode(imageName, counter));
    }             	          
  
}


function makeNode(imageName, name) {
	var node = document.createElement("div");
 	node.classList.add("candy");
 	node.style.backgroundImage = imageName;
	// var textnode = document.createTextNode(name);
	// node.appendChild(textnode); 
	return node;
}