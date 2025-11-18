function arivalahanSignatur() {

    return new Promise((resolve, reject) => {
        let time = false;
        setTimeout(() => {
            if (time) {
                resolve("i am aruvu");
            } else {
                reject("come at after 5");
            }
        },2000);
    });
}

function clearNoduve() {
    arivalahanSignatur().then((message) => {
        console.log(message);

    }).catch((error) => {
        console.log(error);

    })

}

// using async await 
async function Getarivusig(){
    try{
        let result=await arivalahanSignatur();
        console.log(result);
        
    }catch(error){
        console.log(error);
        
    }
}


clearNoduve();
clearNoduve();
Getarivusig();
console.log("noduve signatur second line ");
