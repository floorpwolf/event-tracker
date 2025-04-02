const EventTracker = require('./EventTracker');

// Initialize the EventTracker instance
const tracker = new EventTracker();

// Example usage
tracker.trackEvent('user_login', { userId: '12345' });
tracker.trackEvent('page_view', { page: 'home' });

console.log('Tracked Events:', tracker.getEvents());

tracker.clearEvents();

console.log('Tracked Events after clearing:', tracker.getEvents());
