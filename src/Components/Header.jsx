import PageTitle from "./header/Page-Title";
import TopTweet from "./header/Top-Tweet";

export default function Header() {
  return (
    <div className="header">
      <PageTitle />
      <TopTweet />
    </div>
  );
}
