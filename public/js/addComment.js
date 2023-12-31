async function newFormHandler(event) {
  event.preventDefault();
  const text = document.querySelector("#comment-text").value.trim()
  const postId = document.querySelector("#post-id").value;

  const response = await fetch(`/api/comments`, {
    method: "POST",
    body: JSON.stringify({ text, postId }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.ok) {
    window.location.replace("/posts/" + postId);
  } else {
    alert("Failed to add comment");
  }
}
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#new-comment");
  if (form) {
    form.addEventListener("click", newFormHandler);
  }
});
