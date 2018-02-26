a = [36, "Ryan", 1];


function numbersOnly(Array) {
    var i = 0;
    var myNewArray=[];
    for(Array[i]; i <= Array.length; ++i) {
        if(typeof Array[i] == "number") {
            myNewArray.push(Array[i]);
        }
    }
    Array = myNewArray;
    console.log(Array);
    return Array;
}

numbersOnly(a);