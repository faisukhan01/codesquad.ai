# Design Document: Services Page

## Overview

The Services page is a new dedicated page component that showcases the company's six AI software service offerings. The page follows the established design patterns from the home page, including the hero gradient background, card-based layouts, and smooth animations. The implementation leverages React with TypeScript, React Router for navigation, Framer Motion for animations, Tailwind CSS for styling, and Lucide React for icons.

The page structure consists of three main sections:
1. **Hero Section**: Introduces the services with a compelling headline and description
2. **Services Grid Section**: Displays six service cards in a responsive grid layout
3. **Navigation Integration**: Updates the Navbar to include a link to the Services page

## Architecture

### Component Hierarchy

```
Services (Page Component)
├── Navbar (Reused)
├── ServicesHeroSection (New)
│   ├── Heading with highlighted "AI" text
│   ├── Subheading
│   └── Description
├── ServicesSection (New)
│   ├── Section Title
│   ├── Section Description
│   └── ServicesGrid
│       └── ServiceCard × 6 (New)
│           ├── Icon Container
│           ├── Service Name
│           ├── Service Description
│           └── Learn More Link
└── Footer (Reused)
```

### Routing Architecture

The application uses React Router v6 for client-side routing. The new Services page will be added as a route in `App.tsx`:

```typescript
<Route path="/services" element={<Services />} />
```

The Navbar component will be updated to include a navigation link that uses React Router's `Link` component for client-side navigation without full page reloads.

### State Management

The Services page is primarily presentational and does not require complex state management. The only stateful behavior is:
- Navbar mobile menu toggle (already implemented)
- Hover states managed by CSS and Framer Motion

Service data will be defined as a static array of objects within the component, following the same pattern used in `UseCasesSection.tsx`.

## Components and Interfaces

### Services Page Component

**File**: `src/pages/Services.tsx`

**Purpose**: Main page component that composes the Services page layout

**Structure**:
```typescript
const Services = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <ServicesHeroSection />
      <ServicesSection />
      <Footer />
    </div>
  );
};
```

### ServicesHeroSection Component

**File**: `src/components/ServicesHeroSection.tsx`

**Purpose**: Displays the hero section with heading, subheading, and description

**Props**: None (static content)

**Key Features**:
- Uses Framer Motion for entrance animations
- Applies the `hero-gradient` class for background styling
- Highlights "AI" text in primary blue color
- Matches typography and spacing from home page HeroSection

**Animation Pattern**:
```typescript
initial={{ opacity: 0, y: 40 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
```

### ServicesSection Component

**File**: `src/components/ServicesSection.tsx`

**Purpose**: Displays the services grid with title, description, and service cards

**Props**: None (static content)

**Service Data Structure**:
```typescript
interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
  bgColor: string;      // Tailwind background color class
  iconColor: string;    // Tailwind text color class
}
```

**Service Data Array**:
```typescript
const services: Service[] = [
  {
    title: "Generative AI",
    description: "Automate customer support and improve engagement with intelligent conversational agents.",
    icon: Brain,
    bgColor: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    title: "Predictive Analytics",
    description: "Use machine learning models to forecast trends and business outcomes.",
    icon: TrendingUp,
    bgColor: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    title: "Process Automation",
    description: "Streamline repetitive tasks and optimize workflows using AI-driven automation.",
    icon: Workflow,
    bgColor: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    title: "Computer Vision",
    description: "Harness AI to analyze and process visual data, from facial recognition to object detection.",
    icon: Eye,
    bgColor: "bg-yellow-100",
    iconColor: "text-yellow-600",
  },
  {
    title: "NLP (Data Engineering)",
    description: "Unlock text and voice understanding with AI models tailored to your business.",
    icon: FileText,
    bgColor: "bg-red-100",
    iconColor: "text-red-600",
  },
  {
    title: "Custom AI Software",
    description: "End-to-end development of tailored AI applications integrated into your systems.",
    icon: Code,
    bgColor: "bg-purple-100",
    iconColor: "text-purple-600",
  },
];
```

**Grid Layout**:
- Desktop (lg): 3 columns (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`)
- Tablet (md): 2 columns
- Mobile: 1 column
- Gap: 4 units (`gap-4`)

### ServiceCard Component

**Approach**: Inline rendering within ServicesSection (not a separate component file)

**Rendering Pattern**:
```typescript
{services.map((service, index) => (
  <motion.div
    key={service.title}
    className="bg-card rounded-xl p-6 border border-border/30 cursor-pointer group hover:shadow-lg transition-shadow"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ delay: index * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    whileHover={{ y: -6, transition: { duration: 0.25 } }}
  >
    {/* Icon container */}
    <div className={`w-12 h-12 rounded-xl ${service.bgColor} flex items-center justify-center mb-4`}>
      <service.icon className={`w-6 h-6 ${service.iconColor}`} />
    </div>
    
    {/* Service name */}
    <h3 className="text-lg font-bold text-foreground mb-2">{service.title}</h3>
    
    {/* Service description */}
    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{service.description}</p>
    
    {/* Learn More link */}
    <a href="#" className="text-sm font-medium text-primary hover:underline">
      Learn More →
    </a>
  </motion.div>
))}
```

**Hover Effects**:
- Card translates up by 6px (`y: -6`)
- Shadow increases (`hover:shadow-lg`)
- Transition duration: 250ms
- Icon container scales up slightly (optional enhancement)

### Navbar Updates

**File**: `src/components/Navbar.tsx`

**Changes Required**:
1. Import `Link` from `react-router-dom`
2. Replace the disabled "Service" span with an active Link
3. Add active state styling for the Services link

**Updated Navigation Links**:
```typescript
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const isServicesActive = location.pathname === "/services";
  
  return (
    // ... existing code
    <Link 
      to="/" 
      className="text-[13px] font-medium text-foreground transition-colors duration-200"
    >
      Home
    </Link>
    <Link 
      to="/services"
      className={`text-[13px] font-medium transition-colors duration-200 ${
        isServicesActive 
          ? "text-foreground" 
          : "text-muted-foreground hover:text-foreground"
      }`}
    >
      Services
    </Link>
    // ... rest of navigation
  );
};
```

## Data Models

### Service Interface

```typescript
interface Service {
  title: string;           // Service name (e.g., "Generative AI")
  description: string;     // Service description text
  icon: LucideIcon;       // Lucide React icon component
  bgColor: string;        // Tailwind background color class for icon container
  iconColor: string;      // Tailwind text color class for icon
}
```

**Validation Rules**:
- `title`: Non-empty string, max 50 characters
- `description`: Non-empty string, max 200 characters
- `icon`: Valid Lucide React icon component
- `bgColor`: Valid Tailwind background color class
- `iconColor`: Valid Tailwind text color class

### Route Configuration

The application routing is defined in `App.tsx`:

```typescript
<Routes>
  <Route path="/" element={<Index />} />
  <Route path="/services" element={<Services />} />
  <Route path="*" element={<NotFound />} />
</Routes>
```

## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system—essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*


### Property 1: Services Page Responsive Layout

*For any* viewport width (mobile, tablet, desktop), the Services page grid layout should adapt appropriately, displaying the correct number of columns for that viewport size without horizontal overflow.

**Validates: Requirements 1.4, 4.4**

### Property 2: Service Card Completeness

*For any* service card rendered on the page, the card should display all required elements: service name as a heading, service description text, an icon with colored background, and a "Learn More" link.

**Validates: Requirements 5.7, 5.8, 5.9, 7.7**

### Property 3: Service Card Hover Interactions

*For any* service card, when a hover event occurs, the card should translate upward and display enhanced visual feedback (shadow or other styling changes) without causing layout shift.

**Validates: Requirements 7.3, 7.4, 10.1, 10.5**

### Property 4: Link Hover Feedback

*For any* "Learn More" link within a service card, when a hover event occurs, the link should display a visual change (color change or underline).

**Validates: Requirements 10.3**

### Property 5: Keyboard Accessibility

*For any* interactive element on the Services page (links, buttons), the element should be keyboard accessible (focusable via Tab key) and display a visible focus state when focused.

**Validates: Requirements 9.3, 9.4**

### Property 6: Icon Accessibility

*For any* icon displayed in a service card, the icon should have appropriate accessibility attributes (aria-label or role) to ensure screen reader compatibility.

**Validates: Requirements 9.2**

### Property 7: Color Contrast Compliance

*For any* text element on the Services page, the color contrast ratio between the text and its background should meet WCAG AA standards (minimum 4.5:1 for normal text, 3:1 for large text).

**Validates: Requirements 9.6**

## Error Handling

### Navigation Errors

**Scenario**: User attempts to navigate to `/services` but the route is not properly configured

**Handling**:
- React Router will fall through to the catch-all `*` route
- NotFound component will render
- User sees a 404 page with navigation options

**Prevention**: Ensure route is properly defined in `App.tsx` before the catch-all route

### Component Rendering Errors

**Scenario**: Service data is malformed or missing required properties

**Handling**:
- TypeScript type checking will catch missing properties at compile time
- Runtime: Use optional chaining and default values
- Example: `service?.title ?? "Untitled Service"`

**Prevention**: 
- Define strict TypeScript interfaces for Service data
- Validate service data structure at development time
- Use ESLint rules to enforce type safety

### Icon Loading Errors

**Scenario**: Lucide React icon fails to import or render

**Handling**:
- Fallback to a default icon or placeholder
- Log error to console for debugging
- Ensure graceful degradation

**Prevention**:
- Import all required icons at the top of the file
- Verify icon names match Lucide React exports
- Use TypeScript to catch import errors at compile time

### Animation Performance Issues

**Scenario**: Animations cause performance degradation on low-end devices

**Handling**:
- Framer Motion automatically optimizes animations
- Use `will-change` CSS property sparingly
- Respect `prefers-reduced-motion` media query

**Prevention**:
- Test on various devices and browsers
- Use hardware-accelerated properties (transform, opacity)
- Avoid animating layout properties (width, height, margin)

## Testing Strategy

### Dual Testing Approach

The Services page feature will be validated using both unit tests and property-based tests:

**Unit Tests**: Focus on specific examples, edge cases, and integration points
- Verify specific service card content (e.g., "Generative AI" card displays correct description)
- Test navigation link click behavior
- Test route rendering at specific viewport sizes
- Verify presence of Navbar and Footer components
- Test hover state transitions complete within expected timeframe

**Property-Based Tests**: Verify universal properties across all inputs
- Test responsive layout behavior across a range of viewport widths
- Verify all service cards display required elements
- Test hover interactions don't cause layout shift
- Verify keyboard accessibility for all interactive elements
- Test color contrast ratios meet WCAG standards

### Property-Based Testing Configuration

**Library**: fast-check (for TypeScript/JavaScript property-based testing)

**Configuration**:
- Minimum 100 iterations per property test
- Each test tagged with feature name and property reference
- Tag format: `Feature: services-page, Property {number}: {property_text}`

**Example Test Structure**:
```typescript
import fc from 'fast-check';

describe('Services Page Properties', () => {
  it('Property 1: Services Page Responsive Layout', () => {
    // Feature: services-page, Property 1: Responsive layout adapts to viewport
    fc.assert(
      fc.property(
        fc.integer({ min: 320, max: 1920 }), // viewport width
        (viewportWidth) => {
          // Test that layout adapts correctly
          // No horizontal overflow
          // Correct number of columns
        }
      ),
      { numRuns: 100 }
    );
  });
});
```

### Unit Testing Focus Areas

1. **Component Rendering**:
   - Services page renders with all sections
   - Navbar includes Services link
   - Footer is present at bottom

2. **Content Verification**:
   - Hero section displays correct heading, subheading, description
   - "AI" text is highlighted in blue
   - Section title and description are present
   - Exactly 6 service cards render
   - Each specific service card displays correct content

3. **Navigation**:
   - Clicking Services link navigates to `/services`
   - Active state is applied when on Services page
   - Route is properly configured in App.tsx

4. **Styling**:
   - Hero section has `hero-gradient` class
   - Service cards have rounded corners
   - Hover animations complete within 200-300ms

5. **Accessibility**:
   - Heading hierarchy is correct (h1, h2, h3)
   - Links have proper href attributes
   - Icons have aria-labels

### Integration Testing

**Scenario**: Full page navigation flow
1. User starts on home page
2. User clicks Services link in Navbar
3. Services page renders
4. User scrolls to view all service cards
5. User hovers over cards to see interactions
6. User clicks Learn More link (future: navigates to service detail)

**Scenario**: Responsive behavior
1. Render page at desktop width (1920px)
2. Verify 3-column grid layout
3. Resize to tablet width (768px)
4. Verify 2-column grid layout
5. Resize to mobile width (375px)
6. Verify 1-column layout

### Testing Tools

- **Vitest**: Test runner and assertion library
- **React Testing Library**: Component testing utilities
- **fast-check**: Property-based testing library
- **@testing-library/user-event**: User interaction simulation
- **@testing-library/jest-dom**: Custom matchers for DOM assertions

### Test Coverage Goals

- Component rendering: 100%
- Navigation logic: 100%
- Accessibility attributes: 100%
- Responsive layout: Test at 3+ viewport sizes
- Property-based tests: Minimum 100 iterations each
