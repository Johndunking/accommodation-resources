import React, { useState, useEffect,useCallback } from 'react';
import './gpt.css';
import Teacher from '../../assets/Teacher.png'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css'

const Chatgpt = () => {
  const API_URL = 'https://accommodation-resources-da4d836e1db9.herokuapp.com/completions';

  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [abortController, setAbortController] = useState(null);

  const generate = async () => {
    if (!prompt) {
      alert('Enter your question...');
      return;
    }
    setResult('');
    setPrompt('');


    setIsGenerating(true);

    const controller = new AbortController();
    setAbortController(controller);

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: prompt,
          stream: true,
        }),
        signal: controller.signal,
      });

      const reader = response.body.getReader();
      

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        setIsGenerating(false);

        const chunk = new TextDecoder('utf-8').decode(value);
        setResult((prevResult) => prevResult + chunk);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const stop = useCallback(() => {
    console.log('Stop button clicked');
    if (abortController) {
      abortController.abort();
    }
  }, [abortController]);

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
      if (abortController) {
        abortController.abort();
      }
    };
  }, [abortController]);


  return (
    <div className="flex-container">
    <div className="lg:w-1/2 2xl:w-1/3 p-8 rounded-md bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 teach">TeachBot <br/> <img src={Teacher} alt='teacherlogo' style={{width:'8rem',paddingTop:'25px'}}/></h1>
      {isGenerating && <div className="mt-4 custom-results-box">
        <p className="text-gray-500 text-sm mb-2"></p>
         <p className="text-gray-500 text-sm mb-2">Generating...</p>
        <p id="resultText" className="whitespace-pre-line">
          {result}
        </p>
      </div>}
      <input
        type="text"
        id="promptInput"
        className="w-full px-4 py-2 rounded-md bg-gray-200 placeholder-gray-500 focus:outline-none mt-4"
        placeholder="Enter your question..."
        value={prompt}
        onChange={handlePromptChange}
        onKeyDown={handleKeyPress}
      />
      <div className="flex justify-center mt-4">
        <Button
          id="generateBtn"
          className="w-1/2 px-4 py-2 rounded-md border border-gray-500 bg-dark text-white"
          onClick={generate}
        >
          Ask
        </Button>
        <Button
          id="stopBtn"
          className="w-1/2 px-4 py-2 rounded-md border border-dark bg-light text-dark"
          onClick={stop}
        >
          Stop
        </Button>
      </div>
    </div>
    </div>
  );
};

export default Chatgpt;
