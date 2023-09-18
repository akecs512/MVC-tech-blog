async function newFormHandler(event) {
  event.preventDefault();
  const text = document.querySelector("#comment-text").value.trim();
  const postId = document.querySelector("#post-id").value;

  const response = await fetch(`/api/posts`, {
    method: "PUT",
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
  const editButtons = document.querySelectorAll(".edit-button");
  editButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
    //   const id = e.target.getAttribute("data-id");
    //   window.location.replace("/edit/" + id);
    });
  });
});
