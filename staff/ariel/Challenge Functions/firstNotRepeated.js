/* ## First not repeated

Write a JavaScript function to find the first not repeated character.

    Sample arguments : 'abacddbec' 
    Expected output : 'e' 

*/



function getRandomString(){
    var letters=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var generatedString = '';
    var elementosMax = window.prompt('Ingrese el máx nro de elementos que tendrá el string', 'max elements');
    var elementos = Math.round(Math.random()*elementosMax);
    var parImpar = 0;

    for (var i = 0; i<elementos; i++){
        parImpar = (Math.round(Math.random()*25));
        if (Number.isInteger(parImpar/2)){
            generatedString = generatedString + letters[parImpar];
        } else {
            generatedString = generatedString + Math.round(Math.random()*100);
        };
    };

        console.log('El generated string es: ' + generatedString);

    return generatedString

};



function convertStringToArray(){

    this.string = getRandomString();

    var convertedArray = this.string.split("");

    return convertedArray
};

function firstNotRepeated(){

    this.array = convertStringToArray()

    var count = 0;

    for (var i=0; i<this.array.length; i++){
        for (var j=this.array.length; j>i; j--){
            if(this.array[i] == this.array[j]){
                count = count + 1
            };
        };

        if (count == 0){
            notRepeatedLetter = this.array[i];
            break;
        };
    };

    console.log('The first nor repeated element is: ' + notRepeatedLetter)
}

firstNotRepeated();



// ============================= Solución Citlas


function firstNotRep(str){
    str = str.split('')
    var arr = []
    var counter = {}
    str.forEach(function(el, i, elArr){//el primer elemento siempre es el elmento, el segundo el index y el tercero el array
      if(counter[el]){
        counter[el]++
      } else {
        counter[el]=1
      }
      
     
    })
  console.log(counter);
    for (var key in counter) {
      console.log(key)
      console.log(counter[key])
      if(counter[key]>1){
      delete counter[key]
    }
    }
   
    console.log(counter)
    return Object.keys(counter)[0];
  }
  console.log(firstNotRep('aabbccd'));
