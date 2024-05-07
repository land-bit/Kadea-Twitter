import { useForm } from "react-hook-form";
import TweetEditorButtons from "./tweet-editor-form/Tweet-Editor-Buttons";
import TweetEditorInput from "./tweet-editor-form/Tweet-Editor-Input";
import { useContext, useRef } from "react";
import { Context } from "../../contexts/tweets";
import axios from "axios";

export default function TweetEditorForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { tweets, setTweets, current } = useContext(Context);

  const onSubmit = (dataForm) => {
    axios
      .post("https://twitter-backend-w3ls.onrender.com/tweets", dataForm)
      .then((response) => {
        setTweets(response.data);
      })
      .catch((error) => console.error(error));
    reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="tweet-editor-form">
      <TweetEditorInput register={register} />
      {errors.text && (
        <p className="text-red-600 italic">{errors.text.message}</p>
      )}
      <TweetEditorButtons />
    </form>
  );
}
