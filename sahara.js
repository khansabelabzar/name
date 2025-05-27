const trips = [
    { time: "08:00 AM", description: "Sunrise Camel Ride", period: "morning", rating: 4.8 },
    { time: "10:00 AM", description: "Sandboarding Adventure", period: "morning", rating: 4.5 },
    { time: "01:00 PM", description: "Lunch in Nomad Camp", period: "afternoon", rating: 4.6 },
    { time: "03:30 PM", description: "Desert Jeep Safari", period: "afternoon", rating: 4.9 },
    { time: "05:45 PM", description: "Sunset over Dunes", period: "evening", rating: 5.0 },
    { time: "08:00 PM", description: "Dinner & Stargazing", period: "evening", rating: 4.7 }
  ];
  
  const tripList = document.getElementById("trip-list");
  const filter = document.getElementById("timeFilter");
  const dateInput = document.getElementById("tripDate");
  const modal = document.getElementById("bookingModal");
  const closeModal = document.querySelector(".close");
  const bookingForm = document.getElementById("bookingForm");
  
  function renderTrips(period = "all") {
    tripList.innerHTML = "";
    const filtered = period === "all" ? trips : trips.filter(t => t.period === period);
  
    filtered.forEach((trip, i) => {
      const div = document.createElement("div");
      div.className = "trip";
      div.style.animationDelay = `${i * 0.1}s`;
  
      div.innerHTML = `
        <strong>${trip.time}</strong>
        <p>${trip.description}</p>
        <p class="rating">⭐ ${trip.rating} / 5</p>
        <button class="book-btn">Book Now</button>
      `;
  
      div.querySelector(".book-btn").addEventListener("click", () => {
        modal.style.display = "block";
      });
  
      tripList.appendChild(div);
    });
  }
  
  renderTrips();
  
  // Filter logic
  filter.addEventListener("change", e => renderTrips(e.target.value));
  
  // Modal close
  closeModal.onclick = () => {
    modal.style.display = "none";
  };
  
  // Form submission
  bookingForm.addEventListener("submit", e => {
    e.preventDefault();
    alert("✅ Booking Confirmed!");
    modal.style.display = "none";
    bookingForm.reset();
  });
  
  // Dark Mode
  document.getElementById("darkModeToggle").onclick = () => {
    document.body.classList.toggle("dark-mode");
  };
  