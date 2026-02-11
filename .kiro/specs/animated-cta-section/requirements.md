# Requirements Document

## Introduction

This feature updates the CTA (Call-to-Action) section of the landing page to include an animated card carousel showcasing different agent types. The update transforms a simple text-and-button CTA into an engaging, visually rich section with animated agent cards that demonstrate the variety of agents users can create. Additionally, the VideoSection component will be removed from the page as it is no longer needed.

## Glossary

- **CTA_Section**: The call-to-action component that encourages users to create their first agent
- **Agent_Card**: A visual card component representing a specific agent type with icon, title, description, and skill badges
- **Card_Carousel**: An animated horizontal display of multiple agent cards with 3D rotation effects
- **VideoSection**: The existing video demonstration component that will be removed from the page
- **Framer_Motion**: The animation library used for implementing motion effects
- **Skill_Badge**: A small pill-shaped UI element displaying a skill or capability of an agent

## Requirements

### Requirement 1: Update CTA Section Visual Design

**User Story:** As a visitor, I want to see an attractive gradient background in the CTA section, so that the section stands out and draws my attention.

#### Acceptance Criteria

1. THE CTA_Section SHALL display a gradient background transitioning from light blue to purple
2. THE CTA_Section SHALL center the heading "Create your first agent today"
3. THE CTA_Section SHALL display a "Start for free" button below the heading
4. THE CTA_Section SHALL maintain responsive padding and spacing across different screen sizes

### Requirement 2: Implement Animated Card Carousel

**User Story:** As a visitor, I want to see animated agent cards in the CTA section, so that I can understand the variety of agents available.

#### Acceptance Criteria

1. WHEN the CTA section is displayed, THE Card_Carousel SHALL show 5 agent cards
2. THE Card_Carousel SHALL display cards with different pastel background colors (yellow, pink, blue, orange, green)
3. THE Card_Carousel SHALL position the center card larger and more prominent than surrounding cards
4. WHEN a card is in the center position, THE Card_Carousel SHALL scale it to 1.1x size
5. WHEN a card is not in the center position, THE Card_Carousel SHALL scale it to 0.9x size

### Requirement 3: Agent Card Structure and Content

**User Story:** As a visitor, I want each agent card to display relevant information, so that I can understand what each agent type does.

#### Acceptance Criteria

1. THE Agent_Card SHALL display a 3D rotating icon at the top
2. THE Agent_Card SHALL display an agent title below the icon
3. THE Agent_Card SHALL display a description text below the title
4. THE Agent_Card SHALL display skill badges at the bottom
5. WHEN an Agent_Card is rendered, THE Agent_Card SHALL apply rounded corners and subtle shadows

### Requirement 4: Card Animation Effects

**User Story:** As a visitor, I want the agent cards to have smooth animations, so that the interface feels polished and engaging.

#### Acceptance Criteria

1. THE Agent_Card SHALL implement a floating animation that moves vertically
2. WHEN the icon is displayed, THE Agent_Card SHALL rotate the icon in 3D space continuously
3. THE Card_Carousel SHALL implement smooth transitions when cards change position
4. THE Card_Carousel SHALL use Framer_Motion for all animation effects
5. WHEN a card enters the viewport, THE Card_Carousel SHALL fade in the card with a stagger effect

### Requirement 5: Card Color Variants

**User Story:** As a visitor, I want each agent card to have a distinct color, so that I can visually differentiate between agent types.

#### Acceptance Criteria

1. THE Agent_Card SHALL support a yellow pastel background variant
2. THE Agent_Card SHALL support a pink pastel background variant
3. THE Agent_Card SHALL support a blue pastel background variant
4. THE Agent_Card SHALL support an orange pastel background variant
5. THE Agent_Card SHALL support a green pastel background variant
6. WHEN an Agent_Card is hovered, THE Agent_Card SHALL enhance its shadow effect

### Requirement 6: Remove VideoSection Component

**User Story:** As a developer, I want the VideoSection component removed from the page, so that the page structure matches the new design requirements.

#### Acceptance Criteria

1. WHEN the Index page is rendered, THE Index page SHALL NOT include the VideoSection component
2. THE Index page SHALL maintain all other existing sections in their current order
3. THE VideoSection component file SHALL remain in the codebase for potential future use

### Requirement 7: Responsive Layout

**User Story:** As a visitor on any device, I want the CTA section to display properly, so that I have a good experience regardless of screen size.

#### Acceptance Criteria

1. WHEN viewed on mobile devices, THE Card_Carousel SHALL display cards in a scrollable horizontal layout
2. WHEN viewed on tablet devices, THE Card_Carousel SHALL display 3 visible cards
3. WHEN viewed on desktop devices, THE Card_Carousel SHALL display all 5 cards
4. THE CTA_Section SHALL adjust padding and font sizes based on screen breakpoints

### Requirement 8: Integration with Existing Styles

**User Story:** As a developer, I want the new CTA section to use existing design tokens, so that the design remains consistent with the rest of the application.

#### Acceptance Criteria

1. THE CTA_Section SHALL use Tailwind CSS utility classes for styling
2. THE CTA_Section SHALL use existing CSS custom properties from the theme
3. THE Agent_Card SHALL use the existing agent-card color classes defined in index.css
4. THE CTA_Section SHALL maintain the existing button styling patterns
