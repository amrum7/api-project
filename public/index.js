document.querySelector('form').addEventListener('submit', nasa)

function nasa(e){
  e.preventDefault()
  let date = document.querySelector('input').value
  console.log(date)
  fetch(`https://api.nasa.gov/planetary/apod?date=${date}&hd=true&api_key=xjTmLfj7sIWxLjV4hzb2nrcxwPuF23ovPcq5YqnI`)
    .then(res => res.json()) 
    .then(response => {
        console.log(response)
        document.querySelector('h2').innerText=response.title; // Getting title
        document.querySelector('img').src = response.hdurl
        /*
        if(response.media_type == "image"){
          document.querySelector('img').src = response.hdurl // Getting image
        }/*else{
          let iframe=document.querySelector('iframe');
          iframe.src = response.url
          iframe.style.display="block"
        }*/
        document.getElementById('description').innerText= response.explanation; // Getting description
    })
    .catch(err => {
        console.log(`error ${err}`)
        alert("sorry, there are no results for your search")
    });
}