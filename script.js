const body = document.getElementsByTagName('body')[0];

for (let i = 0; i< 8; i++){
  let newDiv = document.createElement('div');
  newDiv.style.width = "1vh";
  newDiv.style.height = '1vh';
  if (i % 2){
    newDiv.style.backgroundColor = 'red';
  }else{
    newDiv.style.backgroundColor = 'black';
  }
  body.appendChild(newDiv);
}
