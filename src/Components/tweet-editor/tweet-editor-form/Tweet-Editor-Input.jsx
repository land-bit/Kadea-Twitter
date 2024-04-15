export default function TweetEditorInput({ register }) {
  return (
    <input
      type="text"
      name="Post"
      className="tweet-editor-input"
      placeholder="What’s happening?"
      {...register("text", {
        required: "Veiller ecrire un poste valide",
        maxLength: {
          value: 180,
          message: "Ecrire un poste qui a moins de 180 caracteres",
        },
      })}
    />
  );
}
