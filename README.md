# 🚀 High-Converting HVAC Website Template Engine

This is a premium, high-converting, local SEO-optimized website template designed specifically for HVAC contractors. Instead of hunting through complex HTML structures to change text, this system uses a centralized **Configuration File** (`config.js`) to dynamically generate branding, content, and deep SEO metadata across the entire site.

## 📁 File Structure
- `index.html`: The core landing page layout engineered for high conversion rates.
- `style.css`: The premium design system (Bento Grids, Glassmorphism, polished animations).
- `template-engine.js`: The Javascript engine that handles everything from DOM injection to automated SEO tagging and smooth scrolling logic.
- `config.js`: **The ONLY file you need to edit to launch a new client site.**
- `images/`: Directory containing all high-end, premium HVAC marketing assets.

---

## 🛠️ Instructions for Usage (AI & Human Guide)

Whether you are a developer, an agency owner, or an AI Assistant executing a task, follow these precise steps to instantly deploy this template to a new HVAC client.

### Step 1: Update the Business Identity
Open `config.js`. This acts as your database. Update the following fields:
- `business_name`
- `city`, `state`, `service_area`
- `phone` & `email`
- `google_maps_description` *(Note: The engine uses this text specifically to generate local SEO descriptions, so make it keyword-rich).*

### Step 2: Establish the Client's Branding
You can globally alter the entire website's visual theme instantly by just swapping the hex codes inside `config.js`:
- `primary_color`: Controls buttons, dark gradient overlays, and main text highlights.
- `secondary_color`: Controls alert badges, the Hero form hover flash outline, and accent icons.
- `logo_url`: Link to the brand's logo. Leave blank `""` to default to crisp Text-based branding.

### Step 3: Customize Content & Services
Inside `config.js`, you can safely modify the `services_list`, `why_us`, and `trust_badges` arrays. 
*Architectural Note: To maintain the luxurious 2x2 Service Grid UI, ensure you provide exactly 4 items in the `services_list` array. The images are pulled dynamically from the `images/` directory in sequential order.*

### Step 4: Inject the CRM/GoHighLevel Lead Capture Form
The template relies on a high-converting frosted-glass Hero CTA box.
1. Open `index.html`
2. Search for `id="booking"` and locate the `<!-- START GHL EMBED -->` block.
3. Replace the existing `<iframe src="...">` block with the client's specific GoHighLevel form embed code. 
*Pro-Tip: Ensure you append `class="ghl-iframe"` and `scrolling="no"` to the new iframe attributes so the mobile-responsive height properties do not break.*

---

## 🤖 The Automated SEO Engine
You **DO NOT** need to write SEO metadata manually. This template features a mathematically tuned **In-depth SEO Engine** built directly into `template-engine.js`. 

When `config.js` is updated, the template automatically executes the following on page load:
1. Rewrites `<title>` to dynamically target the localized City and State.
2. Trims and formats a perfect 155-character Meta Description for click-through-rate optimization.
3. Injects a structured `@type: "HVACBusiness"` JSON-LD schema payload into the HTML `<head>` for Google Maps tracking and Rich Snippets.
4. Dynamically processes all images and injects missing `alt=""` attributes based on localized keyword strings.

**Ready to Launch:** Simply push these flat files to any simple hosting provider (Cloudflare Pages, Vercel, GoHighLevel hosting, or cPanel). No build steps, React, or compilations are required!
