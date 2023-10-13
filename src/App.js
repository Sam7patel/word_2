import React, { useState } from 'react';
import './App.css'; // You can create this CSS file to add styling

function App() {
  const [text, setText] = useState('');

  const handleTextChange = (event) => {
    const inputText = event.target.value;
    setText(inputText);
  };

  const wordCount = text.trim().split(/\s+/).filter(Boolean).length;

  return (
    <div className="App">
      <div className="word-count-container">
        <h1>Word Count App</h1>
        <textarea
          rows="6"
          cols="50"
          placeholder="Type your text here..."
          value={text}
          onChange={handleTextChange}
        ></textarea>
        <p>Total words: {wordCount}</p>
      </div>
    </div>
  );
}

export default App;
