import React, { Fragment, useState } from 'react'
import { genres, images, moods } from '../apidata/data'
import MusicPlayer from '../components/MusicPlayer/MusicPlayer'
export const GenerateMusic: React.FC = () => {
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null)
  const [selectedMood, setSelectedMood] = useState<string | null>(null)
  const [generatedMusic, setGeneratedMusic] = useState<string | null>(null)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const handleGenerateMusic = () => {
    if (selectedGenre && selectedMood) {
      setGeneratedMusic(
        `Generated music for:${selectedGenre ? ` in ${selectedGenre}` : ''}${
          selectedMood ? ` with mood ${selectedMood}` : ''
        }`
      )
      setSidebarOpen(true)
    } else {
      alert('Please select both genre and mood.')
    }
  }

  const imageKey =
    selectedGenre && selectedMood ? `${selectedGenre}-${selectedMood}` : ''
  const genreMoodImage = imageKey ? images[imageKey] : ''

  return (
    <Fragment>
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
            <div className="flex items-center w-full h-full">
              {genreMoodImage && (
                <MusicPlayer
                  background={genreMoodImage}
                  musicUrl={
                    'assert/audios/' +
                    selectedMood?.trim().toLowerCase() +
                    '.mp3'
                  }
                />
              )}
              {/* {genreMoodImage && (
                <div
                  className="flex-1 bg-cover bg-center"
                  style={{ backgroundImage: `url(${genreMoodImage})` }}
                >
                  
                </div>
              )}
              <div className="flex-1 p-4">
                <h2 className="text-xl font-bold mb-4">Music Details</h2>
                <input type="range" min="0" max="100" className="w-full mb-4" />
                <div className="text-center mb-4">{generatedMusic}</div>
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
              </div> */}
            </div>
          </div>
        )}
      </div>
    </Fragment>
  )
}
