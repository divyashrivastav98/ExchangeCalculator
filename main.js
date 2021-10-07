let currOne = document.querySelector('#currency-one');
let currTwo = document.querySelector('#currency-two');
let rateOne = document.querySelector('#rate-one');
let rateTwo = document.querySelector('#rate-two');
const swapBtn = document.querySelector('#swap');
const text = document.querySelector('.rate');

const exchange = () => {
    let one = currOne.value;
    let two = currTwo.value;
    let rOne = rateOne.value;
    let rTwo;

    fetch(`https://api.exchangerate-api.com/v4/latest/${one}`)
    .then((response)=>{
        return response.json();
    }).then((data)=>{
        rTwo = data.rates[two] * rOne;
        text.textContent = `${rOne} ${one} = ${rTwo} ${two}`;
        rateTwo.value = rTwo.toFixed(2);
    }).catch((err)=>{
        console.log(err);
    })
}

swapBtn.addEventListener('click',()=>{
    let one = currOne.value;
    let two = currTwo.value;

    currOne.value = two;
    currTwo.value = one;

    exchange();
})

currOne.addEventListener('change',exchange)
currTwo.addEventListener('change',exchange)
rateOne.addEventListener('input',exchange)
rateTwo.addEventListener('input',exchange)

exchange();