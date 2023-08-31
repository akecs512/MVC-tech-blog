


async function newFormHandler(event) {
  event.preventDefault();
  const blog_title = document.querySelector('#blog_title').value;
  const blog_description = document.querySelector('#blog_description').value;
  let leanNote =  blog_description.trim();
  
  // Send post request to add a new tavel information
  let response = await fetch(`/api/tech`, {
    method: 'POST',
    body: JSON.stringify({
      blog_title: blog_title,
      blog_description: leanNote,

    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  //if techblog is added, the 'all' template will be rerendered
  if (response.ok) {
    window.location.replace('/techblog');
  } else {
    alert('Failed to add comment');
  }
}

const formElement = document.querySelector('.new-post-form');
if (formElement) {
document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);
} 

