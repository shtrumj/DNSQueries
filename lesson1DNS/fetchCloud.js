async function getMXRecords(domain){
    // console.log(domain)
    const resp = await fetch(`https://dns.google/resolve?name=${domain}&type=mx`,{
        heasers: {
            'accept': 'application/dns-json'
        }
    })
    let result = document.getElementById("Mytable")
    //create table in result with headers name, type, ttl, data
    result.innerHTML += `<tr><th>Domain</th><th>Priority</th><th>TTL</th><th>Data</th><th> Blacklist Lookup</th></tr>`

    const respObject = await resp.json()
    
    // console.log(respObject.Answer)
    respObject.Answer.forEach(element => {
        // write the data to the table
        result.innerHTML += `<tr><td>${element.name}</td><td>${element.type}</td><td>${element.TTL}</td><td>${element.data.split(" ")[1]}</td></tr>`
                    
        }
    );

    }
    


    // console.log(respObject)
    // respObject.array.forEach(element => {
    //     console.log(element.data)
    // });
// }

