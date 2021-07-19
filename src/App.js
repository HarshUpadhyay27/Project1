import React, { useState } from "react";
import Box1 from "./components/Box1";
import Box2 from "./components/Box2";

const App = () => {
  const [code, setCode] = useState();
  const [color, setColor] = useState();
  const [wrong, setWrong] = useState();
  const [wrongText, setWrongText] = useState();

  const inputHandlerSubmit = (e) => {
    e.preventDefault();
    let regex = /^([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
    if (regex.test(code)) {
      setColor(code);
      setWrong("black");
      setWrongText("white");
    } else {
      setWrong("red");
      setWrongText("red");
    }
  };

  const themeStyle = {
    backgroundColor: `#${color}`,
  };

  const wrongHex = {
    border: `1px solid ${wrong}`,
  };

  const wrongTxt = {
    display: "block",
    color: wrongText,
  };

  return (
    <div className="container">
      <Box1
        inputHandlerSubmit={inputHandlerSubmit}
        wrongTxt={wrongTxt}
        wrongHex={wrongHex}
        code={code}
        setCode={setCode}
      />
      <Box2 themeStyle={themeStyle}/>
    </div>
  );
};

export default App;
