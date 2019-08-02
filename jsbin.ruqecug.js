// Arrow Functions in JavaScript using various styles
//Or basically my understanding of various usages of Arrow
//functions

const arrow1=()=>console.log('arrow');
arrow1();

let arrow2=()=>console.log('arrow');

arrow2();

arrow2=temp=>console.log(temp);

arrow2(1);
//Same parameter name should not be used again like
//arrow2=(temp,temp)=>console.log(temp); use something like (temp,temp1)
//means two different names

arrow2=(temp,temp1)=>console.log(temp*temp);

arrow2(1,2);