var data = [1, 2, 3, 4, 7, 8, 9, 10];

console.log("Data before : ", data)


for (let index = 0; index < data.length; index++) {
    for (let indexJ = 0; indexJ < data.length; indexJ++) {
        if (data[indexJ] > data[indexJ + 1]) {
            
            let temp = data[indexJ + 1]
            data[indexJ + 1] = data[indexJ]
            data[indexJ] = temp
        }
    }
    
}
console.log("Data after : ", data)