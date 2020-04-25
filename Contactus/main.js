  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBlaG1XLI2t6bT9M4akKjdTxgmwdI5u0fQ",
    authDomain: "contactform-44218.firebaseapp.com",
    databaseURL: "https://contactform-44218.firebaseio.com",
    projectId: "contactform-44218",
    storageBucket: "contactform-44218.appspot.com",
    messagingSenderId: "597698834084",
    appId: "1:597698834084:web:677bca409e03c2c02c0031",
    measurementId: "G-QJ5EXH45TP"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

// Reference messages collection
var messagesRef = firebase.database().ref("messages");
// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, company, email, phone, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company:company,
    email:email,
    phone:phone,
    message:message
  });
}