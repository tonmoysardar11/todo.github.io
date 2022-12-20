
// for dark mode button
// t=document.getElementsByClassName('table');
// Dark.addEventListner('click',function() {
// document.getElementById('toggle').style.backgroundColor="black";
// t.classList.remove('table-dark');
// });
// t=document.getElementsByClassName('table');
// function clicked() {
//     document.getElementById('toggle').style.backgroundColor="black";
// }


function getAndUpdate(){
  var tittle = document.getElementById('title').value;
  var description = document.getElementById('description').value;
  if (localStorage.getItem("itemJSON") == null) {
    console.log('Added')
    let itemJsonarr = [];
    itemJsonarr.push([tittle, description]);
    localStorage.setItem('itemJSON', JSON.stringify(itemJsonarr))
  }
  else {
    itemJsonStr = localStorage.getItem('itemJSON')
    itemJsonarr = JSON.parse(itemJsonStr)
    itemJsonarr.push([tittle, description]);
    localStorage.setItem('itemJSON', JSON.stringify(itemJsonarr))
  }
  Update();
}
function Update(){
  if (localStorage.getItem("itemJSON") == null) {
    let itemJsonarr = [];
    localStorage.setItem('itemJSON', JSON.stringify(itemJsonarr))
  }
  else {
    itemJsonStr = localStorage.getItem('itemJSON')
    itemJsonarr = JSON.parse(itemJsonStr)
  }
  
  let tb = document.getElementById('tablebody');
  let str = "";
  itemJsonarr.forEach((element, index) => {
    str += `
    <tr>
    <th scope="row">${index + 1}</th>
    <td>${element[0]}</td>
    <td>${element[1]}</td>
    <td><button class="btn btn-primary btn-sm" onclick="done(${index})">Done</button> <button class="btn btn-danger btn-sm" onclick="imp(${index})">Mark Important</button></td>
    </tr>`
  });
  tb.innerHTML = str;
}
// += given in str to show the whole list
let a = document.getElementById("add");
a.addEventListener("click",getAndUpdate);
Update();

// done
function done(itemIndex){
  console.log("done",itemIndex)
  itemJsonStr = localStorage.getItem('itemJSON')
  itemJsonarr = JSON.parse(itemJsonStr);
  itemJsonarr.splice(itemIndex, 1);
  localStorage.setItem('itemJSON', JSON.stringify(itemJsonarr))
  Update();
};

function clr(){
  if(confirm("Do you wany to clear list?")){
    console.log('clear')
    localStorage.clear();
    Update();
    location.reload();
    document.getElementById("myForm").reset();
  }
}
