const generatepass=document.querySelector("#generatepass");
const pwdcontainer=document.querySelector("#pwdcontainer");
const copyText=document.querySelector("#copyText");
const select=document.querySelector("#select");
console.log(select.value)
document.querySelector("#specificchars").addEventListener('click',(e)=>{
    document.querySelector("#specificcharsinput").classList.remove('d-none');
    document.querySelector("#specificchars").classList.add('d-none');


})
document.querySelector("#showselectEl").addEventListener('click',(e)=>{
    select.classList.remove('d-none');
    document.querySelector("#showselectEl").classList.add('d-none')
// select.classList.add('d-block');
})
generatepass.addEventListener('click',(e)=>{
    // console.log("its working")
    pwdcontainer.classList.remove('invisible');
    copyText.classList.remove('d-none');
    randompassgenerator();
})
const randompassgenerator=()=>{
 var specific=document.querySelector("#specificcharsinput");
 let specificchars=specific.value;
 console.log(specificchars)
    document.getElementById('clear').classList.remove("d-none")
    document.getElementById('clear').classList.add("d-block")
   var chars = "0123456789!@#$%&*abcdefghijklmnopqrstuvwxyz!@#$%&*ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// console.log(select.value)
    if(select.value<5){
        select.value=5;
    }else if(select.value>=30){
        select.value=30;

    }
   console.log(select.value);

   var passwordLength = select.value-specificchars.length;
   console.log("minus"+passwordLength);
   var password = "";
for (var i = 1; i <= passwordLength; i++) {
  var randomNumber = Math.floor(Math.random() * chars.length);
  password += chars.substring(randomNumber, randomNumber +1);
 }
 pwdcontainer.value = specificchars+password;
 document.getElementById("no-of-chars").innerHTML=`<h4 class='badge bg-danger' >No.Of Characters :<h5 class='badge bg-success'>${pwdcontainer.value.length}</h5></h4>`

}

   



function copytext() {
    
    pwdcontainer.select();
     
    navigator.clipboard.writeText(pwdcontainer.value);
 document.getElementById('copymess').innerHTML="<small class=''>copied successfully!</small>"
 setTimeout(()=>{document.getElementById('copymess').innerHTML=''},3000);

 
    // Alert the copied text
    // alert("Copied the text: " +pwdcontainer.value); 
  }

function validate(e){
    if (e<=5){
        generatepass.disabled=false;
        generatepass.innerText="Generate password"
        
        const specificcharsinput=document.querySelector("#specificcharsinput");
        specificcharsinput.setAttribute("placeholder","maximum 2 chars")
        specificcharsinput.setAttribute("maxlength","2")
       var specificcharsslice= specificcharsinput.value.slice(0,2);
       specificcharsinput.value=specificcharsslice;
    }
    else if(e>=6 &&e<=10){
        generatepass.disabled=false;
        generatepass.innerText="Generate password"
        
    specificcharsinput.setAttribute("placeholder","maximum 4 chars allowed")
    specificcharsinput.setAttribute("maxlength","4")
}
else if(e>10 &&e<=20){
    generatepass.disabled=false;
    generatepass.innerText="Generate password"


    specificcharsinput.setAttribute("placeholder","maximum 5 chars allowed")
    specificcharsinput.setAttribute("maxlength","5")
}  
else if(e>20 &&e<=30){
    generatepass.disabled=false;

    generatepass.innerText="Generate password"
     
    specificcharsinput.setAttribute("placeholder","maximum 8 chars allowed")
    specificcharsinput.setAttribute("maxlength","10")
}     
        
    else{
        generatepass.disabled=true;
        generatepass.innerText=" Something Went Wrong!..."
        // alert("your password length is too high..\n password length should be in 30 characters..")
        specificcharsinput.setAttribute("placeholder","your password length is too high..")
        pwdcontainer.setAttribute("placeholder","Maximum 30 characters support..")
        

    }
    
  }
