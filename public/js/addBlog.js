async function newFormHandler(event) {
  event.preventDefault();
  const blogTitle = document.querySelector("#blog-title").value;
  const blogDescription = document
    .querySelector("#blog-description")
    .value.trim();

  let response = await fetch(`/api/tech`, {
    method: "POST",
    body: JSON.stringify({
      blog_title: blogTitle,
      blog_description: blogDescription,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.ok) {
    window.location.replace("/home");
  } else {
    alert("Failed to add comment");
  }
}

const formElement = document.querySelector(".new-post-form");
if (formElement) {
  document
    .querySelector(".new-post-form")
    .addEventListener("submit", newFormHandler);
}
