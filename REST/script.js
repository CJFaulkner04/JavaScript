let outputDiv = document.getElementById("output");

function getAll() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((json) => {
        outputDiv.innerHTML = "";
        for(let i = 0; i < json.length; i++) {
            outputDiv.innerHTML += 
            "<div id='post'>" +
            "<p> UserID: " + json[i].userId + "</p>" +
            "<p> ID: " + json[i].id + "</p>" +
            "<p> Title: " + json[i].title + "</p>" +
            "<p> Body: " + json[i].body + "</p>";
        }
    });
}

function getPost() {
  fetch("https://jsonplaceholder.typicode.com/posts/10")
    .then((response) => response.json())
    .then((json) => {
        outputDiv.innerHTML = "";
        outputDiv.innerHTML += 
            "<div id='post'>" +
            "<p> UserID: " + json.userId + "</p>" +
            "<p> ID: " + json.id + "</p>" +
            "<p> Title: " + json.title + "</p>" +
            "<p> Body: " + json.body + "</p>";
    });
}

function createPost() {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: "foo",
      body: "bar",
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => {
        outputDiv.innerHTML = "";
        outputDiv.innerHTML += 
            "<div id='post'>" +
            "<p> ID: " + json.id + "</p>";
    });
}

function replacePost() {
  fetch("https://jsonplaceholder.typicode.com/posts/12", {
    method: "PUT",
    body: JSON.stringify({
      id: 1,
      title: "New 12",
      body: "bar",
      userId: 12,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => {
        outputDiv.innerHTML = "";
        outputDiv.innerHTML += 
            "<div id='post'>" +
            "<p> UserID: " + json.userId + "</p>" +
            "<p> ID: " + json.id + "</p>" +
            "<p> Title: " + json.title + "</p>" +
            "<p> Body: " + json.body + "</p>";
    });
}

function updatePost() {
  fetch("https://jsonplaceholder.typicode.com/posts/12", {
    method: "PATCH",
    body: JSON.stringify({
      title: "Updated Title",
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => {
        outputDiv.innerHTML = "";
        outputDiv.innerHTML += 
            "<div id='post'>" +
            "<p> UserID: " + json.userId + "</p>" +
            "<p> ID: " + json.id + "</p>" +
            "<p> Title: " + json.title + "</p>" +
            "<p> Body: " + json.body + "</p>";
    });
}

function deletePost() {
  fetch("https://jsonplaceholder.typicode.com/posts/12", {
    method: "DELETE",
  }).then((json) => {
    outputDiv.innerText = "Success!";
    outputDiv.innerHTML = "";
        outputDiv.innerHTML += 
            "<div id='post'>" +
            "<h2>Post 12 was successfully deleted</h2>" +
            "</div>";
  });
}