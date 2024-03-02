import Author from './author'; // Changed import statement to use default import syntax
import Post from './post'; // Changed import statement to use default import syntax
export { Post, Author }; // Added export for Author
export const schemaTypes = [Post, Author]; // Updated schemaTypes array
