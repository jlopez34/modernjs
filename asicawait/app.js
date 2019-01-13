async function myFunc(){
    const promise = new Promise((resolve,reject)=>{
        setTimeout(()=>resolve('Hello guys'), 3000);
    });

    const error = true;

    if(error){
        await Promise.reject(new Error('Something went wrong'));
    }else{
        const res = await promise; //wait until promise is resolved
        return res;
    }

}

myFunc()
.then(res => console.log(res))
.catch(err => console.log(err));
