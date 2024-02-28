import TweetEditorButtons from "./tweet-editor-form/Tweet-Editor-Buttons";
import TweetEditorInput from "./tweet-editor-form/Tweet-Editor-Input";

export default function TweetEditorForm() {

    return (
        <div className="tweet-editor-form">
            <TweetEditorInput />
            <TweetEditorButtons />
        </div>
    )
}