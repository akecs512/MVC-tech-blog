async function deletePost(event) {
    event.preventDefault();
    const postId = event.target.getAttribute("data-id");
    const response = await fetch(`/api/posts/${postId}`, {
      method: "DELETE",

    });
    if (response.ok) {
      window.location.replace("/dashboard/" );
    } else {
      alert("Failed to delete post");
    }
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".delete-button");
    buttons.forEach((button) => { 
      button.addEventListener("click", deletePost);
    })
  });
  