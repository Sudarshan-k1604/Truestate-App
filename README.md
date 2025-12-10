*BACKEND* 

## 1. Overview
This backend powers the TruEstate property search platform, providing REST APIs for listings, search, filtering, sorting, and pagination. It uses Express and MongoDB with a clean separation of controllers, services, and routes. All data processing and query logic are handled server-side for accuracy and performance.

## 2. Tech Stack
- Node.js  
- Express.js  
- MongoDB + Mongoose  
- dotenv  
- CORS  

## 3. Search Implementation Summary
Search is implemented using query parameters that match across fields such as title, location, and description. MongoDB regex and text-based search enable partial and case-insensitive matches. Search logic runs through the service layer to avoid duplication.

## 4. Filter Implementation Summary
Filters support numeric ranges (price, beds, baths, area) and categorical filters (property type, furnishing, status). The backend builds a dynamic Mongoose query object only from available parameters. Missing or conflicting filters are safely ignored or defaulted.

## 5. Sorting Implementation Summary
Sorting is controlled through `sortBy` and `order` query parameters. Supported sorting fields include price, size, and datePosted. Any unsupported sort parameter defaults to relevance or newest-first.

## 6. Pagination Implementation Summary
Pagination uses `page` and `limit` parameters. The backend returns paginated results along with metadata: total items, total pages, and current page. Defaults are applied for invalid or missing page inputs.

## 7. Setup Instructions
1. Navigate to the backend folder  
2. Install dependencies: `npm install`  
3. Create a `.env` file with `MONGO_URI` and `PORT`  
4. Start the server: `npm run dev`

 *FRONTEND* (PART)

## 1. Overview
The frontend is a React-based interface for browsing and searching real estate listings. It integrates with the backend API to perform search, filtering, sorting, and pagination. UI components are modular and optimized for responsiveness and clean state management.

## 2. Tech Stack
- React.js  
- React Router  
- Axios  
- CSS / TailwindCSS  
- Vite  

## 3. Search Implementation Summary
Search input is captured from the UI and passed to the backend through query parameters. On each search action, the component triggers an API call and updates results dynamically. Empty searches return all properties.

## 4. Filter Implementation Summary
Filters include price ranges, property types, furnishing, and other property attributes. Whenever filters change, a new API request is triggered with updated query parameters. The UI updates instantly while handling edge cases like missing values.

## 5. Sorting Implementation Summary
Sorting options such as price low-to-high or high-to-low map directly to backend `sortBy` and `order` parameters. The UI updates results based on the backend-sorted dataset without performing client-side sorting.

## 6. Pagination Implementation Summary
Pagination controls allow users to switch pages of results. The frontend sends `page` and `limit` to the backend and renders the returned set. Total pages and current page are displayed using backend metadata.

## 7. Setup Instructions
1. Navigate to the frontend folder  
2. Install dependencies: `npm install`  
3. Add backend API URL in `.env` (e.g., `VITE_API_URL=http://localhost:5000/api/v1`)  
4. Run the app: `npm run dev`
