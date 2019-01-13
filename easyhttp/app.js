const http = new easyHTTP();
const userId = 1;
// Create Data
const newPost = {
    title: 'Custom Post',
    body: 'Public Enemy is like so guns'
};
// Create Update
const updatePost = {
    title: 'Custom Post',
    body: 'Public Enemy is like so shotguns'
};



// Get Posts All
// http.get('https://jsonplaceholder.typicode.com/posts', function (error, posts) {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log(posts);
//     }
// });


// Get Posts All
// http.get(`https://jsonplaceholder.typicode.com/posts/${userId}`, function (error, post) {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log(post);
//     }
// });

// POST Post
// http.post('https://jsonplaceholder.typicode.com/posts', newPost, function (error, post) {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log(post);
//     }
// });

//PUT Post
// http.put('https://jsonplaceholder.typicode.com/posts/1', updatePost, function (error, post) {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log(post);
//     }
// });

//DELETE Post
http.delete('https://jsonplaceholder.typicode.com/posts/1', function(error, response){
    if(error){
        console.log(error);
    }else{
        console.log(response);
    }
});