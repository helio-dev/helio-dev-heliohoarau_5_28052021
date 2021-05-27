fetch ("http://localhost:3000/api/teddies")
    .then ((res)=>res.json()
    .then ((resultat)=>{
        let tableauElements = [];
        for (let cur of resultat)
        {
            tableauElements.push(document.createElement("div"));
            document.body.appendChild(tableauElements[tableauElements.length-1]);

            tableauElements.push(document.createElement("p"));
            tableauElements[tableauElements.length-1].onclick = () => console.log ("hello");
            tableauElements[tableauElements.length-1].textContent = cur.name;
            tableauElements[tableauElements.length-2].appendChild(tableauElements[tableauElements.length-1]);

        }
    }))