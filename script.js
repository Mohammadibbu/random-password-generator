const generatepass=document.querySelector("#generatepass");
const pwdcontainer=document.querySelector("#pwdcontainer");
const copyText=document.querySelector("#copyText");
const select=document.querySelector("#select");
console.log(select)
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
  
   var passwordLength = select.value-specificchars.length;
   console.log("minus"+passwordLength);
   var password = "";
for (var i = 1; i <= passwordLength; i++) {
  var randomNumber = Math.floor(Math.random() * chars.length);
  password += chars.substring(randomNumber, randomNumber +1);
 }
 pwdcontainer.value = specificchars+password;
}

   



function copytext() {
    
    pwdcontainer.select();
     
    navigator.clipboard.writeText(pwdcontainer.value);
 document.getElementById('copymess').innerHTML="<small class=''>copied successfully!</small>"
 setTimeout(()=>{document.getElementById('copymess').innerHTML=''},3000);

 
    // Alert the copied text
    // alert("Copied the text: " +pwdcontainer.value); 
  }