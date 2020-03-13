import React from 'react';
import ReactTypingEffect from 'react-typing-effect';

export const CommingSoon = () => {
  return (
    <div className="comming-soon">
      <h1 className="title-comming-soon">
        <ReactTypingEffect
          text={[
            "Comming Soon!",
            "please, visit",
            "my github",
            "https://github.com/darkcode01",
            "and love functional programming <3"
          ]}
          speed={100}
          typingDelay={500}
          eraseDelay={500}
          cursor="_"
        />
      </h1>
    </div>
  );
}