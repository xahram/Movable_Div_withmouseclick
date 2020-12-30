window.onload = function () {
    var bsDiv = document.getElementById("box-shadow-div");
    let elements = Array.from(document.querySelectorAll('.divo'));
    var x, y;
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

        ev.target.appendChild(bsDiv)

        x = ev.clientX;
        y = rect.y;
        setTimeout(() => {
            if (typeof x !== 'undefined') {
                bsDiv.style.transition = "left 1s linear"
                bsDiv.style.left = x + "px";
                bsDiv.style.top = y + "px";
            }
        }, 100)

        console.log("Div ", bsDiv.style)

        // bsDiv.style.left = ev.screenX + "px";

        bsDiv.classList.add("box-div")
        // div.appendChild(bsDiv)

        // console.log(rect)
        // console.log(ev.pageX,ev.pageY)


    }, false);


}