function toggleContent(id) {
  const content = document.getElementById(id);
  const isHidden = content.classList.contains('hidden');

  const allContents = document.querySelectorAll('.accordion-content');
  allContents.forEach(c => c.classList.add('hidden'));

  if (isHidden) {
    content.classList.remove('hidden');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const bars = document.querySelector('.bars');
  const body = document.body;

  bars.addEventListener('click', () => {
    body.classList.toggle('show-menu');
  });
});

function toggleChat() {
  var chatbox = document.getElementById("chatbox");
  chatbox.style.display = chatbox.style.display === "none" || chatbox.style.display === "" ? "flex" : "none";
}

function sendMessage() {
  const chatInput = document.getElementById('chatInput');
  const chatboxBody = document.getElementById('chatboxBody');
  
  const message = chatInput.value.trim();
  
  if (message) {
    const newMessage = document.createElement('p');
    newMessage.textContent = message;
    chatboxBody.appendChild(newMessage);
    
    chatInput.value = '';
  }
}

// Datos de la línea de tiempo
const timelineEvents = [
  {
    date: "2024-01",
    description: "Comenzamos este proyecto durante el curso de Análisis y Requerimientos, con un equipo de 6 integrantes comprometidos y con muchas ganas de aprender. Desde el primer día nos unimos para trabajar juntos y sacar adelante el trabajo. ¡Un saludo especial a Ángel, quien fue parte fundamental de este grupo y siempre nos brindó su apoyo!",
    imageSrc: "public/assets/images/earthkeepers-timeline1.jpg",
  },
  {
    date: "2024-02",
    description: "Al principio, nos enfocamos en desarrollar una app del clima que ayudaba a los usuarios a mejorar su cultivo, con pronósticos precisos y consejos prácticos. Después de mucho esfuerzo y colaboración, logramos terminar el trabajo con éxito. Con el tiempo, la idea evolucionó y nos permitió poner en práctica todo lo aprendido en el curso.",
    imageSrc: "public/assets/images/earthkeepers-timeline2.jpg",
  },
  {
    date: "2024-03",
    description: "Ahora nos dedicamos a desarrollar una app innovadora para la detección temprana de plagas y enfermedades en plantas. Utilizando drones y tecnología de reconocimiento por patrones, buscamos ofrecer soluciones rápidas y eficaces para el cuidado de los cultivos.",
    imageSrc: "public/assets/images/earthkeepers-timeline3.jpg",
  },
  {
    date: "2024-04",
    description: "Seguimos dándolo todo por este proyecto. Cada día nos enfrentamos a nuevos retos, pero con la misma pasión y dedicación que al principio, siempre buscando mejorar y ofrecer soluciones que impacten positivamente en el mundo agrícola.",
    imageSrc: "public/assets/images/earthkeepers-timeline4.jpg",
  },
];

let currentEventIndex = -1; // índice inicial

// Función para actualizar la línea de tiempo
function updateTimeline() {
  const descriptionText = document.getElementById("description-text");
  const timelineImage = document.getElementById("timeline-image");
  const timelineBoxes = document.querySelectorAll(".timeline-box");

  // Actualiza la descripción y la imagen
  descriptionText.textContent = timelineEvents[currentEventIndex].description;
  timelineImage.src = timelineEvents[currentEventIndex].imageSrc;

  // Actualiza el color del rectángulo seleccionado
  timelineBoxes.forEach((box, index) => {
    box.classList.toggle("selected", index === currentEventIndex);
  });
}

// Función para navegar en la línea de tiempo
function navigateTimeline(direction) {
  currentEventIndex += direction;
  if (currentEventIndex < 0) {
    currentEventIndex = timelineEvents.length - 1;
  } else if (currentEventIndex >= timelineEvents.length) {
    currentEventIndex = 0;
  }
  updateTimeline();
}

// Evento de clic en los rectángulos de la línea de tiempo
document.querySelectorAll(".timeline-box").forEach((box, index) => {
  box.addEventListener("click", () => {
    currentEventIndex = index;
    updateTimeline();
  });
});

// Inicializa la línea de tiempo
updateTimeline();
