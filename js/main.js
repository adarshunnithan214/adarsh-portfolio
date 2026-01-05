// main.js
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initNavigation();
    initTypingAnimation();
    initSkills();
    initProjects();
    initContactForm();
    initAnimations();
    initThemeToggle();
});

// Navigation
function initNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close menu when clicking links
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// Typing Animation
function initTypingAnimation() {
    const text = "Python Django Developer";
    const typedText = document.getElementById('typed-text');
    let index = 0;
    
    function type() {
        if (index < text.length) {
            typedText.textContent += text.charAt(index);
            index++;
            setTimeout(type, 100);
        } else {
            // Blink cursor after typing
            document.querySelector('.cursor').style.animation = 'blink 1s infinite';
        }
    }
    
    // Start typing after hero animation
    setTimeout(type, 1000);
}

// Skills Data
const skillsData = [
    {
        category: "Languages",
        icon: "fas fa-code",
        skills: [
            { name: "Python", icon: "fab fa-python" },
            { name: "HTML", icon: "fab fa-html5" },
            { name: "CSS", icon: "fab fa-css3-alt" },
            { name: "JavaScript", icon: "fab fa-js" }
        ]
    },
    {
        category: "Frameworks",
        icon: "fas fa-layer-group",
        skills: [
            { name: "Django", icon: "fab fa-python" },
            { name: "Flask", icon: "fas fa-flask" },
            { name: "FastAPI", icon: "fas fa-bolt" },
            { name: "Bootstrap", icon: "fab fa-bootstrap" },
            { name: "React", icon: "fab fa-react" }
        ]
    },
    {
        category: "Backend",
        icon: "fas fa-server",
        skills: [
            { name: "REST APIs", icon: "fas fa-code-branch" },
            { name: "MySQL", icon: "fas fa-database" },
            { name: "SQLite", icon: "fas fa-database" },
            // { name: "Authentication", icon: "fas fa-user-lock" }
        ]
    },
    {
        category: "Tools",
        icon: "fas fa-tools",
        skills: [
            { name: "GitHub", icon: "fab fa-github" },
            { name: "Postman", icon: "fas fa-paper-plane" },
            { name: "VS Code", icon: "fas fa-code" },
            { name: "Hostinger", icon: "fas fa-server" }
        ]
    }
];

// Initialize Skills
function initSkills() {
    const skillsGrid = document.querySelector('.skills-grid');
    
    skillsData.forEach(category => {
        const categoryElement = document.createElement('div');
        categoryElement.className = 'skill-category';
        categoryElement.innerHTML = `
            <h3><i class="${category.icon}"></i> ${category.category}</h3>
            <div class="skill-list">
                ${category.skills.map(skill => `
                    <div class="skill-item">
                        <i class="${skill.icon}"></i>
                        <span>${skill.name}</span>
                    </div>
                `).join('')}
            </div>
        `;
        skillsGrid.appendChild(categoryElement);
    });
}

// Projects Data
const projectsData = [
    {
        title: "Blog Application",
        description: "A full-featured blog platform with user authentication, CRUD operations, and responsive UI.",
        icon: "fas fa-blog",
        tags: ["Django", "HTML", "CSS", "JavaScript", "MySQL"],
        github: "https://github.com/adarshunnithan214/Blog.git"
    },
    {
        title: "Fashion Stylish e-commerce",
        description: "Developed a Full-Stack E-commerce web application using Django, providing a complete online shopping experience.",
        icon: "fas fa-store",
        tags: ["Django", "Python", "MySQL", "Bootstrap", "HTML", "CSS"],
        github: "https://github.com/adarshunnithan214/Fashion-Stylish-.git"
    }
];

// Initialize Projects
function initProjects() {
    const projectsGrid = document.querySelector('.projects-grid');
    
    projectsData.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.className = 'project-card';
        projectElement.innerHTML = `
            <div class="project-header">
                <div class="project-icon">
                    <i class="${project.icon}"></i>
                </div>
            </div>
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="project-tags">
                ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
            <div class="project-links">
                <a href="${project.github}" target="_blank">
                    <i class="fab fa-github"></i>
                    <span>View Code</span>
                </a>
            </div>
        `;
        projectsGrid.appendChild(projectElement);
    });
}

// Contact Form
function initContactForm() {
    const form = document.getElementById('contact-form');
    const submitBtn = form.querySelector('.btn-submit');
    const successMsg = form.querySelector('.form-message.success');
    const errorMsg = form.querySelector('.form-message.error');
    
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Show loading state
        submitBtn.classList.add('loading');
        
        // Simulate API call (replace with actual Formspree or backend integration)
        setTimeout(() => {
            submitBtn.classList.remove('loading');
            
            // Show success message (in production, this would be based on actual response)
            successMsg.classList.add('show');
            
            // Hide message after 5 seconds
            setTimeout(() => {
                successMsg.classList.remove('show');
            }, 5000);
            
            // Reset form
            form.reset();
        }, 1500);
    });
}

// Scroll Animations
function initAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.skill-category, .project-card, .experience-card').forEach(el => {
        observer.observe(el);
    });
}

// Theme Toggle
function initThemeToggle() {
    const themeToggle = document.querySelector('.theme-toggle');
    const icon = themeToggle.querySelector('i');
    
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        
        if (document.body.classList.contains('light-mode')) {
            icon.className = 'fas fa-sun';
            localStorage.setItem('theme', 'light');
        } else {
            icon.className = 'fas fa-moon';
            localStorage.setItem('theme', 'dark');
        }
    });
    
    // Load saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
        icon.className = 'fas fa-sun';
    }
}