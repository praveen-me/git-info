let user;
const userName = document.getElementById('user-value');

// function resolvePromise(response) {
//   if(response.status === 404) {
//     Error("User Name Not Found");
//   } else {
//     return response.json().
//     then((res,reject) => {
//       user = res;
//     }, (reject) => {
//       throw new Error("User Name Is Wrong");
//     });
//   }
// }

// function rejectPromise(response) {
//   if(response.status === 404) {
//     console.log("Network Error");
//   } 
// }

//Fetching API
function fetchData(e) {
  if(e.keyCode === 13) {
    let data = fetch(`https://api.github.com/users/${userName.value}`).then(response => {
      console.log(response.ok)
      if(!response.ok) {
        console.log("User name is not correct");
        return;
      } else {
        return response.json().then(res => {
          user = res;
        });
      }
    }).catch(() =>{
      console.log("Check your internet connection.");
    });
  }
}

document.body.addEventListener('keypress', fetchData);

