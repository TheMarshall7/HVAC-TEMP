/* 
   HVAC Website Template Engine - Auto-Growth System
   Reads from config.js and populates the layout.
*/

document.addEventListener("DOMContentLoaded", () => {
    // 1. Inject CSS Variables
    const root = document.documentElement;
    root.style.setProperty('--primary', siteConfig.primary_color);
    root.style.setProperty('--secondary', siteConfig.secondary_color);
    root.style.setProperty('--accent', siteConfig.accent_color);
    root.style.setProperty('--bg', siteConfig.bg_color);
    root.style.setProperty('--text', siteConfig.text_color);

    // 2. Global Text Replacements
    const replaceText = (selector, text) => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(el => {
            if(el.tagName === 'A' && selector.includes('phone')) {
                el.href = `tel:${text.replace(/[^0-9]/g, '')}`;
            }
            if(el.tagName === 'A' && selector.includes('email')) {
                el.href = `mailto:${text}`;
            }
            el.textContent = text;
        });
    };

    replaceText('[data-config="business_name"]', siteConfig.business_name);
    replaceText('[data-config="city"]', siteConfig.city);
    replaceText('[data-config="state"]', siteConfig.state);
    replaceText('[data-config="service_area"]', siteConfig.service_area);
    replaceText('[data-config="phone"]', siteConfig.phone);
    replaceText('[data-config="email"]', siteConfig.email);
    replaceText('[data-config="about_text"]', siteConfig.google_maps_description);

    // Handle Logo
    const logoEl = document.getElementById('brand-logo');
    if (logoEl) {
        if (siteConfig.logo_url) {
            logoEl.innerHTML = `<img src="${siteConfig.logo_url}" alt="${siteConfig.business_name} Logo" style="max-height: 50px;">`;
        } else {
            logoEl.textContent = siteConfig.logo_text || siteConfig.business_name;
        }
    }

    // 3. Render Trust Badges
    const badgeContainer = document.getElementById('trust-badges');
    if (badgeContainer && siteConfig.trust_badges) {
        badgeContainer.innerHTML = siteConfig.trust_badges.map(badge => 
            `<div class="badge"><svg width="20" height="20" viewBox="0 0 24 24" fill="var(--secondary)"><path d="M12 2L3 7v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5zm-2 14l-4-4 1.41-1.41L10 13.17l6.59-6.59L18 8l-8 8z"/></svg><span>${badge}</span></div>`
        ).join('');
    }

    // 4. Render Services (2x2 Uniform Image Grid)
    const gridServices = document.getElementById('services-grid');
    if (gridServices && siteConfig.services_list) {
        
        const cardImages = [
            './images/thermostat.png',
            './images/ac_unit.png',
            './images/filter.png',
            './images/vent.png'
        ];

        gridServices.innerHTML = siteConfig.services_list.map((srv, index) => {
            const bgImage = cardImages[index % cardImages.length];
            const bgStyle = `style="background-image: url('${bgImage}'); color: white;"`;
            
            return `
            <div class="service-card reveal-up" ${bgStyle}>
                <div class="service-icon" style="color: var(--primary); background: white;">${srv.icon}</div>
                <h3 style="color: white; font-size: 1.8rem; margin-bottom: 0.5rem; text-shadow: 0 2px 4px rgba(0,0,0,0.3);">${srv.title}</h3>
                <p style="color: rgba(255,255,255,0.95); font-size: 1.05rem; text-shadow: 0 1px 3px rgba(0,0,0,0.5);">${srv.description}</p>
            </div>
            `;
        }).join('');
    }

    // 5. Render Why Choose Us
    const whyUsList = document.getElementById('why-us-list');
    if (whyUsList && siteConfig.why_us) {
        whyUsList.innerHTML = siteConfig.why_us.map(item => `
            <li>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--primary)"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                <span>${item}</span>
            </li>
        `).join('');
    }

    // 6. Render Testimonials
    const reviewGrid = document.getElementById('reviews-grid');
    if (reviewGrid && siteConfig.reviews) {
        const starSVG = `<svg width="20" height="20" viewBox="0 0 24 24" fill="var(--accent)"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>`;
        reviewGrid.innerHTML = siteConfig.reviews.map(rev => {
            const stars = starSVG.repeat(rev.rating);
            return `
            <div class="review-card">
                <div class="stars">${stars}</div>
                <p class="review-text">"${rev.text}"</p>
                <div class="review-author">- ${rev.name}</div>
            </div>
            `;
        }).join('');
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetEl = document.querySelector(targetId);
            
            if (targetEl) {
                // If targeting the booking form, scroll to the top of the page to show the whole hero/form
                if (targetId === '#booking') {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    
                    // Remove class and trigger reflow to allow restarting the animation
                    targetEl.classList.remove('flash-attention');
                    void targetEl.offsetWidth; 
                    targetEl.classList.add('flash-attention');
                    
                    // Stop flashing after 30 seconds
                    setTimeout(() => {
                        if(targetEl) targetEl.classList.remove('flash-attention');
                    }, 30000);
                } else {
                    targetEl.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // 7. Scroll Reveal Animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

    document.querySelectorAll('.reveal-up').forEach(el => observer.observe(el));

    // 8. Auto-Inject Indepth Local SEO
    const setupIndepthSEO = () => {
        // 8a. Dynamic Document Title
        document.title = `${siteConfig.business_name} | Top-Rated HVAC in ${siteConfig.city}, ${siteConfig.state}`;

        // 8b. Dynamic Meta Description
        let metaDesc = document.querySelector('meta[name="description"]');
        if (!metaDesc) {
            metaDesc = document.createElement('meta');
            metaDesc.name = "description";
            document.head.appendChild(metaDesc);
        }
        
        const primaryService = siteConfig.services_list[0]?.title || "HVAC Services";
        const cleanDesc = `${siteConfig.business_name} provides expert ${primaryService} and emergency repair in ${siteConfig.city}, ${siteConfig.state}. ${siteConfig.google_maps_description}`.substring(0, 155);
        metaDesc.content = cleanDesc + "...";

        // 8c. Open Graph Tags for Social Optimization
        const ogTags = [
            { property: 'og:title', content: document.title },
            { property: 'og:description', content: metaDesc.content },
            { property: 'og:type', content: 'website' },
            { property: 'og:locale', content: 'en_US' }
        ];

        ogTags.forEach(tagData => {
            let meta = document.createElement('meta');
            meta.setAttribute('property', tagData.property);
            meta.setAttribute('content', tagData.content);
            document.head.appendChild(meta);
        });

        // 8d. Auto Schema.org JSON-LD (HVACBusiness Rich Snippets)
        const schemaJSON = {
            "@context": "https://schema.org",
            "@type": "HVACBusiness",
            "name": siteConfig.business_name,
            "image": siteConfig.logo_url || "https://example.com/logo.png",
            "telephone": siteConfig.phone,
            "email": siteConfig.email,
            "address": {
                "@type": "PostalAddress",
                "addressLocality": siteConfig.city,
                "addressRegion": siteConfig.state,
                "addressCountry": "US"
            },
            "url": window.location.href,
            "description": metaDesc.content,
            "priceRange": "$$",
            "openingHoursSpecification": [
                {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": [ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday" ],
                    "opens": "00:00",
                    "closes": "23:59"
                }
            ]
        };

        const scriptEl = document.createElement('script');
        scriptEl.type = 'application/ld+json';
        scriptEl.text = JSON.stringify(schemaJSON, null, 2);
        document.head.appendChild(scriptEl);
        
        // 8e. Auto-populate missing HTML Image ALT attributes for accessibility/image search rankings
        document.querySelectorAll('img').forEach((img, index) => {
            if (!img.alt || img.alt.trim() === '') {
                img.alt = `${siteConfig.business_name} in ${siteConfig.city} - Professional HVAC Service Image ${index+1}`;
            }
        });
    };

    setupIndepthSEO();
});
