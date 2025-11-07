# Design Guidelines: Dhaba Junction Faridabad

## Design Approach
**Vibrant North Indian Dhaba Theme**: Drawing inspiration from authentic Indian dhaba culture with warm, earthy tones, traditional patterns, and bold typography. Focus on appetizing food photography, vibrant colors representing Indian cuisine, and a welcoming, family-friendly atmosphere.

## Core Design Elements

### Typography
- **Hero/Headlines**: Serif font (Playfair Display or Cormorant Garamond) - 48px to 72px, elegant and refined
- **Section Titles**: Same serif font - 36px to 42px, regular weight
- **Body Text**: Sans-serif (Inter or Montserrat) - 16px to 18px, comfortable reading size
- **Dish Names**: Serif font - 24px, medium weight for menu items
- **Details/Captions**: Sans-serif - 14px, uppercase letterspacing for dates/location

### Layout System
**Spacing Primitives**: Use Tailwind units of 4, 8, 12, 16, 20, and 24 consistently (p-4, py-12, mt-20, etc.)
- Section padding: py-20 desktop, py-12 mobile
- Component spacing: gap-8 for grids, space-y-4 for stacked content
- Container: max-w-7xl with px-8 on desktop, px-4 on mobile

### Layout Structure (7 Sections)

1. **Hero Section** (80vh minimum)
   - Full-width AI-generated hero image (moody bistro ambiance or signature dish close-up)
   - Centered overlay with pop-up name, tagline, and dates
   - CTA button with blurred background (backdrop-blur-md with semi-transparent bg)
   - Subtle gradient overlay for text readability

2. **Pop-Up Information** (Single column, centered, max-w-3xl)
   - Pop-up name and concept description
   - Key details: dates, location, hours
   - Reservation/inquiry CTA
   - Spacing: py-20

3. **Featured Dishes Grid** (3-column on desktop, 1-column mobile)
   - AI-generated dish photos (grid-cols-1 md:grid-cols-2 lg:grid-cols-3)
   - Each card: large image, dish name, short description, price
   - Hover effect: subtle image scale (scale-105)
   - Equal height cards with object-cover images

4. **Ambiance Section** (Full-width image with side text)
   - Two-column layout (lg:grid-cols-2): AI-generated ambiance photo + descriptive text
   - Image on left, text content on right with generous padding
   - Text includes atmosphere description, chef background, or dining experience details

5. **Complete Menu Highlights** (Asymmetric layout)
   - Split into Starters, Mains, Desserts subsections
   - Mix of single-column and two-column layouts for visual variety
   - Include AI-generated plating detail photos for 2-3 signature items
   - Clean, scannable format with prices right-aligned

6. **Printable Menu Preview** (Print-optimized section)
   - Grid of all dish photos (4 columns desktop, 2 mobile)
   - "Download Menu PDF" button prominent above grid
   - Compact layout optimized for printing on standard paper
   - Include pop-up logo, dates, and contact info in printable version

7. **Location & Contact** (Two-column: map/details + contact form)
   - Left: Address, hours, parking/transit info, embedded map placeholder
   - Right: Simple contact form (name, email, party size, preferred date)
   - Social media links
   - Footer: Copyright, terms, designed credit

## Component Library

### Cards (Dish Cards)
- Rounded corners (rounded-lg)
- No heavy borders - rely on shadow (shadow-md)
- Image aspect ratio: 4:3 for dishes, 16:9 for ambiance
- Padding inside card: p-6

### Buttons
- Primary CTA: Large (px-8 py-4), serif font for elegance
- Secondary: Outlined style with hover fill
- On images: backdrop-blur-md with bg-white/20 or bg-black/30
- No custom hover states beyond standard implementation

### Navigation (Sticky Header)
- Minimal sticky nav: Logo left, sections right, "Reserve" CTA
- Transparent with blur on scroll
- Height: h-16 to h-20

### Print Styles
- @media print: Hide nav, footer, forms
- Ensure menu grid is clean and organized
- Optimize image sizes for print quality
- Include all essential info (dates, location, contact)

## Images

**Hero Image**: Full-width, high-impact AI-generated image. Style prompt: "Moody bistro interior with warm candlelight, elegant table setting, shallow depth of field" or "Signature dish hero shot, artistic plating, dramatic lighting, professional food photography"

**Dish Photos** (6-8 images): AI-generated from prompts like "French bistro appetizer, artistic plating, natural light" or "Gourmet dessert, close-up plating detail, rustic elegant". Each dish gets its own photo.

**Ambiance Photos** (2-3 images): "Sunlit natural bistro interior, minimalist elegant" and "Intimate dining atmosphere, warm lighting, modern rustic"

**Plating Details** (2-3 images): Extreme close-ups showcasing technique, garnish, presentation artistry

All images should maintain consistent aesthetic - either all moody/dramatic or all bright/natural based on chosen style direction.

## Animations
Minimal and refined:
- Subtle fade-in on scroll for sections
- Image hover scale on dish cards only
- Smooth scroll for anchor links
- No parallax or elaborate scroll effects

## Accessibility
- Sufficient contrast for overlay text on hero
- Alt text for all AI-generated images describing dish/scene
- Form labels clearly associated with inputs
- Print menu maintains readability and structure