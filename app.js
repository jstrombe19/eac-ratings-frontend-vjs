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

    
    function create_form(form_name) {
        const matched_form = forms_list[form_name];
        const form_keys = Object.keys(matched_form);
        form_keys.forEach(key => {
            const form_input = document.createElement('input');
            form_input.setAttribute('type', matched_form[key]);
            form_input.setAttribute('class', 'form-input');
            form_input.setAttribute('placeholder', key);
            loginForm.appendChild(form_input);
        })
        const form_submit = document.createElement('button');
        form_submit.setAttribute('type', 'submit');
        form_submit.setAttribute('class', 'form-submission');
        switch(form_name) {
            case 'login':
                console.log('login passed to create_form');
                form_submit.innerText = 'login';
                form_submit.addEventListener('click', (e) => {
                    e.preventDefault();
                    console.log("%cLogging User In!", 'color: #1BE7FF');
                    
                })
                break;
            case 'new-user':
                console.log('new-user passed to create_form');
                break;
            case 'new-rating':
                console.log('new-rating passed to create_form');
                break;
            default:
                console.error('Unknown form type passed into create_form');
                break;
        }
        loginForm.appendChild(form_submit);
    }

    create_form('login');


    // create new rating form
    


    // create new user form
    
    // create statistics viewer

    user_is_active()? display_articles() : display_login();

    function display_articles() {
        console.log('display_articles was invoked');
    };
    
    function display_login() {
        console.log('display_login was invoked');
        loginForm.removeAttribute('hidden');
    };

    function user_is_active() {
        console.log('user_is_active was invoked');
        // return true
    }

    function login_user() {
        const username = loginForm.getElementById('username');
        const password = loginForm.getElementById('password');
    }

})