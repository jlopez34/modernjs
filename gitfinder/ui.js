class UI {
    constructor() {
        this.profile = document.getElementById('profile');
    }

    //Display Profile on UI
    showProfile(user) {
        this.profile.innerHTML = `
            <div class="card card-body mb-3">
                <div class="row">
                    <div class="col-md-3">
                        <img class="img-fluid mb-2" src="${user.avatar_url}">
                        <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
                    </div>
                    <br>
                    <div class="col-md-9">
                        <span class="badge badge-primary">Public Repos:${user.public_repos}</span>
                        <span class="badge badge-secondary">Public Gits:${user.public_gists}</span>
                        <span class="badge badge-success">Followers:${user.followers}</span>
                        <span class="badge badge-info">Following:${user.following}</span>
                        <br><br>
                        <ul class="list-group">
                            <li class="list-group-item">Company: ${user.company}</li>
                            <li class="list-group-item">Website/blog: ${user.blog}</li>
                            <li class="list-group-item">Location: ${user.location}</li>
                            <li class="list-group-item">Member since: ${user.created_at}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <h3 class="page-heading mb-3">Lastet Repos</h3>
            <div id="repos"></div>
        `;

    }

    //Clear profile git
    clearProfile() {
        this.profile.innerHTML = '';
    }

    //Display message alert when It is does not exit the git user
    showAlert(message, className) {
        //Clear messages
        this.hideAlert();
        //Create element
        const div = document.createElement('div');
        // setting style
        div.className = className;
        // setting text
        div.appendChild(document.createTextNode(message));
        // getting search container
        const container = document.querySelector('.searchContainer');
        // getting search box
        const search = document.querySelector('.search');
        // inserting message alert before search box
        container.insertBefore(div, search);
        // hidding alert message after 2 sec
        setTimeout(() => {
            this.hideAlert();
        }, 2000)
    }

    //Hide message Alert
    hideAlert() {
        const messageAlert = document.querySelector('.alert');

        if (messageAlert) {
            messageAlert.remove();
        }

    }
}