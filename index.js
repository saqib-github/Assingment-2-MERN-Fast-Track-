// Functions used in assignments

const addString = (a,b) => {
    return a+b;
  };

const splitString = (a) => {
    return a.split(';');
  };

const countOccurrences = (array, value) => {
    let z = 0;
    // console.log(arr.length);
    for (let i=0 ; i<array.length ; i++){
        if (array[i] == value){
            
            z++;
        }
    }
    return z;
};

//              ///////

// extra functions to handle html
const concatBtn = () => {
    let a = document.getElementById("string1").value;
    let b = document.getElementById("string2").value;
    if(a=="" && b==""){
        alert("Please Enter One Value");
    }else{
    document.getElementById('addString').value = addString(a,b);
    }
};

const splitBtn = () => {
    let a = document.getElementById("splitString").value;
    if(a==""){
        alert("Please Enter Value");
    }else{
    document.getElementById('finalsplitString').value = splitString(a);
    }
};

const occurence = () => {
    let a = document.getElementById("array").value;
    let b = document.getElementById("integer").value;
    if(a=="" || b==""){
        alert("Please Enter Both Values");
    }else{
    a = a.replace("[", "");
    a = a.replace("]", "");
    a = a.trim();
    a = a.split(','); 
    document.getElementById('valueOccur').value = countOccurrences(a,b);
    }
};