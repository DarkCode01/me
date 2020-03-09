import React from 'react';

export const Help = ({ description, usages, examples }) => {
  return (
    <>
      { description }
      <br />
      <br />
      Usage:
        { usages.map(usage => (
          <>
            <br />
            &emsp; { usage }
          </>
        ))}
      <br/>
      <br/>
      Examples:
        { examples.map(example => (
          <>
            <br />
            &emsp; { example }
          </>
        ))}
      <br />
    </>
  );
}