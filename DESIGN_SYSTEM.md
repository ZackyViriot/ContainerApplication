# Design System for Container Rentals Application

## Overview
Modern, professional SaaS design system built with Tailwind CSS, featuring a cohesive sky blue and orange accent color scheme optimized for the waste management industry.

## Global Design Tokens

### Colors

**Primary (Sky Blue)**
- Used for: Navigation, primary actions, brand elements
- Tailwind classes: `primary-50` through `primary-950`
- Key shades:
  - `primary-50`: Light backgrounds, hover states
  - `primary-600`: Main brand color (buttons, icons, links)
  - `primary-700`: Hover states, active navigation
  - `primary-800/900`: Dark gradients, footer

**Accent (Orange)**
- Used for: Secondary CTAs, highlights, icons
- Tailwind classes: `accent-50` through `accent-900`
- Key shades:
  - `accent-500`: Icon backgrounds, badges
  - `accent-600`: Secondary buttons
  - `accent-700`: Button hover states

**Neutrals (Slate)**
- Text primary: `slate-900`
- Text secondary: `slate-700`
- Text muted: `slate-600`
- Borders: `slate-200`
- Backgrounds: `white`, `slate-50`

**Semantic Colors**
- Success: `green-600`
- Warning: `amber-500`
- Error: `red-600`
- Info: `blue-500`

### Typography

**Font Family**
```css
font-family: Inter, system-ui, -apple-system, sans-serif
```

**Heading Scale**
- H1: `text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight`
- H2: `text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight`
- H3: `text-2xl font-bold`
- H4: `text-xl font-semibold`
- H5: `text-lg font-semibold`
- H6: `text-base font-semibold`

**Body Text**
- Base: `text-base text-slate-700`
- Large: `text-xl text-slate-600`
- Small: `text-sm text-slate-600`
- Muted: `text-sm text-slate-500`

### Spacing & Layout

**Base Unit**: Tailwind's 4px scale (0.25rem increments)

**Section Padding**
- Large sections: `py-16` or `py-20`
- Medium sections: `py-12`
- Compact sections: `py-8`

**Component Padding**
- Cards: `p-6` (default), `p-8` (large)
- Buttons: `px-4 py-2` (sm), `px-6 py-2.5` (md), `px-8 py-3.5` (lg)
- Form inputs: `px-4 py-2`

**Gap/Spacing**
- Lists: `gap-4` or `space-y-4`
- Grids: `gap-6` or `gap-8`
- Inline elements: `space-x-2` through `space-x-4`

**Container**
- Max width: `max-w-7xl`
- Padding: `px-4`
- Centering: `mx-auto`

### Radius & Shadows

**Border Radius**
- Standard: `rounded-lg` (buttons, inputs, most components)
- Large: `rounded-xl` (cards, modals)
- Extra large: `rounded-2xl` (feature icons)
- Full: `rounded-full` (badges, pills)

**Shadow Scale**
- Subtle: `shadow-sm` (default cards)
- Medium: `shadow-md` (scroll state navigation)
- Large: `shadow-lg` (dropdowns, hover cards)
- None: No shadow for flat designs

## Component Library

### Buttons

**Purpose**: Primary interactive elements for user actions

**Structure**: Inline-flex container with icon support

**Variants**:

**Primary Button**
```tsx
<Button variant="primary" size="md">
  Get Free Quote
</Button>
```
Classes: `bg-primary-600 text-white hover:bg-primary-700 active:bg-primary-800 focus:ring-primary-500 shadow-sm hover:shadow-md`

**Secondary Button**
```tsx
<Button variant="secondary" size="md">
  Contact Us
</Button>
```
Classes: `bg-accent-600 text-white hover:bg-accent-700 active:bg-accent-800 focus:ring-accent-500 shadow-sm hover:shadow-md`

**Outline Button**
```tsx
<Button variant="outline" size="md">
  Learn More
</Button>
```
Classes: `border-2 border-primary-600 text-primary-700 hover:bg-primary-50 active:bg-primary-100 focus:ring-primary-500`

**Ghost Button**
```tsx
<Button variant="ghost" size="md">
  Cancel
</Button>
```
Classes: `text-slate-700 hover:bg-slate-100 active:bg-slate-200 focus:ring-slate-500`

**Sizes**:
- `sm`: `px-4 py-2 text-sm`
- `md`: `px-6 py-2.5 text-base`
- `lg`: `px-8 py-3.5 text-lg`

**States**:
- Default: Base variant styling
- Hover: Darker background, increased shadow
- Active: Even darker background
- Focus: Ring outline in brand color
- Disabled: `opacity-50 cursor-not-allowed`

### Cards

**Purpose**: Container for related content with consistent styling

**Structure**: White background with border and shadow

**Tailwind Classes**:
```html
<div class="bg-white rounded-xl border border-slate-200 shadow-sm p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
  <!-- Card content -->
</div>
```

**Variants**:
- Default: `p-6`
- Small: `p-4`
- Large: `p-8`
- No padding: `p-0`

**States**:
- Default: `shadow-sm`
- Hover: `shadow-lg -translate-y-1` (when hover prop is true)
- Click: Add `cursor-pointer` when onClick is provided

### Navigation (Header)

**Purpose**: Fixed top navigation with dual-bar design

**Structure**:
- Top bar: Brand color with contact info (40px height)
- Main nav: White with logo, links, and CTA (64px height)
- Total height: 106px

**Top Bar**:
```html
<div class="bg-primary-600 text-white h-10">
  <!-- Contact info -->
</div>
```

**Main Navigation**:
```html
<div class="bg-white border-b border-slate-200 h-16">
  <!-- Logo, nav links, CTA -->
</div>
```

**Logo**:
```html
<Link to="/" class="flex items-center space-x-3 group">
  <div class="bg-primary-600 p-2 rounded-lg group-hover:bg-primary-700">
    <Truck class="h-6 w-6 text-white" />
  </div>
  <div class="flex flex-col">
    <span class="text-lg font-bold text-slate-900">Container Rentals</span>
    <span class="text-xs text-slate-600 font-medium">Professional Waste Solutions</span>
  </div>
</Link>
```

**Navigation Links**:
- Default: `px-4 py-2 text-sm font-medium rounded-lg text-slate-700 hover:text-primary-700 hover:bg-slate-50`
- Active: `text-primary-700 bg-primary-50`

**Dropdown Menu**:
```html
<div class="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-lg border border-slate-200 py-2">
  <!-- Dropdown items -->
</div>
```

**Mobile Menu**:
- Breakpoint: `lg:` (1024px)
- Full-width overlay with slide-down animation
- Collapsible Services submenu

**Responsive Behavior**:
- Mobile (< 1024px): Hamburger menu, stacked links
- Desktop (>= 1024px): Horizontal navigation with dropdown

### Forms

**Input Fields**:
```html
<input class="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500" />
```

**Labels**:
```html
<label class="block text-sm font-medium text-slate-700 mb-2">Field Label</label>
```

**Error State**:
```html
<input class="border-red-500 focus:ring-red-500" />
<p class="mt-1 text-sm text-red-600">Error message</p>
```

**Disabled State**:
```html
<input class="opacity-50 cursor-not-allowed" disabled />
```

### Badges & Pills

**Purpose**: Small status indicators or category labels

**Structure**:
```html
<div class="inline-block px-4 py-2 bg-primary-50 rounded-full">
  <span class="text-sm font-bold text-primary-700 uppercase tracking-wide">Label</span>
</div>
```

### Icons

**Standard Size**: `h-5 w-5` or `h-6 w-6`

**Icon Containers**:
```html
<div class="bg-gradient-to-br from-primary-500 to-primary-600 p-5 rounded-2xl shadow-lg">
  <Icon class="h-10 w-10 text-white" />
</div>
```

## Page Layouts

### Homepage Hero

**Layout**: Full-width gradient background with content container

**Components Used**: Button (primary & outline), Icons, Badge

**Visual Hierarchy**:
1. Trust badge at top
2. Main heading (largest, boldest)
3. Subheading (lighter weight)
4. CTA buttons (prominent)
5. Feature cards (grid)

**Responsive Behavior**:
- Mobile: Single column, stacked CTAs
- Desktop: Single column with larger typography

### Services Section

**Layout**: Centered header with 3-column grid

**Components Used**: Section, Card, Button (ghost), Icons

**Visual Hierarchy**:
1. Section badge
2. Section heading
3. Description
4. Service cards (equal visual weight)

**Responsive Behavior**:
- Mobile: `grid-cols-1`
- Tablet: `md:grid-cols-2`
- Desktop: `md:grid-cols-3`

## Implementation Checklist

- [x] Add custom colors to Tailwind config
- [x] Implement Button component with all variants
- [x] Implement Card component with hover states
- [x] Build Header with dropdown navigation
- [x] Update Layout component for new header height
- [x] Modernize Hero component
- [x] Update ServicesGrid component
- [ ] Apply design system to remaining components
- [ ] Test responsive behavior across breakpoints
- [ ] Verify accessibility (focus states, ARIA labels)

## Design Principles

1. **Visual Consistency**: Every component uses the same color palette, spacing scale, and typography
2. **Micro-interactions**: Subtle animations on hover/focus (translate, shadow, color transitions)
3. **Hierarchy**: Clear visual distinction between primary and secondary actions
4. **Accessibility**: Sufficient color contrast, focus rings, semantic HTML
5. **Performance**: Minimal custom CSS, leverage Tailwind utilities

## Key Improvements

### Navigation
- **Before**: 9 top-level links, cluttered, hard to scan
- **After**: 5 main links with Services dropdown, clean hierarchy
- **Added**: Top bar with contact info, improved logo design
- **UX**: Hover-triggered dropdowns on desktop, click-triggered on mobile

### Color System
- **Before**: Inconsistent blue/orange usage
- **After**: Systematic primary (blue) and accent (orange) with clear usage rules
- **Benefit**: Unified brand identity, predictable styling

### Components
- **Before**: Basic styling, inconsistent shadows and radius
- **After**: Modern depth with layered shadows, consistent border-radius
- **Added**: Hover animations, active states, proper focus management

### Typography
- **Before**: Generic sizing
- **After**: Clear hierarchy with tracking adjustments, responsive scale
- **Benefit**: Better readability, professional polish
