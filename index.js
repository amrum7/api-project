const url = https://www.potterapi.com/v1/
const key = '$2a$10$o55PEy2Tn/W6rO0ciXLqYuFe9WrfvcFF4JFPSImENRp.EAyiyPz7q';

function display(response){
    let harry = response.results[0].image;
    let ron = response.results[1].image;
    let herimone = response.results[2].image;
    let harry1 = document.getElementById('harry')
    harry.src = harry1
    let ron1 = document.getElementById('ron')
    ron.src = ron1
    let herimone1 = document.getElementById('hermione')
    herimone.src = herimone1
}

let x = fetch(url)
.then((response) => response.json())
.then((responseJSON) => {
    display(responseJSON)
});