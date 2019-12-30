function darktheme()
{
    document.getElementById("tb").style.backgroundColor="black";
    document.body.style.backgroundColor="black"
    document.getElementById("light").style.backgroundColor="white";
    document.getElementById("dark").style.backgroundColor="green";
}

function lighttheme()
{
    document.getElementById("tb").style.backgroundColor="white"
    document.body.style.backgroundColor="white"
    document.getElementById("light").style.backgroundColor="green";
    document.getElementById("dark").style.backgroundColor="white";
}

function show(val) 
         { 
             document.getElementById("output").value+=val 
         } 
           
         
         function calculate() 
         { 
             let x = document.getElementById("output").value 
             let y = eval(x) 
             document.getElementById("output").value = y 
         } 
           
          
         function eraseAll() 
         { 
             document.getElementById("output").value = "" 
         } 
         
         function eraseAll() 
         { 
             document.getElementById("output").value = ""
         } 