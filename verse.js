// Collection of inspirational Quran verses
const quranVerses = [
  {
    verse: "Indeed, with hardship comes ease. Indeed, with hardship comes ease.",
    reference: "Quran 94:5-6"
  },
  {
    verse: "And when My servants ask you concerning Me - indeed I am near. I respond to the invocation of the supplicant when he calls upon Me.",
    reference: "Quran 2:186"
  },
  {
    verse: "And whoever relies upon Allah - then He is sufficient for him.",
    reference: "Quran 65:3"
  },
  {
    verse: "So verily, with the hardship, there is relief. Verily, with the hardship, there is relief.",
    reference: "Quran 94:5-6"
  },
  {
    verse: "Allah does not burden a soul beyond that it can bear.",
    reference: "Quran 2:286"
  },
  {
    verse: "And whoever is conscious of Allah... He will make a way for him to get out of every difficulty and will provide him from where he does not expect.",
    reference: "Quran 65:4"
  },
  {
    verse: "Indeed, Allah is with the patient.",
    reference: "Quran 2:153"
  },
  {
    verse: "And He found you lost and guided you.",
    reference: "Quran 93:7"
  },
  {
    verse: "So remember Me; I will remember you.",
    reference: "Quran 2:152"
  },
  {
    verse: "For indeed, with hardship will be ease. Indeed, with hardship will be ease.",
    reference: "Quran 94:5-6"
  },
  {
    verse: "And your Lord says, 'Call upon Me; I will respond to you.'",
    reference: "Quran 40:60"
  },
  {
    verse: "My mercy encompasses all things.",
    reference: "Quran 7:156"
  },
  {
    verse: "And it may be that you dislike a thing which is good for you and that you like a thing which is bad for you. Allah knows but you do not know.",
    reference: "Quran 2:216"
  },
  {
    verse: "And whoever puts all his trust in Allah, He will be enough for him.",
    reference: "Quran 65:3"
  },
  {
    verse: "Be patient; indeed, the promise of Allah is truth.",
    reference: "Quran 30:60"
  },
  {
    verse: "Indeed, Allah will not change the condition of a people until they change what is in themselves.",
    reference: "Quran 13:11"
  },
  {
    verse: "And seek help through patience and prayer.",
    reference: "Quran 2:153"
  },
  {
    verse: "The help of Allah is near.",
    reference: "Quran 2:214"
  },
  {
    verse: "And whoever fears Allah - He will make for him a way out. And will provide for him from where he does not expect.",
    reference: "Quran 65:2-3"
  },
  {
    verse: "So which of the favors of your Lord would you deny?",
    reference: "Quran 55:13"
  },
  // First set of 20 additional verses
  {
    verse: "And We have already created man and know what his soul whispers to him, and We are closer to him than his jugular vein.",
    reference: "Quran 50:16"
  },
  {
    verse: "Say, 'O My servants who have transgressed against themselves, do not despair of the mercy of Allah. Indeed, Allah forgives all sins.'",
    reference: "Quran 39:53"
  },
  {
    verse: "And We will surely test you with something of fear and hunger and a loss of wealth and lives and fruits, but give good tidings to the patient.",
    reference: "Quran 2:155"
  },
  {
    verse: "And when you have decided, then rely upon Allah. Indeed, Allah loves those who rely upon Him.",
    reference: "Quran 3:159"
  },
  {
    verse: "And whoever holds firmly to Allah has indeed been guided to a straight path.",
    reference: "Quran 3:101"
  },
  {
    verse: "And Allah would not punish them while they seek forgiveness.",
    reference: "Quran 8:33"
  },
  {
    verse: "And whoever does righteous deeds, whether male or female, while being a believer - those will enter Paradise and will not be wronged, even as much as the speck on a date seed.",
    reference: "Quran 4:124"
  },
  {
    verse: "Indeed, the patient will be given their reward without account.",
    reference: "Quran 39:10"
  },
  {
    verse: "And whoever is grateful - his gratitude is only for himself. And whoever is ungrateful - then indeed, my Lord is Free of need and Generous.",
    reference: "Quran 27:40"
  },
  {
    verse: "And whoever purifies himself only purifies himself for the benefit of his soul.",
    reference: "Quran 35:18"
  },
  {
    verse: "And whoever does an atom's weight of good will see it, and whoever does an atom's weight of evil will see it.",
    reference: "Quran 99:7-8"
  },
  {
    verse: "And your Lord is going to give you, and you will be satisfied.",
    reference: "Quran 93:5"
  },
  {
    verse: "And We have certainly made the Quran easy for remembrance, so is there any who will remember?",
    reference: "Quran 54:17"
  },
  {
    verse: "And Allah wants to lighten for you your difficulties; and mankind was created weak.",
    reference: "Quran 4:28"
  },
  {
    verse: "And whoever obeys Allah and His Messenger has certainly achieved a great achievement.",
    reference: "Quran 33:71"
  },
  {
    verse: "And whoever is guided is only guided for the benefit of himself.",
    reference: "Quran 17:15"
  },
  {
    verse: "And Allah is the best of providers.",
    reference: "Quran 62:11"
  },
  {
    verse: "And Allah is with the believers.",
    reference: "Quran 8:19"
  },
  {
    verse: "And Allah is the best of planners.",
    reference: "Quran 3:54"
  },
  {
    verse: "And whoever is conscious of Allah... He will make a way for him to get out of every difficulty and will provide him from where he does not expect.",
    reference: "Quran 65:4"
  },
  // Second set of 20 additional verses (all new)
  {
    verse: "Verily, in the remembrance of Allah do hearts find rest.",
    reference: "Quran 13:28"
  },
  {
    verse: "And We have not sent you, [O Muhammad], except as a mercy to the worlds.",
    reference: "Quran 21:107"
  },
  {
    verse: "And whoever is mindful of Allah, He will make his matters easy for him.",
    reference: "Quran 65:4"
  },
  {
    verse: "And hold firmly to the rope of Allah all together and do not become divided.",
    reference: "Quran 3:103"
  },
  {
    verse: "And whoever submits his face to Allah while being a doer of good, then he has grasped the most trustworthy handhold.",
    reference: "Quran 31:22"
  },
  {
    verse: "And establish prayer. Indeed, prayer prohibits immorality and wrongdoing.",
    reference: "Quran 29:45"
  },
  {
    verse: "And speak to people good words.",
    reference: "Quran 2:83"
  },
  {
    verse: "And do not walk upon the earth exultantly. Indeed, you will never tear the earth, and you will never reach the mountains in height.",
    reference: "Quran 17:37"
  },
  {
    verse: "And do not turn your cheek [in contempt] toward people and do not walk through the earth exultantly. Indeed, Allah does not like everyone self-deluded and boastful.",
    reference: "Quran 31:18"
  },
  {
    verse: "And spend in the way of Allah and do not throw yourselves with your own hands into destruction. And do good; indeed, Allah loves the doers of good.",
    reference: "Quran 2:195"
  },
  {
    verse: "And let not those who disbelieve ever think that Our giving them time is better for them. We only give them time that they may increase in sin, and for them is a humiliating punishment.",
    reference: "Quran 3:178"
  },
  {
    verse: "And be moderate in your pace and lower your voice; indeed, the most disagreeable of sounds is the voice of donkeys.",
    reference: "Quran 31:19"
  },
  {
    verse: "And the servants of the Most Merciful are those who walk upon the earth easily, and when the ignorant address them, they say words of peace.",
    reference: "Quran 25:63"
  },
  {
    verse: "And those who, when they spend, are neither extravagant nor stingy, but are ever moderate between them.",
    reference: "Quran 25:67"
  },
  {
    verse: "And those who do not testify to falsehood, and when they pass near ill speech, they pass by with dignity.",
    reference: "Quran 25:72"
  },
  {
    verse: "And those who, when reminded of the verses of their Lord, do not fall upon them deaf and blind.",
    reference: "Quran 25:73"
  },
  {
    verse: "And those who say, 'Our Lord, grant us from among our wives and offspring comfort to our eyes and make us an example for the righteous.'",
    reference: "Quran 25:74"
  },
  {
    verse: "And those will be rewarded with the highest place [in Paradise] because of what they patiently endured, and they will be received therein with greetings and [words of] peace.",
    reference: "Quran 25:75"
  },
  {
    verse: "And if you obey most of those upon the earth, they will mislead you from the way of Allah.",
    reference: "Quran 6:116"
  },
  {
    verse: "And We have not sent you except comprehensively to mankind as a bringer of good tidings and a warner. But most of the people do not know.",
    reference: "Quran 34:28"
  }
];

// Function to get a random verse from the collection
function getRandomQuranVerse() {
  const quoteTextElement = document.querySelector('.quote-text');
  const quoteAuthorElement = document.querySelector('.quote-author');
  
  // Get a random verse from the collection
  const randomIndex = Math.floor(Math.random() * quranVerses.length);
  const randomVerse = quranVerses[randomIndex];
  
  // Update the quote elements
  quoteTextElement.textContent = randomVerse.verse;
  quoteAuthorElement.textContent = `- ${randomVerse.reference}`;
}

// Initialize when the DOM is loaded
document.addEventListener('DOMContentLoaded', getRandomQuranVerse);
  