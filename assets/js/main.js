const sidebarToggle = document.getElementById("sidebar-toggle");
const sidebarIcon = sidebarToggle?.querySelector(".sidebar__icon");
const headerContainer = document.getElementById("header");
const mainContainer = document.getElementById("main");

if (sidebarToggle && sidebarIcon && headerContainer) {
  sidebarToggle.addEventListener("click", () => {
    document.body.classList.toggle("sidebar-toggle");
    headerContainer.classList.toggle("header-toggle");
    mainContainer.classList.toggle("main-toggle");

    const isSidebarOpen = document.body.classList.contains("sidebar-toggle");
    const newIconClass = isSidebarOpen
      ? "ri-arrow-right-double-line"
      : "ri-arrow-left-double-line";

    sidebarIcon.classList.replace(
      isSidebarOpen
        ? "ri-arrow-left-double-line"
        : "ri-arrow-right-double-line",
      newIconClass
    );
  });
}
