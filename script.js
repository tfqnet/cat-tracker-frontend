async function sendLocation(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const timestamp = new Date().toISOString();
  
    const body = {
      catId: catId, 
      latitude: lat,
      longitude: lon,
      timestamp: timestamp
    };
  
      // Show loading
    document.getElementById("status").textContent = "📡 Sending location...";
    document.getElementById("retry-btn").style.display = "none";

    try {
      const res = await fetch("https://cat-tracker-backend.onrender.com/report-location", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      });
  
      if (res.ok) {
        document.getElementById("status").textContent = "📍 Location sent successfully. Thanks!";
        document.getElementById("retry-btn").style.display = "none";
      } else {
        document.getElementById("status").textContent = "❌ Failed to send location.";
      }
    } catch (err) {
      console.error(err);
      document.getElementById("status").textContent = "⚠️ Error sending location.";
    }
  }
 
  
  function getLocation() {
  if (!navigator.geolocation) {
    document.getElementById("status").textContent = "Geolocation not supported.";
    return;
  }

  // ✅ Corrected: Show loading while getting location
  document.getElementById("status").textContent = "📍 Getting your location...";
  document.getElementById("retry-btn").style.display = "none";

  navigator.geolocation.getCurrentPosition(
    sendLocation,
    (error) => {
      console.warn(error);
      if (error.code === 1) {
        document.getElementById("status").textContent = "Location access denied. Tap Retry to try again.";
      } else {
        document.getElementById("status").textContent = "Failed to get location. Tap Retry to try again.";
      }
      document.getElementById("retry-btn").style.display = "inline-block";
    },
    { timeout: 10000 }
  );
}

  
  
  getLocation();
  