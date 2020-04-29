import React from "react";
import "./index.css";

class AnnounceView extends React.Component {
  render() {
    const { title, user = {}, isAnnounce = false, style } = this.props;

    const iconStyle = { backgroundImage: `url(${user.icon})` };

    return (<div className="living-announce-container" style={style}>
      <div className="living-announce-title">{title}</div>
      <div className="living-announce-user">
        <div className="living-announce-user-icon" style={iconStyle} />
        <div className="living-announce-user-nick">{user.nick}</div>
      </div>
      <div className="living-announce-button">开播提醒</div>
    </div>)
  }
}

export default AnnounceView;