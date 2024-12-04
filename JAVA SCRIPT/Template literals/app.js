//Template literals
const name = "Surya";
const age = 20;
const job = "web developer";
const city = "Bengaluru";

let html;

//without using  template literals, ES5, we are going to render HTML to browser with JS

html =
  "<ul><li>Name:" +
  name +
  "</li><li>Age:" +
  age +
  "</li><li>job:" +
  job +
  "</li><li>" +
  city +
  "</li></ul>";

document.body.innerHTML = html;
function hello() {
    return "hello";
};


//with using template literals(es6)
html = `
<ul>
<li>Name:${name}</li>
<li>Age:${age}</li>
<li>Job:${job}</li>
<li>City:${city}</li>
</ul>
`;
document.body.innerHTML = html;
