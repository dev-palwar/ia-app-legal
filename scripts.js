// ===========================
// Back to Top Button
// ===========================

/**
 * Initializes the back-to-top button functionality
 */
function initBackToTop() {
    const backToTopButton = document.getElementById('backToTop');

    if (!backToTopButton) return;

    // Shows or hides the back-to-top button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });

    // Scrolls to top when button is clicked
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ===========================
// Smooth Scroll for Anchor Links
// ===========================

/**
 * Adds smooth scrolling behavior to all anchor links in the table of contents
 */
function initSmoothScroll() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 20;

                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });

                // Updates URL without jumping
                history.pushState(null, null, `#${targetId}`);
            }
        });
    });
}

// ===========================
// Active Section Highlighting
// ===========================

/**
 * Highlights the current section in the table of contents based on scroll position
 */
function initActiveSection() {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.table-of-contents a');

    if (sections.length === 0 || navLinks.length === 0) return;

    // Observes when sections enter the viewport
    const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -70% 0px',
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');

                // Removes active class from all links
                navLinks.forEach(link => {
                    link.classList.remove('active');
                });

                // Adds active class to the current section's link
                const activeLink = document.querySelector(`.table-of-contents a[href="#${id}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }, observerOptions);

    // Observes all sections
    sections.forEach(section => {
        observer.observe(section);
    });
}

// ===========================
// Copy Email Functionality
// ===========================

/**
 * Adds click-to-copy functionality for email addresses
 */
function initCopyEmail() {
    const emailLinks = document.querySelectorAll('a[href^="mailto:"]');

    emailLinks.forEach(link => {
        // Adds a visual indicator
        link.style.cursor = 'pointer';
        link.setAttribute('title', 'Click to copy email');

        // Copies email to clipboard on click
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const email = this.getAttribute('href').replace('mailto:', '');

            navigator.clipboard.writeText(email).then(() => {
                // Shows temporary success message
                const originalText = this.textContent;
                this.textContent = '✓ Copied!';
                this.style.color = '#10b981';

                setTimeout(() => {
                    this.textContent = originalText;
                    this.style.color = '';
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy email:', err);
            });
        });
    });
}

// ===========================
// Section Collapse/Expand
// ===========================

/**
 * Adds collapsible functionality to sections (optional feature)
 */
function initCollapsibleSections() {
    const sectionHeadings = document.querySelectorAll('.section h2');

    sectionHeadings.forEach(heading => {
        // Makes headings clickable
        heading.style.cursor = 'pointer';
        heading.style.userSelect = 'none';

        // Adds collapse indicator
        const indicator = document.createElement('span');
        indicator.className = 'collapse-indicator';
        indicator.textContent = ' ▼';
        indicator.style.fontSize = '0.8em';
        indicator.style.color = 'var(--primary-color)';
        indicator.style.transition = 'transform 0.3s ease';
        heading.appendChild(indicator);

        // Toggles section visibility on click
        heading.addEventListener('click', function() {
            const section = this.parentElement;
            const content = Array.from(section.children).slice(1); // Gets all children except h2

            content.forEach(element => {
                if (element.style.display === 'none') {
                    element.style.display = '';
                    indicator.style.transform = 'rotate(0deg)';
                } else {
                    element.style.display = 'none';
                    indicator.style.transform = 'rotate(-90deg)';
                }
            });
        });
    });
}

// ===========================
// Print Functionality
// ===========================

/**
 * Adds a print button to easily print the privacy policy
 */
function initPrintButton() {
    const header = document.querySelector('.header');

    if (!header) return;

    const printButton = document.createElement('button');
    printButton.textContent = '🖨️ Print Policy';
    printButton.className = 'print-button';
    printButton.style.cssText = `
        margin-top: 1rem;
        padding: 0.75rem 1.5rem;
        background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
        color: white;
        border: none;
        border-radius: 6px;
        font-size: 0.95rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
        box-shadow: var(--shadow-md);
    `;

    // Adds hover effect
    printButton.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px)';
        this.style.boxShadow = 'var(--shadow-lg)';
    });

    printButton.addEventListener('mouseleave', function() {
        this.style.transform = '';
        this.style.boxShadow = 'var(--shadow-md)';
    });

    // Triggers print dialog
    printButton.addEventListener('click', function() {
        window.print();
    });

    header.appendChild(printButton);
}

// ===========================
// Reading Progress Bar
// ===========================

/**
 * Creates a reading progress bar at the top of the page
 */
function initReadingProgress() {
    // Creates progress bar element
    const progressBar = document.createElement('div');
    progressBar.className = 'reading-progress';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 4px;
        background: linear-gradient(90deg, var(--primary-color) 0%, var(--secondary-color) 50%, var(--accent-color) 100%);
        z-index: 9999;
        transition: width 0.1s ease;
    `;

    document.body.appendChild(progressBar);

    // Updates progress bar on scroll
    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.pageYOffset / windowHeight) * 100;
        progressBar.style.width = `${scrolled}%`;
    });
}

// ===========================
// Last Updated Timer
// ===========================

/**
 * Shows how long ago the policy was updated
 */
function initLastUpdatedTimer() {
    const lastUpdatedElement = document.querySelector('.last-updated');

    if (!lastUpdatedElement) return;

    const lastUpdatedDate = new Date('November 30, 2025');
    const now = new Date();
    const diffTime = Math.abs(now - lastUpdatedDate);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays > 0) {
        const timeAgo = document.createElement('span');
        timeAgo.style.cssText = 'color: var(--text-light); font-size: 0.85rem; display: block; margin-top: 0.25rem;';
        timeAgo.textContent = `(${diffDays} ${diffDays === 1 ? 'day' : 'days'} ago)`;
        lastUpdatedElement.appendChild(timeAgo);
    }
}

// ===========================
// Accessibility Enhancements
// ===========================

/**
 * Adds keyboard navigation support
 */
function initAccessibility() {
    // Adds skip to content link
    const skipLink = document.createElement('a');
    skipLink.href = '#content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 0;
        background: var(--primary-color);
        color: white;
        padding: 0.5rem 1rem;
        text-decoration: none;
        z-index: 10000;
    `;

    // Shows skip link on focus
    skipLink.addEventListener('focus', function() {
        this.style.top = '0';
    });

    skipLink.addEventListener('blur', function() {
        this.style.top = '-40px';
    });

    document.body.insertBefore(skipLink, document.body.firstChild);

    // Adds id to main content
    const content = document.querySelector('.content');
    if (content) {
        content.id = 'content';
        content.setAttribute('tabindex', '-1');
    }
}

// ===========================
// Initialize All Features
// ===========================

/**
 * Runs all initialization functions when the DOM is loaded
 */
document.addEventListener('DOMContentLoaded', function() {
    console.log('Privacy Policy page loaded successfully');

    // Initializes all features
    initBackToTop();
    initSmoothScroll();
    initActiveSection();
    initCopyEmail();
    initPrintButton();
    initReadingProgress();
    initLastUpdatedTimer();
    initAccessibility();

    // Optionally enables collapsible sections (commented out by default)
    // initCollapsibleSections();

    console.log('All features initialized');
});

// ===========================
// Performance Monitoring
// ===========================

/**
 * Logs page load performance metrics
 */
window.addEventListener('load', function() {
    if (window.performance) {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log(`Page loaded in ${pageLoadTime}ms`);
    }
});

