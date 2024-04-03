export default function TweetEditorInput({ register, ref }) {
  return (
    <input
      ref={ref}
      type="text"
      name="Post"
      className="tweet-editor-input"
      placeholder="What’s happening?"
      {...register("text", { required: "Veiller ecrire un poste valide" })}
    />
  );
}
