 
//выводим текст из api
function createText() {
fetch('https://api.jsonbin.io/b/5f1759b5c1edc466175baf5f')
  .then((response) => {
    return response.json();
  })
  .then((data) => {  
	const ryabaText = document.getElementById('ryabaText');
	ryabaText.innerText = data.text;
	});
};

function changeVars() {
	let newText = $('#ryabaText').get(0).innerText;
	let v = []
		for (let i = 1; i <= 6; i++) {
			v[i] = $('#var' + i).val();
			newText = newText.replace(new RegExp("{var" + i +"}",'g'), v[i]);
			}

	const speach = $('#speach').val();
	newText = newText.replace('{speach}', speach);

	$('#ryabaTextResult').text(newText);
};

create_text.onclick = createText;
change_vars.onclick = changeVars;