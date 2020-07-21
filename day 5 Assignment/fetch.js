console.log("fetch");
//get request
//fetch('https://jsonplaceholder.typicode.com/posts/1')
fetch('https://jsonplaceholder.typicode.com/todos/100')
.then(response=>response.json())//response converted into json
.then(data=>console.log(data))//data access


//console.log("async");
const photos = [];
async function photoupload(){
    let status = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            photos.push('download.png');
            resolve('photo updated');
        },3000)
    })
    let result = await status;
    console.log(photos.length);

}
photoupload();
