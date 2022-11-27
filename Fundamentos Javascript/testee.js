let arr = [3,7,5,6,2]
let numeroarr = 0;

    const array1 = arr.slice(0, arr.length/2)
    const array2 = arr.slice(arr.length/2)
    
    array1.reduce((acum, atual) => atual + acum, 0);
    array2.reduce((acum, atual) => atual + acum, 0);
    
    reduce(array1)
    reduce(array2)
    function reduce(arr){
        for (let index = 0; index < arr.length; index++) {
             numeroarr += arr[index];
            
        }
    }
    console.log(numeroarr)