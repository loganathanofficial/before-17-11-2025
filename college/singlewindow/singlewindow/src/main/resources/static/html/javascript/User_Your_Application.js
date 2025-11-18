// Initialize Particle.js
particlesJS("particles-js", {
  particles: {
    number: {
      value: 50, // Number of particles
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#ffffff"
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000"
      }
    },
    opacity: {
      value: 0.5,
      random: true,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: true,
        speed: 2,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 3,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: "window",
    events: {
      onhover: {
        enable: true,
        mode: "repulse"
      },
      onclick: {
        enable: true,
        mode: "push"
      }
    }
  },
  retina_detect: true
});

document.addEventListener("DOMContentLoaded", function () {
  const dummyApplications = [
    {
      id: "APP1001",
      department: "Urban Planning",
      submissionDate: "2025-04-01",
      status: "Pending",
      remarks: ""
    },
    {
      id: "APP1002",
      department: "Health",
      submissionDate: "2025-04-03",
      status: "Approved",
      remarks: "All documents verified and approved."
    },
    {
      id: "APP1003",
      department: "Transport",
      submissionDate: "2025-04-05",
      status: "Rejected",
      remarks: "Missing vehicle permit certificate."
    }
  ];

  const container = document.getElementById("applicationCardsContainer");
  container.innerHTML = "";

  dummyApplications.forEach((app, index) => {
    const card = document.createElement("div");
    card.className = "col-md-4";

    card.innerHTML = `
      <div class="application-card">
        <h5><strong>Application ID:</strong> ${app.id}</h5>
        <p><strong>Department:</strong> ${app.department}</p>
        <p><strong>Submitted:</strong> ${new Date(app.submissionDate).toLocaleDateString()}</p>
        <p class="application-status status-${app.status.toLowerCase()}">${app.status}</p>
        <p><strong>Remarks:</strong> ${app.remarks || "—"}</p>
      </div>
    `;

    container.appendChild(card);

    // Add show class with delay to animate cards one by one
    setTimeout(() => {
      card.querySelector('.application-card').classList.add('show');
    }, index * 300); // Delay for each card
  });
}); 