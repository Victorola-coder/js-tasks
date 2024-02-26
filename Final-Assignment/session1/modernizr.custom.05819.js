function calculateTravelTime() {
  // Get selected planets
  const departurePlanet = document.getElementById("departurePlanet").value;
  const destinationPlanet = document.getElementById("destinationPlanet").value;

  // Sample travel time calculation logic (adjust as needed)
  const travelTime = calculateSampleTravelTime(
    departurePlanet,
    destinationPlanet
  );

  // Display the result
  document.getElementById(
    "travelTimeResult"
  ).textContent = `Estimated travel time: ${travelTime} days`;
}

// Sample function for travel time calculation (adjust as needed)
function calculateSampleTravelTime(departurePlanet, destinationPlanet) {
  const travelTimeMap = {
    "earth-mars": 300,
    "earth-jupiter": 700,
    // Add more entries for other planet combinations
  };

  const key = `${departurePlanet}-${destinationPlanet}`;
  return travelTimeMap[key] || "N/A";
}
