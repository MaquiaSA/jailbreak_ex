const baseURL = "https://exceed.superposition.pknn.dev/data/2gorillas"

function getData(id) {
    fetch(baseURL)
        .then((res) => res.json())
        .then((data) => console.log(data))

    fetch(baseURL + "/" + id)
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err))
}