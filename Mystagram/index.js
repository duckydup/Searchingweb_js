function appendImageELem(keyword, index){
    const imgElem = document.createElement('img');
    imgElem.src = `https://source.unsplash.com/400x225/?${keyword}&sig=${index}`;
    
    const galleryelem = document.querySelector(".gallery");
    galleryelem.appendChild(imgElem);
}

function remove(){
    const galleryelem = document.querySelector('.gallery');
    galleryelem.innerHTML = '';
}
function searchPhoto(event){
    const keyword= event.target.value;
    if (event.key==='Enter' && keyword){
        remove();
        for (let i =0; i<9; i++){
        appendImageELem(keyword, i);
        } 
    }
}

function run(){
    
    const inputElem =document.querySelector('input');
    inputElem.addEventListener('keydown', searchPhoto);
}
run();