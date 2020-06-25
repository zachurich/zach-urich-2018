import { ShareButtons, ShareCounts, generateShareIcon } from "react-share";

import React from "react";

const SocialIcons = (props) => {
  const { FacebookShareButton, LinkedinShareButton, TwitterShareButton } = ShareButtons;
  const FacebookIcon = generateShareIcon("facebook");
  const TwitterIcon = generateShareIcon("twitter");
  const LinkedinIcon = generateShareIcon("linkedin");
  return (
    <div className="social-icons">
      Share:
      <FacebookShareButton url={props.url} quote={props.title} className="social-icon">
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <TwitterShareButton url={props.url} title={props.title} className="social-icon">
        <TwitterIcon size={32} round />
      </TwitterShareButton>
      <LinkedinShareButton
        url={props.url}
        title={props.title}
        windowWidth={750}
        windowHeight={600}
        className="social-icon"
      >
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>
    </div>
  );
};

export default SocialIcons;
