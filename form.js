//for( let i=0; i<9; i++){
   // console.log(i)
//}


//for( let n=10; n>0 ; --n){
   // console.log(n)
//}





//post increament
 //i++

 //post decreement

 //i--

 //pre increament 

 // ++i

 //pre decreament

 //--i
//  let result = 100
//  let studentId= "ojo1234"
//  let studentName= "ojo"
//  if (studentId== "0jo" || studentName=="ojo"){
//     console.log("he is a student and the result is " + result )
//  }else{
//     console.log("he is not a student")
//  }

 
 
 
//  if (studentId== "0jo" && studentName=="ojo"){
//     console.log("he is a student")
//  }else{
//     console.log("he is not a student")
//  }

// // write a code to display a dice

// let display = console.log

// let random= math.floor(math.random() *6) +1

// if(random==1){
//     display (1)
// }else if(random==2){
//     display (2)
// }else if(random==3){
//     display (3)
// }else if(random==4){
//     display (4)
// }else if(random==5){
//     display (5)
// }else{
//     display (6)
// }

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

// switch(random){
//     case 1:
//         display (1)

//         break
//     case 2:
//         display (2)

//         break;
//     case 3:
//         display (3)

//         break

//     case 4:
//             dispaly (4)
    
//             break
//     case 5:
//             display (5)
//             break;
//     default: 

//           display (6)

//             break;
// }

//     let IsAdult= age>=18
//     if(IsAdult){
//         console.log("you are eligible to vote")
//     }else{
//         console.log("you are not eligible to vote")
//     }

//             //ternary operator
    
//     let canVote = 18
//     canVote >=18? console.log("eligible to vote "): console.log("not eligible to vote")

//     //nested ternary

//     let MyResult= 100 
//     MyResult <=20 ?console.log(" very poor") :MyResult<= 30 ?console.log("poor"):MyResult<= 50 ? console.log("average")

//      function display(){

     //}
     
     //in function, the else patt is checked then the code is run i.e uing the else part as validation 
//     function sum(a,b){
//         if (typeof a !== 'number' && typeof b !== 'number'){
//             return  ("enter a valid number");
//     };

//         return (a + b)

//     }; 

//     //for loop

//     for(initialization; condition; increament/decreament){
//         //code to be executed
//     }
//         //forin syntax(usually used with objects)
//     for (const key in object) {
//         if (Object.hasOwnProperty.call(object, key)) {
//             const element = object[key];
            
//         }
//     }
// // forin xample
//     let person= { name:"ade", age:23, height:5, }

//     for(let key in person){
//         console.log(key)
//         console.log(person[key])
//     }

//             //forof syntax(always used with arrays)
//     for (const iterator of object) {
        
//     } 

//     //forof xample

//     let numbers= [1,2,3,4.5,6,7,8,9]

//     for(let number of numbers ){
//         console.log(number)
//     }

// // while loop

// //while loop syntax

// while(condition){
//     //code to be executed
// }

// //while loop xample

// let h= 14

// while (h<14){
//     console.log(h)
//     h+=1
// }


// //do while loop

// do{
//     //code to be ecxecuted
// }while(condition)

//  //xample of do while loop   

//  do{
//     console.log("odetayo is great")
//     h+=1
//  }while(h<10);


// for(let n= 9; n>=1; n-=2){
//     console.log(n)
// }

// function factoeial(number){
//     let result = 1
//     for(let i=1; i<=number; i+=1)
//      result*=1
//      return result
// }

//assignment- use loop to write a multiplication table that will do 1-20, I.E 1*1- 20*12

// looping two things, 1-12 and 1-20 thAT WE ARE GOING TO


//WHILE LOOP

// initialization;

// while(Condition){
//     //code to be executed
//     increament/decreament
// }

// let even= 0

// while(even % 2===0 && even<=10){
//     console.log(even)

//     even+=2
// }

// while(even <= 10){

//     if (even % 2===0){
//         console.log(even)
//         even+=2
//     }
// }

//do while loop

//initialization;

//do{
    // code to be executed
//}while(condition)


// let odd=1

// do{
//     console.log(odd)

//     odd+=2
// }while(odd<=10)

// let odd=1

// do{
//     if(odd % 2 ==1){
//         console.log(odd)
//     }
//      odd+=2
// }while(odd<=10)


//nb- read about the break key word and continue key word

// read about forin and for of loop



//ast explorer- helps to convert code to lexical javascript(abstract syntax tree)



//let numbr = 10

//trnary operator

//console.log(typeof (number == "string")? "strige": "not a string")

//math operator /, +,-,*, (remainder/ % /moduloe), **(exponentiation)

// write a code to implement exponentiation using loop

// let base = 3
// let exponent= 2
// let result=1

// for(let i=1; i<= exponent; i++){
//     console.log(result)

// }

// result*=1

//let buy;
//console.log(buy)

//let firstName="ade"
//let lastName= "sola"
//console.log(firstName +  ' ' + lastName )
//console.log(`${firstName} ${lastName}` )

//console.log(firstName.concat(  ' ', lastName) )

//assignment operators(=)

//modifying assignment operator(+=, -=, *=, /=, %=,)

// bitwise operator( $,|, ^(exclusively or), tilder `  ~, <<(left shift), >>(right shift)),.>>>(ZERO FILL RIGHT SHIFT)

//coma operator

//let a= 2, b=3, c = 4; 

//let sum = (2+3, 4+6, 5+5);

//LOGICAL OPERATOR (&& -and, ||- or, !- not)

//nb logical operators help with fall backs

// nb- logical || ignore falsy values and return truthy values

// while logical && ignore truthy values and return falsy values i.e

// let user = null;
// let name = user || "default user"

// let admin = null;
// let  member = admin && "default user"

// // null coalescing operator- ??- it returns the first argument when the value is null null or undefined i.e, default user

// let name1= user ?? "default user"



// console.log( name1)


// let rice ="rice"
// let beans= "beans"

// console.log(rice || beans)
// console.log(rice && beans)



// comparism operators(=, ==, ==, >, <, !=,==!, >=, <=, )

//console.log(10 == "10")-// compares the same data type
//console.log(10 === "10")// compares different data type

//string comparism

//console.log("a" >"b")


//for(let c= 0, d= 11; c < d; c++, d--){
  //  console.log(c,d)
//}


//console.log("Z".charCodeAt ()) 

//String.prototype.charCodeAt
// let anystring= "bimbolade"
// console.log(anystring.length - 1)
// console.log(anystring[anystring.length - 1])
// console.log(anystring[1])
// console.log(anystring.charAt(2))

// "hello".length

// let smalllAphabet= "abcdefghijklmnopqrstuvwxyz"

// console.log("abcdefghijklmnopqrstuvwxyz".toUpperCase().charCodeAt(0))

// object and arrays - dot notation and square bracket

//writ a code that prints out the ASCII value of all small alphabets and capital alphabets

//let alphabets= "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

//for(let i= 0; i < alphabets.length; i++){
    //console.log(alphabets[i]), alphabets.charCodeAt(i)
//}

// number base conversion- binary, octal, decimal, hexadecimal

// from decimal to binary

//console.log(10..toString(2))

//nb 2 inside the bracket is a radix and the result is a string

// from decimal to octal

//console.log(10..toString(8))


//from decimal to headecimal

//console.log(10..toString(16))

//from  binary to decimal

//console.log(parseInt("1010", 2))

//from  octal to decimal
//console.log(parseInt("12", 8))

//from hexadecimal to decimal
//console.log(parseInt("A", 16))

/*
DATA STRUCTURE- things we use to store and manipulate data
type(arrays, set, map, object)


arrays- used to store ordered colection of items example

types of datatypes

primitive 
complex

*/

//let users= new Array()//- first syntax of creating an array 
//let users= ["sola", "tunji", "bimpe", 20, 20.3, { complexion: "dark"}] //second syntax of creating an array
//console.log(users) 
//console.log(users.length) 

// getting values from an array

//alert(users[1])
//alert(users[3])
//alert(users[4])
//alert(users[5])


//update a value in the array

//users[0]= "muiz"

//users[2] = {name:"okiki", age: 13}


//methods in arrays

// add a new value to the end of an array

//users.push= "kudirat"

//add a new value to the beginning of array

//users.unshift("bola")

//console.log(users)

// remove a value for the end of array

//users.pop()
// console.log (users)

// // to get the index of a value in array
//  console.log(users.indexOf("tunji"))

//  // if te value is is not present, -1 is returned

//  console.log(users.indexOf("ayomo"))




// remove a value from the begining of an array

// users.shift()

// console.log(users)

//let users= ["sola", "tunji", "bimpe", 20, 20.3, { complexion: "dark"}]
// console.log(users.slice(0, 2))

// copyOfUsers= users.slice()

// console.log(copyOfUsers)

// console.log(users.reverse())
// console.log(users.sort())


//   aceesing elements in an arrays using loops- forof and forin loops

let users= ["sola", "tunji", "bimpe", 20, 20.3, { complexion: "dark"}]

// for(let user of users){
//     console.log(`the users are:  ${user}`)
// }

// for...of loops can be used to loop ovr iterables properties of an object , items that are iterable in javascript are , string, arrays, sets, maps that is we use it to loop over the values of the iterable objects

// while for..in statements iterates over enumerable proprties(objects have enumerable properties)

//for(let index in users ){
   // console.log(`the index is ${index} and the value is ${users[index]}`)
//}

// a function that takes a function is called a call back function

// function displayEachUsers(user){
//     console. log(`the user is ${user} `)
// }

// users.forEach(displayEachUsers)

//users.forEach((user)=>{
    //console.log(`the user is: ${user}`)
//})

//iterates over an array using map

// let users1= ["bola", "tunji", "sola", "iyabode"]
// let users1InUpperCase= users1.map((users1)=>{
//     console.log(users1.toUpperCase())

//     return users1.toUpperCase()

    
// })

// let users1= ["bola", "tunji", "sola", "iyabode"]
// let users1InUpperCase= users1.map((users1)=>{
//     let transformToUpperCase= (users1.toUpperCase())

//     return transformToUpperCase

    
// })

// console.log(users1InUpperCase)

//iterate over an array with filter

// let populations=[20, 40, 50, 30, 10, 6,]

// console.log(`the default population ${populations}`)
// let populationGreaterThan30= populations.filter((population)=>{
//     if(population>30 && population<50){
//         return population
//     }
// })

// console.log(populationGreaterThan30)


//let Matrix = ([1,2,3],[4,5,6],[7,8,9]);
//console.log(Matrix[0])

// set data structure

//a set is a special type of collection that stores unique value

//the main feature of a set is that, it doe not accept duplicated values, hence values to be added must be unique

// let setOfUsers= new Set()

// let MaryDetails= {name:"mary", age: 30, sex: "female"}
//  let dayoDetails= {name:"dayo", age: 20, sex: "male"}

// setOfUsers.add(MaryDetails)
//  setOfUsers.add(dayoDetails)
//  setOfUsers.add(20)
//  setOfUsers.add("ade")
//  setOfUsers.add([20, "wale"])

//console.log(setOfUsers)



//  //get the size of the object

//  console.log(setOfUsers.size)

 //check if the value is in a set
 //console.log(setOfUsers.has("ade"))

 //remove a value from the set

 //console.log(setOfUsers.delete("ade"))
 
 //console.log(setOfUsers.has("ade"))


 // can also iterate over the set

 //for(let user in setOfUsers){
    //console.log(`the user value is: ${user}`)
 //}

 // to conver set to arrays

//  let userArray= Array.from(setOfUsers)

//  console.log(userArray)

 // destructuring assignment

 // it is a special syntax that allows us to  helps to unpack arrays or object in to a bunch of variable conveniently
 
let names= ['ade', 'sola', 'tunji', 'jamiu']

// let [firstName, lastName]= names

// console.log(firstName + ' ' + lastName)

//let [, , firstName]= names

//console.log(firstName)

//using the rest operatoer to get the rest of names

// let [firstName, ...restOfNames]= names

// console.log(restOfNames)

//let firstName= names[0]

//console.log(firstName)

//destructuring an object

let phoneDetails= {screenSize: 20, batteryCapacity:'50MHZ', countryOfOrigin:"china" }

//let {countryOfOrigin} = phoneDetails
 
//console.log(countryOfOrigin)

//let {countryOfOrigin: origin} = phoneDetails
 
//console.log(origin)
 
//console.log(origin)


//using the rest operator to get the rest rom phoneDetails

//let {countryOfOrigin, ...restOfphoneDetails} = phoneDetails
 
//console.log(restOfphoneDetails)

//destructuring in a function

// function GetUserInformation({name, age}){
//     console.log(name)
//     console.log(age)

// }


function GetUserInformation(user){
    console.log(user.name)
    console.log(user.age)
}

    //DOM=document Object Model REPRESENTS everything (all the tags)we have defined in our page,which provides means of interracting with those tags

    // in the window, we have BOM- browser object model- specific features provided by te people that created the browsers i.e different browsers can have different BOM. there are specifc function thatmust be in every browser.

    //three things present in a window- the DOM, THE BOM, and the javascript Object itself
    
    // the console is also called the developer tool which interract with a web page

    // the DOM object is also called the DOM tree

    // every browser has the DOM viewer

    // to diplay the title of the current page- document.title
    // ocument.body, document.body.style.backgroundColor="red"
    //document.head

    // setTimeout(()=>{
        //console.log(document.body.style.backgroundColor="red")
    //}, 3000)

    // with javascript we cn add dynamic interactivity to the page, i.e we can change a static page

    // to access each tag of a document

    // console.log(document.body.childNodes- to get aal the elements in a body)

    // another method- document.body.children

    //document.body.firstChild
    //document.body.lastChild 
    //document.body.haschildNode

    // e can also loop through the nodes
    for(let i=0; i<document.body.childNodes.length; i++){
        console.log(document.body.childNodes[i]);

    }

        //siblings, previous siblings, next siblings

        //console.log("previous sibling " document.bod.previousSibling)

        //console.log("previous sibling " document.bod.previousElementSibling)

        //console.log("next sibling " document.head.nextElementSibling)

        //console.log("parentNode " document.body.parentNode)


        // HOW TO GET THE SPECIFIC TAG IN A DOCUMENT USING JAVASCRIPT

        // console.log(document.getElementById(h1_text))

        // h1.innerText= "i chnge this text"
        //h1.style.color="red"
        //h1.style.font-size="14px"

        //get Elemet ByClassName

        //const h1_class= document.getElementByClassName(h1_table) 

        //console.log(h1_class)

        // for(let table of h1_class){
            //table.style.backgroundColor= "yellow"
        //}

        //const h1_tag=document.getElementByTagName(h1)

        //console.log(h1_tag)

        //getElementByQuerySelector

        const tr= document.querySelector("tr")
        console.log(tr)

        //queryselectorbytype/tag("h1")

        // queryselectorbyid("#h1_table)

        //queryselectorbyclass(".h1_table")

        //QUERYSELECTORALL(RETURN ALL VALUES THAT MATCH THE REQUEST)

        //const trs= document.querySeletorAll("tr")

        console.log(trs)

        const store= []

        for(let tr of trs){
            store.push(tr.innertext)
        }

        console.log(store)

        // we can work with the nodelist after selction

        //tr[1].innerhtml= "<td>new<td/> <td>old<td/>"

        //WE CAN ALSO LOOP OVER EACH OF THE NODES

        for(let i=0; i<trs.length; i++){
            trs[1].style.color= getRandomColor
        }

        function getRandomColor(){
            const randomColor= ["red", "blue", "green", "white"]
            return randomColor[Math.floor(math.random() * randomColors.length)]
        }

         // CHILD COMBINATOR

         const secondTr= document.querySelector("body"> "table" > "tr")

         //DESCENDANT COMBINATOR

         const h1_ele= document.querySelector("body h1 tr")

         //ADJACENT SIBLING COMBINATOR

         const h1_next= document.querySelector("body h1+h2")


         //CREATE ELEMENT NODE

         const newElement= document.createElement("span")

        //ADD CONTENT AND STYLE TO THE NEW ELEMENT

        newElement.innerText= "it is Odetayo"
        newElement.style.color= "red"

        // insert the new element to the end of body element

        document.body.append(newElement)

        // insert the new element to the beginning of body element

        document.body.prepend(newElement)

        // insert a new element after the table element

        const table= document.querySelector(."my_table")
        table.prepend(newElement)

        // insert a new element after the table element

        document.body.insertBefore(newElement.document.querySelector("table"))

        // insert element in a specific position using insertAdjacentHTML

        const SecondTable= document.querySelectorAll("table")[1]

        SecondTable.insertAdjacentHTML("afterbegin", "<h1>hellow new section</h2>")

        // other Variants are afterend, beforeend, beforebegin

        // REMOVE AN ELEMENT FROM A WEB PAGE
        // SELECT THE ELEMENT TO REMOVE

        const elementToRemove= document.querySelector("h1")
        elementToRemove.remove()

        //clone  Element

        const elementToClone= document.querySelector("h1")

        const cloneTheElement= elementToClone.cloneNode(true)

        document.body.cloneTheElement.append(elementToClone)




        











// let user= {
//     name : "ade",
//     age: 20
// }

// GetUserInformation(user)










 










 






