
console.log("Hello From the console and getting it from javaScript");

const result = (address)=> {
    message.textContent = "Fetching data.."
    const urll = `/weather?address=${address}`

    fetch(urll).then (( response) => { 
    

        response.json().then((data) => {

            if(data.err){
               message.textContent=data.err;
            }
            else{
                console.log(data)
                message.textContent=data.value;
            }

            })  
        })        
}

const weather = document.querySelector('form')
const search = document.querySelector('input')
const message = document.querySelector('.todays-weather')

weather.addEventListener('submit',(event)=> {
    event.preventDefault(); 
    const l = search.value;
    result(l);
})
