# Requirements Document

## Introduction

This feature enhances the visual presentation of agent cards in the HeroSection component by reducing textual content and replacing text-based tool labels with professional icons. The goal is to create a more visually appealing, modern, and scannable interface while maintaining all essential information and existing animations.

## Glossary

- **Agent_Card**: A visual component displaying information about an AI agent, including name, description, workflows count, and integrated tools
- **Tool_Label**: Text representation of integrated tools (e.g., "CRM", "Email", "LinkedIn")
- **Tool_Icon**: Visual icon representation of integrated tools using lucide-react library
- **HeroSection**: The main landing section component containing agent cards for Emily and Shah
- **Card_Content**: The textual information displayed within an agent card (name, description, tag line)

## Requirements

### Requirement 1: Reduce Card Textual Content

**User Story:** As a user viewing the landing page, I want agent cards to be more concise and visually scannable, so that I can quickly understand the key information without reading lengthy text.

#### Acceptance Criteria

1. WHEN an agent card is displayed, THE HeroSection SHALL show a shortened description with maximum 60 characters
2. WHEN an agent card is displayed, THE HeroSection SHALL remove or significantly shorten the tag line text
3. WHEN card content is reduced, THE HeroSection SHALL maintain the card name unchanged
4. WHEN card content is reduced, THE HeroSection SHALL preserve the workflows count display
5. THE HeroSection SHALL maintain all existing framer-motion animations for cards with reduced content

### Requirement 2: Replace Tool Text Labels with Icons

**User Story:** As a user viewing the landing page, I want to see professional icons instead of text labels for tools, so that I can quickly recognize integrated tools through familiar visual symbols.

#### Acceptance Criteria

1. WHEN a tool label "CRM" is displayed, THE HeroSection SHALL render a Database icon from lucide-react
2. WHEN a tool label "Email" is displayed, THE HeroSection SHALL render a Mail icon from lucide-react
3. WHEN a tool label "LinkedIn" is displayed, THE HeroSection SHALL render a Linkedin icon from lucide-react
4. WHEN a tool label "Slack" is displayed, THE HeroSection SHALL render a MessageSquare icon from lucide-react
5. WHEN a tool label "X" is displayed, THE HeroSection SHALL render a Twitter icon from lucide-react
6. WHEN a tool label "Analytics" is displayed, THE HeroSection SHALL render a BarChart3 icon from lucide-react
7. WHEN a tool label "Helpdesk" is displayed, THE HeroSection SHALL render a LifeBuoy icon from lucide-react
8. WHEN a tool label "Knowledge Base" is displayed, THE HeroSection SHALL render a BookOpen icon from lucide-react
9. WHEN a tool label "Stripe" is displayed, THE HeroSection SHALL render a CreditCard icon from lucide-react
10. WHEN a tool label "QuickBooks" is displayed, THE HeroSection SHALL render a Calculator icon from lucide-react
11. WHEN a tool label "Sheets" is displayed, THE HeroSection SHALL render a Sheet icon from lucide-react
12. WHEN a tool label "Forms" is displayed, THE HeroSection SHALL render a FileText icon from lucide-react
13. WHEN a tool label "Calendar" is displayed, THE HeroSection SHALL render a Calendar icon from lucide-react

### Requirement 3: Maintain Icon Visual Consistency

**User Story:** As a user viewing the landing page, I want tool icons to be consistently sized and styled, so that the cards maintain a professional and cohesive appearance.

#### Acceptance Criteria

1. THE HeroSection SHALL render all tool icons with width and height of 14 pixels
2. THE HeroSection SHALL apply consistent stroke width of 2 to all tool icons
3. THE HeroSection SHALL apply muted-foreground color to all tool icons
4. WHEN a user hovers over a tool icon, THE HeroSection SHALL apply a scale transformation to 1.1
5. WHEN a user hovers over a tool icon, THE HeroSection SHALL change the icon color to primary color
6. THE HeroSection SHALL display tool icons in a horizontal flex layout with consistent gap spacing

### Requirement 4: Preserve Existing Card Functionality

**User Story:** As a user interacting with agent cards, I want all existing animations and hover effects to continue working, so that the enhanced cards maintain the same interactive experience.

#### Acceptance Criteria

1. WHEN a user hovers over an agent card, THE HeroSection SHALL apply the existing scale and vertical translation animations
2. WHEN an agent card is rendered, THE HeroSection SHALL apply the existing initial animation sequence with staggered delays
3. WHEN the page loads, THE HeroSection SHALL animate the card icon with the existing floating animation
4. THE HeroSection SHALL maintain all existing gradient overlays and shadow effects on cards
5. THE HeroSection SHALL preserve the existing card layout with 170px width and rounded-3xl styling

### Requirement 5: Maintain Responsive Design

**User Story:** As a user viewing the landing page on different devices, I want agent cards to remain visually appealing and functional, so that the enhanced design works across all screen sizes.

#### Acceptance Criteria

1. WHEN the viewport is mobile size, THE HeroSection SHALL display agent cards in a vertical stack layout
2. WHEN the viewport is desktop size, THE HeroSection SHALL display Emily's and Shah's agent sections side by side
3. THE HeroSection SHALL maintain the existing flex-wrap behavior for cards within each agent section
4. THE HeroSection SHALL preserve all existing responsive spacing and gap values
5. WHEN icons are displayed on mobile devices, THE HeroSection SHALL maintain the same icon size and spacing as desktop
