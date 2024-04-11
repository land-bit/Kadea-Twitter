import { useForm } from "react-hook-form";
import TweetEditorButtons from "./tweet-editor-form/Tweet-Editor-Buttons";
import TweetEditorInput from "./tweet-editor-form/Tweet-Editor-Input";
import { useContext, useEffect, useRef } from "react";
import { TweetContext } from "../../contexts/tweets";
import axios from "axios";

export default function TweetEditorForm({ tweets, setTweets }) {
  const { register, handleSubmit, reset } = useForm();
  const { current } = useContext(TweetContext);
  const input = useRef();

  const onSubmit = (dataForm) => {
    const newTweet = {
      user: current,
      content: dataForm,
      actions: {
        comments: 0,
        retweet: 0,
        like: 0,
        state: "true",
      },
    };
    axios
      .post("http://localhost:3000/tweets", newTweet)
      .then((response) => setTweets({ ...tweets, ...response.data }))
      .catch((error) => console.error(error));
    reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="tweet-editor-form">
      <TweetEditorInput register={register} refs={input} />
      <TweetEditorButtons />
    </form>
  );
}
