// function loadingSpinner() {
//     let dotContainer = document.getElementById("dot-container");
//     dotContainer.classList.add('dot')
//     const div = document.createElement('div');
//     if (dotContainer.childNodes.length === 5) {
//         dotContainer.innerHTML = "";
//         dotContainer.appendChild(div);
//     }
//     else {
//         dotContainer.appendChild(div);
//     }

// }
// setInterval(loadingSpinner,500);

function loadingSpinner(){
    let dotContainer = document.getElementById('dot-container');
    // dotContainer.classList.add('dot');
    const div = document.createElement('div');
    div.classList.add('dot')
    // dotContainer.appendChild(div);
    if(dotContainer.childNodes.length === 5){
        dotContainer.innerHTML = '';
        dotContainer.appendChild(div);

    }
    else{
        dotContainer.appendChild(div);
    }
}
setInterval(loadingSpinner,700)