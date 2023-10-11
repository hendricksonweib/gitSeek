function oneClick() {
  const username = document.querySelector(".search").value
  search(username)
}

async function search(username) {
  if (username === "") {
    alert("Digite um usuário")
  } else {
    const expandir = document.getElementById("main")
    expandir.style.display = "flex"
    
    const userData = await fetch(`https://api.github.com/users/${username}`).then(
      (response) => response.json()
    )
""
    if (userData.message && userData.message === "Not Found") {""
      alert("Usuário não encontrado")
      expandir.style.display = "none"
      return
    }

    document.getElementById("userPicture").src = userData.avatar_url
    document.querySelector("h2").textContent = userData.login
    document.querySelector("a").href = userData.html_url
    document.querySelector("a").textContent = userData.html_url
    document.querySelector("p").textContent = userData.bio || "No bio available"

    const reposData = await fetch(`https://api.github.com/users/${username}/repos`).then(
      (response) => response.json()
    )

    const reposList = document.getElementById("repos-list")
    reposList.innerHTML = ""

    reposData.forEach((repo) => {
      const listItem = document.createElement("li")
      listItem.innerHTML = `<a href="${repo.html_url}" target="_blank">${repo.name}</a>`
      reposList.appendChild(listItem)
    })
  }
}
