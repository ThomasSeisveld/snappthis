  const profileBtn = document.getElementById("profileBtn");
    const profileMenu = document.getElementById("profileMenu");
    const popup = document.getElementById("popup");
    const loginTab = document.getElementById("loginTab");
    const signupTab = document.getElementById("signupTab");
    const loginForm = document.getElementById("loginForm");
    const signupForm = document.getElementById("signupForm");

    profileBtn.addEventListener("click", () => {
      profileMenu.style.display = profileMenu.style.display === "flex" ? "none" : "flex";
    });

    function openPopup() {
      popup.style.display = "flex";
      profileMenu.style.display = "none";
    }
    function closePopup() {
      popup.style.display = "none";
    }

    function switchTab(type) {
      if (type === "login") {
        loginTab.classList.add("active");
        signupTab.classList.remove("active");
        loginForm.classList.add("active");
        signupForm.classList.remove("active");
      } else {
        signupTab.classList.add("active");
        loginTab.classList.remove("active");
        signupForm.classList.add("active");
        loginForm.classList.remove("active");
      }
    }