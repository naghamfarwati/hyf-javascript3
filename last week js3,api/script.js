document.querySelector('button').addEventListener('click', getUserData, false);
document.querySelector('input').addEventListener('keypress', (e) => {
   if (e.keyCode === 13) {
       e.preventDefault();
       getUserData();
   }
});
//function 1//
function getUserData() {
    const userNameInput = document.getElementById("input").value;
    const userURL = `https://api.github.com/users/${userNameInput}`;
    const repoURL = `https://api.github.com/users/${userNameInput}/repos`;
    let userRequest = new XMLHttpRequest;
    userRequest.open("GET", userURL);
    userRequest.onload = function () {
        if (userRequest.readyState === XMLHttpRequest.DONE) {
            if (userRequest.status !== 200) {
                console.log("There was an error");
            } else {
                let userData = JSON.parse(userRequest.responseText);
                console.log(userData);
                let userName = userData.name;
                let userAvatar = userData.avatar_url;
                let output1 = '';
                output1 += '<div>'
                    + '<h1>' + userName + '</h1>'
                    + '<img src="' + userAvatar + '" />' +
                    '</div>';
                let update1 = document.getElementById('links');
                update1.innerHTML = output1;
            }
            let repoRequest = new XMLHttpRequest();
            repoRequest.open("GET", repoURL);
            repoRequest.onload = function () {
                let reposData = JSON.parse(repoRequest.responseText);
                let output2 = '';
                for (let i = 0; i < reposData.length; i++) {
                    const reposUserName = reposData[i].name;
                    console.log(reposUserName);
                    output2 += '<div id='+reposUserName+'>'
                        + '<h3>' + reposUserName + '</h3>' +
                        '</div>';
                    }
                    let update2 = document.getElementById('repos');
                update2.innerHTML = output2;
                let reposName = reposData.map(repo => repo.name)
                getCommits(userNameInput, reposName)
            }
            repoRequest.send();
        }
    }
    userRequest.onerror = function () {
        console.log(userRequest.statusText);
    }
    userRequest.send();
}

//function2//
function getCommits(userNameInput, reposName) {
    for (let i in reposName) {
        let commitsRequest = new XMLHttpRequest();
        commitsRequest.open('GET', 'https://api.github.com/repos/' + userNameInput + '/' + reposName[i] + '/commits', true);
        commitsRequest.onload = function () {
        let committersInfo = JSON.parse(commitsRequest.responseText);
            let imgUrl = committersInfo[0].author.avatar_url;
            let html = '';
            html += '<h2>' + committersInfo[0].commit.author.name + '</h2>'
                + '<img src=' + imgUrl +'/>';
            let div = document.createElement('div');
            div.innerHTML = html;
            document.getElementById(reposName[i]).appendChild(div);
        }
        commitsRequest.send();

        commitsRequest.onerror = function () {
            console.log(commitsRequest.statusText);
        }
    }
}
