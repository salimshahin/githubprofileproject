 // fetch("https://github-api-wine-six.vercel.app/saketbhatnagar");
// we can fetch data using promise chaining or by using async await.

let article = document.getElementsByClassName("allusers")[0];
let article1 = document.getElementsByClassName("searchuser")[0];

async function fetchData(user) {
  let resp = await fetch("https://api.github.com/users");
  let data = await resp.json();
  console.log(data);

  data.map(user => {
    let { login, avatar_url, html_url } = user;

    article.innerHTML += `
        <div class="card">
                <img src=${avatar_url} alt=${login}> 
                <h3>${login}</h3>
                <a href=${html_url}>GOTO Profile</a>
        </div>
    
      `;
  });
}

fetchData();

async function SearchUser(user) {
  let resp = await fetch(`https://api.github.com/users/${user}`);
  let data = await resp.json();
  console.log(data);

  let { login, avatar_url, html_url } = data;
  if (login != undefined)
    article1.innerHTML = `

        <div class="usercard">
                <img src=${avatar_url} alt=${login}>
                <h3>${login}</h3>
                <a href=${html_url}>GOTO Profile</a>
        </div>`;
  else article1.innerHTML = "<h1>User Not Found!!!!</h1>";
}

let form = document.forms[0];
let input = document.forms[0].elements.user;

form.addEventListener("submit", e => {
  e.preventDefault();
  SearchUser(input.value);
});
