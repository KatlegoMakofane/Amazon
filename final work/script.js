function signup(){
    //declaring variables
    var name = document.getElementById('userName');
    var surname = document.getElementById('lastName');
    var mail = document.getElementById('userEmail');
    var phoneNumber = document.getElementById('contactNumber');
   
    var images = document.getElementById('file');
    var password =document.getElementById('userPassword');
    var confirmpassword=document.getElementById('confirmPassword');
    //declaring variables to  Validate against
    var pass_exp= /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
    var letters = /^[A-Za-z]+$/;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var numbers =/^[0-9]+$/;
    //if Statement Test and filter requirement for the variables
    // if(name== ""){
    //     alert('Please fill in your Name');
    //     }
    //      else if(surname== ''){
    //         alert('Please fill in your Surname');
    //     }else if(phoneNumber==''&&password<=10){
    //         alert('Please fill in your Contact Number');
    //     }else if (mail == '') {
    //         alert("Please enter your email")
    //     }else if(images=''){
    //         alert('Please pick an image');
    //     }
    //     else if ( password == '') {
    //         alert('Please enter Password');
    //     } else if (confirmpassword == '') {
    //         alert('Please enter Confirm Password');
    //     }  else if (confirmpassword.value=="" ||confirmpassword.value!==password) {
    //         alert('Password not Matched');
    //     }else if (document.getElementById("userPassword").value.length < 6) {
    //         alert('Password minimum length is 6');
    //     } else if (document.getElementById("userPassword").value.length > 12) {
    //         alert('Password max length is 12');
    //     } else {
    //         sessionStorage.setItem('userName', name.value);
    //         sessionStorage.setItem('lastName',surname.value);
    //         sessionStorage.setItem('userEmail',mail.value);
    //         sessionStorage.setItem('contactNumber',phoneNumber.value);
            
    //         sessionStorage.setItem('password', password.value);
    //         sessionStorage.setItem('confirmPassword', confirmpassword.value);

            
    //     alert('Your account has been created, Redirecting you to Login Page');
    //     window.open("index.html");
    //     }


    
      if(name.value.length== 0 &&name.value.length<=6){
            alert('Please fill in your Name');
        
           
        }else
        if(surname.value==""){
            alert('Please fill in Last Last');
          
        }else
        if( phoneNumber.value==""){
          alert('Please fill in Contact number');
       
      }else
         if(mail.value==""){
            alert('Please fill in yor email');
           
        }else if(images.value==""){
            alert('Please pick an image');
           
        }else if(password.value==""){
            alert('Please fill in your password');
            
        }else 
        if(confirmpassword.value==""){
            alert('Please enter aconfirm password');
            
        }else{

        

            sessionStorage.setItem('userName', name.value);
            sessionStorage.setItem('lastName',surname.value);
            sessionStorage.setItem('userEmail',mail.value);
            sessionStorage.setItem('contactNumber',phoneNumber.value);
            
            sessionStorage.setItem('password', password.value);
            sessionStorage.setItem('confirmPassword', confirmpassword.value);

            alert('Your account has been created, Redirecting you to Login Page');
            window.open("index.html");
        }
    
     
    
  };
    
    
    function signin(){
        var logmail=sessionStorage.getItem('userEmail');
        var pw=sessionStorage.getItem('password');
        var mailbox=document.getElementById('userEmail').value;
        var passbox=document.getElementById('userPassword').value;
        var location='';

        
        if(mailbox == logmail && passbox ==pw ){

            alert("Your Email & Password correct") ;
            alert("Welcome " +sessionStorage.getItem('userName'));
            window.open("home.html");
           
            
            
        }else if(mailbox==''&&passbox==''){
            alert("Your Email & Password empty");
        }else {
          alert("Wrong Email or Password");
        }
       
      
    
};

function changeTheImage(){
    const img=document.getElementById("userimage");
    img.src=sessionStorage.getItem("file");
    document.getElementById("person-name").innerText = sessionStorage.getItem("userName");
}


    // const validateRegisterForm = () => {
//     let nameData = document.forms['loginForm']['userName'].value;
//       if(nameData == "") {
//         alert('Please input a name');
//         return false;
//        };
//        let lastnameData = document.forms['loginForm']['lastName'].value;
//       if(lastnameData == "") {
//         alert('Please input a lastname');
//         return false;
//        };
//     let emailData = document.forms["loginForm"]['userEmail'].value;
//       if(emailData == "") {
//         alert('Please input an email')
//         return false;
//        };
//        let contactData= document.forms["loginForm"]['contactnumber'].value;
//       if(emailData == "") {
//         alert('Please input an email')
//         return false;
//        };
//        let fileData = document.forms["loginForm"]['file'].value;
//        if(fileData== "") {
//          alert('Please input an file')
//          return false;
//         };
//     let passwordData = document.getElementById('userPassword').value;
//       if (passwordData == "") {
//         alert("Password field cannot be empty")
//         return false;
//        };
//     let confirmPasswordData = document.getElementById('confirmPassword').value;
//       if(confirmPasswordData ==" " || confirmPasswordData !== passwordData ) {
//         alert("Password and Confirm Password must match")
//         return false;
//       };

//       sessionStorage.setItem('name', nameData.value);
//     sessionStorage.setItem('surname',lastnameData.value);
//     sessionStorage.setItem('mail',emailData.value);

//     sessionStorage.setItem('phonenumber',contactData.value);
//     sessionStorage.setItem('imagess', ImageData.value);
//     sessionStorage.setItem('Password', passwordData.value);
//     sessionStorage.setItem('confirmPassword', confirmPasswordData.value);
  
     
//       ////////redirect user to login form
//       alert('Your account has been created , Redirecting you to Login Website');
//       // Redirecting to other page or webste code.
//       window.location.href = "./login.html";
  
//   };

// const LoginForm = () => {
  
//     let emailData = document.forms["loginForm"]['userEmail'].value;
//       if(emailData == "") {
//         alert('Please input an email')
//         return false;
//        };
//     let passwordData = document.getElementById('userPassword').value;
//       if (passwordData == "") {
//         alert("Password field cannot be empty")
//         return false;
//        };

       
//     let storedName =localStorage.getItem('userEmail');
//     let storedPw =localStorage.getItem('userPassword');

//     if(emailData.value ==storedName && passwordData.value ==storedPw)
//     {
//         alert('You are logged in');
//        // Redirecting to other page or webste code.
//         window.location.href="./home.html";
      
//     }else{
//         alert('Error login');
        
//     }

    
//   //   function Init() {
              
//   //     let loginState = false;
//   //     if( loginState  == false ){
//   //         window.location.href="./register.html";
//   //     }else{
//   //         window.location.href="./home.html";
//   //     }
     
//   // }
//   // Init();   

    
//   };