// Add this to handle extension-specific storage
chrome.storage.sync.get(['deathYear', 'isMuted', 'locale', 'searchEngine'], (result) => {
  if (result.deathYear) {
    deathYear = result.deathYear;
  }
  if (result.isMuted !== undefined) {
    isMuted = result.isMuted;
  }
  if (result.locale) {
    locale = result.locale;
  }
  if (result.searchEngine) {
    currentSearchEngine = result.searchEngine;
    searchEngineIcon.src = result.searchEngine.icon;
  }
  
  // Initialize the clock
  drawClockFaces();
  rotateClockFaces();
}); 