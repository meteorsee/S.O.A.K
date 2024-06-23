/*  Powered by S.O.A.K  */
/*--==========================================
   ____  _____  ______ ___  ___
  |     |  _  ||	  ||   /  /
  |____ | | | ||  ___ ||     /
       || |_| ||	  ||     \
   ____||_____||	  ||__|\__\
===========================================*/

//Go to top script
//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
        mybutton.style.opacity = "65%";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


//Chceck-box to show password
function Password() {
    var x = document.getElementById("password");
    if (x.type === "password") {
        x.type = "text";
        console.log("Password has been showed");

    } else {
        x.type = "password";
        console.log("Password has been hidden");

    }
}
function PasswordConfirmation() {
    var x = document.getElementById("passwordConfirmation");
    if (x.type === "password") {
        x.type = "text";
        console.log("Password has been showed");

    } else {
        x.type = "password";
        console.log("Password has been hidden");

    }
}
function Password_login() {
    var x = document.getElementById("password_login");
    if (x.type === "password") {
        x.type = "text";
        console.log("Password has been showed");
    } else {
        x.type = "password";
        console.log("Password has been hidden");
    }
}

//Function for insert cookies
function setcookie(name, value, days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        var expires = "; expires=" + date.toGMTString();
    }
    else
        var expires = "";
    document.cookie = name + "=" + value + expires + ";path=/";
}

//Newsletter Form (cookie)
function subscribeNewsletter() {
    subscribe = document.newsletter_form.newsletter_email.value;
    if (subscribe === "") {
        alert("You haven't fill in the email !!");
    }
    else {
        //document.cookie = "Email: " + subscribe + ";expires=" + expireAt.toGMTString();
        setcookie("Newsletter Email:", subscribe, 0.5)
        alert("Subscription successful!");
        console.log("The user successfully subscribe to newsletter");
    }
}


//ContactUs Form (cookies/sessionStorage)
function submitContactForm() {
    //creating array to store
    let contactFormData = JSON.parse(localStorage.getItem('contactFormData'));

    const name = document.getElementById('contact-name').value;
    const email = document.getElementById('contact-email').value;
    const subject = document.getElementById('contact-subject').value;
    const message = document.getElementById('contact-message').value;


    contactFormInfo = {
        Name: name,
        Email: email,
    };
    /*if ((name === "") || (email === "") || (subject === "") || (message === "")) {
        console.log("The user didnt fill up the whole form");
        alert("Please fill in the form!!");

    }*/
    if ((name === "")) {
        console.log("The user didnt fill up the Name");
        alert("Please fill in your Name!");
    }
    else if ((email === "")) {
        console.log("The user didnt fill up the email");
        alert("Please fill in your Email!");
    }
    else if ((subject === "")) {
        console.log("The user didnt fill up the subject");
        alert("Please fill in the Subject!");
    }
    else if ((message === "")) {
        console.log("The user didnt fill up the message");
        alert("Please fill in the message!");
    }
    else {
        sessionStorage.setItem('contactFormData', JSON.stringify(contactFormInfo));
        setcookie("Contact_Subject:", subject, 0.5)
        setcookie("Contact_Message:", message, 0.5)
        alert("Message has been sent");
        let savedContact = JSON.parse(sessionStorage.getItem("contactFormData"));
        console.log("Name:", savedContact.Name);
        console.log("Email:", savedContact.Email);

        
    }

}

/*Reservation Form (local/sessionStorage)*/
function reserve() {
    let reserveData = JSON.parse(localStorage.getItem('reserveData'));

    fname_reserve = document.reserve_form.firstname_reserve.value;
    lname_reserve = document.reserve_form.lastname_reserve.value;
    email_reserve = document.reserve_form.email_reserve.value;
    phone_reserve = document.reserve_form.phone_reserve.value;
    person_reserve = document.reserve_form.noperson_reserve.value;
    datetime_reserve = document.reserve_form.datetime_reserve.value;
    text_reserve = document.reserve_form.text_reserve.value;
    agreement = document.reserve_form.term.checked;

    reserveInfo = {
        FirstName: fname_reserve,
        LastName: lname_reserve,
        Email: email_reserve,
        PhoneNo: phone_reserve,
        NoOfPerson: person_reserve,
        DateTime: datetime_reserve,
        Message: text_reserve,
    };
    /*reservePrivateInfo = {
        Email: email_reserve,
        PhoneNo: phone_reserve,
    }*/
    /*if ((fname_reserve === "") || (lname_reserve === "") || (email_reserve === "") || (phone_reserve === "") || (person_reserve === "")
        || (datetime_reserve === "")) {
        alert("Please fill in the remaining reservation form!");
        console.log("The user didnt fill up the whole form");
    }*/
    if ((fname_reserve === "")) {
        console.log("The user didnt fill up the firstname");
        alert("Please fill in your First Name!");
    }
    else if ((lname_reserve === "")) {
        console.log("The user didnt fill up the lastname");
        alert("Please fill in your Last Name!");
    }
    else if ((email_reserve === "")) {
        console.log("The user didnt fill up the email");
        alert("Please fill in your Email!");
    }
    else if ((phone_reserve === "")) {
        console.log("The user didnt fill up the phoneNo");
        alert("Please fill in your Phone Number!");
    }
    else if (person_reserve === "" ) {
        console.log("The user didnt fill up the number of person");
        alert("Please fill in the Number of Person!");
    }
    else if ((datetime_reserve === "")) {
        console.log("The user didnt fill up the date and time");
        alert("Please fill in the Date & Time that you wish to reserve!");
    }
    else {
        if(person_reserve <=0 || person_reserve>=15){
            console.log("The user has input a number which over the max limit");
        alert("Please fill in a number of person within 1 to 15!");
        }
        else{
            if (!document.reserve_form.term.checked) {
                alert("You haven't agree the term and conditions");
                console.log("The user didnt agree the term and conditions");
            }
            
            else {
                sessionStorage.setItem('reserveData', JSON.stringify(reserveInfo));
                //sessionStorage.setItem('reservePrivateInfo', JSON.stringify(reservePrivateInfo));
                //sessionStorage.setItem('Email', email_reserve);
                //sessionStorage.setItem('PhoneNo', phone_reserve);
    
                alert("Reserve information successfully sent!\nFull Name: \t" + fname_reserve + " " + lname_reserve
                    + "\nNo of person:\t" + person_reserve + "\nDate & Time:\t" + datetime_reserve + "\nMessage:\t" + text_reserve);
                let savedReservation = JSON.parse(localStorage.getItem("reserveData"));
                //let savedPrivateReservationInfo = JSON.parse(localStorage.getItem("reserveInfo"));
    
                console.log("First Name:", savedReservation.FirstName);
                console.log("Last name:", savedReservation.LastName);
                console.log("Reserve DateTime:", savedReservation.DateTime.toString());
                console.log("Email:", savedReservation.Email);
                console.log("PhoneNo:", savedReservation.PhoneNo);
    
            }
        }
    }
}



//Register Form (localStorage)
function Register() {

    firstname_register = document.form_register.firstname.value;
    lastname_register = document.form_register.lastname.value;
    email_register = document.form_register.email_register.value;
    phone_no_register = document.form_register.phone_no.value;
    password_register = document.form_register.password_register.value;
    confirm_password = document.form_register.passwordConfirmation.value;
    agreement = document.form_register.term.checked;
    /*if ((firstname_register === "") || (lastname_register === "") || (email_register === "") || (phone_no_register === "") || (password_register === "")
        || (confirm_password === "")) {
        console.log("The user didnt fill up the whole form");
        alert("Please fill in the remaining form to register");
    }*/
    if ((firstname_register === "")) {
        console.log("The user didnt fill up the firstname");
        alert("Please fill in your First Name!");
    }
    else if ((lastname_register === "")) {
        console.log("The user didnt fill up the lastname");
        alert("Please fill in your Last Name!");
    }
    else if ((email_register === "")) {
        console.log("The user didnt fill up the email");
        alert("Please fill in your Email!");
    }
    else if ((phone_no_register === "")) {
        console.log("The user didnt fill up the phoneNo");
        alert("Please fill in your Phone Number!");
    }
    else if ((password_register === "")) {
        console.log("The user didnt fill up the password");
        alert("Please fill in the Password!");
    }
    else if ((confirm_password === "")) {
        console.log("The user didnt fill up the confirmation password");
        alert("Please fill in the Confirmation Password!");
    }
    else {
        if (compare_input()) {
            if (!document.form_register.term.checked) {
                console.log("The user didnt agree the term and conditions");
                alert("You haven't agree the term and conditions");
            }
            else {
                localStorage.setItem("FirstName", firstname_register);
                localStorage.setItem("LastName", lastname_register);
                localStorage.setItem("Email", email_register);
                localStorage.setItem("PhoneNo", phone_no_register);
                localStorage.setItem("Password", password_register);
                localStorage.setItem("Password_Confirm", confirm_password);

                console.log("Register Data has been stored!");
                alert("Register Successfully!");
            }

        } else {
            console.log("The user didnt key in the same password");
            alert("Please key in the same password.");
        }
    }

    function compare_input() {
        password_register = document.form_register.password_register.value;
        confirm_password = document.form_register.passwordConfirmation.value;
        if (password_register === confirm_password) {
            return true;
        }
        else {
            return false;
        }
    }
}

//Login Form (localStorage)
function Login() {
    login_email = document.form_login.email_login.value;
    login_password = document.form_login.password_login.value;
    login_email = document.getElementById("email_login").value;
    login_password = document.getElementById("password_login").value;
    if (login_email === "") {
        console.log("Login email is missing");
        alert("Please key in the email!");
    }
    else if (login_password === "") {
        console.log("Login password is missing");
        alert("Please key in the password!");
    }
    else {
        if (check()) {
            localStorage.setItem("Email_Login", login_email);
            localStorage.setItem("Password_Login", login_password);
            console.log("email and password has been recorded in the local storage");
            alert("Login Successfully!");
        }
        else {
            alert("You doesn't have an account yet! \nPlease register before login.");
            console.log("email and password cant be found in the local storage");
        }
    }

    function check() {
        //getItem needs to be using the key instead of the value
        getPassword = localStorage.getItem("Password");
        getEmail = localStorage.getItem("Email");
        if ((login_email === getEmail) && (login_password === getPassword)) {
            return true;
        }
        else {
            return false;
        }
    }

}

//Register Form (localStorage)
function Application() {

    application_firstname = document.application_form.firstname_application.value;
    application_lastname = document.application_form.lastname_application.value;
    application_email = document.application_form.email_application.value;
    application_phoneNo = document.application_form.phone_no_application.value;
    currentAddress = document.application_form.current_address.value;
    application_position = document.application_form.position_application.value;
    application_experience = document.application_form.experience_application.value;
    application_about = document.application_form.about_application.value;
    application_resume = document.application_form.resume_application.value;
    agreement = document.application_form.term_application.checked;

    /*if ((application_firstname === "") || (application_lastname === "") || (application_email === "") || (application_phoneNo === "") || (currentAddress === "")
        || (application_experience === "") || (application_about === "") || (application_resume === "") ) {*/
    if ((application_firstname === "")) {
        console.log("The user didnt fill up the firstname");
        alert("Please fill in your First Name!");
    }
    else if ((application_lastname === "")) {
        console.log("The user didnt fill up the lastname");
        alert("Please fill in your Last Name!");
    }
    else if ((application_email === "")) {
        console.log("The user didnt fill up the email");
        alert("Please fill in your Email!");
    }
    else if ((application_phoneNo === "")) {
        console.log("The user didnt fill up the phoneNo");
        alert("Please fill in your Phone Number!");
    }
    else if ((currentAddress === "")) {
        console.log("The user didnt fill up the current address");
        alert("Please fill in your Current Address!");
    }
    else if ((application_position === "")) {
        console.log("The user didnt fill up the position");
        alert("Please choose the position you want to apply!");
    }
    else if ((application_experience === "")) {
        console.log("The user didnt fill up the past Experience");
        alert("Please choose your Past Experience!");
    }
    else if ((application_about === "")) {
        console.log("The user didnt fill up the more about yourself");
        alert("Please tell us more about yourself!");
    }
    else if ((application_resume === "")) {
        console.log("The user didnt upload the resume");
        alert("Please upload your resume!");
    }
    else {
        if (!document.application_form.term_application.checked) {
            console.log("The user didnt agree the term and conditions");
            alert("You haven't agree the term and conditions");
        }
        else {
            localStorage.setItem("FirstName", application_firstname);
            localStorage.setItem("LastName", application_lastname);
            sessionStorage.setItem("Email", application_email);
            sessionStorage.setItem("PhoneNo", application_phoneNo);
            localStorage.setItem("CurrentAdrress", currentAddress);
            localStorage.setItem("PastExperience", application_experience);
            localStorage.setItem("About", application_about);
            localStorage.setItem("Resume", application_resume);

            console.log("Application Form Data has been stored!");
            alert("Application Form successfully sent!");
        }

    }
}

//Promo Code
function Promo(){
    promo_email = document.promocode_form.email_promo.value;
    promo_phone = document.promocode_form.phone_pormo.value;
    if(promo_email === ""){
        alert("Please key in the email!");
        console.log("The user didnt key in the email");
    }
    else if(promo_phone === ""){
        alert("Please key in the phone number!");
        console.log("The user didnt key in the phone number");
    }
    else{
        setcookie("Email",promo_email,2);
        setcookie("PhoneNo",promo_phone,2);
        alert("Here's the promo code: WELTOSOAK");
    }
}