// Fetch data.json and display in master table
fetch("data.json")
  .then(response => response.json())
  .then(data => {
    const tbody = document.querySelector("#data-table tbody");

    data.forEach(item => {
      const row = document.createElement("tr");

      row.innerHTML = `
        <td>${item.id}</td>
        <td>${item.name}</td>
        <td>${item.email}</td>
        <td>${item.role}</td>
      `;

      tbody.appendChild(row);
    });
  })
  .catch(error => console.error("Error loading table data:", error));
