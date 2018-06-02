var str= "welcome cic hub";

var myarray=[];
myarray[0]=str[0].toUpperCase();

for(var a=1; a<str.length;a++){
    myarray[a]=str[a];
    if(str[a]==' '){
        myarray[a+1]=str[a+1].toUpperCase();
        a++
    }

}

console.log(myarray.join(""));

