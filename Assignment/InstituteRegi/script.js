function submit() {  
    const nm = document.getElementById("fullName").value.trim();
    const ph = document.getElementById("mobile").value.trim();      
    const em = document.getElementById("email").value.trim();
    const db = document.getElementById("dob").value.trim();        
    const cr = document.getElementById("course").value.trim();      
    const ct = document.getElementById("city").value.trim();
    const pn = document.getElementById("pin").value.trim();
    const gph = document.getElementById("GNumber").value.trim();   

    
    // if(!/^[A-Za-z\s]+$/.test(nm)) { 
    //     alert("Valid name only"); return; }

    //     if(!nm) { 
    //     alert("Enter full name"); return; }
    // if(!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(em)) { 
    //     alert("Valid Gmail only"); return; }
    // if(!/^[6-9]\d{9}$/.test(ph)) { 
    //     alert("10-digit mobile"); return; }

    // Age check
    const today = new Date();
    const birthDate = new Date(db);
    let age = today.getFullYear() - birthDate.getFullYear();
    if (today.getMonth() < birthDate.getMonth() || 
        (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate())) {
        age--;
    }
    if(age < 15) { 
        alert("Age must be 15+"); return; }

    // if(!ct || !/^[a-zA-Z\s]+$/.test(ct)) { 
    //     alert("Valid city"); return; }
    // if(!pn || !/^[1-9]\d{5,6}$/.test(pn)) { 
    //     alert("Valid PIN"); return; }
    //  if(!gph ||  !/^[6-9]\d{9}$/.test(gph)) { 
    //     alert("10-digit mobile"); return; }

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


