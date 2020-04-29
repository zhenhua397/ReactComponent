import React from "react";
import "./index.css";
import FloatTips from "../../components/floatTips";
import AnnounceView from "./announce";
import tipsIcon from "../../images/ic-tips-played.png";

class LivingCard extends React.Component {
  render() {
    const {
      user = {
        icon:
          "http://5b0988e595225.cdn.sohucs.com/images/20170724/ad28da0d658b43aba84ce91df9cacdad.jpeg",
        nick: "andy",
        desc: "hello"
      }, 
      liveRoomStatus = 0
    } = this.props;
    const tipsStyle = {
      height: "50px",
      borderRadius: "25px",
      fontFamily: "PingFang-SC Thin"
    };
    const tag = "大咖秀";
    const image =
      "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588158412655&di=1d6a3d746bf98fb0c6ca7936a33e8f3b&imgtype=0&src=http%3A%2F%2Ft7.baidu.com%2Fit%2Fu%3D1209016425%2C1621889291%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D1280%26h%3D975";

    const imageStyle = { backgroundImage: `url(${image})` };
    const iconStyle = { backgroundImage: `url(${user.icon})` };

    if (liveRoomStatus === 0) {
      imageStyle.borderRadius = "10px";
      imageStyle.height="410px";

      return (<div className="living-card-container">
        <div className="living-card-image" style={imageStyle}>
          <FloatTips icon={tipsIcon} text="哈哈哈你好啊" style={tipsStyle} />

          <AnnounceView user={user} title="不知道是啥不知" />
        </div>
      </div>
      );
    }

    return (
      <div className="living-card-container">
        <div className="living-card-image" style={imageStyle}>
          <FloatTips icon={tipsIcon} text="哈哈哈你好啊" style={tipsStyle} />
        </div>

        <div className="living-card-title-container">
          {(tag && <div className="living-card-title-tag">{tag}</div>) || null}
          <div className="living-card-title">不知道是啥不知</div>
        </div>

        <div className="living-card-user-container">
          <div className="living-card-user-icon" style={iconStyle} />
          <div className="living-card-user-nick-wrap">
            <div className="living-card-user-nick">{user.nick}</div>
            <div className="living-card-user-desc">{user.desc}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default LivingCard;
