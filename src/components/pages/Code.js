import React, { useState } from "react";

const Code = ({ codeList, codeStories }) => {
  const [code, setCode] = useState("");
  const [isCodeValid, setIsCodeValid] = useState(false);
  const [specialStory, setSpecialStory] = useState("");

  const handleCodeChange = (event) => {
    setCode(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (codeList.includes(code)) {
      setIsCodeValid(true);
      setSpecialStory(codeStories[code]);
    } else {
      setIsCodeValid(false);
      setSpecialStory("");
    }
  };

  return (
    <div>
      <h1>Enter the Code</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter the code"
          value={code}
          onChange={handleCodeChange}
        />
        <button type="submit">Submit</button>
      </form>

      {isCodeValid && specialStory && (
        <div>
          <h2>Special Story</h2>
          <p>{specialStory}</p>
        </div>
      )}
    </div>
  );
};

export default Code;
