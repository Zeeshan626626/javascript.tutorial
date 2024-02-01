

//*********************************data types Summry*************************/


// how to store data in memory and how to access it.
// according to this we divided dataTypes into its two types 

// permitive and non-permitive(Refrence)

//****************permitive*********************//

// it has 7 types 

//1- string
 let name ="shan"

//2- number
 let age =19

 //3- boolean
 let shan= true or false

 //4- null
 let score=null    // it is not empty

 //5- undefindes
 let abc;

 //6- symbol 
 const id=Symbol('123')   // it is used to make anything 'unique'

 //7- bigNumber
 let bigNumber= 123424234234n   // it is use for big number  


 //***********************non-permitive or Refrence *********************//

 //it has three types that are 

 //1   array
 //we write the array structure in this formate that are write brlow
   const shan1=["kia","hal","hain","jee"];


 //2   objects
  // we write the object in between the {} that brekuts
  let myobj={
    name:"ali",
    age:12,
  }


 //3   functions
   let myfunction = function(){
    console.log("hellow word");
   }

   //  console.log(typeOf myobj);    used to chek the datatypes        
   
   


   //**********************Memory********************/
   //stack memory  (used in permitive ) in this we have copy of a value 
   let name="shan"
   let  anothername = name
   anothername="zeeshan"
   console.log(name);
   console.log(anothername);
   //in stack if we change the value it change in copy of value not a origniol value 

   //heap memory ( used in non-permitive) 
   //in this we have a original value.
    let userone= {
    email:"shan@gmail.com",
    id:12
   }
   let userTwo= userone
   userTwo.email="zeeshan@gmail.com"
   console.log(userTwo);
   console.log(userone);
   //in HEAP the change of value also change in the orignal value  