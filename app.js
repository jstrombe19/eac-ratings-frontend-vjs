
console.log("Good morning, Vietnam!");

document.addEventListener('DOMContentLoaded', () => {
    console.log("%cDOM Content Loaded and Parsed!", 'color: magenta');
    sessionStorage.clear();

    const forms_list = {
        'new-user': {
            'username': 'text',
            'password': 'text',
            'level': 'text'
        },
        'new-rating': {
            'id': 'hidden',
            'user_id': 'hidden',
            'department_id': 'hidden',
            'title': 'text',
            'context_rating': 'float',
            'content_rating': 'float',
            'genre_rating': 'float',
            'sources_rating': 'float',
            'control_rating': 'float'
        },
        'login': {
            'username': 'text',
            'password': 'password'
        }
    };

    const rubric = {
        'VOID': null,
        'Capstone': 4,
        'Milestones': 3.2,
        'Benchmark': 1,
        'Context': {
            'heading': "Context of and Purpose for Writing",
            'description': "Includes considerations of audience, purpose, and the circumstances surrounding the writing task(s).",
            '4': "Demonstrates a thorough understanding of context, audience, and purpose that is responsive to the assigned task(s) and focuses all elements of the work.",
            '3': "Demonstrates adequate consideration of context, audience, and purpose and a clear focus on the assigned task(s) (e.g., the task aligns with audience, purpose, and context).",
            '2': "Demonstrates awareness of context, audience, purpose, and to the assigned tasks(s) (e.g., begins to show awareness of audience's perceptions and assumptions).",
            '1': "Demonstrates minimal attention to context, audience, purpose, and to the assigned tasks(s) (e.g., expectation of instructor or self as audience)."
        },
        'Content': {
            'heading': "Content Development",
            'description': null,
            '4': "Uses appropriate, relevant, and compelling content to illustrate mastery of the subject, conveying the writer's understanding, and shaping the whole work.",
            '3': "Uses appropriate, relevant, and compelling content to explore ideas within the context of the discipline and shape the whole work.",
            '2': "Uses appropriate and relevant content to develop and explore ideas through most of the work.",
            '1': "Uses appropriate and relevant content to develop simple ideas in some parts of the work."
        },
        'Conventions': {
            'heading': "Genre and Disciplinary Conventions",
            'description': "Formal and informal rules inherent in the expectations for writing in particular forms and/or academic fields (please see glossary).",
            '4': "Demonstrates detailed attention to and successful execution of a wide range of conventions particular to a specific discipline and/or writing task (s) including organization, content, presentation, formatting, and stylistic choices.",
            '3': "Demonstrates consistent use of important conventions particular to a specific discipline and/or writing task(s), including organization, content, presentation, and stylistic choices.",
            '2': "Follows expectations appropriate to a specific discipline and/or writing task(s) for basic organization, content, and presentation.",
            '1': "Attempts to use a consistent system for basic organization and presentation."
        },
        'Sources': {
            'heading': "Sources and Evidence",
            'description': null,
            '4': "Demonstrates skillful use of high- quality, credible, relevant sources to develop ideas that are appropriate for the discipline and genre of the writing.",
            '3': "Demonstrates consistent use of credible, relevant sources to support ideas that are situated within the discipline and genre of the writing.",
            '2': "Demonstrates an attempt to use credible and/or relevant sources to support ideas that are appropriate for the discipline and genre of the writing.",
            '1': "Demonstrates an attempt to use sources to support ideas in the writing."
        },
        'Control': {
            'heading': "Control of Syntax and Mechanics",
            'description': null,
            '4': "Uses graceful language that skillfully communicates meaning to readers with clarity and fluency, and is virtually error- free.",
            '3': "Uses straightforward language that generally conveys meaning to readers. The language in the portfolio has few errors.",
            '2': "Uses language that generally conveys meaning to readers with clarity, although writing may include some errors.",
            '1': "Uses language that sometimes impedes meaning because of errors in usage."
        }
    };

    // select static HTML elements for later use
    const formSection = document.getElementById('forms-section');
    const tableSection = document.getElementById('table-section');

    let form_list_keys = Object.keys(forms_list);
    form_list_keys.forEach(key => {
        const new_element_parent = document.createElement('div');
        new_element_parent.setAttribute('name', `${key}-div`);
        new_element_parent.setAttribute('class', 'form-div');
        const new_element = document.createElement('form');
        new_element.setAttribute('class', 'form');
        new_element.setAttribute('id', `${key}-form`);
        new_element.setAttribute('hidden', true);
        new_element_parent.appendChild(new_element);
        formSection.appendChild(new_element_parent);
    })

    // retrieve all form types
    const newUserForm = document.getElementById('new-user-form');
    const newRatingForm = document.getElementById('new-rating-form');
    const loginForm = document.getElementById('login-form');
    // todo: add new article form

    function append_child(form_name, new_child) {
        switch(form_name) {
            case 'login':
                loginForm.appendChild(new_child);
                break;
            case 'new-rating':
                newRatingForm.appendChild(new_child);
                break;
            case 'new-user':
                newUserForm.appendChild(new_child);
                break;
            default:
                console.error('Unknown form name passed to create_form function');
        }
    }

    function create_form(form_name) {
        const matched_form = forms_list[form_name];
        console.log(form_name);
        const form_keys = Object.keys(matched_form);
        form_keys.forEach(key => {
            const form_input = document.createElement('input');
            form_input.setAttribute('type', matched_form[key]);
            form_input.setAttribute('class', 'form-input');
            form_input.setAttribute('value', '');
            form_input.setAttribute('placeholder', key);
            form_input.setAttribute('id', key);
            form_input.setAttribute('name', key);
            // form_input.setAttribute('onChange', () => update_form_fields());
            append_child(form_name, form_input);
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
                    login_user();
                })
                break;
            case 'new-user':
                console.log('new-user passed to create_form');
                form_submit.innerText = 'add user';
                form_submit.addEventListener('click', (e) => {
                    e.preventDefault();
                    console.log("%cAdding User to Database!", 'color: #1BE7FF');
                    
                })
                break;
            // case 'new-rating':
            //     console.log('new-rating passed to create_form');
            //     form_submit.innerText = 'add rating';
            //     form_submit.addEventListener('click', (e) => {
            //         e.preventDefault();
            //         console.log("%cAdding Rating to Database!", 'color: #1BE7FF');
                    
            //     })
            //     break;
            default:
                console.error('Unknown form type passed into create_form');
                break;
        }
        append_child(form_name, form_submit);
    }

    create_form('login');
    create_form('new-user');
    // create_form('new-rating');

    display_login();

    
    // create statistics viewer (if authorized)

    // create landing page for user (display all articles as links to lead to the rating form)
    let article_list_div = document.createElement('div');
    article_list_div.setAttribute('class', 'list-div');
    article_list_div.setAttribute('id', 'article-list');
    tableSection.appendChild(article_list_div);
    
    const articleList = document.getElementById('article-list');

    function get_user_profile() {
        const storedToken = sessionStorage.getItem("jwt");
        const userId = sessionStorage.getItem("user_id");
        fetch('http://localhost:3000/profile', {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${storedToken}`,
            "user_id": `${userId}`
        }
        }).then(response => response.json())
        .then(response => {
            // console.log(response['include']);
            display_articles(response['include']);
        })

    }


    // create new article rating

    // user_is_active()? check_for_active_article() : display_login();

    // function update_stored_token() {
    //     storedToken = sessionStorage.get("jwt");
    // }

    // function update_user_id() {
    //     userId = sessionStorage.get("user_id");
    // }


    const rubric_keys = Object.keys(rubric);
    function display_rating_form(article_id) {
        const active_article = JSON.parse(sessionStorage.getItem(article_id));
        hide_articles();
        newRatingForm.removeAttribute('hidden');
        const rating_title = document.createElement('header');
        rating_title.innerHTML = `EAC Written Communication Rubric for ${active_article.title}`;
        // rating_title.setAttribute('class', '')
        newRatingForm.appendChild(rating_title);
        for(let i = 4; i<9; i++) {
            const rubric_row = document.createElement('tr');
            rubric_row.setAttribute('class', 'rubric-tr');
            rubric_row.setAttribute('id', `rubric-tr-${rubric_keys[i]}`);

            // const rubric_row_keys = Object.keys(rubric[rubric_keys[i]]);
            const rubric_row_keys = ['heading', 'description', '4', '3', '2', '1'];
            rubric_row_keys.forEach(row_key => {
                // console.log(row_key);
                const rubric_row_td = document.createElement('td');
                rubric_row_td.setAttribute('name', `rubric-row-td-${row_key}`);
                rubric_row_td.setAttribute('id', `${rubric_keys[i]-row_key}`);
                rubric_row_td.innerHTML = rubric[rubric_keys[i]][row_key];
                rubric_row.appendChild(rubric_row_td);   
            })

            const rubric_row_form_field = document.createElement('td');
            rubric_row_form_field.setAttribute('class', 'rubric-row-form-field');
            rubric_row_form_field.setAttribute('id', `${rubric_keys[i]}-${rubric_row_keys[i]}-form-field`);
            const rubric_row_form_field_entry = document.createElement('input');
            rubric_row_form_field_entry.setAttribute('type', 'text');
            rubric_row_form_field_entry.setAttribute('class', 'form-input');
            rubric_row_form_field_entry.setAttribute('value', '');
            rubric_row_form_field_entry.setAttribute('placeholder', '');
            rubric_row_form_field_entry.setAttribute('id', `${rubric_keys[i]}-${rubric_row_keys[i]}`);
            rubric_row_form_field_entry.setAttribute('name', `${rubric_keys[i]}-${rubric_row_keys[i]}`);
            rubric_row_form_field.appendChild(rubric_row_form_field_entry);
            rubric_row.appendChild(rubric_row_form_field);

            newRatingForm.appendChild(rubric_row);
        }
        // console.log(rubric_keys);
    }

    function hide_rating_form() {

    }

    function is_article_review_complete(article) {
        if(article['content_rating'] && article['context_rating'] && article['control_rating'] && article['sources_rating']) {
            return true;
        } else {
            return false;
        }
    }

    const article_list_tbl = document.createElement('table');
    article_list_tbl.setAttribute('id', 'article-list-table');
    article_list_tbl.setAttribute('class', 'table');
    article_list_tbl.setAttribute('name', 'article-list-table');
    article_list_tbl.setAttribute('hidden', true);
    articleList.appendChild(article_list_tbl);

    const article_tr_headers = document.createElement('th');
    article_tr_headers.setAttribute('class', 'article-tr-header');
    article_tr_headers.setAttribute('id', 'article-tr-header');
    
    const article_td_title_header = document.createElement('td');
    article_td_title_header.setAttribute('name', 'article-title-header');
    article_td_title_header.setAttribute('id', 'article-title-header');

    const article_td_header_tn = document.createTextNode('Article Title');
    article_td_title_header.appendChild(article_td_header_tn);
    article_tr_headers.appendChild(article_td_title_header);

    const article_td_review_status_header = document.createElement('td');
    article_td_review_status_header.setAttribute('name', 'article-review-status-header');
    article_td_review_status_header.setAttribute('id', `article-review-status-header`);

    const article_td_review_header_tn = document.createTextNode('Article Review Status');
    article_td_review_status_header.appendChild(article_td_review_header_tn);
    article_tr_headers.appendChild(article_td_review_status_header);

    article_list_tbl.appendChild(article_tr_headers);

    function display_articles(articles) {
        /*
        const matched_form = forms_list[form_name];
        console.log(form_name);
        const form_keys = Object.keys(matched_form);
        form_keys.forEach(key => {
            const form_input = document.createElement('input');
            form_input.setAttribute('type', matched_form[key]);
            form_input.setAttribute('class', 'form-input');
            form_input.setAttribute('value', '');
            form_input.setAttribute('placeholder', key);
            form_input.setAttribute('id', key);
            form_input.setAttribute('name', key);
            // form_input.setAttribute('onChange', () => update_form_fields());
            append_child(form_name, form_input);
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
                    login_user();
                })
                break;
        */
        article_list_tbl.removeAttribute('hidden');
        console.log('display_articles was invoked');
        articles.forEach(article => {
            // console.log(article);
            sessionStorage.setItem(`${article.id}`, JSON.stringify(article));
            // create table entry using title
            const article_tr = document.createElement('tr');
            article_tr.setAttribute('class', 'article-tr');
            article_tr.setAttribute('id', `tr-${article.id}`);
            
            const article_td_title = document.createElement('td');
            article_td_title.setAttribute('name', 'article-title');
            article_td_title.setAttribute('id', `${article.id}`);
            article_td_title.style.cursor = 'pointer';
            article_td_title.addEventListener('click', (e) => {
                e.preventDefault();
                console.log(e.target.id);
                display_rating_form(e.target.id);
            })

            const article_td_tn = document.createTextNode(article.title);
            article_td_title.appendChild(article_td_tn);
            article_tr.appendChild(article_td_title);

            const article_td_review_status = document.createElement('td');
            article_td_review_status.setAttribute('name', 'article-review-status');
            article_td_review_status.setAttribute('id', `status-td-${article.id}`);

            const article_td_review_tn = document.createTextNode(is_article_review_complete(article));
            article_td_review_status.appendChild(article_td_review_tn);
            article_tr.appendChild(article_td_review_status);

            article_list_tbl.appendChild(article_tr);
        })
    };

    function hide_articles() {
        console.log('hide_articles was invoked');
        article_list_tbl.setAttribute('hidden', true);
    }
    
    function display_login() {
        console.log('display_login was invoked');
        loginForm.removeAttribute('hidden');
    };

    function hide_login_form() {
        loginForm.setAttribute('hidden', true);
    }

    function user_is_active() {
        console.log('user_is_active was invoked');
        if (sessionStorage.getItem("jwt")) {
            return true;
        } else {
            return false;
        }
    }

    function login_user() {
        // const username = document.getElementById('username');
        const formData = new FormData(loginForm);
        const username = formData.get('username');
        const password = formData.get('password');
        fetch("http://localhost:3000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                // "Authorization": `Bearer ${/* token goes here */}`
            },
            body: JSON.stringify({
                username: username,
                password: password
            }),
        }).then(response => response.json())
        .then(response => {
            const token = response.token;
            sessionStorage.setItem("jwt", token);
        })
        .then(response => {
            hide_login_form();
            get_user_profile();
        })
    }



})