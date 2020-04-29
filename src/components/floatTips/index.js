import React from "react";
import "./index.css";

class FloatTips extends React.Component {
  render() {
    const { icon, text, style = {} } = this.props;
    const iconStyle = {
      backgroundImage: `url(${icon})`,
      width: style.height,
      height: style.height,
      borderRadius: style.borderRadius
    };
    const textStyle = {
      color: style.color,
      fontSize: style.fontSize,
      fontWeight: style.fontWeight,
      fontFamily: style.fontFamily,
      lineHeight: style.height
    };
    return (
      <div className="floatTips-container" style={style}>
        <div className="floatTips-icon" style={iconStyle} />
        <div className="floatTips-text" style={textStyle}>
          {text}
        </div>
      </div>
    );
  }
}

export default FloatTips;
