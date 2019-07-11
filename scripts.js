const baseURL = "https://exceed.superposition.pknn.dev/data/2gorillas"


setInterval( () => {
    fetch(baseURL)
        .then((res) => res.json())
        .then((data) => {
            if(data["door"] == "close"){
                document.getElementById("door").innerHTML = "open";
                document.getElementById("doorStat").innerHTML = "close";
            }
            else {
                document.getElementById("door").innerHTML = "close";
                document.getElementById("doorStat").innerHTML = "open";
            }

            if(data["light"] == "off"){
                document.getElementById("light").innerHTML = "on";
                document.getElementById("lightStat").innerHTML = "off";
            }
            else {
                document.getElementById("light").innerHTML = "off";
                document.getElementById("lightStat").innerHTML = "on";
            }
            
            document.getElementById("buzzerStat").innerHTML = data["buzzer"];
        })

    /*fetch(baseURL + "/" + id)
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err))*/
}, 1000)

function postData() {
    let url = baseURL;
    let data = {
            "data": {
                "door": "close",
                "light": "off",
                "buzzer": "off"
            }
    }
    
    fetch(url, {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers:{
          'Content-Type': 'application/json'
        }
      })
}

function putData(id) {
    let url = baseURL + "/" + id;
    var data = {
            "value": document.getElementById(id).innerHTML
    }
    
    fetch(url, {
        method: 'PUT', // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers:{
          'Content-Type': 'application/json'
        }
      })
}

