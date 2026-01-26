# Problem Statement
The spelling-bee application currently loads word puzzles from a static JSON file (`public/api/data.json`). This requires manual file editing to update puzzles and makes it difficult for non-technical users to manage content. We need to integrate Sanity CMS to enable easy puzzle management through a user-friendly interface.
# Current State

The application is a React + Vite project that:
* Fetches puzzle data from `/api/data.json` in `GameProvider.jsx` (line 30)
* Supports two puzzle states: "today" and "yesterday" based on routing
* Each puzzle contains: centerLetter, outerLetters, validLetters, pangrams, answers, maxPoints, displayWeekday, displayDate, printDate, id, and editor fields
* Uses React Context (GameProvider) to manage game state and distribute data to components
# Proposed Changes
## 1. Sanity Studio Setup
* Install Sanity CLI and dependencies (@sanity/client, @sanity/image-url)
* Create a new Sanity project or connect to existing one
* Initialize Sanity Studio in the project (typically in a `/sanity` or `/studio` directory)
* Configure Sanity project ID and dataset in environment variables
## 2. Schema Definition
Create a Sanity schema for spelling bee puzzles:
* Document type: `spellingBeePuzzle`
* Fields:
    * title (string) - for internal reference
    * displayWeekday (string)
    * displayDate (string)
    * printDate (date)
    * centerLetter (string, validation: single lowercase letter)
    * outerLetters (array of strings, validation: 6 lowercase letters)
    * pangrams (array of strings)
    * answers (array of strings)
    * maxPoints (number)
    * editor (string)
    * puzzleType (string) - "today" or "yesterday" or date-based
    * publishDate (datetime) - to determine which puzzle to show
## 3. Sanity Client Integration
Create a Sanity client utility (`src/utils/sanityClient.js`):
* Configure client with project ID, dataset, and API version
* Create helper functions to fetch puzzles:
    * `getCurrentPuzzle()` - fetches puzzle marked as "today" or most recent
    * `getYesterdayPuzzle()` - fetches previous puzzle
    * Consider date-based queries for better scalability
## 4. Update Data Fetching
Modify `src/contexts/GameProvider.jsx`:
* Replace fetch call to `/api/data.json` with Sanity client queries
* Update data mapping to match the new structure from Sanity
* Add proper error handling for Sanity API calls
* Maintain the same interface so components don't need changes
## 5. Environment Configuration
Create `.env` file:
* Add Sanity project ID
* Add dataset name (e.g., "production" or "development")
* Add API token if using private dataset
* Update `.gitignore` to exclude `.env` file
## 6. Content Migration
Migrate existing data from `data.json`:
* Create a migration script or manually add existing puzzles to Sanity Studio
* Ensure data structure matches the new schema
* Test with both existing puzzle sets
## 7. Testing & Validation
* Verify puzzle data loads correctly from Sanity
* Test both routes: "/" (today) and "/last-week" (yesterday)
* Ensure game functionality remains unchanged
* Verify score calculation and word validation still work
* Test with empty/missing data scenarios



Can you have a look att step 3, sanity client integration,  look in detailed-plan.md and help me