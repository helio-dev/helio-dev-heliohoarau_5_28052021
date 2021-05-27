/* 
main(
    async function main (){
        const articles = await getArticles()
        for (let i = O;i < articles.length; i++){
            const article = articles[i];
            displayArticle(articles)
        }
    }

    function getArticles(){
        return fetch("http://localhost:3000/api/teddies")
            .then(function(httpBodyResponse){
                return httpBodyResponse()
            })
            .then(function(articles){
            })
            .catch(function(error){
                alert(error)
            })
    }

    function displayArticles(){
        document.getElementById("main").innerHTML += '
        <div class="article__container"></div>'
)
*/

/* 
main(
    async function main (){
        const articles = await getArticles()
        for (let i = O;i < articles.length; i++){
            const article = articles[i];
            displayArticle(articles)
        }
    }

    function getArticles(){
        return fetch("http://localhost:3000/api/teddies")
            .then(function(httpBodyResponse){
                return httpBodyResponse()
            })
            .then(function(articles){
            })
            .catch(function(error){
                alert(error)
            })
    }

    function displayArticles(){
        document.getElementById("main").innerHTML += '
        <div class="article__container"></div>'
)
*/

fetch("http://localhost:3000/api/teddies")
        .then ((res)=>res.json()
        .then ((resultat)=>{
            let tableauElements = [];
            for(let cur of resultat)
            {
                tableauElements.push(document.createElement("div"));
                document.body.appendChild(tableauElements[tableauElements.length-1]);

                tableauElements.push(document.createElement("p"));
                tableauElements[tableauElements.length-1].onclick = () => console.log("hello");
                tableauElements[tableauElements.length-1].textContent = cur.name;
                tableauElements[tableauElements.length-2].appendChild(tableauElements[tableauElements.length-1]);
              	
                tableauElements.push(document.createElement("p"));
                tableauElements[tableauElements.length-1].onclick = () => console.log("hello");
                tableauElements[tableauElements.length-1].textContent = cur.description
                tableauElements[tableauElements.length-2].appendChild(tableauElements[tableauElements.length-1]);
              	
                tableauElements.push(document.createElement("p"));
                tableauElements[tableauElements.length-1].onclick = () => console.log("hello");
                tableauElements[tableauElements.length-1].textContent = cur.price
                tableauElements[tableauElements.length-2].appendChild(tableauElements[tableauElements.length-1]);
              	
                tableauElements.push(document.createElement("img"));
                tableauElements[tableauElements.length-1].onclick = () => console.log("hello");
                tableauElements[tableauElements.length-1].textContent = cur.imageUrl
                tableauElements[tableauElements.length-2].appendChild(tableauElements[tableauElements.length-1]);
                                
               
                
            }
        }))