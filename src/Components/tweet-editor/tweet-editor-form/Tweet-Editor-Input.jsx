export default function TweetEditorInput({ register, refs }) {
  return (
    <input
      ref={refs}
      type="text"
      name="Post"
      className="tweet-editor-input"
      placeholder="What’s happening?"
      {...register("text", { required: "Veiller ecrire un poste valide" })}
    />
  );
}
