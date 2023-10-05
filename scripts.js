function oneClick(){
    const username = document.querySelector(".search").value
    search(username)
    console.log(username)
}
async function search(username){
    const dados = await fetch(`https://api.github.com/users/${username}`).then(response => response.json())
    .then((data) => {
        document.getElementById("userPicture").src = data.avatar_url
        document.querySelector("h2").textContent = data.login
        document.querySelector("a").href = data.html_url
        document.querySelector("a").textContent = data.html_url
        document.querySelector("p").textContent = data.bio || "No bio available"
    }) 
}

