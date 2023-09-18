async function newFormHandler(event) {
    event.preventDefault();
    const postTitle = document.querySelector("#post-title").value;
    const postDescription = document
      .querySelector("#post-description")
      .value.trim();
      const postId = document.querySelector("#post-id").value;
  
    let response = await fetch(`/api/posts/${postId}`, {
      method: "PUT",
      body: JSON.stringify({
        title: postTitle,
        description: postDescription,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      window.location.replace("/dashboard");
    } else {
      alert("Failed to add post post");
    }
  }
  
  const form = document.querySelector("#new-post-form");
  if (form) {
    form.addEventListener("submit", newFormHandler);
  }
  