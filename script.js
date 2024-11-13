document.getElementById("userform").addEventListener("submit", function(event)
{
    event.preventDefault();


let name = document.getElementById("name").value;
let age = parseInt(document.getElementById("age").value);

const ageVerify = new Promise((resolve, reject) =>{
    setTimeout (() => {
    if(age > 18){
        resolve();
    }
    else{
        reject();
    }
},4000);
});

ageVerify.then(() =>{
    alert(`Welcome, ${name}. You can vote.`)
}).catch(() =>{
    alert(`Oh sorry ${name}. You aren't old enough.`)
});
});



