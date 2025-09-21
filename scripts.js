const events = [
  {
    title: "Red Bull Batalla Final",
    category: "Freestyle",
    videoId: "dQw4w9WgXcQ",
    image: "assets/batalla.jpg",
    description: "La batalla de freestyle más esperada del año."
  },
  {
    title: "Red Bull Rampage",
    category: "Deportes",
    videoId: "3JZ_D3ELwOQ",
    image: "assets/rampage.jpg",
    description: "Los mejores bikers del mundo en acción."
  },
  {
    title: "Concierto Red Bull Music",
    category: "Música",
    videoId: "V-_O7nl0Ii0",
    image: "assets/concierto.jpg",
    description: "Música en vivo desde el escenario Red Bull."
  }
];

const eventsGrid = document.getElementById("events-grid");
const mainPlayer = document.getElementById("mainPlayer");

function renderEvents(filter = "Todos") {
  eventsGrid.innerHTML = "";
  events
    .filter(e => filter === "Todos" || e.category === filter)
    .forEach(e => {
      const card = document.createElement("div");
      card.classList.add("event-card");
      card.innerHTML = `
        <img src="${e.image}" alt="${e.title}">
        <div class="content">
          <h3>${e.title}</h3>
          <p>${e.description}</p>
        </div>
      `;
      card.onclick = () => {
        mainPlayer.src = `https://www.youtube.com/embed/${e.videoId}?autoplay=1`;
      };
      eventsGrid.appendChild(card);
    });
}

// Inicializa mostrando todos
renderEvents();

function filterEvents(category) {
  renderEvents(category);
}
