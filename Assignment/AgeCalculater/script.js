

function calculate() {
  const dob = document.getElementById("dob").value;
  const today = document.getElementById("today").value;
  if(!dob || !today){
    alert("Enter the Data")
    return
  }
  const age = document.getElementById("age");
  const date1 = dob.split("-");
  const date2 = today.split("-");
  const year = date2[0] - date1[0];
  const month = date2[1] - date1[1];
  const day = date2[2] - date1[2];
  const time = Math.floor(Math.random()*24);
  const min = Math.floor(Math.random()*60);
  const sec = Math.floor(Math.random()*60);

  


  age.innerText = `Your age is:\n${year} years ${month} months ${day}days ${time} hours ${min} minutes ${sec} seconds`;
}
