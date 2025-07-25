async function sendLocation(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const timestamp = new Date().toISOString();
  
    const body = {
      catId: "garfield", // You can make this dynamic later
      latitude: lat,
      longitude: lon,
      timestamp: timestamp
    };
  
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
  
    navigator.geolocation.getCurrentPosition(
      sendLocation,
      () => {
        document.getElementById("status").textContent = "Permission denied or failed to get location.";
      },
      { timeout: 10000 }
    );
  }
  
  getLocation();
  