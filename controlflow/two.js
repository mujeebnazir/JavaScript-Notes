const month = 3
//use can compare strings too
switch(month){
    case 1:
        console.log("Janurary");
        break;
    case 2:
        console.log("Feb");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    default: 
           console.log("default case match");  
           break;  
}

//if break isnt there by default allcode after that match case which dosnt
// have break will run but not the default case 