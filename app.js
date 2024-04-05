console.log("Good morning, Vietnam!");


document.addEventListener('DOMContentLoaded', () => {
    console.log("%cDOM Content Loaded and Parsed!", 'color: magenta');

    // select forms section for later use
    const formSection = document.getElementById('forms-section');
    // declare all form types
    const newUserForm = document.createElement('form');
    const newRatingForm = document.createElement('form');
    const loginForm = document.createElement('form');
    
    // append all form type sto forms section
    formSection.appendChild(loginForm);
    formSection.appendChild(newUserForm);
    formSection.appendChild(newRatingForm);
    
    // create login form
    let login_username = document.createElement('input');
    let login_password = document.createElement('input');
    let login_submit = document.createElement('button');
    
    //login form entries
    login_username.setAttribute('type', 'text');
    login_username.setAttribute('class', 'form-input');
    login_username.setAttribute('placeholder', 'username');
    login_password.setAttribute('type', 'password');
    login_password.setAttribute('class', 'form-input');
    login_password.setAttribute('placeholder', 'password');
    login_submit.setAttribute('type', 'submit');
    login_submit.setAttribute('class', 'form-submission');
    login_submit.innerText = 'login';

    login_submit.addEventListener('click', (e) => {
        e.preventDefault();
        console.log("%cLogging User In!", 'color: #1BE7FF');
        
    })

    // append login form entries
    loginForm.appendChild(login_username);
    loginForm.appendChild(login_password);
    loginForm.appendChild(login_submit);


    // create new rating form
    


    // create new user form
    
    // create statistics viewer

    user_is_active()? display_articles() : display_login();

    function display_articles() {
        console.log('display_articles was invoked');
    };
    
    function display_login() {
        console.log('display_login was invoked');
    };

    function user_is_active() {
        console.log('user_is_active was invoked');
        return true
    }

})