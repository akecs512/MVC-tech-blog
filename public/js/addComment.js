async function newFormHandler(event) {
  event.preventDefault();
  const comment = document.querySelector("#comment-text").value.trim();
  const postId = document.querySelector("#post-id").value;

  let response = await fetch(`/api/tech/comments`, {
    method: "POST",
    body: JSON.stringify({
      comment,
      post_id: postId,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.ok) {
    window.location.replace("/");
  } else {
    alert("Failed to add comment");
  }
}

const form = document.querySelector("#add-comment-form");
if (form) {
  form.addEventListener("submit", newFormHandler);
}
