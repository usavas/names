const fs = require('fs');
const path = require('path');

/* fs.readFile(path.resolve(__dirname, 'names.json'), 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  let names = JSON.parse(data);
  let result = getAsciNames(names);
  console.log(result);
});
*/

function getAsciNames(names){
  const regex = /^[^öüşçıiğ]*$/i
  let result = [];

  for (var i = 0; i < names.length; i++) {
  	let name = names[i];
  	if(name.sex === 'K') continue;
  	if(regex.test(name.name)){
  		result.push(name.name);
  	}
  }

  return result;
}


function test() {
	let names = [
	'Abdüsselâm',
  'Savas',
  'Abır',];
  names = names.map(n => { return {sex: 'E', name: n}});
  
  let result = getAsciNames(names);

  // result's value sould be equal to ['Savas'];
}

test();