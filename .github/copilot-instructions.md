# Copilot Instructions for DormMarketplaceApp

## Project Overview
- **React Native app** using Expo for a student marketplace (buy/sell/chat for dorms)
- Backend: **Supabase** (auth, storage, RLS policies, real-time messaging)
- Key folders: `components/`, `screens/`, `services/`, `context/`, `utils/`, `navigation/`

## Architecture & Data Flow
- **Screens** (in `screens/`) are entry points for user flows (e.g., `HomeScreen`, `ChatScreen`, `PlaceAdScreen`).
- **Components** (in `components/`) are reusable UI elements (e.g., `ProductCard`, `MessageBubble`).
- **Services** (in `services/`) handle API calls, Supabase integration, and business logic (e.g., `authService.js`, `productService.js`, `messageService.js`).
- **Context** (in `context/`) provides React Contexts for app-wide state (e.g., `UnreadContext.js`).
- **Navigation** is managed via `navigation/` (see `AppNavigator.js`, `TabNavigator.js`).
- **Database policies** are managed via SQL scripts in `scripts/` (see `setup-supabase-policies.sql`).

## Developer Workflows
- **Start app (Expo):** `npx expo start`
- **iOS build:** `npx expo run:ios`
- **Android build:** `npx expo run:android`
- **Run tests:** `npm test` (Jest, see `jest.config.js`)
- **Supabase DB policies:** Run SQL in `scripts/` via Supabase dashboard (see `scripts/README.md`)

## Project-Specific Conventions
- **Supabase:** All DB access via `services/` (never directly in components/screens)
- **Error handling:** Use error handler utilities in `utils/` (e.g., `appErrorHandler.js`, `authErrorHandler.js`)
- **Image loading:** Use `CachedImage` component for product images
- **Messaging:** Real-time chat via Supabase subscriptions (see `messageService.js`)
- **Testing:** Mocks in `__mocks__/`, unit tests in `__tests__/units/`, integration tests in `__tests__/integration/`
- **Environment config:** Use `supabaseConfig.js` for Supabase keys/URLs (never hardcode in code)

## Integration Points
- **Supabase:** Auth, storage, real-time (see `services/`)
- **Expo:** App runtime, build, and device integration
- **Yandex Ads:** Custom plugin in `plugins/withYandexAds.js` and `components/YandexBanner/`

## Examples
- To add a new screen: create in `screens/`, add to `navigation/AppNavigator.js`
- To add a new API call: add to appropriate file in `services/`, use in screen/component
- To update DB policies: edit `scripts/setup-supabase-policies.sql`, run via Supabase dashboard

## References
- See `scripts/README.md` for DB policy workflow
- See `jest.config.js` and `jest/` for test setup
- See `App.js` for app entry and root navigation

---
For any unclear patterns or missing documentation, ask for clarification or check referenced files.
