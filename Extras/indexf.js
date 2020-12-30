window.onload = function () {
    var bsDiv = document.getElementById("box-shadow-div");
    var x, y;
    let elements = Array.from(document.querySelectorAll('.divo'));
    let div = null
    let xpath = []
    let linkCoords = elements.map(link => {
        let rect = link.getBoundingClientRect();
        console.log(rect)
        xpath.push(rect.width - rect.x)
        return [rect.x, rect.y];
    });

    console.log("Link", linkCoords)

    document.addEventListener("click", ev => {
        let distances = [];

        linkCoords.forEach(linkCoord => {

            let distance = Math.hypot(linkCoord[0] - parseInt(ev.clientX), linkCoord[1] - parseInt(ev.clientY));
            distances.push(parseInt(distance));
            console.log("Distances ", distances)
        });
        console.log("Xpaths ", xpath)
        //Gets the closest div to the mouse click
        let closestLinkIndex = distances.indexOf(Math.min(...distances));
        console.log(closestLinkIndex)
        div = elements[closestLinkIndex];

        const rect = div.getBoundingClientRect();

        x = ev.clientX;
        y = rect.y;
        if (typeof x !== 'undefined') {
            bsDiv.style.left = x + "px";
            bsDiv.style.top = y + "px";
        }
        console.log("Div path", x, y)
        ev.target.appendChild(bsDiv)

        // bsDiv.style.left = ev.screenX + "px";

        bsDiv.classList.add("box-div")
        // div.appendChild(bsDiv)

        // console.log(rect)
        // console.log(ev.pageX,ev.pageY)


        // document.getElementById('result').innerHTML = (elements[closestLinkIndex].id);
    }, false);

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