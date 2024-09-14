import React, { useState } from 'react';
import { FaPlay, FaStop, FaRedo } from 'react-icons/fa'; // Importing play, stop, and redo icons

// Define genre and mood images
const images: { [key: string]: string } = {
  'Pop-Happy': '/pop-happy.jpg',
  'Pop-Sad': '/pop-sad.jpg',
  'Pop-Energetic': '/pop-energetic.jpg',
  'Pop-Relaxed': '/pop-relaxed.jpg',
  'Pop-Melancholic': '/pop-melancholic.jpg',
  'Pop-Excited': '/pop-excited.jpg',
  'Pop-Calm': '/pop-calm.jpg',
  
  'Rock-Happy': '/rock-happy.jpg',
  'Rock-Sad': '/rock-sad.jpg',
  'Rock-Energetic': '/rock-energetic.jpg',
  'Rock-Relaxed': '/rock-relaxed.jpg',
  'Rock-Melancholic': '/rock-melancholic.jpg',
  'Rock-Excited': '/rock-excited.jpg',
  'Rock-Calm': '/rock-calm.jpg',
  
  'Jazz-Happy': '/jazz-happy.jpg',
  'Jazz-Sad': '/jazz-sad.jpg',
  'Jazz-Energetic': '/jazz-energetic.jpg',
  'Jazz-Relaxed': '/jazz-relaxed.jpg',
  'Jazz-Melancholic': '/jazz-melancholic.jpg',
  'Jazz-Excited': '/jazz-excited.jpg',
  'Jazz-Calm': '/jazz-calm.jpg',

  'Classical-Happy': '/classical-happy.jpg',
  'Classical-Sad': '/classical-sad.jpg',
  'Classical-Energetic': '/classical-energetic.jpg',
  'Classical-Relaxed': '/classical-relaxed.jpg',
  'Classical-Melancholic': '/classical-melancholic.jpg',
  'Classical-Excited': '/classical-excited.jpg',
  'Classical-Calm': '/classical-calm.jpg',

  'Hip Hop-Happy': '/hiphop-happy.jpg',
  'Hip Hop-Sad': '/hiphop-sad.jpg',
  'Hip Hop-Energetic': '/hiphop-energetic.jpg',
  'Hip Hop-Relaxed': '/hiphop-relaxed.jpg',
  'Hip Hop-Melancholic': '/hiphop-melancholic.jpg',
  'Hip Hop-Excited': '/hiphop-excited.jpg',
  'Hip Hop-Calm': '/hiphop-calm.jpg',

  'Electronic-Happy': '/electronic-happy.jpg',
  'Electronic-Sad': '/electronic-sad.jpg',
  'Electronic-Energetic': '/electronic-energetic.jpg',
  'Electronic-Relaxed': '/electronic-relaxed.jpg',
  'Electronic-Melancholic': '/electronic-melancholic.jpg',
  'Electronic-Excited': '/electronic-excited.jpg',
  'Electronic-Calm': '/electronic-calm.jpg',

  'Country-Happy': '/country-happy.jpg',
  'Country-Sad': '/country-sad.jpg',
  'Country-Energetic': '/country-energetic.jpg',
  'Country-Relaxed': '/country-relaxed.jpg',
  'Country-Melancholic': '/country-melancholic.jpg',
  'Country-Excited': '/country-excited.jpg',
  'Country-Calm': '/country-calm.jpg',

  'Reggae-Happy': '/reggae-happy.jpg',
  'Reggae-Sad': '/reggae-sad.jpg',
  'Reggae-Energetic': '/reggae-energetic.jpg',
  'Reggae-Relaxed': '/reggae-relaxed.jpg',
  'Reggae-Melancholic': '/reggae-melancholic.jpg',
  'Reggae-Excited': '/reggae-excited.jpg',
  'Reggae-Calm': '/reggae-calm.jpg',

  'Blues-Happy': '/blues-happy.jpg',
  'Blues-Sad': '/blues-sad.jpg',
  'Blues-Energetic': '/blues-energetic.jpg',
  'Blues-Relaxed': '/blues-relaxed.jpg',
  'Blues-Melancholic': '/blues-melancholic.jpg',
  'Blues-Excited': '/blues-excited.jpg',
  'Blues-Calm': '/blues-calm.jpg',

  'Metal-Happy': '/metal-happy.jpg',
  'Metal-Sad': '/metal-sad.jpg',
  'Metal-Energetic': '/metal-energetic.jpg',
  'Metal-Relaxed': '/metal-relaxed.jpg',
  'Metal-Melancholic': '/metal-melancholic.jpg',
  'Metal-Excited': '/metal-excited.jpg',
  'Metal-Calm': '/metal-calm.jpg',
};


const genres = [
  'Pop',
  'Rock',
  'Jazz',
  'Classical',
  'Hip Hop',
  'Electronic',
  'Country',
  'Reggae',
  'Blues',
  'Metal',
];

const moods = [
  'Happy',
  'Sad',
  'Energetic',
  'Relaxed',
  'Melancholic',
  'Excited',
  'Calm',
];

const MusicGenerator: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [generatedMusic, setGeneratedMusic] = useState<string | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleGenerateMusic = () => {
    if (selectedGenre && selectedMood) {
      setGeneratedMusic(`Generated music for: ${inputValue}${selectedGenre ? ` in ${selectedGenre}` : ''}${selectedMood ? ` with mood ${selectedMood}` : ''}`);
      setSidebarOpen(true);
    } else {
      alert('Please select both genre and mood.');
    }
  };

  const handlePlayMusic = () => {
    // Logic to play music
  };

  const handleStopMusic = () => {
    // Logic to stop music
  };

  const handleReplayMusic = () => {
    // Logic to replay music
  };

  const imageKey = selectedGenre && selectedMood ? `${selectedGenre}-${selectedMood}` : '';
  const genreMoodImage = imageKey ? images[imageKey] : '';

  return (
    <div
      className="relative min-h-screen flex flex-col items-center"
      style={{
        backgroundImage: 'url(/bg2.jpg)', // Path to the image in the public folder
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <h1 className="text-3xl font-bold mb-6 text-white">Music Generator</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-3xl">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter musical theme or idea"
          className="w-full p-4 border border-gray-300 rounded mb-4"
        />
        <div className="mb-4">
          <p className="text-lg font-semibold mb-2">Select Genre:</p>
          <div className="flex flex-wrap gap-2">
            {genres.map((genre) => (
              <button
                key={genre}
                onClick={() => setSelectedGenre(genre)}
                className={`p-3 border rounded-md transition-colors duration-300 ease-in-out ${
                  selectedGenre === genre
                    ? 'bg-black text-white'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
              >
                {genre}
              </button>
            ))}
          </div>
        </div>
        <div className="mb-4">
          <p className="text-lg font-semibold mb-2">Select Mood:</p>
          <div className="flex flex-wrap gap-2">
            {moods.map((mood) => (
              <button
                key={mood}
                onClick={() => setSelectedMood(mood)}
                className={`p-3 border rounded-md transition-colors duration-300 ease-in-out ${
                  selectedMood === mood
                    ? 'bg-black text-white'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
              >
                {mood}
              </button>
            ))}
          </div>
        </div>
        <button
          onClick={handleGenerateMusic}
          className="w-full bg-black text-white py-2 px-4 rounded-lg shadow-md hover:bg-red-700 transition duration-300"
        >
          Generate Music
        </button>
        {generatedMusic && (
          <div className="mt-4 p-4 bg-green-100 text-green-800 rounded-lg">
            {generatedMusic}
          </div>
        )}
      </div>

      {sidebarOpen && (
        <div className="fixed top-0 right-0 w-1/3 h-full bg-gray-800 text-white shadow-lg flex flex-col transition-transform duration-300 transform translate-x-0">
          <button
            onClick={() => setSidebarOpen(false)}
            className="self-end text-xl mb-4 p-2"
          >
            &times;
          </button>
          <div className="flex flex-col w-full h-full">
            {genreMoodImage && (
              <div className="flex-1 bg-cover bg-center" style={{ backgroundImage: `url(${genreMoodImage})` }}>
                {/* The image takes up half of the sidebar */}
              </div>
            )}
            <div className="flex-1 p-4">
              <h2 className="text-xl font-bold mb-4">Music Details</h2>
              <input
                type="range"
                min="0"
                max="100"
                className="w-full mb-4"
              />
              <div className="text-center mb-4">
                {generatedMusic}
              </div>
              <div className="flex justify-around">
                <button
                  onClick={handlePlayMusic}
                  className="p-2 text-green-400 hover:text-green-300 transition-colors duration-300"
                >
                  <FaPlay size={24} />
                </button>
                <button
                  onClick={handleStopMusic}
                  className="p-2 text-red-400 hover:text-red-300 transition-colors duration-300"
                >
                  <FaStop size={24} />
                </button>
                <button
                  onClick={handleReplayMusic}
                  className="p-2 text-blue-400 hover:text-blue-300 transition-colors duration-300"
                >
                  <FaRedo size={24} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MusicGenerator;
