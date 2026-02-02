import { createClient } from '@sanity/client';

// Create the Sanity client
// This connects to your Sanity project in the cloud
// Configuration comes from environment variables (see .env file)
export const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: import.meta.env.VITE_SANITY_DATASET,
  useCdn: true, // Set to false if statically generating pages, using ISR or using the token-based editor client
  apiVersion: '2024-01-01', // Use current date (YYYY-MM-DD) to target the latest API version
});

/**
 * Fetch the most recent puzzle (today)
 * @returns {Promise<Object|null>} - The most recent puzzle or null
 */
export async function getLatestPuzzle() {
  const query = `*[_type == "puzzle"] | order(printDate desc)[1]`;

  try {
    const puzzle = await client.fetch(query);
    return puzzle;
  } catch (error) {
    console.error('Error fetching latest puzzle:', error);
    return null;
  }
}

/**
 * Fetch the second-most-recent puzzle (yesterday / last week)
 * @returns {Promise<Object|null>} - The previous puzzle or null
 */
export async function getYesterdayPuzzle() {
  const query = `*[_type == "puzzle"] | order(printDate desc)[0]`;

  try {
    const puzzle = await client.fetch(query);
    return puzzle;
  } catch (error) {
    console.error('Error fetching yesterday puzzle:', error);
    return null;
  }
}
