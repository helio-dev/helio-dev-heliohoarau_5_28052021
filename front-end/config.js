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