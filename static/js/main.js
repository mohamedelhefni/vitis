// Theme Toggle
document.addEventListener('DOMContentLoaded', function() {
    const toggleThemeButton = document.getElementById('toggle-theme');
    const sunIcon = document.querySelector('.sun-icon');
    const moonIcon = document.querySelector('.moon-icon');
    
    function updateIcons(isDark) {
        if (sunIcon) sunIcon.classList.toggle('hidden', !isDark);
        if (moonIcon) moonIcon.classList.toggle('hidden', isDark);
    }
    
    function setTheme(isDark) {
        document.documentElement.classList.toggle('dark', isDark);
        updateIcons(isDark);
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    }
    
    // Initialize icons based on current state (theme already applied in head)
    const isDark = document.documentElement.classList.contains('dark');
    updateIcons(isDark);
    
    // Toggle theme on button click
    if (toggleThemeButton) {
        toggleThemeButton.addEventListener('click', function() {
            const isDarkNow = document.documentElement.classList.contains('dark');
            setTheme(!isDarkNow);
        });
    }
});

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
    });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (!href || href === '#') return;
        
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            // Update URL hash
            history.pushState(null, null, href);
            // Scroll to target with offset for sticky header
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Handle initial hash on page load
document.addEventListener('DOMContentLoaded', function() {
    if (window.location.hash) {
        const target = document.querySelector(window.location.hash);
        if (target) {
            setTimeout(() => {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }, 100);
        }
    }
});

// Add copy button to code blocks
document.querySelectorAll('pre code').forEach((block) => {
    const button = document.createElement('button');
    button.className = 'copy-code-btn';
    button.innerHTML = `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/>
    </svg>`;
    button.title = 'نسخ الكود';
    
    button.addEventListener('click', async () => {
        await navigator.clipboard.writeText(block.textContent);
        button.innerHTML = `<svg class="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
        </svg>`;
        setTimeout(() => {
            button.innerHTML = `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/>
            </svg>`;
        }, 2000);
    });
    
    const pre = block.parentElement;
    pre.style.position = 'relative';
    pre.appendChild(button);
});

// Add styles for copy button
const style = document.createElement('style');
style.textContent = `
    .copy-code-btn {
        position: absolute;
        top: 0.5rem;
        left: 0.5rem;
        padding: 0.5rem;
        border-radius: 0.5rem;
        background: rgba(255, 255, 255, 0.1);
        color: #94a3b8;
        border: none;
        cursor: pointer;
        opacity: 0;
        transition: all 0.2s;
    }
    pre:hover .copy-code-btn {
        opacity: 1;
    }
    .copy-code-btn:hover {
        background: rgba(255, 255, 255, 0.2);
        color: #fff;
    }
`;
document.head.appendChild(style);
