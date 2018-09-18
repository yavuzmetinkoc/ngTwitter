export interface Tweet {
  account: {
    fullname: string;
    href: string;
    id: number;
  };
  date: string;
  hashtags: string[];
  likes: number;
  replies: number;
  retweets: number;
  text: string;
}

export interface FormattedTweet {
  date: string;
  hashtags: string;
  likes: string;
  replies: string;
  retweets: string;
  text: string;
}
