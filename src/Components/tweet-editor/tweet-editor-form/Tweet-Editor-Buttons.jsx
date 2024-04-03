import Button from "./tweet-editor-buttons/Button";
import TweetEditorActions from "./tweet-editor-buttons/Tweet-Editor-Actions";

export default function TweetEditorButtons() {
  return (
    <div className="tweet-editor-buttons">
      <TweetEditorActions />
      <Button />
    </div>
  );
}
