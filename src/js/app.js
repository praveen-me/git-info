let user;
const userName = document.getElementById('user-value');
const userBlock = document.querySelector('.show_user_details');
const reposBlock  = document.querySelector('.repos');
let repoStr = '';

// function for appending details 
const showUserDetails = () => {
  user.userDetails = function() {
    const fragment = document.createDocumentFragment();
    const detailsDiv = document.createElement("div");

    let details = `
    <div class="user_image">
      <img src="${this.avatar_url}">
    </div>
    <div class="show_details">
      <p class="show_name">
      <span class="name_value">${this.name}</span>
      </p>
      <p class="show_repos user_info">
        <span class="repos_head">Repositories : </span>
        <span class="repo_value">${this.public_repos}</span>
      </p>
      <p class="show_follower user_info">
        <span class="follower_head">Follower : </span>
        <span class="follower_value">${this.followers}</span>
      </p>
      <p class="show_following user_info">
        <span class="following_head">Following : </span>
        <span class="following_value">${this.following}</span>
      </p>
      <p class="show_bio user_info">
        <span class="bio_head">Bio : </span>
        <span class="bio_value">${this.bio}</span>
      </p>
    </div>    
    `;

    detailsDiv.classList.add("details_block");
    detailsDiv.innerHTML = details;

    fragment.appendChild(detailsDiv);

    userBlock.innerHTML = '';
    userBlock.appendChild(fragment);
  }
  user.userDetails();
}

//function for showRepo
const showRepo = () => {
  user.showRepo = function() {
    let fragment = document.createDocumentFragment();
    let repoDiv = document.createElement("div");

    let str = `
    <h3 class="repo_head center">User Repositories</h3>
    <ul class="repos_container">
      ${repoStr}
    </ul>
    `
    reposBlock.innerHTML = '';
    repoDiv.classList.add("repos_block");
    repoDiv.innerHTML = str;
    
    fragment.appendChild(repoDiv);
    reposBlock.appendChild(fragment);

    repoStr = '';
  }
  user.showRepo();
}

//function for fetchData
function getData(response) {
  console.log(response.ok)
  if(!response.ok) {
    console.log("User name is not correct");
    return;
  } else {
    return response.json().then(res => {
      user = res;
      let repos = fetch(`https://api.github.com/users/${userName.value}/repos?per_page=100`).
      then(response => {
        response.json().then(res => {
          user.repos = [];
          res.forEach(repo => {
            let repoDetails = {
              name : repo.name,
              url : repo.html_url
            };
            user.repos.push(repoDetails);
          });
          (function(){
            user.repos.forEach((repo, i) => {
              repoStr += `
              <li class="repo_item">
                <span class="repo_no">${i+1}</span> - <a href="${repo.url}">${repo.name}</a>  
              </li>
              `
            });
            showRepo();
          })(); 

          
       });
     }).catch(e => {
      console.log(e);
     });
      showUserDetails();    
    });
  }
}


//Fetching API
function fetchData(e) {
  if(e.keyCode === 13) {
    let data = fetch(`https://api.github.com/users/${userName.value}`).then(getData).
    catch((e) =>{
      console.log(e);
      console.log("Check your internet connection.");
    });
  }
}

document.body.addEventListener('keypress', fetchData);
