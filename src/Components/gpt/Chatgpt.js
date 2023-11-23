import React, { useState, useEffect } from 'react';
import './gpt.css';

const Chatgpt = () => {
  const API_URL = 'https://accommodation-resources-da4d836e1db9.herokuapp.com/completions';

  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState('');

  let controller = null;

  const generate = async () => {
    // Alert the user if no prompt value
    if (!prompt) {
      alert('Please enter a prompt.');
      return;
    }

    setResult('Generating...');

    // Create a new AbortController instance
    controller = new AbortController();
    const signal = controller.signal;

    try {
      // Fetch the response from the OpenAI API with the signal from AbortController
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: prompt,
          stream: true, // For streaming responses
        }),
        signal, // Pass the signal to the fetch request
      });

      // Read the response as a stream of data
      const reader = response.body.getReader();

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        // Handle the streaming data
        const chunk = new TextDecoder('utf-8').decode(value);
        setResult((prevResult) => prevResult + chunk);
      }
    } catch (error) {
      console.error(error);
    } finally {
      // Enable the generate button and disable the stop button
      controller = null; // Reset the AbortController instance
    }
  };

  const stop = () => {
    // Abort the fetch request by calling abort() on the AbortController instance
    if (controller) {
      controller.abort();
      controller = null;
    }
  };

  const handlePromptChange = (e) => {
    setPrompt(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      generate();
    }
  };

  useEffect(() => {
    return () => {
      stop();
    };
  }, []);

  return (
    <div className="lg:w-1/2 2xl:w-1/3 p-8 rounded-md bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Streaming OpenAI API Completions in React</h1>
      <div className="mt-4 h-48 overflow-y-auto">
        <p className="text-gray-500 text-sm mb-2">Generated Text</p>
        <p id="resultText" className="whitespace-pre-line">
          {result}
        </p>
      </div>
      <input
        type="text"
        id="promptInput"
        className="w-full px-4 py-2 rounded-md bg-gray-200 placeholder-gray-500 focus:outline-none mt-4"
        placeholder="Enter prompt..."
        value={prompt}
        onChange={handlePromptChange}
        onKeyPress={handleKeyPress}
      />
      <div className="flex justify-center mt-4">
        <button
          id="generateBtn"
          className="w-1/2 px-4 py-2 rounded-md bg-black text-white hover:bg-gray-900 focus:outline-none mr-2"
          onClick={generate}
        >
          Generate
        </button>
        <button
          id="stopBtn"
          className="w-1/2 px-4 py-2 rounded-md border border-gray-500 text-gray-500 hover:text-gray-700 hover:border-gray-700 focus:outline-none ml-2 opacity-75 cursor-not-allowed"
          onClick={stop}
        >
          Stop
        </button>
      </div>
    </div>
  );
};

export default Chatgpt;
