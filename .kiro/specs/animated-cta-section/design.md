# Design Document: Animated CTA Section

## Overview

This design transforms the existing CTA section from a simple text-and-button layout into an engaging, animated showcase featuring a carousel of agent cards. The implementation leverages Framer Motion for smooth animations and Tailwind CSS for styling, maintaining consistency with the existing design system.

The key visual elements include:
- A gradient background (light blue to purple)
- Centered heading and CTA button
- An animated carousel of 5 agent cards with 3D rotating icons
- Pastel-colored cards with floating animations
- Responsive layout adapting to different screen sizes

## Architecture

### Component Structure

```
CTASection (Updated)
├── Heading Section
│   ├── Title Text
│   └── CTA Button
└── AgentCardCarousel (New)
    └── AgentCard[] (5 instances)
        ├── Rotating Icon
        ├── Title
        ├── Description
        └── Skill Badges[]
```

### File Changes

**Modified Files:**
- `src/components/CTASection.tsx` - Complete redesign with carousel
- `src/pages/Index.tsx` - Remove VideoSection import and usage

**No New Files Required:**
- All functionality will be implemented within the updated CTASection component

### Animation Architecture

The animation system uses Framer Motion with three layers:
1. **Viewport Animations**: Fade-in effects when section enters view
2. **Carousel Animations**: Scale and position transitions for cards
3. **Continuous Animations**: Floating and rotating effects for visual interest

## Components and Interfaces

### AgentCard Data Structure

```typescript
interface AgentCardData {
  icon: string;           // Emoji or icon character
  title: string;          // Agent name
  description: string;    // Brief description
  skills: string[];       // Array of skill names
  colorClass: string;     // Tailwind class for background color
}
```

### Agent Card Data

The carousel will display 5 predefined agent cards:

1. **Code Assistant**
   - Icon: 💻
   - Description: "Helps write, review, and debug code"
   - Skills: ["TypeScript", "React", "Python"]
   - Color: Blue (agent-card-blue)

2. **Data Analyst**
   - Icon: 📊
   - Description: "Analyzes data and generates insights"
   - Skills: ["SQL", "Analytics", "Visualization"]
   - Color: Green (agent-card-green)

3. **Content Writer**
   - Icon: ✍️
   - Description: "Creates engaging content and copy"
   - Skills: ["Writing", "SEO", "Editing"]
   - Color: Amber (agent-card-amber)

4. **Design Helper**
   - Icon: 🎨
   - Description: "Assists with UI/UX design tasks"
   - Skills: ["Figma", "Design Systems", "Prototyping"]
   - Color: Coral (agent-card-coral)

5. **DevOps Engineer**
   - Icon: 🚀
   - Description: "Manages deployments and infrastructure"
   - Skills: ["Docker", "CI/CD", "AWS"]
   - Color: Teal (agent-card-teal)

### CTASection Component Structure

```typescript
const CTASection = () => {
  // Agent card data array
  const agentCards: AgentCardData[] = [...];
  
  return (
    <section className="gradient-background">
      {/* Heading and Button */}
      <motion.div>
        <h2>Create your first agent today</h2>
        <button>Start for free</button>
      </motion.div>
      
      {/* Agent Card Carousel */}
      <div className="carousel-container">
        {agentCards.map((card, index) => (
          <AgentCard 
            key={index}
            data={card}
            index={index}
            isCenter={index === 2}
          />
        ))}
      </div>
    </section>
  );
};
```

### AgentCard Component Structure

```typescript
const AgentCard = ({ 
  data, 
  index, 
  isCenter 
}: {
  data: AgentCardData;
  index: number;
  isCenter: boolean;
}) => {
  return (
    <motion.div
      className={`agent-card ${data.colorClass}`}
      animate={{
        scale: isCenter ? 1.1 : 0.9,
        y: [0, -10, 0], // Floating animation
      }}
    >
      {/* Rotating Icon */}
      <motion.div
        animate={{ rotateY: [0, 360] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        {data.icon}
      </motion.div>
      
      {/* Content */}
      <h3>{data.title}</h3>
      <p>{data.description}</p>
      
      {/* Skill Badges */}
      <div className="skills">
        {data.skills.map(skill => (
          <span key={skill} className="skill-badge">
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
};
```

## Data Models

### AgentCardData Interface

```typescript
interface AgentCardData {
  icon: string;           // Emoji character for the agent icon
  title: string;          // Display name of the agent
  description: string;    // Short description (max ~50 characters)
  skills: string[];       // Array of 2-4 skill names
  colorClass: string;     // Tailwind CSS class name for background
}
```

**Constraints:**
- `icon`: Single emoji character
- `title`: 2-20 characters
- `description`: 30-60 characters
- `skills`: 2-4 items, each 3-15 characters
- `colorClass`: Must be one of the predefined agent-card-* classes

## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system—essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*


### Property 1: Agent card renders all required elements

*For any* valid AgentCardData object, when rendered as an AgentCard component, the output should contain an icon element, a title element with the correct text, a description element with the correct text, and skill badge elements for each skill in the data.

**Validates: Requirements 3.1, 3.2, 3.3, 3.4**

### Property 2: Agent cards have unique color classes

*For any* set of agent cards in the carousel, each card should have a color class from the predefined set (agent-card-blue, agent-card-green, agent-card-amber, agent-card-coral, agent-card-teal), and no two adjacent cards should have the same color class.

**Validates: Requirements 2.2, 5.1, 5.2, 5.3, 5.4, 5.5, 8.3**

### Property 3: Card styling includes rounded corners and shadows

*For any* rendered AgentCard component, the card element should have CSS classes that apply rounded corners and shadow effects.

**Validates: Requirements 3.5**

### Property 4: Cards have floating animation properties

*For any* rendered AgentCard component, the motion component should have animation properties that include vertical (y-axis) movement values.

**Validates: Requirements 4.1**

### Property 5: Icons have 3D rotation animation

*For any* rendered AgentCard component, the icon element should be wrapped in a motion component with rotateY animation properties that cycle from 0 to 360 degrees.

**Validates: Requirements 4.2**

### Property 6: Cards have viewport fade-in animation

*For any* rendered AgentCard component, the component should have viewport animation properties configured to fade in when entering the viewport.

**Validates: Requirements 4.5**

### Property 7: Component uses Tailwind CSS classes

*For any* element in the CTASection component, the className prop should contain valid Tailwind CSS utility class patterns (e.g., classes starting with common prefixes like 'flex', 'grid', 'text-', 'bg-', 'p-', 'm-', etc.).

**Validates: Requirements 8.1**

## Error Handling

### Invalid Agent Card Data

**Scenario**: AgentCardData with missing or invalid fields

**Handling**:
- Use TypeScript interfaces to enforce data structure at compile time
- Provide default values for optional fields
- Log warnings in development mode for malformed data

```typescript
const defaultAgentCard: AgentCardData = {
  icon: '🤖',
  title: 'Agent',
  description: 'A helpful agent',
  skills: ['General'],
  colorClass: 'agent-card-blue'
};
```

### Animation Performance

**Scenario**: Animations causing performance issues on low-end devices

**Handling**:
- Use Framer Motion's `useReducedMotion` hook to respect user preferences
- Implement `will-change` CSS property for animated elements
- Use `transform` and `opacity` for animations (GPU-accelerated)

```typescript
const shouldReduceMotion = useReducedMotion();

const animationProps = shouldReduceMotion 
  ? {} 
  : { animate: { y: [0, -10, 0] } };
```

### Missing Color Classes

**Scenario**: Referenced color class doesn't exist in CSS

**Handling**:
- Fallback to a default color class
- Validate color classes against a predefined set
- Log warning in development mode

```typescript
const validColorClasses = [
  'agent-card-blue',
  'agent-card-green', 
  'agent-card-amber',
  'agent-card-coral',
  'agent-card-teal'
];

const colorClass = validColorClasses.includes(data.colorClass)
  ? data.colorClass
  : 'agent-card-blue';
```

## Testing Strategy

### Dual Testing Approach

This feature will use both unit tests and property-based tests to ensure comprehensive coverage:

**Unit Tests** will focus on:
- Specific examples of component rendering
- Integration between CTASection and AgentCard components
- Edge cases like empty skill arrays or long text
- Verification that VideoSection is removed from Index page

**Property Tests** will focus on:
- Universal properties that hold for all valid agent card data
- Comprehensive input coverage through randomization
- Validation of component structure across all possible inputs

### Property-Based Testing Configuration

**Library**: We will use `@fast-check/vitest` for property-based testing in this TypeScript/React project.

**Configuration**:
- Each property test will run a minimum of 100 iterations
- Tests will generate random AgentCardData objects with varying:
  - Icon characters (emojis)
  - Title lengths (2-20 characters)
  - Description lengths (30-60 characters)
  - Skill arrays (2-4 items)
  - Color classes (from valid set)

**Test Tagging**:
Each property-based test will include a comment tag referencing the design property:
```typescript
// Feature: animated-cta-section, Property 1: Agent card renders all required elements
```

### Unit Testing Strategy

**Test Cases**:
1. CTASection renders with correct heading text
2. CTASection renders "Start for free" button
3. CTASection renders exactly 5 agent cards
4. Center card (index 2) has scale 1.1
5. Non-center cards have scale 0.9
6. VideoSection is not present in Index page
7. Index page maintains correct section order
8. Carousel has horizontal scroll on mobile
9. Button maintains existing styling classes
10. Framer Motion components are used for animations

**Testing Tools**:
- Vitest for test runner
- React Testing Library for component testing
- jsdom for DOM simulation

### Integration Testing

**Scenarios**:
1. Full page render with CTASection included
2. Responsive behavior at different viewport sizes
3. Animation lifecycle from mount to unmount
4. Interaction between carousel cards

### Visual Regression Testing

While not automated in this spec, visual regression testing should be performed manually:
- Compare rendered output against design screenshot
- Verify gradient colors match specification
- Confirm card spacing and alignment
- Validate animation smoothness and timing
