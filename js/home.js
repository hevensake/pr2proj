function addEvent(){
  const Time = document.getElementById('Time').value ;
  const Monday = document.getElementById('Monday').value;
  const Tuesday = document.getElementById('Tuesday').value;
  const Wednesday = document.getElementById('Wednesday').value;
  const Thursday = document.getElementById('Thursday').value;
  const Friday = document.getElementById('Friday').value;

  if (Time && Monday && Tuesday && Wednesday && Thursday && Friday) {
    const scheduleTable = document.getElementById('scheduleTable');
    const newRow = scheduleTable.insertRow(-1);
    const TimeCell = newRow.insertCell(0);
    const MondayCell = newRow.insertCell(1);
    const TuesdayCell = newRow.insertCell(2);
    const WednesdayCell = newRow.insertCell(3);
    const ThursdayCell = newRow.insertCell(4);
    const FridayCell = newRow.insertCell(5);

    TimeCell.innerText = Time; 
    MondayCell.innerText = Monday;
    TuesdayCell.innerText = Tuesday;
    WednesdayCell.innerText = Wednesday;
    ThursdayCell.innerText = Thursday;
    FridayCell.innerText = Friday;

    document.getElementById('Time').value="";
    document.getElementById('Monday').value="";
    document.getElementById('Tuesday').value="";
    document.getElementById('Wednesday').value="";
    document.getElementById('Thursday').value="";
    document.getElementById('Friday').value="";
  }else{
    alert("Please fill in all fields")
  }
}

const button = document.getElementById("button");
button.addEventListener("click",function addEvent(){
  button.textContent = "Insert Another Row";
  button.classList.add("saved");
});