function submit() {  
    const nm = document.getElementById("fullName").value.trim();
    const ph = document.getElementById("mobile").value.trim();      
    const em = document.getElementById("email").value.trim();
    const db = document.getElementById("dob").value.trim();        
    const cr = document.getElementById("course").value.trim();      
    const ct = document.getElementById("city").value.trim();
    const pn = document.getElementById("pin").value.trim();
    const gph = document.getElementById("GNumber").value.trim();   

    
    if(!/^[A-Za-z\s]+$/.test(nm))
 { 
        alert("Valid name only"); 
        return; 
    }
     if(!/^[6-9]\d{9}$/.test(ph))
         { 
        alert("10-digit mobile");
         return; 
        }
 
    if(!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(em))
     { 
     alert("Valid Gmail only");
     return;
  }

   

        

//  if (!nm) {
//     document.getElementById("NameError").innerText = "Required";
//     return;
//   } else if (!/^[A-Za-z ]+$/.test(nm)) {
//     document.getElementById("NameError").innerText =
//       "Only Alphabets and Spaces are Allowed";
//     return;
//   }
//  if (!ph) {
//     document.getElementById("PhoneError").innerText = "Required";
//     return;
//   } else if (!/^[6-9]\d{9}$/.test(ph)) {
//     document.getElementById("PhoneError").innerText =
//       "Only Indian Mobile Nummber allowed";
//     return;
//   }
//   if (!em) {
//     document.getElementById("EmailError").innerText = "Required";
//     return;
//   } else if (!/^[\w\.]+@(gmail|outlook|ricr|yahoo)\.(com|in|co.in)$/.test(em)) {
//     document.getElementById("EmailError").innerText = "Use Proper Email Format";
//     return;
//   }
//  if(!ct){
//     alert("Enter city");
//     return;
//  } 

//  if(!pn){
//     alert("Enter PIN");
//     return;
//  }
//  if (!gph) {
//     document.getElementById("PhoneError").innerText = "Required";
//     return;
//   } else if (!/^[6-9]\d{9}$/.test(ph)) {
//     document.getElementById("PhoneError").innerText =
//       "Only Indian Mobile Nummber allowed";
//     return;
//   }
  
//   if(!cr)
//   {
//     alert("Select Course");
//     return;
//   }

 
    // Age check


    const today = new Date();
    const birthDate = new Date(db);
    let age = today.getFullYear() - birthDate.getFullYear();
    if (today.getMonth() < birthDate.getMonth() || 
        (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate())) {
        age--;
    }
    if(age < 15) 
        { 
        alert("Age must be 15+");
         return;
         }

         if(!dob)
         {
            alert("Enter DOB");
            return;
         }

        

    if(!ct || !/^[a-zA-Z\s]+$/.test(ct)) 
        { 
        alert("Enter city");
         return; 
        }

        



    if(!pn || !/^[1-9]\d{5,6}$/.test(pn))
         { 
        alert("Valid PIN");
         return;
         }
     if(!gph ||  !/^[6-9]\d{9}$/.test(gph))
         { 
        alert("10-digit mobile");
         return;
         }

        

{
    const data = {
        fullName: nm, 
        email: em, 
        mobile: ph, 
        dob: db,
        course: cr, 
        city: ct, 
        pin: pn, 
        guardianPhone: gph
    };
    console.log(data);
    alert("Submitted: " + JSON.stringify(data, null, 2));
}

}
function clearForm(){
    document.getElementById("regForm").reset();

}


