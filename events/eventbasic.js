// attachEvent() earlier used
// jQuery - on
//1.dont inject javascript in pure html
//2.document.querySelector("#one").onClick = function(){
//    alert("one clicked!")
//}
//the above two approaches are not recommended to used because it litmits the functionality
//of eventlistener therefore you should use 
//
//document.querySelector("#one").addEventListener('click',funcion(e)
//{
//  
//},false)
//event object

// type, timestamp, defaultPrevented,
// target,toElement, srcElement, currentTarget,clientX, clientY,
// screenX,screenY,altKey, ctrlkey,shiftkey,keycode

//3rd parameters(event propagation)
//if false bubbling Up
//e.stopPropagation()
//e.preventDefault()
//if true capturing mode
