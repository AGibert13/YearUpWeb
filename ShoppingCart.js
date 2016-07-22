var start = prompt("Would you like to input item/s? Y/N").toUpperCase();
if (start === "Y") {
	var item = [];
	var quantity = [];
	var price = [];
	while (true) {
		var enterProduct = prompt("Please enter the item name, quantity, and price. When you are finished, type 'EXIT' to leave.").toUpperCase();
		if (enterProduct === "EXIT") {
			break;
		}
		var productDetails = enterProduct.split(" ");
		item.push(productDetails[0]);
		quantity.push(productDetails[1]);
		price.push(productDetails[2]);
	}

	function receipt() {
		var itemTotal = [];
		var groceryList = [];
		var cart = [];
		for (i = 0; i < item.length; i++) {
			itemTotal.push(quantity[i] * price[i]);
			groceryList.push([quantity[i].toString(), item[i], ("= $" + itemTotal[i].toString())]);
			cart.push(groceryList[i].join(" "));
			console.log(cart[i]);
		}
		while (true) {
			var deleteItem = prompt("Your Items:\n" + cart.join("\n") + "\nWould you like to delete an item? Y/N").toUpperCase();
			if (deleteItem === "Y") {
				var itemName = prompt("Which item would you like to remove?").toUpperCase();
				var index = item.indexOf(itemName);
				if (index >= 0) {
					cart.splice(index, 1);
				} else {
					alert("That item is not located in your cart.");
				}
			} else if (deleteItem === "N") {
				break;
			} else {
				alert("That is not a valid response.");
			}
}
				var subtotal = 0;
				var salesTax = .075;
				for (i = 0; i < itemTotal.length; i++) {
					subtotal += itemTotal[i];
				};
				var cartTotal = subtotal + (subtotal * salesTax);
		if (cartTotal < 100){
			alert("Your Items:\n" + cart.join("\n") + "\nYour total is $"+ cartTotal.toFixed(2) +". Due to it being less than $100, you must pay with cash.")
		}
		else{
			alert("Your Items:\n" + cart.join("\n") + "\nYour total is $"+ cartTotal +". Due to it being at least $100, you may pay with card or cash.")
		}
	}
	
}
	else{
		alert("Thank you for shopping with us. Please come again.")
	}
receipt();