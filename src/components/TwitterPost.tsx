import React from 'react';
import { TwitterTweetEmbed } from 'react-twitter-embed';

interface TwitterProps {
  twittId: string;
  options?: Object;
}

const TwitterPost: React.FC<TwitterProps> = ({ twittId, options }) => {

  return (
    <TwitterTweetEmbed tweetId={twittId} options={options} />
  );
};

export default TwitterPost;