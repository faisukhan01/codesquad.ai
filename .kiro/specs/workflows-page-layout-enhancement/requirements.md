# Workflows Page Layout Enhancement

## Overview
Improve the visual layout and professionalism of the Workflows page by centering key headings and removing/replacing the emoji icon with a more professional approach.

## User Stories

### 1. Center Browse by Business Function Section
**As a** website visitor  
**I want** the "Browse by Business Function" heading and filter buttons to be centered  
**So that** the page looks more balanced and professional

### 2. Remove or Replace Emoji Icon
**As a** website visitor  
**I want** a professional icon instead of the 🔎 emoji (or no icon at all)  
**So that** the page maintains a consistent, professional design language

### 3. Center Featured Systems Section
**As a** website visitor  
**I want** the "FEATURED SYSTEMS" heading to be centered  
**So that** it matches the visual hierarchy and balance of the page

### 4. Center Functional System Suites Section
**As a** website visitor  
**I want** the "Functional System Suites" heading and description to be centered  
**So that** the page maintains consistent alignment throughout

## Acceptance Criteria

### 1.1 Browse Section Heading Centered
- The "Browse by Business Function" heading should be centered horizontally
- The emoji 🔎 should be removed OR replaced with a professional Lucide icon
- If using an icon, it should be properly styled and aligned with the text

### 1.2 Filter Buttons Centered
- The category filter buttons (All, Sales, Support, etc.) should be centered as a group
- Buttons should maintain their current styling and hover effects
- The layout should remain responsive on mobile devices

### 2.1 Featured Systems Heading Centered
- The "FEATURED SYSTEMS" heading should be centered horizontally
- Typography and styling should remain consistent with the current design

### 3.1 Functional System Suites Section Centered
- The "Functional System Suites" heading should be centered
- The description text "Deeply integrated workflows..." should also be centered
- Both elements should maintain proper spacing and readability

### 4.1 Responsive Design Maintained
- All centered elements should remain properly aligned on mobile, tablet, and desktop views
- Text should remain readable and not overflow on smaller screens
- Spacing should be consistent across all breakpoints

## Technical Notes
- Use Tailwind CSS utility classes for centering (text-center, mx-auto, justify-center)
- Consider using a Search icon from Lucide React if replacing the emoji
- Maintain existing motion animations and transitions
- Ensure accessibility is not compromised by layout changes
