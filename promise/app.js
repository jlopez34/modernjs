const posts = [{ title: 'Post One', body: 'this is post one' }, { title: 'Post Two', body: 'this is post two' }];

function createPost(post) {
   return new Promise(function(resolve, reject){
    setTimeout(() => {
        posts.push(post);
        const error = true;

        if(!error){
            resolve();
        }else{
            reject('Error : Something went wrong');
        }
        
    }, 15000);
   });     
}

function getPosts() {
    setTimeout(function(){
        let output = '';
        posts.forEach(post => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    },10000);
}

createPost({title:'Post three', body:'this is post three'})
    .then(getPosts)
    .catch(function(err){
        console.log('ErrorResponse : '+ err);
    });

getPosts();