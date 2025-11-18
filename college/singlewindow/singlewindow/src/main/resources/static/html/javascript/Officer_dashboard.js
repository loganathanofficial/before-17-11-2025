// ========== GLOBAL VARIABLES ==========

const notificationContainer = createNotificationContainer();

// ========== ON LOAD ==========
document.addEventListener("DOMContentLoaded", () => {
  initNavigation();
  loadApprovalRequests();
  initProfileForm();
  initLogout();
  showSection("home-section");
});

// ========== SECTION NAVIGATION ==========
function initNavigation() {
  const buttons = {
    "home-btn": "home-section",
    "dashboard-btn": "dashboard-section",
    "approval-requests-btn": "approval-section",
    "approved-btn": "approved-section",
    "rejected-btn": "rejected-section",
    "profile-btn": "profile-section"
  };

  Object.entries(buttons).forEach(([btnId, sectionId]) => {
    const button = document.getElementById(btnId);
    if (button) {
      button.addEventListener("click", (e) => {
        e.preventDefault();
        showSection(sectionId);
      });
    }
  });
}

function showSection(sectionId) {
  document.querySelectorAll(".section-content").forEach((sec) => {
    sec.style.display = "none"; // Hide all sections
  });

  const targetSection = document.getElementById(sectionId);
  if (targetSection) {
    targetSection.style.display = "block"; // Show the requested section
  }
}

// ========== NOTIFICATION ==========
function createNotificationContainer() {
  const container = document.createElement("div");
  container.id = "notification-container";
  Object.assign(container.style, {
    position: "fixed",
    top: "10px",
    right: "10px",
    backgroundColor: "#333",
    color: "white",
    padding: "10px 15px",
    display: "none",
    zIndex: 9999
  });
  document.body.appendChild(container);
  return container;
}

function showNotification(message) {
  notificationContainer.textContent = message;
  notificationContainer.style.display = "block";
  setTimeout(() => (notificationContainer.style.display = "none"), 3000);
}

// ========== APPROVAL REQUESTS ==========
function loadApprovalRequests() {
  fetch("http://localhost:8080/application")
    .then(response => response.json())
    .then(data => {
      const tableBody = document.getElementById("approvalTableBody");
      tableBody.innerHTML = ''; // Clear previous rows before loading

      if (data.data && data.data.length > 0) {
        data.data.forEach((application, index) => {
          const row = document.createElement("tr");

          // Apply a different color for even and odd rows
          row.style.backgroundColor = index % 2 === 0 ? "blue" : "#0000FF80";

          row.innerHTML = `
            <td>${index + 1}</td>
            <td>${application.user.name}</td>
            <td>${application.id}</td>
            <td>${application.businesstype}</td>
            <td>${new Date(application.submittedAt).toLocaleDateString()}</td>
            <td>${application.status}</td>
            <td><button class="btn btn-info btn-sm view-btn" data-id="${application.id}" style="background-color: #17a2b8; color: white; border: none; padding: 8px 16px; border-radius: 4px; cursor: pointer; margin: 0 5px;">View</button></td>
            <td>
              <button class="btn btn-success btn-sm approve-btn" data-id="${application.id}" style="background-color: #2ecc71; color: white; border: none; padding: 8px 16px; border-radius: 4px; cursor: pointer; margin: 0 5px; font-weight: bold; box-shadow: 0 2px 4px rgba(0,0,0,0.2);">Approve</button>
              <button class="btn btn-danger btn-sm reject-btn" data-id="${application.id}" style="background-color: #e74c3c; color: white; border: none; padding: 8px 16px; border-radius: 4px; cursor: pointer; margin: 0 5px; font-weight: bold; box-shadow: 0 2px 4px rgba(0,0,0,0.2);">Reject</button>
            </td>
          `;

          // Add event listener for view button
          const viewBtn = row.querySelector('.view-btn');
          viewBtn.addEventListener('click', function() {
            const appId = this.getAttribute('data-id');
            viewApplicationDetails(appId);
          });

          tableBody.appendChild(row);
        });

        // Add event listeners for Approve buttons
        document.querySelectorAll('.approve-btn').forEach(button => {
          button.addEventListener('click', function () {
            const appId = this.getAttribute('data-id');
            approveApplication(appId, this);
          });
        });

        // Add event listeners for Reject buttons
        document.querySelectorAll('.reject-btn').forEach(button => {
          button.addEventListener('click', function () {
            const appId = this.getAttribute('data-id');
            rejectApplication(appId, this);
          });
        });

      } else {
        console.warn("No pending applications found.");
      }
    })
    .catch(error => console.error("Error fetching data:", error));
}

// Function to approve application and remove from list
function approveApplication(appId, buttonElement) {
  fetch('http://localhost:8080/application', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      id: Number(appId),
      status: "APPROVED"
    })
  })
    .then(response => {
      if (response.ok) {
        const row = buttonElement.closest('tr');
        row.remove();
        alert("Application approved successfully.");
      } else {
        alert("Failed to approve application.");
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert("Error approving application.");
    });
}

// Function to rejecte application and remove from list
function rejectApplication(appId, buttonElement) {
  fetch('http://localhost:8080/application', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      id: Number(appId),
      status: "REJECTED"  // or whatever your backend expects
    })
  })
    .then(response => {
      if (response.ok) {
        const row = buttonElement.closest('tr');
        row.remove();
        alert("Application rejected successfully.");
      } else {
        alert("Failed to reject application.");
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert("Error rejecting application.");
    });
}

// Call this once page loads to populate table
loadApprovalRequests();


// ========== APPROVED REQUESTS ==========
document.addEventListener("DOMContentLoaded", () => {
   document.getElementById("approved-section").style.display = "block";
   loadApprovedRequests();
 });
 
function loadApprovedRequests() {
  fetch("http://localhost:8080/application/getApproved")
  
    .then((response) => response.json())
    .then((data) => {
      const tableBody = document.getElementById("approvedTableBody");
      
      // Clear existing rows to prevent duplication
      tableBody.innerHTML = "";
      
      if (data.data && data.data.length > 0) {
        data.data.forEach((application, index) => {
          const row = document.createElement("tr");

          // Apply a different color for even and odd rows:
          if (index % 2 === 0) {
            // Even rows: solid blue background with white text.
            row.style.backgroundColor = "blue";
            row.style.color = "white";
          } else {
            // Odd rows: translucent blue background with black text.
            row.style.backgroundColor = "#0000FF80";
            row.style.color = "black";
          }

          row.innerHTML = `
            <td>${index + 1}</td>
            <td>${application.user.name}</td>
            <td>${application.id}</td>
            <td>${application.businesstype}</td>
            <td>${new Date(application.submittedAt).toLocaleDateString()}</td>
            <td>${application.status}</td>
            <td><button class="btn btn-info btn-sm" style="background-color: #17a2b8; color: white; border: none; padding: 8px 16px; border-radius: 4px; cursor: pointer; margin: 0 5px;">View</button></td>
          `;
          tableBody.appendChild(row);
        });
      } else {
        console.warn("No approved applications found.");
      }
    })
    .catch((error) => console.error("Error fetching data:", error));
}


document.getElementById('rejected-btn').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent default link behavior

  // Show the rejected section
  const rejectedSection = document.getElementById('rejected-section');
  rejectedSection.style.display = 'block';

  // Clear previous data if any
  const tableBody = document.getElementById('rejectedTableBody');
  tableBody.innerHTML = '';

  // Fetch rejected applications from API
  fetch('http://localhost:8080/application/notaccepted')
    .then(response => response.json())
    .then(data => {
      if (data.data && data.data.length > 0) {
        data.data.forEach((application, index) => {
          const row = document.createElement('tr');
          
          // Apply a different color for even and odd rows
          row.style.backgroundColor = index % 2 === 0 ? 'blue' : '#0000FF80';
          row.style.color = 'white';

          row.innerHTML = `
            <td>${index + 1}</td>
            <td>${application.user.name}</td>
            <td>${application.id}</td>
            <td>${application.businesstype}</td>
            <td>${new Date(application.submittedAt).toLocaleDateString()}</td>
            <td><span style="background-color: #9b59b6; color: white; padding: 5px 10px; border-radius: 4px; font-weight: bold; display: inline-block; min-width: 100px; text-align: center; box-shadow: 0 2px 4px rgba(0,0,0,0.2);">${application.status}</span></td>
          `;
          tableBody.appendChild(row);
        });
      } else {
        console.warn("No rejected applications found.");
      }
    })
    .catch(error => console.error("Error fetching data:", error));
});


// ========== PROFILE FORM ==========

function initProfileForm() {
  const form = document.getElementById("profileForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    alert("Profile updated successfully!");
  });

  const upload = document.getElementById("uploadPic");
  if (upload) {
    upload.addEventListener("change", previewImage);
  }
}

function previewImage(event) {
  const reader = new FileReader();
  reader.onload = () => {
    document.getElementById("profileImage").src = reader.result;
  };
  reader.readAsDataURL(event.target.files[0]);
}

// ========== LOGOUT ==========
function initLogout() {
  const logoutBtn = document.getElementById("logout-btn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      localStorage.removeItem("userSession");
      alert("You have been logged out successfully!");
      window.location.href = "Officer_Login.html";
    });
  }
}

// pie chart section
  document.addEventListener("DOMContentLoaded", function () {

    // Chart 1: Approval Status
    new Chart(document.getElementById('approvalChart'), {
      type: 'pie',
      data: {
        labels: ['Approved', 'Rejected', 'Pending'],
        datasets: [{
          label: 'Approvals',
          data: [50, 20, 30],
          backgroundColor: ['#4caf50', '#f44336', '#ff9800']
        }]
      }
    });

    // Chart 2: Pending Requests
    new Chart(document.getElementById('pendingChart'), {
      type: 'pie',
      data: {
        labels: ['Dept A', 'Dept B', 'Dept C'],
        datasets: [{
          label: 'Pending',
          data: [10, 15, 5],
          backgroundColor: ['#03a9f4', '#00bcd4', '#009688']
        }]
      }
    });

    // Chart 3: Rejection Reasons
    new Chart(document.getElementById('rejectedChart'), {
      type: 'pie',
      data: {
        labels: ['Incomplete Docs', 'Invalid Info', 'Policy Issue'],
        datasets: [{
          label: 'Rejections',
          data: [12, 8, 10],
          backgroundColor: ['#e91e63', '#9c27b0', '#673ab7']
        }]
      }
    });

    // Chart 4: Department-Wise Approvals
    new Chart(document.getElementById('departmentChart'), {
      type: 'pie',
      data: {
        labels: ['Health', 'Education', 'Transport', 'Housing'],
        datasets: [{
          label: 'By Dept',
          data: [20, 25, 15, 10],
          backgroundColor: ['#ff5722', '#ffc107', '#8bc34a', '#00bcd4']
        }]
      }
    });

    // Chart 5: Monthly Approval Trends
    new Chart(document.getElementById('monthlyChart'), {
      type: 'pie',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr'],
        datasets: [{
          label: 'Monthly',
          data: [10, 15, 12, 8],
          backgroundColor: ['#cddc39', '#607d8b', '#9e9e9e', '#795548']
        }]
      }
    });

  });

// Add this new function for viewing application details
function viewApplicationDetails(appId) {
  // Create modal for displaying application details
  const modal = document.createElement('div');
  modal.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  `;

  // Create modal content
  const modalContent = document.createElement('div');
  modalContent.style.cssText = `
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    width: 80%;
    max-width: 600px;
    max-height: 80vh;
    overflow-y: auto;
  `;

  // Add loading message
  modalContent.innerHTML = '<h2>Loading Application Details...</h2>';

  // Add modal to page
  modal.appendChild(modalContent);
  document.body.appendChild(modal);

  // Get user data from sessionStorage
  const userData = JSON.parse(sessionStorage.getItem('userdata'));
  console.log('User Data:', userData); // Debug log

  if (!userData || !userData.id) {
    modalContent.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
        <h2>Error</h2>
        <button onclick="this.closest('.modal').remove()" style="background: none; border: none; font-size: 24px; cursor: pointer;">&times;</button>
      </div>
      <p>User data not found. Please log in again.</p>
      <button onclick="window.location.href='Officer_Login.html'" style="background-color: #17a2b8; color: white; border: none; padding: 8px 16px; border-radius: 4px; cursor: pointer; margin-top: 10px;">Go to Login</button>
    `;
    return;
  }

  // First, get the application ID for this user
  fetch(`http://localhost:8080/api/application/user/${userData.id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log('Application data:', data); // Debug log
      if (data && data.data) {
        const application = data.data;
        modalContent.innerHTML = `
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
            <h2>Application Details</h2>
            <button onclick="this.closest('.modal').remove()" style="background: none; border: none; font-size: 24px; cursor: pointer;">&times;</button>
          </div>
          <div style="margin-bottom: 15px;">
            <strong>Application ID:</strong> ${application.id}
          </div>
          <div style="margin-bottom: 15px;">
            <strong>Applicant Name:</strong> ${application.user ? application.user.name : 'N/A'}
          </div>
          <div style="margin-bottom: 15px;">
            <strong>Business Type:</strong> ${application.businesstype || 'N/A'}
          </div>
          <div style="margin-bottom: 15px;">
            <strong>Submitted Date:</strong> ${application.submittedAt ? new Date(application.submittedAt).toLocaleDateString() : 'N/A'}
          </div>
          <div style="margin-bottom: 15px;">
            <strong>Status:</strong> ${application.status || 'N/A'}
          </div>
          <div style="margin-bottom: 15px;">
            <strong>Documents:</strong>
            <div style="margin-top: 10px;">
              ${application.documents && application.documents.length > 0 ? 
                application.documents.map(doc => `
                  <div style="margin-bottom: 5px;">
                    <a href="${doc.url}" target="_blank" style="color: #17a2b8; text-decoration: none;">
                      ${doc.name || 'Document'} <i class="fas fa-external-link-alt"></i>
                    </a>
                  </div>
                `).join('') : 'No documents available'}
            </div>
          </div>
        `;
      } else {
        throw new Error('No application data found for this user');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      modalContent.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
          <h2>Error</h2>
          <button onclick="this.closest('.modal').remove()" style="background: none; border: none; font-size: 24px; cursor: pointer;">&times;</button>
        </div>
        <p>${error.message}</p>
        <button onclick="window.location.href='Officer_Login.html'" style="background-color: #17a2b8; color: white; border: none; padding: 8px 16px; border-radius: 4px; cursor: pointer; margin-top: 10px;">Go to Login</button>
      `;
    });

  // Close modal when clicking outside
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      modal.remove();
    }
  });
}


