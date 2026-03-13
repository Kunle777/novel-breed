# Novel Breed Agric - Code Documentation

## 📁 File Structure

```
Novel breed/
├── index.html          # Homepage
├── about.html          # About page
├── team.html           # Team profiles
├── products.html       # Products showcase
├── contact.html        # Contact form
├── governance.html     # Corporate governance
├── news.html           # News & updates
├── style.css           # Main stylesheet
├── main.js             # JavaScript functionality
└── images/             # All images
```

## 🎨 CSS Variables (style.css)

```css
--green:        #1B6B2F   /* Primary brand color */
--green-dark:   #124820   /* Darker green for hover states */
--green-light:  #e8f5e9   /* Light green backgrounds */
--gold:         #F5A623   /* Accent color */
--gold-dark:    #d4891a   /* Darker gold */
--off-white:    #F7F4EF   /* Section backgrounds */
--dark:         #1A1A1A   /* Text color */
--gray:         #666666   /* Secondary text */
--light-gray:   #f0f0f0   /* Borders */
--white:        #ffffff   /* White */
```

## 📱 Responsive Breakpoints

- **Desktop:** 1024px and above
- **Tablet:** 768px - 1023px
- **Mobile:** 320px - 767px

## 🔧 Key CSS Classes

### Layout
- `.container` - Max-width 1200px, centered
- `.home-page` - Body class for homepage-specific styles

### Navigation
- `.navbar` - Main navigation bar
- `.nav-links` - Navigation menu (desktop horizontal, mobile sidebar)
- `.hamburger` - Mobile menu toggle
- `.has-dropdown` - Parent of dropdown menu
- `.dropdown-menu` - Dropdown submenu

### Components
- `.reveal` - Scroll reveal animation
- `.reveal-delay-1/2/3/4` - Staggered animations
- `.btn-primary` - Gold button
- `.btn-outline` - Outlined button
- `.btn-green` - Green button
- `.section-label` - Small uppercase label
- `.team-card` - Team member card
- `.stat-item` - Statistics display

## 🎯 JavaScript Functions (main.js)

### 1. Navbar Scroll Shadow
Adds shadow to navbar on scroll

### 2. Hamburger Menu
- Opens/closes mobile menu
- Locks body scroll when open
- Closes on backdrop click
- Closes on link click (except dropdown parents)

### 3. Mobile Dropdown Toggle
- Opens dropdown on click (mobile only)
- Prevents page refresh
- Closes other dropdowns

### 4. Scroll Reveal
- Animates elements on scroll
- Uses IntersectionObserver
- Threshold: 0.12

### 5. Stat Counter
- Animates numbers on scroll
- Duration: 1800ms
- Supports prefix/suffix

### 6. Active Nav Link
- Highlights current page in navigation

### 7. Newsletter Form
- Prevents default submission
- Shows success message
- Resets after 3 seconds

### 8. Social Icons (Mobile Only)
- Injects icons into sidebar
- Only on screens ≤768px
- Prevents desktop duplication

## 🏗️ HTML Structure Patterns

### Standard Page Template
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Page Title — Novel Breed Agric Ltd</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <!-- Topbar -->
  <!-- Navbar -->
  <!-- Page Content -->
  <!-- Footer -->
  <script src="main.js"></script>
</body>
</html>
```

### Team Card (Homepage)
```html
<div class="team-card reveal">
  <div class="team-card-img">
    <img src="images/photo.jpg" alt="Name" />
  </div>
  <div class="team-card-body">
    <h4>Full Name</h4>
    <div class="role">Position</div>
    <span class="credential">Credential · Experience</span>
  </div>
</div>
```

### Member Card (Team Page)
```html
<div class="member-card reveal">
  <div class="member-img">
    <img src="images/photo.jpg" alt="Name" />
  </div>
  <div class="member-body">
    <div class="member-role">Position</div>
    <h2>Full Name</h2>
    <div class="member-credentials">
      <span class="credential-tag">Tag 1</span>
      <span class="credential-tag">Tag 2</span>
    </div>
    <p>Bio paragraph 1</p>
    <p>Bio paragraph 2</p>
    <div class="member-stats">
      <div class="member-stat-item">
        <div class="num">20+</div>
        <div class="lbl">Label</div>
      </div>
    </div>
  </div>
</div>
```

## 🔄 Adding New Team Member

### 1. Homepage (index.html)
Add to `.team-grid`:
```html
<div class="team-card reveal reveal-delay-X">
  <div class="team-card-img">
    <img src="images/name.jpg" alt="Full Name" />
  </div>
  <div class="team-card-body">
    <h4>Full Name</h4>
    <div class="role">Position</div>
    <span class="credential">Credential · Experience</span>
  </div>
</div>
```

### 2. Team Page (team.html)
Add full profile card (see pattern above)

### 3. Update Grid (style.css)
If adding 6th member:
```css
.team-grid {
  grid-template-columns: repeat(6, 1fr);
}
```

## 🎨 Color Usage Guide

- **Green (#1B6B2F):** Primary buttons, headings, icons
- **Gold (#F5A623):** CTAs, accents, highlights
- **Dark (#1A1A1A):** Body text, headings
- **Gray (#666666):** Secondary text, descriptions
- **Off-white (#F7F4EF):** Section backgrounds

## 📝 Content Guidelines

### Headings
- H1: Page titles (48-60px)
- H2: Section titles (32-42px)
- H3: Card titles (20-28px)
- H4: Small titles (14-16px)

### Text
- Body: 15-16px
- Small: 13-14px
- Tiny: 11-12px

### Line Heights
- Headings: 1.1-1.2
- Body: 1.7-1.85
- Small: 1.5-1.6

## 🐛 Common Issues & Fixes

### Issue: Mobile menu not closing
**Fix:** Check hamburger and navLinks variables are defined

### Issue: Social icons showing on desktop
**Fix:** Verify window.innerWidth check in main.js (line 145)

### Issue: Dropdown not working on mobile
**Fix:** Check has-dropdown class and click event listener

### Issue: Images not loading
**Fix:** Verify image paths are relative to HTML file location

### Issue: Animations not triggering
**Fix:** Check reveal class and IntersectionObserver threshold

## 🔐 Security Notes

- Contact form uses Formspree (update endpoint before deployment)
- No sensitive data stored client-side
- All external links should use rel="noopener noreferrer"
- Implement rate limiting on contact form server-side

## 📊 Performance Tips

1. **Images:** Use WebP format, compress to <200KB
2. **CSS:** Minify before deployment
3. **JS:** Minify before deployment
4. **Fonts:** Use font-display: swap
5. **Lazy Loading:** Add loading="lazy" to images below fold

## 🔗 Important Links

- **ICAN:** https://www.icanig.org/
- **NAFDAC:** https://www.nafdac.gov.ng/
- **SON:** https://www.son.gov.ng/
- **ASAN:** Animal Science Association of Nigeria

## 📞 Contact Information

- **Email:** novelbreedagricltd@gmail.com
- **Phone 1:** 080 2686 9800
- **Phone 2:** 070 5742 3472
- **RC Number:** 1994829
- **HQ:** 7 Omotosho Street, Bankole Estate, Magboro, Ogun State
- **Factory:** Km 6, Old Lagos Rd, Podo, New Garage, Ibadan, Oyo State

---

**Last Updated:** January 2025
**Version:** 1.0
