class EventTracker {
  constructor() {
    this.events = [];
  }

  /**
   * Add a new event to the tracker.
   * @param {string} name - Name of the event.
   * @param {object} data - Additional data for the event.
   */
  trackEvent(name, data = {}) {
    const timestamp = new Date().toISOString();
    const event = { name, data, timestamp };
    this.events.push(event);
    console.log(`Event tracked:`, event);
  }

  /**
   * Get all tracked events.
   * @returns {Array} List of tracked events.
   */
  getEvents() {
    return this.events;
  }

  /**
   * Clear all tracked events.
   */
  clearEvents() {
    this.events = [];
    console.log(`All events cleared.`);
  }
}

module.exports = EventTracker;
