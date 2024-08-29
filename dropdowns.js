document.getElementById("imagegallery").addEventListener("click", function(event) {
    const target = event.target;
    if (target.tagName === "IMG" || target.tagName === "P") {
      const description = target.tagName === "IMG" ? target.alt : target.textContent;
      const links = document.querySelectorAll("#productDropdown li a");
  
      links.forEach(link => {
        if (link.textContent.trim() === description.trim()) {
          window.location.href = link.href;
        }
      });
    }
  });
  