async function newFormHandler(event) {
  event.preventDefault();
  const postTitle = document.querySelector("#post-title").value;
  const postDescription = document
    .querySelector("#post-description")
    .value.trim();

  let response = await fetch(`/api/posts`, {
    method: "POST",
    body: JSON.stringify({
      title: postTitle,
      description: postDescription,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.ok) {
    window.location.replace("/");
  } else {
    alert("Failed to add post post");
  }
}

const form = document.querySelector("#new-post-form");
if (form) {
  form.addEventListener("submit", newFormHandler);
}
