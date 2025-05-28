let bottone = document.querySelector(".button");
let testo = document.querySelector(".text");
let categoria = document.querySelector(".menu");
let url = "https://api.chucknorris.io/jokes/random"
let risorsa;


bottone.addEventListener("click", function (e) {
    e.preventDefault()

    if (categoria.value == "N") {
        url = "https://api.chucknorris.io/jokes/random";
    } else if (categoria.value == "animale") {
        url = "https://api.chucknorris.io/jokes/random?category=animal";
    } else if (categoria.value == "carriera") {
        url = "https://api.chucknorris.io/jokes/random?category=career";
    } else if (categoria.value == "celebrita") {
        url = "https://api.chucknorris.io/jokes/random?category=celebrity";
    } else if (categoria.value == "sviluppo") {
        url = "https://api.chucknorris.io/jokes/random?category=dev";
    } else if (categoria.value == "esplicito") {
        url = "https://api.chucknorris.io/jokes/random?category=explicit";
    } else if (categoria.value == "moda") {
        url = "https://api.chucknorris.io/jokes/random?category=fashion";
    } else if (categoria.value == "cibo") {
        url = "https://api.chucknorris.io/jokes/random?category=food";
    } else if (categoria.value == "storia") {
        url = "https://api.chucknorris.io/jokes/random?category=history";
    } else if (categoria.value == "denaro") {
        url = "https://api.chucknorris.io/jokes/random?category=money";
    } else if (categoria.value == "film") {
        url = "https://api.chucknorris.io/jokes/random?category=movies";
    } else if (categoria.value == "musica") {
        url = "https://api.chucknorris.io/jokes/random?category=music";
    } else if (categoria.value == "politico") {
        url = "https://api.chucknorris.io/jokes/random?category=political";
    } else if (categoria.value == "religione") {
        url = "https://api.chucknorris.io/jokes/random?category=religion";
    } else if (categoria.value == "scienza") {
        url = "https://api.chucknorris.io/jokes/random?category=science";
    } else if (categoria.value == "sport") {
        url = "https://api.chucknorris.io/jokes/random?category=sport";
    } else if (categoria.value == "viaggio") {
        url = "https://api.chucknorris.io/jokes/random?category=travel";
    }

    risorsa = fetch(url).then(
        function (resp) {
            console.log(risorsa)
            console.log(resp)

            return resp.json()
        }
    ).then(
        function (data) {
            testo.innerHTML = data.value;
        }
    ).catch(
        function (err) {
            console.log(err)
        }
    )
})