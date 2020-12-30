window.onload = function () {
    var bsDiv = document.getElementById("box-shadow-div");
    var x, y;
    let elements = Array.from(document.querySelectorAll('#divo'));

    let linkCoords = elements.map(link => {
        let rect = link.getBoundingClientRect();
        return [rect.x, rect.y];
    });
    let div = null

    document.addEventListener("click", ev => {
        let distances = [];

        linkCoords.forEach(linkCoord => {
            let distance = Math.hypot(linkCoord[0] - parseInt(ev.clientX), linkCoord[1] - parseInt(ev.clientY));
            console.log(distance)
            distances.push(parseInt(distance));
        });
        //Gets the closes div to the mouse click
        let closestLinkIndex = distances.indexOf(Math.min(...distances));

        div = elements[closestLinkIndex];
        const rect = div.getBoundingClientRect();
        // div.appendChild(bsDiv)
        
        x = rect.x;
        y = rect.y + 50;
        if (typeof x !== 'undefined') {
            bsDiv.style.left = x + "px";
            bsDiv.style.top = y + "px";


        }
        // document.getElementById('result').innerHTML = (elements[closestLinkIndex].id);
    });

    // var bsDiv = document.getElementById("box-shadow-div");
    // var x, y;
    // On mousemove use event.clientX and event.clientY to set the location of the div to the location of the cursor:
    // window.addEventListener('click', function (event) {
    // x = event.clientX;
    // x = event.screenX;
    // x = event.pageX + 20;
    // y = event.pageY;
    // y = event.clientY;                    
    // if (typeof x !== 'undefined') {
    //     bsDiv.style.left = div.style.top 
    //     bsDiv.style.left = x + "px";
    //     bsDiv.style.top = y + "px";


    // }
    // div.appendChild(bsDiv)
    // console.log("Elements ",elements)
    // console.log("linkCoords ",linkCoords)
    // }, false);
}