import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './assets/css/fonts.css';
import './assets/css/index.css';
import './assets/css/variables.css';
// let urls = [];
// function findUrlOccurrences(urlPattern, obj) {
//   var occurrences = [];

//   // Helper function to check if a value is a string and matches the pattern
//   function checkValueForUrlPattern(value) {
//     if (typeof value === 'string' && value.match(urlPattern)) {
//       occurrences.push(value);
//     }
//   }

//   // Recursively search through the object
//   function searchObject(obj) {
//     if (Array.isArray(obj)) {
//       // If the value is an array, iterate through its elements
//       obj.forEach(function (item) {
//         if (typeof item === 'object' && item !== null) {
//           // If the element is an object or array, recursively search
//           searchObject(item);
//         } else {
//           // Otherwise, check if the value matches the pattern
//           checkValueForUrlPattern(item);
//         }
//       });
//     } else if (typeof obj === 'object' && obj !== null) {
//       // If the value is an object, iterate through its properties
//       for (var key in obj) {
//         if (obj.hasOwnProperty(key)) {
//           if (typeof obj[key] === 'object' && obj[key] !== null) {
//             // If the property value is an object or array, recursively search
//             searchObject(obj[key]);
//           } else {
//             // Otherwise, check if the value matches the pattern
//             checkValueForUrlPattern(obj[key]);
//           }
//         }
//       }
//     } else {
//       // If the value is neither an object nor an array, check if it matches the pattern
//       checkValueForUrlPattern(obj);
//     }
//   }

//   // Start the search from the top-level object
//   searchObject(obj);

//   // Return all occurrences of URL patterns found
//   return occurrences;
// }

// var urlPattern = /\.(png).*$/i;
// var occurrences = findUrlOccurrences(urlPattern, data);
// downloadUrls(occurrences, 'pngs.txt');
// var urlPattern = /\.(svg).*$/i;
// var occurrences = findUrlOccurrences(urlPattern, data);
// downloadUrls(occurrences, 'svgs.txt');
// var urlPattern = /\.(jpg).*$/i;
// var occurrences = findUrlOccurrences(urlPattern, data);
// downloadUrls(occurrences, 'jpg.txt');
// function downloadUrls(urls, filename) {
//   // Create a Blob containing the URLs separated by newline characters
//   var blob = new Blob([urls.join('\n')], { type: 'text/plain' });

//   // Create a temporary anchor element
//   var a = document.createElement('a');
//   a.href = window.URL.createObjectURL(blob);

//   // Set the filename
//   a.download = filename;

//   // Append the anchor element to the body
//   document.body.appendChild(a);

//   // Trigger a click event on the anchor element to start the download
//   a.click();

//   // Remove the anchor element from the body
//   document.body.removeChild(a);
// }

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
