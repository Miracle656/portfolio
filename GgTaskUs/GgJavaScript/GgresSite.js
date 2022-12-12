let btn = document.getElementsByClassName('btn');

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click',()=>{
        alert('Are you sure you want to download')
    })
    
}

const x = document.getElementById("demo");
function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    }else{
        x.innerHTML = 'Goelocation is not supported on your browser.';
    }
}

function showPosition(position){
    x.innerHTML = `Latitude: ${position.coords.latitude} <br> Longitude: ${position.coords.longitude}`
}


getLocation()
//showPosition(getLocation)


/*for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', ()=>{
        let sub = document.getElementsByClassName('submenu');
        for (let j = 0; j < sub.length; j++) {
            sub[j].slideToggle(500);
            
        }
    })
    
}*/

