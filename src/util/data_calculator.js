function analyzeConfidences(data) {
    // Function to find the highest confidence value
    const findHighestConfidence = (attributes) => {
      let highestKey = '';
      let highestValue = 0;
      Object.keys(attributes).forEach(key => {
        if (key !== '_id' && attributes[key] > highestValue) {
          highestValue = attributes[key];
          highestKey = key;
        }
      });
      return highestKey;
    };
  
    // Extract and process gender, race, and emotion data
    const gender = findHighestConfidence(data.gender);
    const race = findHighestConfidence(data.race);
    const emotion = findHighestConfidence(data.emotion);
  
    return { gender, race, emotion };
  }

  function analyzeMultipleConfidences(dataArray) {
    const summary = {
      totalObjects: dataArray.length,
      genderCounts: {},
      raceCounts: {},
      emotionCounts: {}
    };
  
    // Helper function to increment count in the summary
    const incrementCount = (category, key) => {
      if (!summary[category][key]) {
        summary[category][key] = 1;
      } else {
        summary[category][key]++;
      }
    };
  
    // Iterate over each data object
    dataArray.forEach(data => {
      // Determine the highest confidence for gender, race, and emotion
      const gender = findHighestConfidence(data.gender);
      const race = findHighestConfidence(data.race);
      const emotion = findHighestConfidence(data.emotion);
  
      // Increment counts
      incrementCount('genderCounts', gender);
      incrementCount('raceCounts', race);
      incrementCount('emotionCounts', emotion);
    });
  
    return summary;
  }
  
  // Helper function to find the highest confidence attribute
  function findHighestConfidence(attributes) {
    return Object.entries(attributes).reduce((acc, [key, value]) => {
      if (key !== '_id' && (acc.value === undefined || value > acc.value)) {
        acc.key = key;
        acc.value = value;
      }
      return acc;
    }, {}).key;
  }
  
  // Example usage with an array of objects
  const dataArray = [
    // Insert your array of objects here, each with the same structure as the previous example
  ];
  
  const summary = analyzeMultipleConfidences(dataArray);
  console.log(summary);
    
  // Sample data
  const data = {
    id: 'face_1710332446_1',
    age: 22,
    gender: {
      Woman: 7.709937542676926,
      Man: 92.29006171226501,
      _id: "ObjectId(\"660d2306f583524927c2023e\")"
    },
    race: {
      asian: 0.22866681683808565,
      indian: 0.03802126448135823,
      black: 0.003208838461432606,
      white: 91.6867733001709,
      'middle eastern': 2.2854581475257874,
      'latino hispanic': 5.757877975702286,
      _id: "ObjectId(\"660d2306f583524927c2023f\")"
    },
    emotion: {
      angry: 1.3241679407656193,
      disgust: 0.0011478049600555096,
      fear: 5.168922990560532,
      happy: 0.0031238450901582837,
      sad: 69.27685141563416,
      surprise: 0.00006205667659742176,
      neutral: 24.2257222533226,
      _id: "ObjectId(\"660d2306f583524927c20240\")"
    },
    timestamp: 1710332446.6744266,
    _id: "ObjectId(\"660d2306f583524927c2023d\")"
  };
  
  // Analyze and display the results
  const results = analyzeConfidences(data);
  console.log(results);
  