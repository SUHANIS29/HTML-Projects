const redslider=document.getElementById("redslider");
const greenslider=document.getElementById("greenslider");
const blueslider=document.getElementById("blueslider");

const redvalspan=document.getElementById("redval");
const greenvalspan=document.getElementById("greenval");
const bluevalspan=document.getElementById("blueval");

const colorbox=document.getElementById("color-box");
const copyButton=document.getElementById("copyButton");
const inputTypeRGBValue=document.getElementById("inputType");

redslider.addEventListener('input',updateColor);
greenslider.addEventListener('input',updateColor);
blueslider.addEventListener('input',updateColor);
copyButton.addEventListener('click',copyRGB);

function updateColor(){
  const redval=redslider.value;
  const blueval=blueslider.value;
  const greenval=greenslider.value;

  console.log(redval,greenval,blueval);

  const rgbcolor=`rgb(${redval},${greenval},${blueval})`;
console.log(rgbcolor);
  
colorbox.style.backgroundColor=rgbcolor;


  redvalspan.textContent=redval;
  greenvalspan.textContent=greenval;
  bluevalspan.textContent=blueval;

  inputType.textContent=rgbcolor;

}
updateColor();

function copyRGB(){
  const redval=redslider.value;
  const blueval=blueslider.value;
  const greenval=greenslider.value;
  const rgbcolor=`rgb(${redval},${greenval},${blueval})`;
  navigator.clipboard.writeText(rgbcolor)
  .then(()=>{
alert("rgb value:"+rgbcolor);

  })
  .catch((error)=>{
    console.error("failed to copy rgb value",error);
  });
}
