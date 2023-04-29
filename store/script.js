const items = [
	{
		name: 'Hoodie',
		description: 'Stay cozy and stylish with our hoodie.',
		price: 50,
		image: 'images/hoodie.jpg'
	},
	{
		name: 'Sweatshirt',
		description: 'Perfect for those chilly days when you want to stay comfortable.',
		price: 40,
		image: 'images/sweatshirt.jpg'
	},
	{
		name: 'T-Shirt',
		description: 'Our soft and breathable t-shirts are perfect for everyday wear.',
		price: 20,
		image: 'images/t-shirt.jpg'
	}
];

const storeContainer = document.querySelector('#store-container');

items.forEach(item => {
	const storeItem = document.createElement('div');
	storeItem.classList.add('store-item');
	
	const image = document.createElement('img');
	image.src = item.image;
	image.alt = item.name;
	storeItem.appendChild(image);
	
	const content = document.createElement('div');
	
	const name = document.createElement('h3');
	name.textContent = item.name;
	content.appendChild(name);
	
	const description = document.createElement('p');
	description.textContent = item.description;
	content.appendChild(description);
	
	const price = document.createElement('p');
	price.textContent = `$${item.price}`;
	content.appendChild(price);
	
	const button = document.createElement('button');
	button.textContent = 'Add to Cart';
	content.appendChild(button);
	
	storeItem.appendChild(content);
	storeContainer.appendChild(storeItem);
});
