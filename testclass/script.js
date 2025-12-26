 function Submit(){

    console.log("Form Submitted");   
    const em = document.getElementById("email").value;

    const msg = document.getElementById("eessage").value;           
    console.log("Email: " + em);
    console.log("Message: " + msg);

    alert("Form Submitted Successfully");


}