


 /*creating a simple web page

 creat a webpage that validates a user and returns user details

 accept the dtails using prompt
 use an objectg to store user details
 validate user details
    *username must be less than ten
    *password must be greater than six
    * user must comfirm password
    * if username and password do not match, alert the user
    * display user etails
    * 
    * activities
    * prompt user to enter user name
    * validate username
    * enter password
    * validate Pasword
    * comfirm password*/

    

     //let comfirmPassword = prompt("confirm your password") 
        //nb- this is an object(nb- to get a value from an object, we use dot notation or square bracket)

        //nb we have to initialize object first before we use it 
      const usersDatabase= {
        "tayo":{
            FirstName: "odetayo",
            lastName :"faruq",
            email:"odetayoolakanmi@gmail.com",
            phoneNumber: 08132970908, 
            acountActivated: true,
            password:"tayo1234"
            
        },

         "sola" :{
            FirstName:"sola",
            lastName :"oyediran",
            email: "odetayoolakanmi@gmail.com",
            phoneNumber:08132970908,
            acountActivated:true, 
            password: "sola1234"
        },

         "muiz"  :{
            FirstName: "muiz",
            lastName :"afisu",
            email: "odetayoolakanmi@gmail.com",
            phoneNumber: 08132970908,
            acountActivated: true, 
            password: "muiz1234"
            
        },

         "bose"  :{
            FirstName: "bose",
            lastName :"olakanmi",
            email: "odetayoolakanmi@gmail.com",
            phoneNumber: 08132970908, 
            acountActivated: true,
            password: "bose1234"
            
        },
    }

     function GetUsersDetails(){
       // ENTER USERNAME
        let username= prompt("Enter Your Username")

     while(validateUsername (username) == false) {
            username=prompt("Enter valid username")
     }

        if(username== null){
            return
        }
        //ENTER PASSWORD
        let password = prompt("Enter your password") 
     
     
        while(validatePassword(password) == false){
        password=prompt("Enter valid password")
     } 

        if(password == null){
            return
    }

    let confirmPassword = prompt("confirm your password") 

    while(confirmPassword !== password ){
        confirmPassword =prompt("password incorrect, please Enter a valid password")        
    }

    if (confirmPassword == null){
        return
};

    const user = usersDatabase[username]

    if( user==undefined){
         alert("user not found, pleaser try again later")
             return  
    }

        console.log(user)

        alert(`
            User found with the following details:
            firstName: ${user.FirstName}
            lastName:  ${user.lastName}
            email:     ${user.email}
            acountActivated: ${user.acountActivated}
        `)

        //CHECK IF USER DATABASE CONTAINS THE USERNAME.
        
        
        
        };

        GetUsersDetails(); //onCLICKcancel, GO BACK
        alert("you have come to te end");
        



        //console.log(username, password, confirmPassword0
    
    
     function validateUsername(username){
         if (username==null){
             return true
         }
        if (username.length > 10){
             return false
         }else{
            return true
        }
    }
 
    function validatePassword(password){
        if (password == null){
            return true
        }
        if (password.length < 6){
            return false
        }else{
            return true
        }
        
    }

    

    //function comfirmPassword(password){
            //return valid
    //}

    // // nb the condition part of an if else statement must either be boolean which must return truthy or falsy values

    // let studentId= 22222456
    // let result = 100
    // let studentName= "ade"

// AND SYMBOL
//     if (studentId==22222456 && studentName=="ade" ){
//         console.log("the result is " + result)
//     }

// //OR SYMBOL
//     if (studentId==22222456 || studentName=="ade" ){ 
//         console.log("the result is " + result)
//     }

//syntax still valid
    // if (studentId==22222456) console.log("the result is " + result)
    // else console.log("you have no result")

    // if (studentId==22222456){
    //     console.log("the result is " + result)
    // }

    //write a code to display 1-6 dice number.
// nested if statement
    
//     let random = math.floor(math.random() * 5) + 1;   
//     let display = console.log;
    
//     if (random==1){
//         display (1)
//     }else if(random==2){
//         display (2)
//     }else if(random == 3){
//         display (3)
//     }else if(random==2){
//         display (4)
//     }else if(random == 3){
//         display (5)
//     }else{
//         display (6)
//     }

//     let day = "maoday"

// // switch syntax
//     switch (key) {
//         case value:
            
//             break;
    
//         default:
//             break;
//     }

//     switch (day) {
//         case monday:
//             console.log("monday")
            
//             break;
//         case tuesday:
//             console.log("tuesday")
//             break;
//         case wednesday:
//             console.log("wednesday")
//         default :
//             console.log("not a day of the week")
//             break;
//     }


//do {
    
//} while (condition);


    

