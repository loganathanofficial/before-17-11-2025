// Initialize particles.js
particlesJS("particles-js", {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: "#ffffff" },
        shape: { type: "circle" },
        opacity: {
            value: 0.5,
            random: true,
            anim: { enable: true, speed: 1, opacity_min: 0.1 }
        },
        size: {
            value: 3,
            random: true,
            anim: { enable: true, speed: 2, size_min: 0.1 }
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
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" },
            resize: true
        }
    },
    retina_detect: true
});

// Show/Hide Sections
function showSection(section) {
    document.querySelectorAll('.dashboard-section').forEach(s => s.classList.add('hidden'));
    const selectedSection = document.getElementById(section + '-section');
    if (selectedSection) selectedSection.classList.remove('hidden');
    document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
    if (event && event.currentTarget) event.currentTarget.classList.add('active');
    if (section === 'user-profile') updateProfileData();
}

// Update Profile Data
function updateProfileData() {
    const userData = JSON.parse(sessionStorage.getItem('userdata'));
    if (!userData) {
        showNotification('User data not found. Please log in again.', 'error');
        return;
    }
    document.getElementById('profile-name').textContent = userData.name || 'Not Available';
    document.getElementById('profile-email').textContent = userData.email || 'Not Available';
    document.getElementById('profile-phone').textContent = userData.phone || 'Not Available';
    document.getElementById('profile-location').textContent = userData.location || 'Not Available';
    const welcomeName = document.getElementById('welcome-name');
    if (welcomeName) {
        welcomeName.textContent = userData.name || 'User';
    }
    const profileImage = document.getElementById('profile-img');
    if (profileImage) {
        if (userData.profileImage) {
            profileImage.src = userData.profileImage;
        } else {
            profileImage.src = 'https://th.bing.com/th/id/OIP.Gfp0lwE6h7139625a-r3aAHaHa?w=198&h=198&c=7&r=0&o=7&pid=1.7&rm=3';
        }
    }
}

// Handle Application Form Submission
document.getElementById('startup-application-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const data = Object.fromEntries(formData.entries());
    
    // Show loading state
    const submitBtn = this.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Submitting...';
    submitBtn.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        // Reset button state
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        
        // Show success message
        showNotification('Application submitted successfully!', 'success');
        
        // Reset form
        this.reset();
        
        // Switch to applications section
        showSection('applications');
    }, 1500);
});

// Update Timeline Status
function updateTimelineStatus(step, status) {
    const stepElement = document.getElementById(step);
    if (!stepElement) return;
    
    const badge = stepElement.querySelector('.badge');
    if (!badge) return;
    
    // Remove all status classes
    badge.classList.remove('bg-secondary', 'bg-warning', 'bg-success', 'bg-danger');
    
    // Add new status class
    switch(status) {
        case 'pending':
            badge.classList.add('bg-warning');
            badge.textContent = 'Pending';
            break;
        case 'completed':
            badge.classList.add('bg-success');
            badge.textContent = 'Completed';
            break;
        case 'rejected':
            badge.classList.add('bg-danger');
            badge.textContent = 'Rejected';
            break;
        default:
            badge.classList.add('bg-secondary');
            badge.textContent = 'Not Started';
    }
}

// Show Notification
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
        ${message}
    `;
    
    document.body.appendChild(notification);
    
    // Trigger animation
    setTimeout(() => notification.classList.add('show'), 100);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Logout Function
function logout() {
    if (confirm('Are you sure you want to log out?')) {
        // Clear storage
        localStorage.clear();
        sessionStorage.clear();
        
        // Redirect to login page
        window.location.href = 'user_login.html';
    }
}

// Initialize Dashboard
document.addEventListener('DOMContentLoaded', function() {
    // Check if user is logged in
    const userData = JSON.parse(sessionStorage.getItem('userdata'));
    if (!userData) {
        showNotification('Please log in to access the dashboard', 'error');
        setTimeout(() => {
            window.location.href = 'user_login.html';
        }, 2000);
        return;
    }

    // Update profile data
    updateProfileData();
    
    // Show home section by default
    showSection('home');
}); 