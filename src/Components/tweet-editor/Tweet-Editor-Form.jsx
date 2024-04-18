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
    const newTweet = {
      user: current,
      content: dataForm,
      actions: {
        comments: 0,
        retweet: 0,
        like: 0,
        state: true,
      },
    };
    axios
      .post(
        "https://json-server-from-kadea-tweet.onrender.com/tweets",
        newTweet
      )
      .then((response) => {
        setTweets([...tweets, response.data]);
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
