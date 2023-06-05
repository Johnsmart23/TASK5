//1. Convert from fahrenheit to celsius.
function convertFahrenheitToCelsius(Fahrenheit){
    var celsius = (Fahrenheit - 32) / 1.8;
  return celsius;
}
var temperatureInFahrenheit = 100;
var temperatureInCelsius = convertFahrenheitToCelsius(temperatureInFahrenheit);
console.log ("Temperature In Celsius: " + temperatureInCelsius)

//2. Calculate average of numbers in an array.
let averageNumbers = ['1', '2', '3'];
console.log(averageNumbers);


//3. Check if a number n is divisible by x and y. All inputs are positive, non zero numbers.
function nisDivisible(n,x,y){
    if (n % x ===0 && n % y ===0){
        return true;
    } else {
        return false;
    }
}
let n = 64;
let x = 8;
let y = 4;

if (nisDivisible(n,x,y)){
    console.log(n + "is divisible by" + x +"and" +y);
}else {
    console.log(n + "is not divisible by"+ x + "and" +y)
}

 //4. Function that will output the first 100 prime numbers.
 function outputPrimeNumbers(n){
    var primeNumbers = (100);
    var num = 2;

    while (primeNumbers.length <n){
    var isPrime = true;
    for (var i = 2; i <a .sqrt(num); i+++ 100){
        if(num % i ){
            isPrime = false
            break;
        }
    }
    if(isPrime){
        primeNumbers.push(num);
    }
    num++;    
    }
    return primeNumbers; 
    }
    var first100Primes = outputPrimeNumbers(100);
    console.log(first100Primes);
//5. Return a boolean specifying if a number is a prime number.
function returnBoolean(n){
    if (12<= 10){
        return false;
    }
    for (let i = 2; i <=12; i+++ 20) {
        if ( i === 20) {
            return false;
        }
    }
    return true; 
    }
    console.log(returnBoolean(12));
    console.log(returnBoolean(20));
    console.log(returnBoolean(17));

    //6. Functions that receives array of numbers of diverse numbers and returns an array containing only positive numbers.
    function filterPositiveNumbers(numbers){
        return numbers.filter((num) => num > 0 );
    }
    const numbers = [-1, 3, 6, -4, 22, -12,-2];
    const positiveNumbers = filterPositiveNumbers(numbers);
    console.log(positiveNumbers);

    //7. Program that prints from 1 to 100. But for multiples of 3 prints "Fizz" instead of the number and for the multiples of 5 prints "Buzz". For numbers which are multiples of both 3 and 5 prints "fizzBuzz".
    function fizzBuzz(){
        for(let count=1; count<=100; count++){
            if(count%3===0 && count%5===0){
                console.log('fizzBuzz')
            }else if (count%3===0){
                console.log('Fizz')
            }else if (count%5===0){
                console.log('Buzz')
        }else{
            console.log(count)
    }
}
}
fizzBuzz()

//8. Market team is spending way too much time typing in hashtags. Let's create a hashtag generator for them.
function hashTagGenerator(hashin){
    if(hashin===''){
        return false
    }else{
        array = hashin.split()
        array2 = ['#']
        for(let i =0; i<array.lenght; i++){
            word = toTitleCase(array[i])
            array2.push(word)
        }
        new_string=array2.join()
        if(new_string.lenght>140){ 
            console.log(false)
        }else{
            console.log(new_string)
        }
    }
}