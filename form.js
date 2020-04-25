


   // Your web app's Firebase configuration
   var firebaseConfig = {
    apiKey: "AIzaSyDm2-RRwxw1d-tXY3gFCtruCBXCNiEdn_I",
    authDomain: "login-form-1997.firebaseapp.com",
    databaseURL: "https://login-form-1997.firebaseio.com",
    projectId: "login-form-1997",
    storageBucket: "login-form-1997.appspot.com",
    messagingSenderId: "967954212438",
    appId: "1:967954212438:web:79156c7162abcda55c7df7",
    measurementId: "G-FHEF0L2DQ2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const auth=firebase.auth();
 
 
 
 
 
  function signUp(){

      var email=document.getElementById('email');
      var password=document.getElementById('password');
      const promise=auth.createUserWithEmailAndPassword(email.value,password.value);
      promise.catch(e => alert(e.message));
      alert("signed Up");
     


  }
  function signIn(){
    
     var email = document.getElementById('email');
     var password = document.getElementById('password');
     
     const promise = auth.signInWithEmailAndPassword(email.value, password.value);
     promise.catch(e => alert(e.message));
     window.open('index.html');
     
 }
	
	
	function signOut(){
		
		auth.signOut();
		alert("Signed Out");
		
	}



    