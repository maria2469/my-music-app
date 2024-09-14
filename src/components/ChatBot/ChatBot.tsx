import React, { FC, useState } from 'react';
import './ChatBot.css';
import { TbRobot } from 'react-icons/tb'

interface ChatBotProps {}

const ChatBot: FC<ChatBotProps> = () => {

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [response, setResponse] = useState('');
  const [aiResponse, setAiResponse] = useState('');

  const handleGenerateResponse = () => {
    // Update the response state with the user input
    setResponse(userInput);
    // Clear the input field
    setUserInput('');

    // Simulate an AI response with a delay
    setTimeout(() => {
      setAiResponse(`AI response to "${userInput}"`);
    }, 1000); // Adjust the delay as needed
  };
 return <div className="ChatBot">
    {/* Chatbot icon and text */}
    <div className="fixed bottom-0 left-0 w-full bg-blue-600 text-white p-3 shadow-lg flex items-center space-x-4">
        <button
          onClick={() => setSidebarOpen(true)}
          className="bg-pink-500 text-white p-3 rounded-full shadow-lg hover:bg-pink-600 transition duration-300"
        >
          <TbRobot size={24} />
        </button>
        <span className="text-lg font-semibold flex-grow">
          Hey Buddy! Need a Friend? Let's talk
        </span>
      </div>

      {/* Sidebar */}
      {sidebarOpen && (
        <div className="fixed top-0 left-0 w-80 h-full bg-gray-900 text-white shadow-lg flex flex-col">
          <button
            onClick={() => setSidebarOpen(false)}
            className="self-end text-2xl m-4 p-2 text-white hover:text-gray-400 transition duration-300"
          >
            &times;
          </button>
          <div className="flex-1 p-4">
            <h2 className="text-2xl font-bold mb-4">Chatbot</h2>
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Type your message"
              className="w-full p-3 border border-gray-600 rounded bg-gray-800 text-white placeholder-gray-400 mb-4 focus:outline-none focus:border-blue-500"
            />
            <button
              onClick={handleGenerateResponse}
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
            >
              Generate Response
            </button>
            {response && (
              <div className="mt-4 p-4 bg-gray-700 text-white rounded-lg">
                <p><strong>You:</strong> {response}</p>
                <p><strong>AI:</strong> {aiResponse}</p>
              </div>
            )}
          </div>
        </div>
      )}
  </div>
};

export default ChatBot;
