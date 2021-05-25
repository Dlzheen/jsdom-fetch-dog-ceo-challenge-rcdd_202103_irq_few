console.log('%c HI', 'color: firebrick');
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = 'https://dog.ceo/api/breeds/list'

window.addEventListener('DOMContentLoaded', () => {
  fetch(imgUrl).then(result => {return result.json()})
  .then(json =>{
    for(let i=0;i<json.message.length;i++){
    let image = document.createElement("img");
    image.setAttribute("src",json.message[i]);
    let imgDiv = document.querySelector("#dog-image-container"); 
    imgDiv.append(image);
    
    }
     
  });
   
  fetch(breedUrl).then(result => {return result.json()})
   .then(json =>{
      for(let i=0;i<json.message.length;i++){
        console.log(json.message[0]);     
      }
   
     
   }); 

});

   
