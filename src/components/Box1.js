import React from "react";

const Box1 = (props) => {
  const { inputHandlerSubmit, wrongHex, wrongTxt, setCode, code } = props;
  return (
    <div className="box1">
      <form onChange={inputHandlerSubmit}>
        <p className="main">
          Hex Code:&nbsp;
          <input
            type="text"
            value={code}
            style={wrongHex}
            onChange={(e) => setCode(e.target.value)}
          />
          <p className="wrong-hex" style={wrongTxt}>
            Invalid hex Code
          </p>
        </p>
      </form>
    </div>
  );
};

export default Box1;
