document.addEventListener("DOMContentLoaded", () => {
  const yearElement = document.getElementById("year");
  const deployStatusElement = document.getElementById("deploy-status");
  const phoenixTimeElement = document.getElementById("phoenix-time");
  const phoenixWeatherElement = document.getElementById("phoenix-weather");

  const PHOENIX_TIME_ZONE = "America/Phoenix";
  const PHOENIX_LATITUDE = 33.4484;
  const PHOENIX_LONGITUDE = -112.0740;

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  if (deployStatusElement) {
    deployStatusElement.textContent = "Site loaded successfully.";
  }

  function updatePhoenixTime() {
    if (!phoenixTimeElement) return;

    const now = new Date();

    phoenixTimeElement.textContent = new Intl.DateTimeFormat("en-US", {
      timeZone: PHOENIX_TIME_ZONE,
      hour: "numeric",
      minute: "2-digit",
      second: "2-digit",
      timeZoneName: "short"
    }).format(now);
  }

  async function updatePhoenixWeather() {
    if (!phoenixWeatherElement) return;

    const weatherUrl =
      `https://api.open-meteo.com/v1/forecast` +
      `?latitude=${PHOENIX_LATITUDE}` +
      `&longitude=${PHOENIX_LONGITUDE}` +
      `&current=temperature_2m,apparent_temperature` +
      `&temperature_unit=fahrenheit` +
      `&timezone=America%2FPhoenix`;

    try {
      const response = await fetch(weatherUrl);

      if (!response.ok) {
        throw new Error("Weather request failed");
      }

      const data = await response.json();
      const current = data.current;

      const temperature = Math.round(current.temperature_2m);
      const feelsLike = Math.round(current.apparent_temperature);

      phoenixWeatherElement.textContent = `${temperature} F, feels like ${feelsLike} F`;
    } catch (error) {
      phoenixWeatherElement.textContent = "Weather unavailable";
      console.error("Weather error:", error);
    }
  }

  updatePhoenixTime();
  updatePhoenixWeather();

  setInterval(updatePhoenixTime, 1000);
  setInterval(updatePhoenixWeather, 10 * 60 * 1000);
});
