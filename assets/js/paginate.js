(function () {
  document.querySelectorAll("[data-paginate]").forEach(function (grid) {
    var perPage = parseInt(grid.getAttribute("data-paginate"), 10) || 15;
    var items = grid.querySelectorAll(".paginate-item");
    var totalPages = Math.ceil(items.length / perPage);

    if (totalPages <= 1) return;

    var currentPage = 1;

    // Create nav container
    var nav = document.createElement("nav");
    nav.className = "pagination";
    nav.setAttribute("role", "navigation");
    nav.setAttribute("aria-label", "Pagination");
    grid.parentNode.insertBefore(nav, grid.nextSibling);

    function render() {
      var start = (currentPage - 1) * perPage;
      var end = start + perPage;

      items.forEach(function (item, i) {
        item.style.display = i >= start && i < end ? "" : "none";
      });

      // Build nav HTML
      var html = '<div class="pagination-container">';

      // Previous
      if (currentPage > 1) {
        html += '<a href="#" class="pagination-link prev" data-page="' + (currentPage - 1) + '">&larr; Previous</a>';
      } else {
        html += '<span class="pagination-link prev disabled">&larr; Previous</span>';
      }

      // Page numbers
      html += '<div class="pagination-numbers">';
      for (var p = 1; p <= totalPages; p++) {
        if (p === currentPage) {
          html += '<span class="pagination-number current" aria-current="page">' + p + "</span>";
        } else {
          html += '<a href="#" class="pagination-number" data-page="' + p + '">' + p + "</a>";
        }
      }
      html += "</div>";

      // Next
      if (currentPage < totalPages) {
        html += '<a href="#" class="pagination-link next" data-page="' + (currentPage + 1) + '">Next &rarr;</a>';
      } else {
        html += '<span class="pagination-link next disabled">Next &rarr;</span>';
      }

      html += "</div>";
      nav.innerHTML = html;
    }

    nav.addEventListener("click", function (e) {
      var target = e.target.closest("[data-page]");
      if (!target) return;
      e.preventDefault();
      currentPage = parseInt(target.getAttribute("data-page"), 10);
      render();
      grid.scrollIntoView({ behavior: "smooth", block: "start" });
    });

    render();
  });
})();
