import { useState } from "react";

const StringArea = ({ text }) => {
  const [expand, setExpand] = useState(false);

  // Display either the full text or its truncated form
  let displayedText = text;

  if (!expand && text.length > 300) {
    displayedText = text.slice(0, 300) + "...daha fazla";
  }

  return (
    <div onClick={() => setExpand(!expand)}>
      {displayedText.split("\n").map((line, index) => (
        <span key={index}>
          {line}
          <br />
        </span>
      ))}
    </div>
  );
};

export default StringArea;
