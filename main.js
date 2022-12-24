
function myFun(str){
    str = str+"\n";
    return str;
}


 function myDigit(){
     let str=`<script type="text/javascript"> document.write(`;
   console.log("Hi there");
   
    for(var i=0;i<10;i++){
       str=str+ `<input type="button" class="alphaKeyTab" value="${i}" id="${i}" onclick="form.textarea.value += '${i}'">`;
    }
    str=str+`); </script>`;
    alert(str);
    console.log("Hi there11");
    document.getElementById("hellow").innerHTML=str;
    console.log("Hi there12");
}


