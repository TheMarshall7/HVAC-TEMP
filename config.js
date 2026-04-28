const siteConfig = {
    // 1. GLOBAL IDENTITY
    business_name: "Apex Elite HVAC",
    city: "Charlotte",
    state: "NC",
    service_area: "Charlotte Metro Area",
    phone: "(555) 382-9921",
    email: "service@apexelitehvac.com",
    logo_text: "Apex Elite", // Used if logo_url is empty
    logo_url: "", // e.g., "./images/logo.png"

    // 2. DESIGN SYSTEM & COLORS
    primary_color: "#1e3a8a",   // Deep Trust Blue
    secondary_color: "#dc2626", // Emergency Red
    accent_color: "#facc15",    // Highlight Yellow
    bg_color: "#f8fafc",        // Light Gray Background
    text_color: "#1e293b",      // Dark Slate

    // 3. SEO & TRUST DATA
    google_maps_description: "Apex Elite HVAC is Charlotte's premier heating and cooling service provider. We offer fast, reliable, and licensed AC repair, furnace installation, and emergency HVAC services to keep your home comfortable year-round.",
    trust_badges: [
        "Licensed & Insured",
        "Fast Response",
        "15+ Years Experience",
        "Local Experts"
    ],

    // 4. SERVICES
    services_list: [
        {
            title: "AC Repair & Install",
            description: "Fast, reliable air conditioning repair and full-system replacements to beat the summer heat.",
            icon: "❄️"
        },
        {
            title: "Heating Services",
            description: "Keep your home warm with our expert furnace repair, maintenance, and installation.",
            icon: "🔥"
        },
        {
            title: "Routine Maintenance",
            description: "Preventative tune-ups to extend the life of your unit and lower your energy bills.",
            icon: "🔧"
        },
        {
            title: "Emergency HVAC",
            description: "Available 24/7 for urgent breakdowns so your family is never left uncomfortable.",
            icon: "🚨"
        }
    ],

    // 5. WHY CHOOSE US
    why_us: [
        "Same-Day Service Available",
        "Upfront Flat-Rate Pricing",
        "Certified & Background-Checked Techs",
        "100% Satisfaction Guarantee"
    ],

    // 6. TESTIMONIALS (For Auto Google Review feature)
    reviews: [
        {
            name: "Sarah Jenkins",
            text: "My AC died in the middle of July and they came out within two hours! Incredibly professional and fair pricing. Highly recommend.",
            rating: 5
        },
        {
            name: "Mark T.",
            text: "Fast, honest, and reliable. The technician explained everything clearly without trying to upsell me. My go-to HVAC guys now.",
            rating: 5
        },
        {
            name: "Emily R.",
            text: "Smooth installation of our new furnace. The team was respectful of our home and left the work area spotless.",
            rating: 5
        }
    ]
};
