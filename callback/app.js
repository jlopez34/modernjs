const posts = [{ title: 'Post One', body: 'this is post one' }, { title: 'Post Two', body: 'this is post two' }];

function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 15000);
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

createPost({title:'Post three', body:'this is post three'}, getPosts);

getPosts();