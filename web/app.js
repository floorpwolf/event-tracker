document.addEventListener('DOMContentLoaded', async () => {
  const eventsDiv = document.getElementById('events');
  
  try {
    const response = await fetch('https://event-tracker-api.onrender.com/events');
    const events = await response.json();
    
    events.forEach(event => {
      const div = document.createElement('div');
      div.className = 'event';
      div.innerHTML = `
        <h3>${event.title}</h3>
        <p>📅 ${new Date(event.date).toLocaleDateString()}</p>
        <p>📍 ${event.location}</p>
        <p>🏢 Organized by: ${event.organizer}</p>
        ${event.link ? `<a href="${event.link}" target="_blank">Event Link</a>` : ''}
      `;
      eventsDiv.appendChild(div);
    });
  } catch (error) {
    eventsDiv.innerHTML = '<p>Failed to load events. Please try again later.</p>';
  }
});
