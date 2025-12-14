
function number(){
    const userinput = document.getElementById("input").value;
    const randomnumber = Math.floor(Math.random()*10)+1;
    if(userinput==randomnumber){
        alert("Congratulation! You gues the correct number");

    }
    else{
        alert("Sorry! You gues the wrong number. the correct number is" + randomnumber)
        
    }

    console.log(randomnumber);
    console.log(userinput);



}
