console.log("Hi");

let result = {
  tag: "",
  free: true,
  role: false,
  user: "gogeta8985",
  email: "gogeta8985@gmail.com",
  score: 0.64,
  state: "deliverable",
  domain: "gmail.com",
  reason: "valid_mailbox",
  mx_found: true,
  catch_all: null,
  disposable: false,
  smtp_check: true,
  did_you_mean: "",
  format_valid: true,
};

submitBtn.addEventListener("click", async (e) => {
  e.preventDefault();
  console.log("Clicked");
  resultCont.innerHTML = `<img width="150px" src="img/loading.svg" alt="" />`;
  let email = document.getElementById("username").value;
  if (email === "") {
    resultCont.innerHTML = "Please Enter The EmailId";
    return;
  }

  let key = "ema_live_4AxSebA0Tb6uUrXmBEd00aiMQ4Q0Rswh72bQ18OH";
  let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`;
  let res = await fetch(url);
  let result = await res.json();
  let str = ``;

  for (key of Object.keys(result)) {
    if (result[key] != "" && result[key] != " ") {
      str = str + `<div>${key}: ${result[key]}</div>`;
    }
  }
  console.log(str);
  Cont.innerHTML = "Here are The Results";
  resultCont.innerHTML = str;
});
