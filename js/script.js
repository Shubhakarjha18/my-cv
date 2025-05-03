

  function myFunction() {
    document.body.classList.toggle("dark-mode");
  }

  function showTab(tabId) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.classList.remove('active'));

    const activeTab = document.getElementById(tabId);
    if (activeTab) {
      activeTab.classList.add('active');
    }
  }

  function setActiveTab(element) {
    const links = document.querySelectorAll('.nav-tabs .nav-link');
    links.forEach(link => link.classList.remove('active'));
    element.classList.add('active');
  }
  