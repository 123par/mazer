# Mazer Dashboard Customization

Enhanced fork of the *Mazer* Bootstrap 5 admin template with modern UI/UX, dark mode toggle, and data-driven components.

## Overview

This project demonstrates front-end customization skills by enhancing the original Mazer template with:
- Statistics dashboard with gradient cards
- Interactive Chart.js visualization  
- Dark/Light mode toggle with persistence
- User management table with live search
- Recent activity feed with avatars
- Fully responsive design

## Files Modified/Created

src/
├── index.html # Main dashboard page
├── layouts/master.html # Added dark mode toggle
└── assets/
├── css/custom.css # All theme and responsive styles
├── data/data.json # Sample dashboard data
└── js/
├── dashboard.js # Dashboard functionality
├── darkmode.js # Theme toggle logic
└── table.js # User table with search

text

## Setup Instructions

1. Clone repository
git clone https://github.com/123par/mazer.git
cd mazer

2. Install dependencies
npm install --legacy-peer-deps

3. Start development server
npm run dev

4. Open browser
Navigate to http://localhost:5173
text

## Features Implemented

### Statistics Cards
- Gradient backgrounds with modern styling
- Large metric displays with icons
- Responsive layout for all screen sizes

### Data Visualization
- Interactive Chart.js line chart
- Monthly sales data from JSON
- Auto color-switching for dark mode

### Dark/Light Mode
- Toggle button in navigation
- Persistent theme preference (localStorage)
- CSS variables for seamless switching

### User Management
- Dynamic table populated from JSON data
- Real-time search functionality
- Status badges for user roles

### Recent Activity Feed
- User avatars with fallback system
- Timestamp display
- Hover effects and clean styling

## Technologies Used

- *Bootstrap 5* - Layout and components
- *Chart.js* - Data visualization
- *Vanilla JavaScript (ES6)* - All functionality
- *CSS Variables* - Theme system
- *JSON* - Data source
- *Vite* - Development server

## How It Works

1. dashboard.js loads data from data.json on page load
2. Statistics cards populate with real numbers
3. Chart.js renders interactive line chart
4. User table displays with search capability
5. Dark mode toggle switches CSS variables instantly
6. All components adapt to theme changes

## Responsive Design

- Mobile-first approach
- Flexible card layouts
- Scalable chart containers
- Touch-friendly interface elements

## Browser Compatibility

- Chrome 70+
- Firefox 65+
- Safari 12+
- Edge 79+

Repository: https://github.com/123par/mazer
