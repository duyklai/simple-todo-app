import React, { useEffect, useRef } from "react";

const Header = (props) => {
  const headerStyle = {
    padding: "20px 0",
    lineHeight: "2em",
  };

  const isInitialMount = useRef(true);

  useEffect(() => {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + r + "," + g + "," + b + ")";

    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      document.getElementById("inH1").innerHTML = "clicked";
      document.getElementById("inH1").style.backgroundColor = bgColor;
    }
  }, [props.headerSpan]);

  return (
    <header style={headerStyle}>
      <h1 style={{ fontSize: "25px", marginBottom: "15px" }}>
        Simple Todo App <span id="inH1"></span>
      </h1>
      <p style={{ fontSize: "19px" }}>
        Please add to-dos item(s) through the input field
      </p>
    </header>
  );
};

export default Header;
// class Header extends Component {
//   componentDidUpdate(prevProps, prevState) {
//     var r = Math.floor(Math.random() * 256);
//     var g = Math.floor(Math.random() * 256);
//     var b = Math.floor(Math.random() * 256);
//     var bgColor = "rgb(" + r + "," + g + "," + b + ")";

//     if (prevProps.headerSpan !== this.props.headerSpan) {
//       document.getElementById("inH1").innerHTML = "clicked";
//       document.getElementById("inH1").style.backgroundColor = bgColor;
//     }
//   }

//   render() {
//     const headerStyle = {
//       padding: "20px 0",
//       lineHeight: "2em",
//     };
//     return (
//       <header style={headerStyle}>
//         <h1 style={{ fontSize: "25px", marginBottom: "15px" }}>
//           Simple Todo App <span id="inH1"></span>
//         </h1>
//         <p style={{ fontSize: "19px" }}>
//           Please add to-dos item(s) through the input field
//         </p>
//       </header>
//     );
//   }
// }
