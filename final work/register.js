function RegisterForm  ()  {
    let nameData = document.forms['loginForm']['userName'].value;
      if(nameData == "") {
        alert('Please input a name');
        return false;
       };
       let lastnameData = document.forms['loginForm']['lastName'].value;
      if(lastnameData == "") {
        alert('Please input a lastname');
        return false;
       };
    let emailData = document.forms["loginForm"]['userEmail'].value;
      if(emailData == "") {
        alert('Please input an email')
        return false;
       };
       let contactData= document.forms["loginForm"]['contactnumber'].value;
      if(emailData == "") {
        alert('Please input an email')
        return false;
       };
       let fileData = document.forms["loginForm"]['file'].value;
       if(fileData== "") {
         alert('Please input an file')
         return false;
        };
    let passwordData = document.getElementById('userPassword').value;
      if (passwordData == "") {
        alert("Password field cannot be empty")
        return false;
       };
    let confirmPasswordData = document.getElementById('confirmPassword').value;
      if(confirmPasswordData ==" " || confirmPasswordData !== passwordData ) {
        alert("Password and Confirm Password must match")
        return false;
      };

      sessionStorage.setItem('name', nameData.value);
    sessionStorage.setItem('surname',lastnameData.value);
    sessionStorage.setItem('mail',emailData.value);

    sessionStorage.setItem('phonenumber',contactData.value);
    sessionStorage.setItem('imagess', ImageData.value);
    sessionStorage.setItem('Password', passwordData.value);
    sessionStorage.setItem('confirmPassword', confirmPasswordData.value);
  
     
      ////////redirect user to login form
      alert('Your account has been created , Redirecting you to Login Website');
      // Redirecting to other page or webste code.
      window.location.href = "./login.html";
  
  };

const LoginForm = () => {
  
    let emailData = document.forms["loginForm"]['userEmail'].value;
      if(emailData == "") {
        alert('Please input an email')
        return false;
       };
    let passwordData = document.getElementById('userPassword').value;
      if (passwordData == "") {
        alert("Password field cannot be empty")
        return false;
       };

       
    let storedName =localStorage.getItem('userEmail');
    let storedPw =localStorage.getItem('userPassword');

    if(emailData.value ==storedName && passwordData.value ==storedPw)
    {
        alert('You are logged in');
       // Redirecting to other page or webste code.
        window.location.href="./home.html";
      
    }else{
        alert('Error login');
        
    }

    
  //   function Init() {
              
  //     let loginState = false;
  //     if( loginState  == false ){
  //         window.location.href="./register.html";
  //     }else{
  //         window.location.href="./home.html";
  //     }
     
  // }
  // Init();   

    
  };