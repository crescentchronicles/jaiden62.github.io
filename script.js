function rollDice(pool){
	const results = [];
	for(let i = 0; i < pool; i++){
		results.push(Math.floor(Math.random() * 6) + 1);
	}
	return results;
}

function displayRoll(){
	let cells = document.querySelectorAll("td");
	let total = 0;
	for(let i = 0; i < cells.length; i++){
		cells[i].remove();
	}
	cells = rollDice(parseInt(pool.innerText));
	while(cells.length != 0){
		let die = cells.pop();
		total += die;
		let cell = document.createElement("td");
		cell.innerHTML = '<img class="icon" src="' + die + '.svg">';
		resultsTable.appendChild(cell);
	}
	resultsText.innerText = "Total: " + total;
}