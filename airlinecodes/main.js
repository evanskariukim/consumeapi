const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0d22b203b3mshecb898d4382b652p1be17fjsn5ecb12cb78bb',
		'X-RapidAPI-Host': 'iata-and-icao-codes.p.rapidapi.com'
	}
};

fetch('https://iata-and-icao-codes.p.rapidapi.com/airline?iata_code=KQ', options)
	.then(response => response.json())
	.then(response => 
        {
            console.log(response[0].iata_code)
            const textdiv=document.getElementById('text');
            const p=document.createElement('p');
            const ptext=document.createTextNode(`${response[0].iata_code}:${response[0].name}`);
            const p2=document.createElement('p');
           
            
            textdiv.appendChild(p);
            textdiv.appendChild(p2);
            "&nbsp"
            p.appendChild(ptext);
           
})
	.catch(err => console.error(err));