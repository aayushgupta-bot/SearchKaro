// JavaScript for SearchKaro homepage

document.addEventListener('DOMContentLoaded', function() {
    // Dark/Light Mode Toggle Functionality
    const toggle = document.getElementById('toggle');
    const body = document.body;
    
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.classList.toggle('dark-mode', savedTheme === 'dark');
        toggle.checked = savedTheme === 'dark';
    }
    
    // Toggle theme when checkbox is clicked
    toggle.addEventListener('change', function() {
        if (this.checked) {
            // Switch to dark mode
            body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        } else {
            // Switch to light mode
            body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
        }
    });

    // Placeholder focus behavior
    const searchInput = document.querySelector('.search-input');
    searchInput.addEventListener('focus', function() {
        searchInput.placeholder = searchInput.getAttribute('data-placeholder-focus');
    });

    searchInput.addEventListener('blur', function() {
        searchInput.placeholder = searchInput.getAttribute('data-placeholder-default');
    });

    // Voice search functionality - redirect to search input
    const voiceSearchButton = document.querySelector('.voice-search-btn');
    voiceSearchButton.addEventListener('click', function() {
        // Focus on search input
        searchInput.focus();
        searchInput.placeholder = 'Voice search activated - Start typing...';
        
        // Add listening animation
        voiceSearchButton.classList.add('listening');
        setTimeout(() => {
            voiceSearchButton.classList.remove('listening');
            searchInput.placeholder = searchInput.getAttribute('data-placeholder-default');
        }, 3000);
    });

    // Camera search functionality - redirect to search input
    const cameraSearchButton = document.querySelector('.camera-search-btn');
    cameraSearchButton.addEventListener('click', function() {
        // Focus on search input
        searchInput.focus();
        searchInput.placeholder = 'Camera search activated - Start typing...';
        
        // Brief visual feedback
        cameraSearchButton.style.backgroundColor = '#e0e0e0';
        setTimeout(() => {
            cameraSearchButton.style.backgroundColor = '';
            searchInput.placeholder = searchInput.getAttribute('data-placeholder-default');
        }, 2000);
    });

    // Language toggle functionality
    const langOptions = document.querySelectorAll('.lang-option');
    langOptions.forEach(option => {
        option.addEventListener('click', function() {
            langOptions.forEach(opt => opt.classList.remove('active'));
            this.classList.add('active');
            
            // Store selected language
            const selectedLang = this.getAttribute('data-lang');
            localStorage.setItem('selectedLanguage', selectedLang);
        });
    });
    
    // Restore saved language preference
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage) {
        langOptions.forEach(option => {
            option.classList.remove('active');
            if (option.getAttribute('data-lang') === savedLanguage) {
                option.classList.add('active');
            }
        });
    }

    // Google search functionality
    function performGoogleSearch() {
        const query = searchInput.value.trim();
        if (query) {
            const googleUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
            window.location.href = googleUrl;
        }
    }

    // Logic for search buttons
    const searchButton = document.querySelector('.primary-btn');
    const luckyButton = document.querySelector('.secondary-btn');

    searchButton.addEventListener('click', function() {
        performGoogleSearch();
    });

    luckyButton.addEventListener('click', function() {
        const query = searchInput.value.trim();
        if (query) {
            // "I'm Feeling Lucky" redirects to first Google result
            const luckyUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}&btnI=1`;
            window.location.href = luckyUrl;
        }
    });
    
    // Enter key search
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performGoogleSearch();
        }
    });

    // Festival Doodle Placeholder
    const festivalDoodle = document.getElementById('festivalDoodle');

    // This can be expanded for custom festival doodles
    // festivalDoodle.innerHTML = `<img src="path/to/doodle.jpg" alt="Festival">`;

    // Logo click functionality
    const logoImg = document.querySelector('.logo-img');
    logoImg.addEventListener('click', function() {
        // Reload the page or navigate to homepage
        window.location.href = 'index.html';
    });
    
    // Quick links functionality
    const quickLinks = document.querySelectorAll('.quick-link');
    quickLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const category = this.getAttribute('data-category');
            console.log('Quick link clicked:', category);
            // Here you would implement quick link navigation
        });
    });

    // Redirect 'Aaj Tak' quick link
    const aajTakLink = document.querySelector('.quick-link[data-category="news"]');
    if (aajTakLink) {
        aajTakLink.addEventListener('click', function(e) {
            e.preventDefault();
            window.location.href = 'https://www.aajtak.in';
        });
    }

    // Redirect 'Trending on YouTube' quick link
    const youtubeTrendingLink = document.querySelector('.quick-link[data-category="videos"]');
    if (youtubeTrendingLink) {
        youtubeTrendingLink.addEventListener('click', function(e) {
            e.preventDefault();
            window.location.href = 'https://www.youtube.com/feed/trending';
        });
    }

    // Redirect 'Deals on Flipkart' quick link
    const flipkartDealsLink = document.querySelector('.quick-link[data-category="shopping"]');
    if (flipkartDealsLink) {
        flipkartDealsLink.addEventListener('click', function(e) {
            e.preventDefault();
            window.location.href = 'https://www.flipkart.com/offers-store';
        });
    }

    // Redirect 'Cricket Score' quick link to Google search for cricket score
    const cricketScoreLink = document.querySelector('.quick-link[data-category="cricket"]');
    if (cricketScoreLink) {
        cricketScoreLink.addEventListener('click', function(e) {
            e.preventDefault();
            const googleUrl = 'https://www.google.com/search?q=' + encodeURIComponent('cricket score');
            window.location.href = googleUrl;
        });
    }

    // Redirect 'Mera Bhagy' button to horoscope.com
    const meraBhagyBtn = document.querySelector('.secondary-btn');
    if (meraBhagyBtn) {
        meraBhagyBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.location.href = 'https://www.horoscope.com/us/index.aspx';
        });
    }

    // Example debug log
    console.log('Script loaded successfully!');

    const searchBtn = document.querySelector('.primary-btn');

    function performGoogleSearch() {
        const query = searchInput.value.trim();
        if (query) {
            const googleUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
            window.location.href = googleUrl;
        }
    }

    // On Enter key in input
    searchInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            performGoogleSearch();
        }
    });

    // On button click
    searchBtn.addEventListener('click', function() {
        performGoogleSearch();
    });
});