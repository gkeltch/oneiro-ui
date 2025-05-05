<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import data from "@/data/data.ts";

const moodColors = ref<string[]>([]);
// Loading state
const isLoading = ref(true);
// Error state
const error = ref<string | null>(null);
const moods = ref<string[]>(data.user.recentEmotions)

// Helper function to extract JSON from a string
function extractJsonFromString(str: string): string {
  // Try to find a JSON array in the string
  const match = str.match(/\[\s*"#[A-Fa-f0-9]{6}"\s*(?:,\s*"#[A-Fa-f0-9]{6}"\s*)*\]/);
  if (match) {
    return match[0];
  }

  // If no JSON array is found, return the original string
  return str;
}

// Function to convert moods to colors using AI
// This implementation provides options for both GPT and Gemini APIs
async function convertMoodsToColors() {
  try {
    isLoading.value = true;
    error.value = null;


    const GEMINI_API_KEY = "AIzaSyB1tsmTyXQWqArutfqboGzdtfOQAZP755M"; // Replace with your actual API key

    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: `Convert these moods into appropriate and complimentary hex color codes: ${moods.value.join(', ')}.
                       Respond with ONLY a JSON array of hex color codes in the format ["#XXXXXX", "#XXXXXX", "#XXXXXX"].`
              }
            ]
          }
        ],
        generationConfig: {
          temperature: 0.9
        }
      })
    });

    const data = await response.json();

    if (data.error) {
      throw new Error(data.error.message || 'Error calling Gemini API');
    }

    // Parse the response to extract the color codes
    const content = data.candidates[0].content.parts[0].text;
    console.log('Original content:', content);
    const jsonContent = extractJsonFromString(content);
    console.log('Extracted JSON:', jsonContent);
    const colors = JSON.parse(jsonContent);

    moodColors.value = colors;


    // TEMPORARY PLACEHOLDER until API keys are provided
    // This will be replaced with the actual API call when keys are available
    // const colors = [
    //   '#8FB8DE', // calm - light blue
    //   '#E6E6FA', // serene - lavender
    //   '#B0C4DE'  // slow - light steel blue
    // ];

    moodColors.value = colors;
  } catch (err) {
    console.error('Error converting moods to colors:', err);

    // Provide more specific error messages for JSON parsing errors
    if (err instanceof SyntaxError && err.message.includes('JSON')) {
      error.value = 'Failed to parse the color data from the API response. The response format might be unexpected.';
      console.error('JSON parsing error. Please check the response format:', err);
    } else {
      error.value = 'Failed to convert moods to colors. ' + (err instanceof Error ? err.message : '');
    }
  } finally {
    isLoading.value = false;
  }
}

// Computed property for the radial gradients style with colors in corners and center
const gradientStyle = computed(() => {
  if (moodColors.value.length === 0) {
    return {};
  }

  // Create radial gradients for corners and center
  const gradients = [];

  // Define positions for the 5 gradients (4 corners and center)
  const positions = [
    { x: 10, y: 10 },  // Top-left corner
    { x: 90, y: 10 },  // Top-right corner
    { x: 10, y: 90 },  // Bottom-left corner
    { x: 90, y: 90 },  // Bottom-right corner
    { x: 50, y: 50 }   // Center
  ];

  // Create the 5 radial gradients
  for (let i = 0; i < positions.length; i++) {
    // Use colors in sequence, repeating if needed
    const colorIndex = i % moodColors.value.length;
    const color = moodColors.value[colorIndex];

    // Position from the positions array
    const { x, y } = positions[i];

    // Center gradient is larger for visual emphasis
    const isCenter = (i === 4); // Last position is center
    const size = isCenter ? 30 : 25;

    // Smoother transition to transparency for better blending
    gradients.push(`radial-gradient(circle at ${x}% ${y}%, ${color} 0%, ${color} ${size}%, transparent ${size + 20}%)`);
  }

  // Add a base color (using the first color with low opacity as background)
  const baseColor = moodColors.value[0] ? `${moodColors.value[0]}33` : '#ffffff';

  return {
    background: `${baseColor}`,
    backgroundImage: gradients.join(', ')
  };
});

// Call the function when the component is mounted
onMounted(() => {
  convertMoodsToColors();
});

</script>

<template>
  <div class="chroma">
    <div class="container">
      <div class="gradient-background" :style="gradientStyle"></div>
      <div v-if="isLoading" class="loading">Loading mood colors...</div>
      <div v-else-if="error" class="error">{{ error }}</div>
      <div v-else class="mood-info">
        <div v-for="(mood, index) in moods" :key="index" class="mood-item">
          <span class="mood-name">{{ mood }}</span>
          <span class="mood-color" :style="{ backgroundColor: moodColors[index] }"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.chroma {
  position: absolute;
  height: 100%;
  width: 100%;
}

.title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.container {
  height: 100%;
  width: 100%;
  justify-self: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
}

.gradient-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  filter: blur(50px);
  z-index: 0;
}

</style>
