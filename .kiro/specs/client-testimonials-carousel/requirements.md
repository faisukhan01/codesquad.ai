# Requirements Document

## Introduction

This feature replaces the existing TemplatesSection component with a new ClientTestimonialsSection component that displays client testimonials in an interactive 3D carousel format. The carousel will showcase 9 testimonials from various clients, displaying 3 cards at a time with a prominent center card and tilted side cards, creating an engaging and professional presentation.

## Glossary

- **ClientTestimonialsSection**: The React component that replaces TemplatesSection and displays client testimonials in a carousel format
- **Testimonial_Card**: An individual card component displaying a single client testimonial with name, source, and quote
- **Carousel**: The interactive component that manages the display and navigation of testimonial cards
- **Center_Card**: The currently focused testimonial card in the middle position, displayed straight/prominent
- **Side_Cards**: The testimonial cards on the left and right of the center card, displayed with a tilt effect
- **Navigation_Buttons**: The left and right arrow buttons that allow users to move between testimonials
- **Homepage**: The main Index page component where the testimonials section is rendered

## Requirements

### Requirement 1: Component Replacement

**User Story:** As a developer, I want to replace the TemplatesSection with ClientTestimonialsSection, so that the homepage displays client testimonials instead of skill templates.

#### Acceptance Criteria

1. THE ClientTestimonialsSection SHALL be created as a new React component file
2. WHEN the Homepage renders, THE ClientTestimonialsSection SHALL be imported and used in place of TemplatesSection
3. THE TemplatesSection component file SHALL remain in the codebase but not be used in the Homepage
4. THE ClientTestimonialsSection SHALL be positioned in the same location as TemplatesSection in the component hierarchy

### Requirement 2: Section Header

**User Story:** As a visitor, I want to see a clear heading for the testimonials section, so that I understand what content is being presented.

#### Acceptance Criteria

1. THE ClientTestimonialsSection SHALL display the heading "Don't just take our words for it, take theirs."
2. THE heading SHALL be styled consistently with other section headings on the Homepage
3. THE heading SHALL be centered above the carousel
4. THE heading SHALL be responsive and adjust appropriately for mobile devices

### Requirement 3: Testimonial Data Structure

**User Story:** As a developer, I want testimonials stored in a structured format, so that they can be easily maintained and rendered.

#### Acceptance Criteria

1. THE ClientTestimonialsSection SHALL define a testimonial data structure containing name, source, and quote fields
2. THE testimonial data SHALL include all 9 provided testimonials with accurate information
3. WHEN a testimonial source is LinkedIn or Upwork, THE source field SHALL indicate the platform
4. THE testimonial data SHALL be stored as a constant array within the component file

### Requirement 4: Carousel Display Configuration

**User Story:** As a visitor, I want to see 3 testimonial cards at once, so that I can view multiple testimonials while focusing on one.

#### Acceptance Criteria

1. THE Carousel SHALL display exactly 3 Testimonial_Cards simultaneously in the viewport
2. THE Center_Card SHALL be positioned in the middle of the viewport
3. THE Side_Cards SHALL be positioned on the left and right of the Center_Card
4. WHEN the viewport width is below tablet size, THE Carousel SHALL display only 1 card at a time

### Requirement 5: Card Visual Hierarchy

**User Story:** As a visitor, I want the center card to stand out, so that I can focus on reading one testimonial at a time.

#### Acceptance Criteria

1. THE Center_Card SHALL be displayed straight without rotation
2. THE Side_Cards SHALL be displayed with a tilt/rotation effect
3. THE Center_Card SHALL have higher visual prominence than Side_Cards through scale or opacity
4. WHEN a card transitions to the center position, THE card SHALL animate from tilted to straight
5. WHEN a card transitions from center to side position, THE card SHALL animate from straight to tilted

### Requirement 6: Navigation Controls

**User Story:** As a visitor, I want to navigate between testimonials using arrow buttons, so that I can view all testimonials at my own pace.

#### Acceptance Criteria

1. THE Carousel SHALL display Navigation_Buttons on both left and right sides
2. WHEN the left Navigation_Button is clicked, THE Carousel SHALL move to the previous testimonial
3. WHEN the right Navigation_Button is clicked, THE Carousel SHALL move to the next testimonial
4. WHEN the Carousel is at the first testimonial, THE left Navigation_Button SHALL be disabled or hidden
5. WHEN the Carousel is at the last testimonial, THE right Navigation_Button SHALL be disabled or hidden
6. THE Navigation_Buttons SHALL be positioned outside the card area for clear visibility

### Requirement 7: Carousel Animation

**User Story:** As a visitor, I want smooth transitions between testimonials, so that the experience feels polished and professional.

#### Acceptance Criteria

1. WHEN a Navigation_Button is clicked, THE Carousel SHALL animate the transition between cards
2. THE animation duration SHALL be between 300ms and 600ms for smooth perception
3. THE animation SHALL use easing functions for natural motion
4. WHEN animating, THE Center_Card SHALL transition its rotation and scale smoothly
5. WHEN animating, THE Side_Cards SHALL transition their rotation and scale smoothly

### Requirement 8: Testimonial Card Design

**User Story:** As a visitor, I want testimonial cards to be visually appealing, so that the section looks professional and trustworthy.

#### Acceptance Criteria

1. THE Testimonial_Card SHALL display the client name prominently
2. THE Testimonial_Card SHALL display the source platform (LinkedIn/Upwork) as a badge or label
3. THE Testimonial_Card SHALL display the testimonial quote text
4. THE Testimonial_Card SHALL use gradients, shadows, or other visual effects for depth
5. THE Testimonial_Card SHALL have rounded corners for a modern aesthetic
6. THE Testimonial_Card SHALL use appropriate padding and spacing for readability
7. THE Testimonial_Card SHALL have a minimum height to maintain consistent card sizes

### Requirement 9: Responsive Design

**User Story:** As a mobile visitor, I want the testimonials section to work well on my device, so that I can read testimonials comfortably.

#### Acceptance Criteria

1. WHEN the viewport width is below 768px, THE Carousel SHALL display 1 card at a time
2. WHEN the viewport width is 768px or above, THE Carousel SHALL display 3 cards at a time
3. THE Testimonial_Card text size SHALL be readable on mobile devices
4. THE Navigation_Buttons SHALL be appropriately sized and positioned for touch interaction on mobile
5. THE section padding and spacing SHALL adjust appropriately for different screen sizes

### Requirement 10: Accessibility

**User Story:** As a user with accessibility needs, I want to navigate testimonials using keyboard and screen readers, so that I can access the content.

#### Acceptance Criteria

1. THE Carousel SHALL support keyboard navigation using arrow keys
2. THE Navigation_Buttons SHALL have appropriate ARIA labels for screen readers
3. THE Testimonial_Cards SHALL have appropriate semantic HTML structure
4. WHEN a Testimonial_Card receives focus, THE card SHALL have visible focus indicators
5. THE Carousel SHALL have appropriate ARIA roles and properties for screen reader announcement

### Requirement 11: Integration with Existing UI

**User Story:** As a developer, I want the testimonials section to integrate seamlessly with existing components, so that the homepage maintains visual consistency.

#### Acceptance Criteria

1. THE ClientTestimonialsSection SHALL use the existing Carousel component from src/components/ui/carousel.tsx
2. THE ClientTestimonialsSection SHALL use Framer Motion for animations consistent with other sections
3. THE ClientTestimonialsSection SHALL use Tailwind CSS classes consistent with the existing design system
4. THE ClientTestimonialsSection SHALL use the same section padding and spacing as other Homepage sections
5. THE ClientTestimonialsSection SHALL use the background color consistent with the Homepage theme

### Requirement 12: Performance

**User Story:** As a visitor, I want the testimonials section to load quickly, so that I don't experience delays when viewing the page.

#### Acceptance Criteria

1. THE ClientTestimonialsSection SHALL render without blocking the initial page load
2. THE Carousel animations SHALL run at 60fps without jank on modern devices
3. THE component SHALL not cause layout shifts during initial render
4. WHEN navigating between testimonials, THE interaction SHALL feel immediate with no perceptible delay
