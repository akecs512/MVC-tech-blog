async function newFormHandler(event) {
  event.preventDefault();
  const title = document.querySelector("#comment-title").value;
  const text = document.querySelector("#comment-text").value.trim();

  let response = await fetch(`/api/comments`, {
    method: "POST",
    body: JSON.stringify({ title, text, username: "foo" }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.ok) {
    window.location.replace("/");
  } else {
    console.log(response);
    alert("Failed to add comment");
  }
}
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#new-comment");
  if (form) {
    form.addEventListener("click", newFormHandler);
  }
});
