
// console.log(name1);
// // console.log("i AM EXTERNAL JS FILE ");

// //var==============
// var name1;
// name1="loganathan";//possible
// name1="karthik";//possible
// var name1;           //possible
// name1="thiru";           //possible
// console.log(name1);       //possible

// //let=================
// let myname;         //possible
// myname="kamal";     //possible
// myname="nithik";    //possible
// // let myname="logu".   not possible
// console.log(myname); //possible
 
// //const ================




// console.log("day 2");

// let num=19;
// console.log(typeof num);

// let str="loganathan";
// console.log(str);

// let und;
// console.log(typeof und);

// let bnum=19n;
// console.log(typeof bnum);

// let Null=null;
// console.log(typeof Null);

// let bool=true;
// console.log(typeof bool);

// let sym=Symbol("id");
// console.log(sym);

//! type coercion 
//the implicit type conversion from omne data type to another is known as type conversion , , it i done  by internally js engine

// console.log('5'-2);
// console.log('5'*true); //both are converted to number

// console.log(1<3>1);//fales true(1)>2
// let test="1000"-"1000"*true+"0";
// console.log(test)
// console.log(typeof test);

// let nan=NaN;
// console.log(typeof nan);//intresting topic

// console.log(Boolean(Number("0")));

// ////////falsy valuee ..q
// v
// 
// 
//              ==============="  0,0n,false,null,undefine,NAN,""-empty string"========


//////truthy values otherthen above mensioned everithing is truthy value

//arithmetic operator

// console.log(1+2);
// console.log(1-2);
// console.log(1*2);
// console.log(1/2);
// console.log(1%2);
// console.log(2**2);


// let num=prompt("enter");
// // let res=;

// console.log(num<=2000?"your offer is 10%":"your offer is 20%");

// let number=prompt("to check fizz buzz Enter a number  :");

// if(number/3==5&&number/5==3){
//     console.log(number + " is fizz buzz number!!!")
// }else{
//     console.log(number+ " not a fizz buzz number !!!")
// }

// let num=parseInt(prompt("enter the number"));
// switch (num) {
//     case 1:
//         alert("sunday");
        
//     case 2:
//         alert("monday");
     
//     case 3:
//         alert("tusday");
    
//     case 4:
//         alert("wednesday");
     
//     case 5:
//         alert("thesday");
  
//     case 6:
//         alert("fieday");
      
//     case 7:
//         alert("saterday");
       

//     default:
//         alert("enter valide number");
      
// // }
// // /
// for(let n=100;n<=200;n++){
//     for(let m=2;m<=n/2;m++){
//         if(n%m==0){
            
//         }
//     }
// }w

// let num2=num1=prompt("enter a number :");
// let count =num1.length;
// let res=0;
// while (num1!=0) {
//     let last=num1%10;
//     num1/=10;
//     res+=last**count;
// }
// if(num2==res){
//     alert("a number is amstrong ");
// }else{
//     alert("a number not a armstrong")
// }


// function sum(a,p){
//     return a+p;
// }

// alert(sum(10,20));
// alert(sum(10));


// let a=10;
// var b=20;
// const c=30;

// if (1) {
//     let a=11;
//     var b=21;
//     const c=31;
// }

// function fun(params) {
//     let a=12;
//     var b=22;
//     const c=32;
// }


// named function

// 1.named function 
//the function which is declared with function keyword and have a identifier name is called as named function 

// function sum(a,b) {
//     console.log(a+b)
// }

// sum(10,20)

// anonymous function

// a function which dose not have any identifier name is called as anonymous function  , to execute annonymous is called we must have to stor them insaide a variable

// function (c,d){
//     console.log(c_d);

// }

// 3333 function with expression
// expression os storing a function insaide a variable is called as function expression
// whenever we stor a function inside  a variable  we cannot call that function with thwe function identifier , we can only call it with the help iof variable identifier 

// let f=function (){
//     console.log("f with expression");
    
// }
// // 
// let f2=function name(){
//     console.log("way two");
    
// }
// // name() unneble to reach the functionn uncaught reference error

// // Higher order function 

// // a function which accepts another function as a argument or its returnsa function is called as hieghr order function



// function fun (a,b,c){
//     a(b,c)
// }

// // here the function fun is accepting sum as the srgument so in this case fun is the hieghr order function

// fun(sum,20,30);
// fun(sub,12,12,)

// fun(mul,20,30);
// fun(div,12,12,)



// function sum(a,b){
//     alert(a+b)
// }
// function sub(a,b){
//     alert(a-b)
// }
// function mul(a,b){
//     alert(a*b)
// }
// function sum(a,b){
//     alert(a/b)
// }

//it can be executed only once   , 
//";" is mandatory
// let a=(
//     function(){console.log("hay bye") 
// })();
// console.log(a);
// i am loganathan from tamil nadu salem d

// function  demo1(){
//     function name1(params) {
//         console.log("i am inner function");
//     }
//     name1(1);
//     console.log("i am outer function");
// }

// demo1()

// let name = prompt("enter your name: ");
// let dob = promt (" enter yoiur DOB:");
// function age(dob){
//     return dob-2025;    
// }

// alert( "hello"+name+ your age is :"+ age(dob)")

// let name = "Virat";
// let age = 22;
// console.log("~ name is ${name}age is ${age}");


// function calculateArea(radius) {
//   const pi = 3.14159; // Approximate value of pi
//   const area = pi * radius * radius; // Calculate area using the formula
//   return area;
// }

// // Example usage:
// const radius = 5; // Replace with your desired radius
// const area = calculateArea(radius);
// console.log(`The area of the circle with radius ${radius} is ${area.toFixed(2)}`);


// let fun=()=>(a)=>a*a;
// let res=fun()
// console.log(res(4));


// function details() 
// {   
//     console.log(arguments[0]);
//     console.log(arguments[1]);
// }

// details("Loganathan",70);
// debugger

// function gp() 
// {
//     let apgold=10,gpland=20;
//     function p() 
//     {   
//         let pgold=20,pland=30;
//         function child() 
//         {   
//             let gchild=30;
//             console.log(gpgold+pgold+gchild);
            
            
//         }   
//     }
// }
// gp();
// console.log("logu");

//curring

// function sum(){
//     return function(a){
//         return function(b){
//             return a+b;
//         }
//     }
// }

// console.log(sum()(10)(20));


// // String

// let a='a';
// let b="b";
// let c=`c`;

// let d=new String("10");
// let e=new String("10")

// console.log(d==e);

// let name1="loganathan";
// name1[0]="v"; // "not possible"

// for (let index = 0; index < name1.length; index++) {
//     let element = name1[index];
//     console.log(element);
    
// }

//String inbuile methods 

// let str="               loganathan     logu     "
// console.log(str.toLowerCase());
// console.log(str.toUpperCase());
// console.log(str.trimStart());
// console.log(str.trimEnd());

// console.log(str.trimStart().length); // removing spacess in starting
// console.log(str.trimEnd().length);// removing spacess in ending

// console.log(str.trim());//removing spacess at starting also at ending also
// console.log(str.trim().length);

// console.log(str.replace("logu","LOGa"));

// console.log(str.replaceAll("lo","PO"));

// let uname=prompt("Enter your name : ")

// alert(uname.replace(uname[0],uname[0].toUpperCase()));

// // const yourname; decleration without value is not possible 
// const yourname="guru";  //only this possible both decloration and initialization should be in one line
// console.log(yourname);


// let original=prompt("enter string :");
// let fs = original[0]+original[1]
// let last=original[original.lastIndexOf()+original.lastIndexOf()-1+original.lastIndexOf()-2]

// let temp =original.replace("fs","");
// let temp2 = original.replace(last,"")
// alert(last+temp2+fs);
// console.log(last);
// console.log(temp2);
// console.log(fs);

//charAt(2)
//slice(1,3)
//substring(1,4)
//substr(2,4)----- ----- ----- ----- ---- ----//thiss version will be removed in further version , so we must have to avoid using this/
//split(condition) // split("a")
//slice(4) //everithing will be taken from 4rth index to last index

//indexOf("a") it will returning the first 
// indexOf("a",9) it will return after 9th index

//lastIndexof('') if you are passing empty string it will return last index -last
//indexof('') if you are passing empty string it will return first index  -0 

//concat(" ",v," ","logu") concading all parameters

// //includes("a") if a is presenting in string the method will return true not return false

//charcodeat(index) 
// //fromChareCode(aschi value)

// let name1 = prompt("enter name : ");
// let fs=name1.split(" ");
// alert(  `${fs[1].charAt(0)}${fs[2].charAt(0)} ${fs[0]}`);
// // alert(  `${fs[fs.]}`);
// let op2="";
// let len=fs.length;
// while (len>=0) {
//     op2+=" "+fs[len--]
// }
// op2=op2.replace("undefined" , "")
// alert(op2)


//array methods join 
// indexOf("loganathan")


/// let arr=["loganathan" ,"kalai","karthik"];
// arr.push("logu");
// arr.pop()
// alert(arr.at(2))
// arr.at(34567)//undefind as a output if not exist
// let str=arr.join("$");
// alert(str)
// // alert(arr.reverse())

// let n=[12,1,11,2,3,4]

// n.reverse()
// console.log(n);
// console.log(n.sort());
// console.log(n.sort((a,b)=>a-b));
// console.log(n.sort((a,b)=>b-a));


// alert(n) 


// (str)


//  let arr=["loganathan",1,10,11,20.98,20.89,1001,20,"kalai",true,false,undefined,"karthik","apple","Apple"];
// console.log(arr.sort((a,b)=>a-b));
// console.log(arr.sort((a,b)=>b-a));


// let arr1=[1,2,3,4,5,6]
// let arr2=[6,5,4,3];

// let res=arr1.concat(arr2)
// console.log(res);
// console.log(res.sort((a,b)=>a-b));

// console.log(arr1.includes(4));//true

//fill

// let arr=new Array(10);
// arr.fill("0"+"0")
// console.log(arr);

// arr.fill(2,1,4)
// console.log(arr);


///////for in loop
// console.log("////// for in loop");

// for(let i in arr){
    
//     // console.log(+""+arr[i]);
//     console.log(i)
// }



// console.log("////// for of loop");

// ////// for of loop
// for(let j of arr){
//     console.log(j);
    
// }




////// for ewach loop is accepting the callable method will be executed  for each and every eliment of the array 
//the calleble statment can have three parameters
//1.element of the array which is present in element and index
//2.index of the element which is present array respect to the element 
//2.it is presenting a original array
// let arr=[1,2,3,4,5,7,8,6,4,3,];
// console.log("element         index");
// console.log("````````````````````````````````");

// arr.forEach((element , index)=>{
//     console.log(element+"   ----------->   "+index);
    
/// });
// console.log("some\n________________");

// let arr=[10,20,30,40,55];

// let op=arr.some((el  ,  i)=>{
//     console.log("executed  " +i);
//     return el%2!=0; 
    
// });


// console.log("every");

// let op1=arr.every((el  ,  i)=>{
//     console.log("executed  " +i);
//     return el%2==0; 
    
// });

//find method

// let fruits=["mango","sugar","strawbwrry","orange"];

// let filreredOp=fruits.find((el,i)=>{
    
//     console.log("executed "+i+"times")
//     return el.charAt(0)==="0";

// });
// console.log(filreredOp);


// let fruits=["mango","sugar","anish","strawbwrry","orange"];

// let filreredOp=fruits.filter((el,i)=>{
    
//     return "aeiou".includes( el.charAt(0).toLowerCase())
//     // return el.charAt(0)==="a"||el.charAt(0)==="e"||el.charAt(0)==="i"||el.charAt(0)==="o"||el.charAt(0)==="u";


// });
// console.log(filreredOp);
    
// for (let index = 1; index < 10; index++) {
//     // const element = array[index];
//     console.log(index+" * 6 = "+index*6);
    
// }

// let sal=[1234,34,456,20001,20000,12345,3456,6787654,2345665,2345];

// let filtered=sal.filter((sal)=>{
//     return sal>20000;
// })
// //     console.log(filtered);
    

// let fruits=["mango","sugar1","anish1","strawbwrry","orange"];
// let filtered=fruits.filter(nam=>nam.length==6)
//     console.log(filtered);
    

// let mixedarr=["mango",true,false,81,24,30,undefined,"sugar1","anish1","strawbwrry","orange"];

// let filtered=mixedarr.filter(ele=>typeof(ele)=="number");
// console.log(filtered);

// let filtered2=mixedarr.filter(ele=>typeof(ele)=="boolean");
// console.log(filtered2);

// let filtered3=mixedarr.filter(ele=>typeof(ele)=="string");
// console.log(filtered3);

// let filtered4=mixedarr.filter(ele=>typeof(ele)=="undefined");
// console.log(filtered4);


// let numbers=[100002,2000002,300003,400001,500001];

// let filtered=numbers.filter((ele , i)=>ele%2===0&&i%2!==0);
// console.log(filtered);


// let numbers=[100002,2000002,300003,400001,500001];

// let filtered=numbers.filter((ele , i)=>i%2==0).map((v,i)=>v+2)
// console.log(filtered);

// console.log("logu".filter((v)=>v)); //error

// let name1=["logu","kali","karthik","naka","dhanu"];
// let numbers=[1002,1002,3003,400001,500001];
// // console.log("original arr"+);

// let filtered_name=name1.filter((v,i)=>{
//     if(v.length==4) {
//         console.log(i);
//         numbers[i]=numbers[i]+10000;
//         let temp=numbers[i]+"".charAt(0)
//         if (temp%2==0) {

//             name1[i]="Mr."+name1[i];
            
//         }
//         if (['a','e','i','o','u'].includes(v.charAt(0).toLowerCase())) {
//         numbers[i]=numbers[i]*1.1;
            
//         }
//     }

// })


// name1.forEach((v,i)=>{
//     console.log(`${numbers[i]-name1[i]}`);
// });



//reduce() 
//the method accept thw argument
// 1.callback method
// 2.initial value of accumulater
// \1.callback function can have 4 arguments , the firt argument is accumilator
//  

// let arr=[10,20,30]
// let res=arr.reduce((acc,value,i,arr)=>{
//     return acc+value;   
// },0);
//     console.log(res);


// let arr=['a','b','c','d','e']
// let res=arr.reduce((acc,value,i,arr)=>{
//     return value+acc;   
// });
//     console.log(res);

//flat()
// let nums=[1,2,[3,4,[5,6,[7,8,[9]]]]];

// let flatter1=nums.flat(6);
// let flatter2=nums.flat(Infinity);

// console.log(nums);

// console.log(flatter1);
// console.log(flatter2);

// let marker={
//     color : "blue",
//     brandd : "blue star",
//     price : 898,
//     true:false, //         keyword can be a key and value also  
//     let : true,
//     isMarried : true,//        /\ key principles
//     78 : "logu",              //\\ we can use only number is possible
//     "8name" : "possible",    //  \\ if you want to start with a number use ("") 
//     "length*h" : 3.4,       //====\\ it will destroid by javascript controller
//     "length*h" : 3.5,      //      \\ it is using updated value only object is allowing to have duplicate key and value

//     "isplaying" : function(){
//         console.log("playing is running");
        
//     },
//     isplaying2(){
//         console.log("function 2 is running");
        
//     }
// }

// console.log(marker["78"]);
// console.log(marker[78]);
// console.log(marker.true);
// console.log(marker.let);
// console.log(marker[true]);
// console.log(marker["price"]);
// console.log(marker.price);
// // console.log(marker[price]); it is not possible



//we can add the keys explicitlly

// marker.myname="loganathan"
// marker.age=20

// console.log(marker);
// delete marker.isMarried    //delete keyword for object
// console.log(marker);

// marker.isplaying();

// marker.isplaying2();
// marker.isplaying;



// let emp=[{ename:"loganathan",sal:10000},{ename:"aarthik",sal:30000},{ename:"ili",sal:10}];
// const temp=emp

// let updatedemp=emp.map((el,i)=>{
//     return ['a','e','i','o','u'].includes(el.ename.charAt(0).toLowerCase()) && {ename:el.ename,sal:el.sal +2000};
// })

// console.log(temp);
// console.log(updatedemp);


// let emp=[
//     {ename:"loganathan",sal:10000},
//     {ename:"aarthik",sal:30000},
//     {ename:"ili",sal:10}
//  ];


// console.log(emp.filter(el=>el.ename.length>4));


// let student=[
//     {
//         rollno:4,
//         grede:a,
//         class:9,
//         contri:100
//     },
//     {
//         rollno:6,
//         grede:c,
//         class:10,
//         contri:122 
//     },
//     {
//         rollno:7,
//         grede:d,
//         class:11,
//         contri:340
//     }
// ];
// // use filter 
// filter even number students,
// create deferent arrays for them,8,9,10
// filter based on the grede a,b,c 

// // use reduce
// calculate all contribution

// use map
//update grede by next level a ==> a+ ,b==>a,  c==>b like wise

// let a="54321"
//https://codeshare.io/ZLB3PV

let obgouter={
    name1:"loganathanouteropg",
    obg:{
        name1:"logu_inner_opg",
        fun:function fun(){
            console.log("i an not using this key word "+this.name1);
            console.log("i am using this key word "+this.name1);
        }        

        //should not use arofunction in object

        
        

    }
}

obgouter.obg.fun();


