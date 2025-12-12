function sumbit(){
    const nm= document.getElementById("fullName").value.trim()
    const ph= document.getElementById("phone").value.trim()
    const em= document.getElementById("Email").value.trim()
    const db= document.getElementById("date").value.trim()

    if(!/^ [\w ]+ $/.test(nm)){
        alert("Wrong Input name");
        return;
    }
    if(!/^ [\w\.]+@(gmail|outlook|ricr|yahoo)\.(com|in|co.in)$/.test(em)){
        alert("Wrong Input email");
        return;
    }
    
    if(!/^ [6-9]\d{9} $/.test(ph)){
        alert("Wrong Input number");
        return;
    }

    const  currentYear= new Date().getFullYear();
    const birthDay= Number(db.split("-")[0]);

    if(currentYear-birthDay<17){
        
    }

   
   
    

    const data ={
        fullName :nm,
        Email:em,
        phone:ph,
        DOB:db,
    };
    console.log(data)
}