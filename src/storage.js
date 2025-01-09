// Utility functions to handle local storage

/**
 * Set an item in local storage.
 * @param {string} key - The key under which the item is stored.
 * @param {*} value - The value to store (will be converted to JSON).
 */
export function setItem(key, value) {

   if (typeof value === 'object') {

      localStorage.setItem(key, JSON.stringify(value)); // Convert objects or arrays to JSON string

   } else {

      localStorage.setItem(key, value); // Store string value directly

   };

};

/**
* Get an item from local storage.
* @param {string} key - The key of the item to retrieve.
* @param {*} defaultValue - The default value to return if the key is not found.
* @returns {any} - The parsed item from local storage or defaultValue.
*/
export function getItem(key, defaultValue) {
   const value = localStorage.getItem(key);

   if (value) {

      try {

         return JSON.parse(value); // Attempt to parse as JSON

      } catch (e) {

         console.error('Could not parse JSON from local storage', e);

      };

   };

   return defaultValue; // Return the default value if the key does not exist or parsing fails

};

/**
* Remove an item from local storage.
* @param {string} key - The key of the item to remove.
*/
export function removeItem(key) {

   localStorage.removeItem(key); // Remove the item by its key

};

/**
* Clear the entire local storage.
*/
export function clearStorage() {

   localStorage.clear(); // Remove all items from local storage

};