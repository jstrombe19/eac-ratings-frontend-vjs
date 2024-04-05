console.log("Good morning, Vietnam!");


document.addEventListener('DOMContentLoaded', () => {
    console.log("%cDOM Content Loaded and Parsed!", 'color: magenta');

    const forms_list = {
        'new-user': {
            'username': 'text',
            'password': 'text',
            'level': 'text'
        },
        'new-rating': {
            'filler1': 'text'
        },
        'login': {
            'username': 'text',
            'password': 'text'
        }
    };

    // select forms section for later use
    const formSection = document.getElementById('forms-section');

    let form_list_keys = Object.keys(forms_list);
    form_list_keys.forEach(key => {
        let new_element = document.createElement('form');
        new_element.setAttribute('class', 'form');
        new_element.setAttribute('id', `${key}-form`);
        new_element.setAttribute('hidden', true);
        formSection.appendChild(new_element);
    })

    // retrieve all form types
    const newUserForm = document.getElementById('new-user-form');
    const newRatingForm = document.getElementById('new-rating-form');
    const loginForm = document.getElementById('login-form');

    
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