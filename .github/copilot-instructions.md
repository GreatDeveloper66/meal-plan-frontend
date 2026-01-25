# Meal Plan Frontend - AI Agent Instructions

## Architecture Overview
This is a React single-page application (SPA) built with TypeScript and Create React App. It follows a page-based routing structure for user onboarding, authentication, and meal planning features.

- **Routing**: Uses `react-router-dom` with routes defined in `src/app/Router.tsx`. Each route maps to a page component.
- **Layout**: `AppShell` component provides consistent layout with Tailwind-like utility classes (min-h-screen, flex, etc.) for full-height app structure.
- **Pages**: Located in `src/pages/`, each in its own folder with `Page.tsx` and `Page.module.css`. Examples: `DashboardPage`, `HubPage`, `LoginScreenPage`.
- **Components**: Reusable UI in `src/components/ui/` (e.g., `Card`, `Button`) and layout in `src/components/layout/`. All use CSS modules for styling.
- **Data**: Currently uses local state with dummy data. Placeholders like `// 🔹 Placeholder: fetch meal plan from backend` indicate future API integration points.

## Key Patterns
- **Component Structure**: Functional components with TypeScript interfaces. Props use destructuring (e.g., `export default function Card({ title, children }: CardProps)`).
- **Styling**: CSS modules imported as `styles` object (e.g., `import styles from "./Card.module.css"`). Apply with `className={styles.className}`.
- **State Management**: `useState` and `useEffect` for local state. Navigation via `useNavigate` from react-router-dom.
- **Types**: Define interfaces inline or at top of file (e.g., `type MealItem = { food: string; quantity: string; };`).
- **Testing**: Uses Jest with React Testing Library. Test files colocated with components/pages.

## Developer Workflows
- **Development**: `npm start` runs dev server on localhost:3000 with hot reload.
- **Testing**: `npm test` launches Jest in watch mode. Tests use `@testing-library/react` matchers.
- **Build**: `npm run build` creates optimized production build in `build/` folder.
- **Debugging**: Use browser dev tools. No custom debug setup beyond CRA defaults.

## Conventions
- **File Naming**: PascalCase for components/pages (e.g., `DashboardPage.tsx`), camelCase for folders/files (e.g., `dashboard-page.module.css`).
- **Imports**: Relative paths from src (e.g., `import Card from "../../components/ui/Card/Card"`).
- **Backend Integration**: Mark API calls with placeholder comments. Expect RESTful endpoints for user data, meal plans, groceries.
- **User Flow**: Follow UX diagram in `uxdiagram.md` - registration steps, login, hub navigation to dashboard features.

## Examples
- Adding a new page: Create folder in `src/pages/`, add route in `Router.tsx`, import and render in `Routes`.
- Styling: Define styles in `.module.css`, apply via `styles` object. Use custom properties for consistency (e.g., colors, shadows in `Card.module.css`).
- Data Fetching: Use `useEffect` for async calls, set state on success (see `DashboardPage.tsx` for pattern).</content>
<parameter name="filePath">c:\Users\ashaf\Coding\Web_App\meal-plan-project\meal-plan-frontend\.github\copilot-instructions.md