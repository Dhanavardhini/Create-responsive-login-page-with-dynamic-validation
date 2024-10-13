
function sd() {
    
    let Username="vebbox";
    let password="12345";
        
    let a=document.getElementById("bb").value;
    let b=document.getElementById("cc").value;
    let c=document.getElementById("v2");
    let e=document.getElementById("v4");
   

    
        if (a === Username && b === password ) {

            console.log("correct");
            c.innerText="your username correct"
            c.style.color="green"
            c.style.paddingLeft="10px"
            e.innerText="your password correct"
            e.style.color="green"
            e.style.paddingLeft="10px"
            document.getElementById("bb").style.border="2px solid green"
             document.getElementById("cc").style.border="2px solid green"

        }
        else if(a === Username ){
            console.log("correct");
            c.innerText="your username correct"
            c.style.color="green"
            c.style.paddingLeft="10px"
            e.innerText="your password wrong"
            e.style.color="red"
            e.style.paddingLeft="10px"
             document.getElementById("bb").style.border="2px solid green"
              document.getElementById("cc").style.border="2px solid red"
        }
        else if( b === password){
            console.log("correct");
            e.innerText="your password correct"
            e.style.color="green"
            e.style.paddingLeft="10px"
            c.innerText="your username wrong"
            c.style.color="red"
            c.style.paddingLeft="10px"
             document.getElementById("cc").style.border="2px solid green";
             document.getElementById("bb").style.border="2px solid red";
        }
        
        else{
            console.log(" not correct");
             document.getElementById("bb").style.border="2px solid red";
             document.getElementById("cc").style.border="2px solid red";
            c.innerText="your username wrong"
            c.style.color="red"
            c.style.paddingLeft="10px"
            e.innerText="your password wrong"
            e.style.color="red"
            e.style.paddingLeft="10px"
        }
    }
    
    // ------------------------

    