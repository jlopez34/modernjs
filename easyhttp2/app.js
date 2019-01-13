const http = new EasyHTTP();

const data = {
    name: 'Jay Key',
    username: 'jeykey',
    email: 'jaykey@jay.com'
}



http.get('https://jsonplaceholder.typicode.com/users')
    .then(data => {
        console.log('Get Method ======================= \n');
        console.log(data);
    })
    .catch(err => console.log(err));

http.post('https://jsonplaceholder.typicode.com/users', data)
    .then(data => {
        console.log('Post Method ======================= \n');
        console.log(data);
    })
    .catch(err => console.log(err));

http.put('https://jsonplaceholder.typicode.com/users/2', data)
    .then(data => {
        console.log('Put Method ======================= \n');
        console.log(data);
    })
    .catch(err => console.log(err));
http.delete('https://jsonplaceholder.typicode.com/user/2')
    .then(data => {
        console.log('Delete Method ======================= \n');
        console.log('User deleted successfully', data);
    }).catch(err => console.log(err));


