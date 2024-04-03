import Avatars from "./tweet-editor/Avatars";
import TweetEditorForm from "./tweet-editor/Tweet-Editor-Form";

export default function TweetEditor({ tweets, setTweets }) {
  return (
    <div className="tweet-editor">
      <Avatars />
      <TweetEditorForm tweets={tweets} setTweets={setTweets} />
    </div>
  );
}
