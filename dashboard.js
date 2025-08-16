// Fetch data from data.json and display cards on dashboard
fetch("data.json")
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById("dashboard-content");

    data.forEach(item => {
      const card = document.createElement("div");
      card.classList.add("col-md-4", "mb-4");

      card.innerHTML = `
        <div class="card shadow-sm">
          <div class="card-body">
            <h5 class="card-title">${item.name}</h5>
            <p class="card-text">Email: ${item.email}</p>
            <p class="card-text">Role: ${item.role}</p>
          </div>
        </div>
      `;

      container.appendChild(card);
    });
  })
  .catch(error => console.error("Error loading data:", error));
