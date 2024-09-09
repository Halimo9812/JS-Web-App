//import axios from "axios";
fetch('https://api.tvmaze.com/search/shows?q=girls')

.then(data => {
console.log(data);
return data.json();
}) .then((completedata) =>{
let data ="";
completedata.map((values)=>{

    data =``
})

    console.log(completedata);

}) .catch((err) =>{
   console.log(err);
})


const form = document.querySelector('#searchForm');
form.addEventListener('submit', async function (e) {

    e.preventDefault();
    const userSearch = form.elements.query.value;
    const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${userSearch}`);

    displayImages (res.data)
    form.elements.query.value = ""


    console.log("submit")//
    console.log(form.elements.query.value)
})

//document.addEventListener("DOMContentLoaded", userSearch);

const displayImages = (shows) => {
    for (let result of shows){
        if(result.show.image){
            const img = document.createElement('img');
            img.src = result.show.image.medium;
            document.body.append(img)
        
        }
    }

}