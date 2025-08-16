export async function loadDashboard() {
  try {
    const res = await fetch('/assets/data/data.json');
    if (!res.ok) throw new Error('Failed to fetch data.json');
    const data = await res.json();

    document.getElementById('totalUsers').innerText = data.statistics.totalUsers.toLocaleString();
    document.getElementById('totalSales').innerText = data.statistics.totalSales.toLocaleString();
    document.getElementById('activeSessions').innerText = data.statistics.activeSessions.toLocaleString();
    document.getElementById('orders').innerText = data.statistics.orders.toLocaleString();

    const ctx = document.getElementById('salesChart').getContext('2d');
    if (window.salesChartInstance) window.salesChartInstance.destroy();
    
    const isDarkMode = document.body.classList.contains('theme-dark');
    
    window.salesChartInstance = new Chart(ctx, {
      type: 'line',
      data: {
        labels: data.chartData.monthly_sales.labels,
        datasets: [{
          label: 'Sales',
          data: data.chartData.monthly_sales.data,
          fill: true,
          borderColor: isDarkMode ? '#60A5FA' : '#4F46E5',
          backgroundColor: isDarkMode ? 'rgba(96,165,250,0.2)' : 'rgba(79,70,229,0.2)',
          tension: 0.3,
          pointRadius: 4,
          pointHoverRadius: 6,
          pointBackgroundColor: isDarkMode ? '#60A5FA' : '#4F46E5',
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false },
          tooltip: { mode: 'index', intersect: false }
        },
        scales: {
          y: { 
            beginAtZero: true, 
            ticks: { 
              callback: v => v.toLocaleString(),
              color: isDarkMode ? '#F3F4F6' : '#6B7280'
            },
            grid: {
              color: isDarkMode ? '#374151' : '#E5E7EB'
            }
          },
          x: {
            ticks: {
              color: isDarkMode ? '#F3F4F6' : '#6B7280'
            },
            grid: {
              color: isDarkMode ? '#374151' : '#E5E7EB'
            }
          }
        }
      }
    });

    const recentActivityDiv = document.getElementById('recentActivity');
    recentActivityDiv.innerHTML = '';
    data.recentActivities.forEach(item => {
      recentActivityDiv.innerHTML += `
        <div class="d-flex align-items-center mb-3">
          <img src="${item.avatar}" alt="${item.user}" class="rounded-circle me-3" width="40" height="40" />
          <div>
            <strong>${item.user}</strong><br>
            <small class="text-muted">${item.action} &bull; ${item.time}</small>
          </div>
        </div>`;
    });

    // If you use a notificationsDropdown, you can optionally handle it here

    window.mzrTableData = data.tableData;
    if (window.updateTable) window.updateTable();

  } catch (e) { console.error('Dashboard load error:', e); }
}

loadDashboard();
