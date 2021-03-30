const ARRAY_LENGTH = 5
var isSort = true;

try {
    
// var data = Array.from(Array(ARRAY_LENGTH)).map(x=>Math.floor(Math.random()*100))

var data = Array.from(Array(10)).map(e=>Math.floor(Math.random()*100))
var temp;
console.log("unsort ", data)
console.time()
for (let a = 0; a < data.length ; a++) {
    isSort = true;
    for (let b = 0; b < data.length-1; b++) {
        if (data[b] > data[b + 1]) {
            temp = data[b + 1]
            data[b + 1] = data[b]
            data[b] = temp
            isSort = false;
        }
    }
    if(isSort){
        console.timeEnd()
        console.log("sort ", data)
        return true
    }
}


console.timeEnd()
console.log("sort ", data)

} catch (error) {
 console.log("error : : ",error)   
}