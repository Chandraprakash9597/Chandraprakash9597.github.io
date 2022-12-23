function validate(){
    var n=document.form1.nam.value;
    var mail=document.form1.mail.value;
    var at_pos=mail.indexOf("@"); 
var dot_pos=mail.lastIndexOf("."); 
var num=document.form1.num.value;
var pwd=document.form1.pword.value;
    if(n==null || n=="")
    {
        alert("ënter name!!");
        return false;
    }
    else if(at_pos<1 || dot_pos<at_pos+2){
        alert("Please enter a valid email!");
        return false;
    }
    else if (isNaN(num) || num.length<1){
        alert("enter a valid number");
     return false;
    }
    else if(pwd.search(/[A-Z]/)<0 || pwd.search(/[0-9]/)<0){
        alert("Password should contain atleast one number and one upper case letter");
        return false;
    }
    else{
        alert("success");
        return true;
    }
}
function strengthValidate(){

    p3=document.form1.pword.value;

    if(p3.length<=6){

       var m= document.getElementById("strength")

       m.innerHTML="Password is weak";

       m.style.color="red"

    }

    else if(p3.length>6){


        if(p3.match(/[a-z]/g).length>2 && p3.match(/[0-9]/gi).length>2){

            var n= document.getElementById("strength")

       n.innerHTML="Password is medium";

       n.style.color="orange"

    }

        if(p3.match(/[a-z]/g).length>2 && p3.match(/[A-Z]/g).length>2 &&  p3.match(/[0-9]/g).length>2){

            var u= document.getElementById("strength")

       u.innerHTML="Password is strong";

       u.style.color="green"

        }

        }

    }

