  var count=0;
 function countchar( str , ch){
          for ( var a=0;a<str.length;a++){
              if(str[a]==ch){
            count++;
              }
          }
          console.log(ch+" aprears "+ count+" times in "+str);
        
 }
 countchar("khadeeja", 'e');
