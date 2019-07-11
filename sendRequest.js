const baseURL = "https://exceed.superposition.pknn.dev/data/2gorillas"

function changeStat(id) {
    stat_id = id+"Stat";
    newStat = document.getElementById(id).innerHTML
    document.getElementById(id).innerHTML = document.getElementById(stat_id).innerHTML;
    document.getElementById(stat_id).innerHTML = newStat;
    putData(id);
}

function postData() { //initial module for testing
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
            "value": document.getElementById(id+"Stat").innerHTML
    }
    
    fetch(url, {
        method: 'PUT', // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers:{
          'Content-Type': 'application/json'
        }
      })
}
