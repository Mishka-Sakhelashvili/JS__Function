
var array = [
    [1,2,3,4,5,6],
    [1,2,3,4,5,6],
    [1,2,3,4,5,6],
    [1,2,3,4,5,6],
]

function exercise(arr){
    const length = arr.length;
    const int = arr[0].length;
    let sum = 0;

    for (let i = 0; i < length; i++) {
        
        for ( let j = 0; j < int; j++) {

            if (i === 0){ sum += arr[i][j] } 

            else if (i === length - 1){ sum += arr[i][j] }

            else if (j === 0){ sum += arr[i][j] }

            else if (j === int - 1){ sum += arr[i][j] }
        }
    }
    console.log(sum)
    return sum; 
}

exercise(array);