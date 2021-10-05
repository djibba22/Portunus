const addButton = document.querySelector(".add");

const storeKey = (e) => {
    console.log("clicking");
    e.preventDefault();
    // grab the values
    const data = {
        name:document.getElementById("keyName").value,
        apiKey: document.getElementById("keyValue").value
    }

    // post them to the server
    postKey("/store",data).then((yourKey) => {
            //chack the key which was returned
            console.log(`key from db=${JSON.stringify(yourKey)}`);
    });
    
    // Empty the form
    document.getElementById("keyName").value = ""
    document.getElementById("keyValue").value = ""
}

async function postKey(url,data) {
    console.log(data);
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    // get the key out of the response
    const key =  await response.json();
    return  key// parses JSON response into native JavaScript objects
  }

// add click listener
addButton.addEventListener("click", storeKey);