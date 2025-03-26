// Gemini API integration for Quran verses
let GEMINI_API_KEY;

// Try to get API key from different sources
if (typeof process !== 'undefined' && process.env && process.env.GEMINI_API_KEY) {
  GEMINI_API_KEY = process.env.GEMINI_API_KEY;
} else if (typeof window !== 'undefined' && window.ENV && window.ENV.GEMINI_API_KEY) {
  GEMINI_API_KEY = window.ENV.GEMINI_API_KEY;
} else {
  // Fallback to a hardcoded key (not recommended for production)
  GEMINI_API_KEY = "YOUR_GEMINI_API_KEY_HERE";
}

const GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent";

// Function to fetch a random Quran verse using Gemini API
async function fetchRandomQuranVerse() {
  const quoteTextElement = document.querySelector('.quote-text');
  const quoteAuthorElement = document.querySelector('.quote-author');
  
  // Show loading state
  quoteTextElement.textContent = "Loading verse...";
  quoteAuthorElement.textContent = "";
  
  try {
    const prompt = `
      Please provide a random verse from the Quran with the following requirements:
      1. It must be an authentic verse from the Quran
      2. Include the exact verse text in English translation
      3. Include the chapter (Surah) number and verse number in format "Quran [chapter]:[verse]"
      4. Keep the verse relatively short (1-3 sentences)
      5. Choose a verse that is inspirational, meaningful, or provides wisdom
      6. IMPORTANT: Each time you're asked, select a DIFFERENT verse - do not repeat verses you've provided before
      7. DO NOT select verse 2:256 about "no compulsion in religion" as it's been overused
      8. Only return the verse text and reference, nothing else
      9. Format your response exactly like this example:
         {"verse": "And when My servants ask you concerning Me - indeed I am near. I respond to the invocation of the supplicant when he calls upon Me.", "reference": "Quran 2:186"}
    `;

    const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: prompt
          }]
        }],
        generationConfig: {
          temperature: 0.9,  // Add randomness
          topK: 40,
          topP: 0.95
        }
      })
    });

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const data = await response.json();
    const generatedText = data.candidates[0].content.parts[0].text;
    
    // Parse the JSON response from Gemini
    try {
      // Extract JSON from the response (in case Gemini adds extra text)
      const jsonMatch = generatedText.match(/\{.*\}/s);
      if (!jsonMatch) throw new Error("No JSON found in response");
      
      const verseData = JSON.parse(jsonMatch[0]);
      
      // Update the quote elements
      quoteTextElement.textContent = verseData.verse;
      quoteAuthorElement.textContent = `- ${verseData.reference}`;
      
      // Save to localStorage to avoid too many API calls
      localStorage.setItem('quranVerse', JSON.stringify({
        verse: verseData.verse,
        reference: verseData.reference,
        timestamp: Date.now()
      }));
    } catch (parseError) {
      console.error('Error parsing Gemini response:', parseError);
      fallbackToDefaultVerse();
    }
  } catch (error) {
    console.error('Error fetching Quran verse:', error);
    fallbackToDefaultVerse();
  }
}

// Fallback function if API fails
function fallbackToDefaultVerse() {
  const quoteTextElement = document.querySelector('.quote-text');
  const quoteAuthorElement = document.querySelector('.quote-author');
  
  quoteTextElement.textContent = "And when My servants ask you concerning Me - indeed I am near. I respond to the invocation of the supplicant when he calls upon Me.";
  quoteAuthorElement.textContent = "- Quran 2:186";
}

// Check if we should fetch a new verse or use cached one
function getQuranVerse() {
  const cachedVerse = localStorage.getItem('quranVerse');
  
  if (cachedVerse) {
    const verseData = JSON.parse(cachedVerse);
    const currentTime = Date.now();
    const thirtyMinutes = 30 * 60 * 1000; // 30 minutes in milliseconds
    
    // If the cached verse is less than 30 minutes old, use it
    if (currentTime - verseData.timestamp < thirtyMinutes) {
      const quoteTextElement = document.querySelector('.quote-text');
      const quoteAuthorElement = document.querySelector('.quote-author');
      
      quoteTextElement.textContent = verseData.verse;
      quoteAuthorElement.textContent = `- ${verseData.reference}`;
      return;
    }
  }
  
  // Otherwise fetch a new verse
  fetchRandomQuranVerse();
}

// Initialize when the DOM is loaded
document.addEventListener('DOMContentLoaded', getQuranVerse);

// Refresh verse every half hour (default setting)
setInterval(getQuranVerse, 30 * 60 * 1000); // Every 30 minutes

// Other refresh interval options (commented out):
// setInterval(getQuranVerse, 60 * 60 * 1000); // Every hour
// setInterval(getQuranVerse, 60 * 1000);     // Every minute
// setInterval(getQuranVerse, 10 * 1000);     // Every 10 seconds
