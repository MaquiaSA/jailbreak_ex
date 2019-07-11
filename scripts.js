const baseURL = "https://exceed.superposition.pknn.dev/data/2gorillas"

function getData() {
    fetch(baseURL)
        .then((res) => res.json())
        .then((data) => console.log(data))

    fetch(baseURL + "/door")
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err))

    fetch(baseURL + "/light")
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err))

    fetch(baseURL + "/buzzer")
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err))
}