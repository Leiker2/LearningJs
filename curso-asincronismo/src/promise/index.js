const promise = new Promise((resolve,reject) => {
    resolve('heyy!')
})

//_____________________________________________________
//Otra promesa

const cows = 15;

const countCows = new Promise((resolve,reject) => {
    if(cows > 10){
        resolve(`We have ${cows} cows on the farm`);
    }else{
        reject(`there is no cows on the farm`);
    }
});

countCows
    .then (result => console.log(result))
    .catch(error => console.log(error))
    .finally(() => console.log('esto ha terminado'))
