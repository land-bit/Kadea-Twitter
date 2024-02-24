import Avatars from "./tweet-editor/Avatars"
import TweetEditorForm from "./tweet-editor/Tweet-Editor-Form"

export default function TweetEditor() {

    return (
        <div className="tweet-editor">
            <Avatars />
            <TweetEditorForm />
        </div>
    )
}