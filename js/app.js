var products = JSON.parse(localStorage.getItem('products'));
console.log("Products size: " + products.length);
if (products === null) {
	products = [];
}

console.log(products[0]);

function fillTable(array) {
	if(array.length > 0) {
		$('#table').removeClass('invisible');
		let rows = '';
		array.forEach(function(item){
			rows +='<tr>'+
				'<td><img src="'+item.image+'" class="image-thumbnail" alt="..."></td>'+
				'<td>'+ item.title +'</td>'+
				'<td>'+ item.category +'</td>'+
				'<td>'+ item.description +'</td>'+
				'<td>'+ item.rating.rate +'</td>'+
				'<td>'+ item.price +'</td>'+
				'<td><button class="btn btn-primary text-uppercase">BUY</button></td>'+
				'</tr>'
		});
		$('table tbody').html(rows);
	} else {
		$('#table').addClass('invisible');
		$('#nerasta_alert').removeClass('invisible');
	}
}

fillTable(products);

function fillCards(array) {
	if(array.length > 0) {
		$('#productCards').removeClass('invisible');
		let rows = '';
		let i=0;
		array.forEach(function(item){
			i += 1;
			rows +=
			'<div className="col-md-4">' +
				'<div className="product py-4">' +
					'<div className="text-center"><img src="' + item.image +'" width="200"></div>' +
					'<div className="about text-center">' +
						'<h5>XRD Active Shoes</h5><span>' + item.price + '</span>' +
					'</div>' +
					'<div className="cart-button mt-3 px-2 d-flex justify-content-between align-items-center">' +
						'<button className="btn btn-primary text-uppercase">Add to cart</button>' +
					'</div>' +
				'</div>' +
			'</div>';
		});
		$('#productCards').innerHTML(rows);
	} else {
		$('#productCards').addClass('invisible');
		$('#nerasta_alert').removeClass('invisible');
	}
}

function addToCart() { }


$(function() {
	$('#search').click(function() {
		const search = $('#searchText').val();
		let filteredArray = products.filter(p => p.title.includes(search)
												 || p.description.includes(search)
												 || p.category.includes(search));
		console.log('Rastas produktu kiekis: ' + filteredArray.length);
		fillTable(filteredArray);
		fillCards(filteredArray);
	});
});
