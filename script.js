/* =========================
   DRAWER
========================= */

function openDrawer() {
  const drawer = document.getElementById("drawer");
  const overlay = document.getElementById("drawer-overlay");

  if (drawer) {
    drawer.classList.add("active");
  }

  if (overlay) {
    overlay.classList.add("active");
  }
}

function closeDrawer() {
  const drawer = document.getElementById("drawer");
  const overlay = document.getElementById("drawer-overlay");

  if (drawer) {
    drawer.classList.remove("active");
  }

  if (overlay) {
    overlay.classList.remove("active");
  }
}

/* =========================
   PROFILE
========================= */

function showProfile() {
  // CLOSE DRAWER FIRST
  closeDrawer();

  // Hide dashboard
  const dashboard = document.getElementById("dashboard");

  if (dashboard) {
    dashboard.classList.remove("active");
    dashboard.style.display = "none";
  }

  // Hide bottom navigation
  const bottomNav = document.querySelector(".bottom-nav");

  if (bottomNav) {
    bottomNav.style.display = "none";
  }

  // Show profile
  const profile = document.getElementById("profile");

  if (profile) {
    profile.classList.add("active");
    profile.style.display = "block";
  }

  // Go to top
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

/* =========================
   DASHBOARD
========================= */

function showDashboard() {
  // CLOSE DRAWER
  closeDrawer();

  // Hide profile
  const profile = document.getElementById("profile");

  if (profile) {
    profile.classList.remove("active");
    profile.style.display = "none";
  }

  // Show dashboard
  const dashboard = document.getElementById("dashboard");

  if (dashboard) {
    dashboard.classList.add("active");
    dashboard.style.display = "block";
  }

  // Show bottom navigation
  const bottomNav = document.querySelector(".bottom-nav");

  if (bottomNav) {
    bottomNav.style.display = "grid";
  }

  // Go to top
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

/* =========================
   OVERLAY
========================= */

document.addEventListener("DOMContentLoaded", function () {
  const overlay = document.getElementById("drawer-overlay");

  if (overlay) {
    overlay.addEventListener("click", function () {
      closeDrawer();
    });
  }

  // Make sure drawer is CLOSED when page loads
  closeDrawer();

  // Make sure profile is hidden when page loads
  const profile = document.getElementById("profile");

  if (profile) {
    profile.classList.remove("active");
    profile.style.display = "none";
  }

  // Make sure dashboard is visible
  const dashboard = document.getElementById("dashboard");

  if (dashboard) {
    dashboard.classList.add("active");
    dashboard.style.display = "block";
  }

  // Create Lucide icons
  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }
});
