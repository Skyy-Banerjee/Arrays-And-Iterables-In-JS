//What can we store in arrays?
//They can be mixed
const twoDArray = [[1,3,4], [34,66,77]];

for(const data of twoDArray){
    for(const moreData of data){
        console.log(moreData);
    }
}

console.log(twoDArray[1]);
console.log(twoDArray[1][1]);