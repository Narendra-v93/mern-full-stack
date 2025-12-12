function calculate(){
    const amount= parseFloat(document.getElementById("BillAmount").value.trim());
     const dis= parseFloat(document.getElementById("service").value.trim());
     const person= parseInt(document.getElementById("numberOfPersons").value.trim());

     if(!amount){
       alert ("Plase paid the Bill");
        return;
     }
     let  persentage = (amount*dis)/100;
     let amountp = persentage/person;
    
     document.getElementById("result").innerText ="Tip Amount  "+amountp+" ₨.each";
    
}