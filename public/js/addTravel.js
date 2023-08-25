


async function newFormHandler(event) {
  event.preventDefault();
  const destination = document.querySelector('#destination').value;
  const note = document.querySelector('#note').value;
  let leanNote =  note.trim();
  const startDate = new Date(document.querySelector('#start-date').value);
  const endDate = new Date (document.querySelector('#end-date').value);
  
  // Send post request to add a new tavel information
  let response = await fetch(`/api/travel`, {
    method: 'POST',
    body: JSON.stringify({
      destination: destination,
      start_date: startDate,
      end_date: endDate,
      note: leanNote,

    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  //if travel is added, the 'all' template will be rerendered
  if (response.ok) {
    window.location.replace('/travelogue');
  } else {
    alert('Failed to add comment');
  }
}

const formElement = document.querySelector('.new-post-form');
if (formElement) {
document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);
} 

