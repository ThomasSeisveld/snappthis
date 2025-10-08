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

// --- Sidebar categorie-foto wissel ---
const photoSets = {
  nature: [
    'https://picsum.photos/400/250?random=11',
    'https://picsum.photos/400/250?random=12',
    'https://picsum.photos/400/250?random=13'
  ],
  city: [
    'https://picsum.photos/400/250?random=21',
    'https://picsum.photos/400/250?random=22',
    'https://picsum.photos/400/250?random=23'
  ],
  sport: [
    'https://picsum.photos/400/250?random=31',
    'https://picsum.photos/400/250?random=32',
    'https://picsum.photos/400/250?random=33'
  ],
  reizen: [
    'https://picsum.photos/400/250?random=41',
    'https://picsum.photos/400/250?random=42',
    'https://picsum.photos/400/250?random=43'
  ],
  muziek: [
    'https://picsum.photos/400/250?random=51',
    'https://picsum.photos/400/250?random=52',
    'https://picsum.photos/400/250?random=53'
  ],
  design: [
    'https://picsum.photos/400/250?random=61',
    'https://picsum.photos/400/250?random=62',
    'https://picsum.photos/400/250?random=63'
  ]
};
function showPhotos(category) {
  const container = document.getElementById('gallery');
  container.innerHTML = '';

  if (photoSets[category]) {
    // Createtitle
    const titleArticle = document.createElement('article');
    titleArticle.className = 'gallery-title';
    const title = document.createElement('h2');
    title.textContent = category.charAt(0).toUpperCase() + category.slice(1);
    titleArticle.appendChild(title);
    container.appendChild(titleArticle);

    // Createphotos
    photoSets[category].forEach(url => {
      const article = document.createElement('article');
      article.className = 'gallery-card';
      const img = document.createElement('img');
      img.src = url;
      img.alt = category + ' photo';
      img.className = 'gallery-photo';
      article.appendChild(img);

      const likesDiv = document.createElement('div');
      likesDiv.className = 'likes';
      likesDiv.textContent = '+2 Likes';
      article.appendChild(likesDiv);

      container.appendChild(article);
    });
  }
}

document.querySelectorAll('.sidebar-btn').forEach(btn => {
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    const cat = btn.getAttribute('data-category');
    showPhotos(cat);
  });
});