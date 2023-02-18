// nav-blog-button
document.getElementById('blog-btn').addEventListener("click",function(){
    window.location.href='blog.html'
})
let counter = 0;

function calculateArea(h,w){
  return h*w;
}

function calculateArea1(h,w){
  return 0.5*h*w;
}
function addResult(name, value){
  const re = document.getElementById("result-container");
  const newDiv = document.createElement("div");
  newDiv.innerHTML = `<div class="flex justify-between items-center mt-2">
  <p class="text-sm">${++counter}. ${name}</p>
  <p class:"text-sm">${value} cm<sup>2</sup></p>
  <button class="text-sm bg-blue-500 px-4 py-1 text-white rounded-md  hover:bg-neutral-300 hover:text-black">Convert to m<sup>2</sup></button>
</div> `;
  re.appendChild(newDiv);
}

// triangle-part...............................................................
function triangle(){
  // input-triangle-b
  const binput=document.getElementById('triangle-b')
  const newbinputString=binput.value;
  const newInputb=parseInt(newbinputString)
  // input-triangle-h
  const hinput=document.getElementById('triangle-h')
  const newhinputString=hinput.value;
  const newInputh=parseInt(newhinputString)
 // conditon
  if(isNaN(newInputb) || isNaN(newInputh)){
    alert( 'Please give Number!')
    return
 }
 if(newInputb<0 || newInputh<0){
   alert('Negative Number not allow')
   return
 }
// total-amount
  const total= calculateArea1(newInputb,newInputh).toFixed(2);
  const totalElement=document.getElementById('totalTraiangle');
   // emtry-input
 binput.value=''
 hinput.value=''
 addResult("Triangle", total);
}


document.getElementById('triangle-btn').addEventListener('click',function(){
  triangle()
 
})


//Rectangle-------------------------------------------------part----------------
function Rectangle(){
  const winput=document.getElementById('winputRectangle')
  const newbinputString=winput.value;
  const newInputw=parseInt(newbinputString)

  const hinput=document.getElementById('iinputRectangle')
  const newhinputString=hinput.value;
  const newInputi=parseInt(newhinputString)
  // conditon
 if(isNaN(newInputw) || isNaN(newInputi)){
    alert( 'Please give Number!')
    return
 }
 if(newInputw<0 || newInputi<0){
   alert('Negative Number not allow')
   return
 }
// total-amount
  const total=calculateArea(newInputw,newInputi).toFixed(2);
  const totalElement=document.getElementById('totalRectangle')
  
//    emtry-input
  winput.value=''
  hinput.value=''
  addResult("Rectangle", total);
}
document.getElementById('btn-Rectangle').addEventListener('click',function(){
  Rectangle()
})

//parallelogram-----------------------------------------part--------------------
function parallelogram(){
  const binput=document.getElementById('binput')
  const newbinputString=binput.value;
  const newInputb=parseInt(newbinputString)
  const hinput=document.getElementById('hinput')
  const newhinputString=hinput.value;
  const newInputh=parseInt(newhinputString)
   // conditon
  if(isNaN(newInputb) || isNaN(newInputh)){
    alert( 'Please give Number!')
    return
  }
  if(newInputb <0 || newInputh <0){
   alert('Negative Number not allow')
   return
 }
// total-amount
  const total=calculateArea(newInputb,newInputh).toFixed(2);
  const totalElement=document.getElementById('totalparallogram')
// emtry-input
  binput.value='' 
  hinput.value=''
  addResult("Parallelogram", total);
}
document.getElementById('btn-parallelogram').addEventListener('click',function(){
  parallelogram()
 })

 //  Rhombus-part-------------------------------------------------------------
function Rhombus(){
  const inputdone=document.getElementById('input-d1')
  const newbinputString=inputdone.value;
  const newInputdone=parseInt(newbinputString)
  const inputdtwo=document.getElementById('input-d2')
  const newhinputString=inputdtwo.value;
  const newInputdtwo=parseInt(newhinputString)
  // conditon
     if(isNaN( newInputdone) || isNaN( newInputdtwo)){
      alert( 'Please give Number!')
      return
    }
    if( newInputdone <0 ||  newInputdtwo <0){
     alert('Negative Number not allow')
     return
   }
// total-amount
  const total=calculateArea1(newInputdone, newInputdtwo).toFixed(2)
  const totalElement=document.getElementById('totalRhombus')
  
// emtry-input
  inputdone.value='' 
  inputdtwo.value=''
  addResult("Rhombus", total);
}
document.getElementById('btn-Rhombus').addEventListener('click',function(){
  Rhombus()
 })



//  pentagon----------------------------------------------------------------part
function pentagon(){
  const pentagoninputp=document.getElementById('pentagon-input-p')
   const newbinputString=pentagoninputp.value;
   const newpentagoninputp=parseInt(newbinputString)
 
   const pentagoninputb=document.getElementById('pentagon-input-b')
   const newhinputString=pentagoninputb.value;
   const newpentagoninputb=parseInt(newhinputString)
  // conditon
  if(isNaN(newpentagoninputp) || isNaN(newpentagoninputb)){
    alert( 'Please give Number!')
    return
  }
  if(newpentagoninputp <0 ||  newpentagoninputb <0){
   alert('Negative Number not allow')
   return
 }
 // total-amount
   const total=calculateArea1(newpentagoninputp, newpentagoninputb).toFixed(2)
   const totalElement=document.getElementById('totalPentagon')
   
 // emtry-input
 pentagoninputp.value='' 
 pentagoninputb.value=''
   addResult("Pentagon", total);
}
document.getElementById('btn-pentagon').addEventListener('click',function(){
  pentagon()
   
 })


//  ellipse...........................................part......................
function ellipse(){
  const inputEllipsea=document.getElementById('inputEllipse-a')
  const newbinputString=inputEllipsea.value;
  const newinputEllipsea=parseInt(newbinputString)
  const inputEllipseb=document.getElementById('inputEllipse-b')
  const newhinputString=inputEllipseb.value;
  const newinputEllipseb=parseInt(newhinputString)
  // condition
  if(isNaN(newinputEllipsea) || isNaN(newinputEllipseb)){
    alert( 'Please give Number!')
    return
  }
  if(newinputEllipsea <0 ||  newinputEllipseb <0){
   alert('Negative Number not allow')
   return
 }
// total-amount
  const total=(3.14*newinputEllipsea* newinputEllipseb).toFixed(2);
  const totalElement=document.getElementById('totalEllipse')
  
// emtry-input
inputEllipsea.value='' 
inputEllipseb.value=''

addResult("Ellips", total);

}
document.getElementById('btn-ellipse').addEventListener('click',function(){
  ellipse()
 })

