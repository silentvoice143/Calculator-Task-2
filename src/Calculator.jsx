import "./Calculator.css";
import swap from "./img/swap.png";

import React, { useState } from "react";
import backspace from "./img/backspace.png";
import background1 from "./img/background2.jpg";

export default function Calculator() {
  const [input, SetInput] = useState("");
  const [result, SetResult] = useState(0);

  const [isActive, setIsActive] = useState(false);
  const [istrigo, setIstrigo] = useState(false);

  const factorial = () => {
    var f = 1;
    for (let i = 1; i <= input; i++) {
      f *= i;
    }
    SetResult(f);
  };

  const handleClick = () => {
    // 👇️ toggle
    setIstrigo((current) => !current);

    // 👇️ or set to true
    // setIsActive(true);
  };

  const handleChange = () => {
    setIsActive((current) => !current);
  };

  const solve = () => {
    try {
      SetResult(eval(input));
    } catch (err) {
      SetResult("error");
      console.log("error");
    }
  };

  const lg = () => {
    SetResult(Math.log10(input));
  };

  const ln = () => {
    SetResult(Math.log(input));
  };

  const trigo = (val) => {
    let pi;
    console.log(val);
    if (val === "sin") {
      pi = input * (Math.PI / 180);
      pi = Math.sin(pi).toFixed(7);
      // pi *= 10;
      // pi = Math.round(pi);
      // pi = pi / 10;
      SetResult(pi);
    } else if (val === "cos") {
      pi = input * (Math.PI / 180);
      pi = Math.cos(pi).toFixed(7);
      // pi *= 10;
      // pi = Math.round(pi);
      // pi = pi / 10;
      SetResult(pi);
    } else if (val === "tan") {
      pi = input * (Math.PI / 180);
      pi = Math.tan(pi).toFixed(7);
      // pi *= 10;
      // pi = Math.round(pi);
      // pi = pi / 10;
      SetResult(pi);
    } else if (val === "sec") {
      pi = input * (Math.PI / 180);
      pi = Math.cos(pi).toFixed(7);
      // pi *= 10;
      // pi = Math.round(pi);
      // pi = pi / 10;
      if (pi !== 0) {
        SetResult(1 / pi);
      } else {
        SetResult("infinity");
      }
    } else if (val === "cosec") {
      pi = input * (Math.PI / 180);
      pi = Math.sin(pi).toFixed(7);
      // pi *= 10;
      // pi = Math.round(pi);
      // pi = pi / 10;
      if (pi !== 0) {
        SetResult(1 / pi);
      } else {
        SetResult("infinity");
      }
    } else if (val === "cot") {
      pi = input * (Math.PI / 180);
      pi = Math.tan(pi).toFixed(7);
      // pi *= 10;
      // pi = Math.round(pi);
      // pi = pi / 10;
      if (pi !== 0) {
        SetResult(1 / pi);
      } else {
        SetResult("infinity");
      }
    }
  };

  const inversetrigo = (val) => {
    // let r;
    if (val === "asin") {
      SetResult("rad= " + Math.asin(input).toFixed(7));
    } else if (val === "acos") {
      SetResult("rad= " + Math.acos(input).toFixed(7));
    } else if (val === "atan") {
      SetResult("rad= " + Math.atan(input).toFixed(7));
    } else if (val === "acosec") {
      SetResult("rad= " + Math.asin(1 / input).toFixed(7));
    } else if (val === "asec") {
      SetResult("rad= <br>" + Math.acos(1 / input).toFixed(7));
    } else if (val === "acot") {
      SetResult("rad= " + Math.atan(1 / input).toFixed(7));
    }
  };

  return (
    <div className="main-container">
      <img class="background-img" src={background1} alt="" srcset="" />
      <div className="calculator-wrapper">
        <div className="simple-calc">
          <div className="display">
            <div className="inputbox">{input}</div>
            <div className="outputbox">{result}</div>
          </div>

          <div className="button-wrapper">
            <div className="row1">
              <button className="key" value="lg" onClick={lg}>
                lg
              </button>

              <button className="key" value="ln" onClick={ln}>
                ln
              </button>
              <button
                className="key special-keys"
                value="("
                onClick={(e) => {
                  SetInput(input + e.target.value);
                }}
              >
                (
              </button>
              <button
                className="key special-keys"
                value=")"
                onClick={(e) => {
                  SetInput(input + e.target.value);
                }}
              >
                )
              </button>
            </div>
            <div className="row1">
              <button
                className="key special-keys"
                value=""
                onClick={() => {
                  SetInput("");
                  SetResult(0);
                }}
              >
                C
              </button>

              <button
                className="key backspace"
                value=""
                onClick={() => {
                  SetInput(input.slice(0, -1));
                }}
              >
                <img className="backspace-img" src={backspace} alt="" />
              </button>
              <button
                className="key special-keys"
                value="%"
                onClick={(e) => {
                  SetInput(input + e.target.value);
                }}
              >
                %
              </button>
              <button
                className="key special-keys"
                value="/"
                onClick={(e) => {
                  SetInput(input + e.target.value);
                }}
              >
                /
              </button>
            </div>
            <div className="row2">
              <button
                className="key"
                value="7"
                onClick={(e) => {
                  SetInput(input + e.target.value);
                }}
              >
                7
              </button>
              <button
                className="key"
                value="8"
                onClick={(e) => {
                  SetInput(input + e.target.value);
                }}
              >
                8
              </button>
              <button
                className="key"
                value="9"
                onClick={(e) => {
                  SetInput(input + e.target.value);
                }}
              >
                9
              </button>
              <button
                className="key special-keys"
                value="*"
                onClick={(e) => {
                  SetInput(input + e.target.value);
                }}
              >
                X
              </button>
            </div>
            <div className="row3">
              <button
                className="key"
                value="4"
                onClick={(e) => {
                  SetInput(input + e.target.value);
                }}
              >
                4
              </button>
              <button
                className="key"
                value="5"
                onClick={(e) => {
                  SetInput(input + e.target.value);
                }}
              >
                5
              </button>
              <button
                className="key"
                value="6"
                onClick={(e) => {
                  SetInput(input + e.target.value);
                }}
              >
                6
              </button>
              <button
                className="key special-keys"
                value="-"
                onClick={(e) => {
                  SetInput(input + e.target.value);
                }}
              >
                -
              </button>
            </div>
            <div className="row4">
              <button
                className="key"
                value="1"
                onClick={(e) => {
                  SetInput(input + e.target.value);
                }}
              >
                1
              </button>
              <button
                className="key"
                value="2"
                onClick={(e) => {
                  SetInput(input + e.target.value);
                }}
              >
                2
              </button>
              <button
                className="key"
                value="3"
                onClick={(e) => {
                  SetInput(input + e.target.value);
                }}
              >
                3
              </button>
              <button
                className="key special-keys"
                value="+"
                onClick={(e) => {
                  SetInput(input + e.target.value);
                }}
              >
                +
              </button>
            </div>
            <div className="row5">
              <button
                className="key"
                value="e"
                onClick={(e) => {
                  SetInput(input + e.target.value);
                }}
              >
                e
              </button>
              <button
                className="key"
                value="0"
                onClick={(e) => {
                  SetInput(input + e.target.value);
                }}
              >
                0
              </button>
              <button
                className="key"
                value="."
                onClick={(e) => {
                  SetInput(input + e.target.value);
                }}
              >
                .
              </button>
              <button className="key special-keys" value="=" onClick={solve}>
                =
              </button>
            </div>
          </div>
        </div>
        <div className="complex-calc">
          <button className="key" onClick={handleChange}>
            <img class="swap" src={swap} alt="" srcset="" />
          </button>
          <div
            className="trigo"
            style={{ display: !isActive ? "flex" : "none" }}
          >
            <button className="key" onClick={handleClick}>
              2nd
            </button>
            <div
              className="first-trigo"
              style={{
                display: !istrigo ? "flex" : "none",
              }}
            >
              <button
                className="key"
                value="sin"
                onClick={(e) => {
                  trigo(e.target.value);
                }}
              >
                sin
              </button>
              <button
                className="key"
                value="cos"
                onClick={(e) => {
                  trigo(e.target.value);
                }}
              >
                cos
              </button>
              <button
                className="key"
                value="tan"
                onClick={(e) => {
                  trigo(e.target.value);
                }}
              >
                tan
              </button>
              <button
                className="key cosec"
                value="cosec"
                onClick={(e) => {
                  trigo(e.target.value);
                }}
              >
                cosec
              </button>
              <button
                className="key"
                value="sec"
                onClick={(e) => {
                  trigo(e.target.value);
                }}
              >
                sec
              </button>
              <button
                className="key"
                value="cot"
                onClick={(e) => {
                  trigo(e.target.value);
                }}
              >
                cot
              </button>
            </div>
            <div
              className="second-trigo"
              style={{
                display: istrigo ? "flex" : "none",
              }}
            >
              <button
                className="key"
                value="asin"
                onClick={(e) => {
                  inversetrigo(e.target.value);
                }}
              >
                sin <sup>-1</sup>
              </button>
              <button
                className="key"
                value="acos"
                onClick={(e) => {
                  inversetrigo(e.target.value);
                }}
              >
                cos<sup>-1</sup>
              </button>
              <button
                className="key"
                value="atan"
                onClick={(e) => {
                  inversetrigo(e.target.value);
                }}
              >
                tan<sup>-1</sup>
              </button>
              <button
                className="key cosec"
                value="acosec"
                onClick={(e) => {
                  inversetrigo(e.target.value);
                }}
              >
                cosec<sup>-1</sup>
              </button>
              <button
                className="key"
                value="asec"
                onClick={(e) => {
                  inversetrigo(e.target.value);
                }}
              >
                sec<sup>-1</sup>
              </button>
              <button
                className="key"
                value="acot"
                onClick={(e) => {
                  inversetrigo(e.target.value);
                }}
              >
                cot<sup>-1</sup>
              </button>
            </div>
          </div>

          <div
            className="power"
            style={{ display: isActive ? "flex" : "none" }}
          >
            <button
              className="key"
              onClick={() => {
                SetResult(input * input);
              }}
            >
              x<sup>2</sup>
            </button>
            <button
              className="key"
              onClick={() => {
                SetResult(input * input * input);
              }}
            >
              x<sup>3</sup>
            </button>
            <button
              className="key"
              onClick={() => {
                SetResult(input * input * input * input);
              }}
            >
              x<sup>4</sup>
            </button>
            <button className="key" onClick={factorial}>
              x!
            </button>
            <button
              className="key"
              onClick={() => {
                SetResult(Math.pow(input, input));
              }}
            >
              x<sup>x</sup>
            </button>
            <button
              className="key"
              onClick={() => {
                SetResult(Math.pow(input, 0.5));
              }}
            >
              &#x221A;x
            </button>
            <button
              className="key"
              onClick={() => {
                SetResult(Math.pow(input, 1 / 3));
              }}
            >
              &#x221B;x
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
