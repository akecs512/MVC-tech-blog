const logout = async () => {
  const response = await fetch("/api/users/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/");
  } else {
    alert("Failed to log out.");
  }
};

const addEventListenerToLogoutTrigger = () => {
  const logoutTrigger = document.querySelector("#logout");
  if (logoutTrigger) {
    logoutTrigger.addEventListener("click", logout);
  }
};

document.addEventListener("DOMContentLoaded", addEventListenerToLogoutTrigger);
