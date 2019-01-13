document.getElementById('btnText').addEventListener('click', getText);
document.getElementById('btnJson').addEventListener('click', getJson);
document.getElementById('btnApi').addEventListener('click', getApiData);

// Get Local Text Data
function getText() {
    fetch('test.txt')
        .then(function(response){
            return response.text();
        }).then(function(data){
            console.log(data);
            document.getElementById('output').innerHTML = data;
        }).catch(function(err){
            console.log(err);
        });
}

// Get Local Json Data
function getJson() {
    fetch('test.json')
    .then(function(response){
        return response.json();
    }).then(function(data){
        console.log(data);
        document.getElementById('output').innerHTML = JSON.stringify(data);
    }).catch(function(err){
        console.log(err);
    });
}

// Get Local Api Data
function getApiData(){
    fetch('https://jsonplaceholder.typicode.com/posts/5')
        .then(function(response){
            if(response.status === 200){
                return response.json();
            }
        }).then(function(data){
            console.log(data);
            document.getElementById('output').innerHTML = JSON.stringify(data);  
        }).catch(function(err){
            console.log(err);
        });
}