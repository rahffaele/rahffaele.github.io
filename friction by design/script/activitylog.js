class UserActivityTracker {
  constructor() {
    this.startTime = new Date();
    this.lastX = 0;
    this.lastY = 0;
    this.totalDistance = 0;
    this.startSpeed = 0;

    // Get DOM elements
    this.coordsElement = document.getElementById("coordinates-value");
    this.distanceElement = document.getElementById("distance-value");
    this.timeElement = document.getElementById("time-value");

    // Attach event listeners
    document.addEventListener("mousemove", this.trackMouseMovement.bind(this));
    setInterval(this.updateTimeSpent.bind(this), 1000);
  }

  trackMouseMovement(event) {
    const currentX = event.clientX;
    const currentY = event.clientY;

    // Update coordinates
    this.coordsElement.textContent = `x:${currentX}, y:${currentY}`;

    // Calculate distance moved
    const deltaX = currentX - this.lastX;
    const deltaY = currentY - this.lastY;
    const segmentDistance = Math.sqrt(deltaX ** 2 + deltaY ** 2);
    this.totalDistance += segmentDistance;

    // Convert pixels to meters (assuming 96 pixels = 1 inch, 39.37 inches = 1 meter)
    const distanceInMeters = this.totalDistance / (96 * 39.37);
    this.distanceElement.textContent = `${distanceInMeters.toFixed(2)} m`;

    // Update last position
    this.lastX = currentX;
    this.lastY = currentY;
  }

  updateTimeSpent() {
    const currentTime = new Date();
    const timeSpentMs = currentTime - this.startTime;
    const timeSpentHours = timeSpentMs / (1000 * 60 * 60);

    this.timeElement.textContent = `${timeSpentHours.toFixed(2)} hrs`;
  }
}

// Initialize tracker when page loads
new UserActivityTracker();
