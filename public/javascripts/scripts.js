const addButton = document.querySelector(".add");
const deleteBtn = document.querySelector(".delete");
const removeBtn = document.querySelector(".remove");
const badMsg = document.querySelector(".bad-note");
const goodMsg = document.querySelector(".good-note");
const storeKey = (e) => {
    e.preventDefault();
    // grab the values
    const data = {
        name:document.getElementById("keyName").value.split(' ').join(''),
        apiKey: document.getElementById("keyValue").value
    }

    if (!data.name.length > 0 || !data.apiKey.length > 0){
      // show the flash message
      badMsg.classList.remove("hide");
      setTimeout(() => {
        location.reload();
      }, 1000);
    }else{
      // post them to the server
      postKey("/store",data).then((yourKey) => {
        document.querySelector(".snippet").innerHTML = 
        `<h2>Place this code snippet into your JS file</h2>
        <pre class="box">
        <code>
          // This calls the API, just update the url to have your key's name.
          async function fetchKey() {
              const url = 'https://portunus-37606f126db8.herokuapp.com/store/${yourKey.name.split(' ').join('')}'
              console.log(url)
              const response = await fetch(url);
              const key = await response.json();
              return key;
          }
          // Call this wherever you need your key.
          fetchKey().then((key) => {
              secretKey = key.apiKey;
              console.log(secretKey);
          });
        </code>
      </pre>`;
        //check the key which was returned
        console.log(`key from db=${JSON.stringify(yourKey)}`);
      });
      // Empty the form
      document.getElementById("keyName").value = ""
      document.getElementById("keyValue").value = ""
    }
  

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

    response.ok ? document.querySelector(".notification").classList.remove("hide"):console.log("Error in the request")
    // get the key out of the response
    const key =  await response.json();
    return  key// parses JSON response into native JavaScript objects
}

const removeNote = (e) => {
    console.log("clicking");
    e.target.parentElement.remove();
}
/**
 * @todo Write the click listener for the comments form.
 * @todo POST to comments function (Require the router in app.js).
 */
// add click listener
addButton.addEventListener("click", storeKey);
deleteBtn.addEventListener("click",removeNote); 
removeBtn.addEventListener("click",removeNote); 

        
          // This calls the API, just update the url to have your key's name.
          async function fetchKey() {
            const url = 'https://portunus-37606f126db8.herokuapp.com/store/thisonehasspaces'
            const response = await fetch(url);
            const key = await response.json();
            return key;
        }
        // Call this wherever you need your key.
        fetchKey().then((key) => {
            secretKey = key.apiKey;
            console.log(secretKey);
        });
      
    
        
                     
 
          
  
      
    
        
      
    
      
    