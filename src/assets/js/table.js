export function updateTable(dataOverride) {
  const data = dataOverride || window.mzrTableData || [];
  const tbody = document.getElementById('usersTableBody');
  tbody.innerHTML = '';
  data.forEach(user => {
    tbody.innerHTML += `
      <tr>
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>${user.role}</td>
        <td><span class="badge bg-${user.status === 'Active' ? 'success' : 'danger'}">${user.status}</span></td>
        <td>${user.joinDate}</td>
        <td>${user.lastLogin}</td>
      </tr>`;
  });
}
window.updateTable = updateTable;

const searchInput = document.getElementById('tableSearch');
if (searchInput) {
  searchInput.addEventListener('input', e => {
    const val = e.target.value.trim().toLowerCase();
    const filtered = (window.mzrTableData || []).filter(u =>
      Object.values(u).some(v => String(v).toLowerCase().includes(val))
    );
    updateTable(filtered);
  });
}

window.addEventListener('DOMContentLoaded', () => {
  if (window.mzrTableData) updateTable();
});