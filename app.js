var candyList = [
"candy1",
"candy2",
"candy3",
"candy4",
"candy5",
"candy6",
"candy7",
"candy8",
"candy9"
]

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
	var candyName = candyList[name - 1];
	var textnode = document.createTextNode(candyName);

	node.appendChild(textnode);

 	node.onclick = function() { 
 		var candyName = candyList[name - 1];
		var imageName = `url(products/candy${name}.jpg)`;
 		addItem(candyName, imageName);
 	};

	return node;
}


function addItem(name, candyImage) {
	var item = makeItemNode('item_container');
	var itemName = makeItemNode('item_name');
	var textnode = document.createTextNode(name);
	itemName.appendChild(textnode); 

	var itemLogo = makeItemNode('item_picture');
	itemLogo.style.backgroundImage = candyImage;
	var itemDeleteBtn = makeItemNode('remove_bnt');

	itemDeleteBtn.onclick = function(event) { 
		event.target.parentElement.remove();
	}

	var textnode1 = document.createTextNode('x');
	itemDeleteBtn.appendChild(textnode1); 

	item.appendChild(itemLogo);
	item.appendChild(itemName);
	item.appendChild(itemDeleteBtn);

	var itemList = document.getElementById('shopList');
	itemList.appendChild(item);
}

function makeItemNode(className) {
	var node = document.createElement("div");
	node.classList.add(className);
	return node;
}