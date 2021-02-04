class Numbers {
    //Function to get even numbers
    getEven(str) {
        let array = str.split(",");
        let even = [];
        for(let i=0; i<array.length; i++){
            if(array[i]%2==0){
                even.push(array[i]);
            }
        }
        return even;
    }
    //Function to get odd numbers
    getOdd(str){        
        let array = str.split(",");
        let odd = [];
        for(let i=0; i<array.length; i++){
            if(array[i]%2==1){
                odd.push(array[i]);
            }
        }
        return odd;
    }
    
}
module.exports = Numbers;
