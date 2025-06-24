//function to handle button clicks

function appendValue(value){
    document.getElementById("result").value += value;
}

//function to clear the display
 function clearDisplay(){
    document.getElementById("result").value = '';
 }

 //Function to calculate the result

 function calculate(){
    try{
        let expression=document.getElementById("result").value;

        let result=eval(expression);

        if(isFinite(result)){
            document.getElementById("result").value=result;

        }
        else{
            document.getElementById("result").value='Error';
        }
    }

catch(e){
    document.getElementById("result").value='Error';

}
 }
