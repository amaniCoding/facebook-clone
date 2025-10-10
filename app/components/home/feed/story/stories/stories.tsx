import StorySlider from "../storyslider/story-slider";
import { stories } from "@/app/seed/story";
import { LoggedInUser } from "../storyslider/types";

export default async function Stories({
  loggedInUser,
}: {
  loggedInUser: LoggedInUser;
}) {
  return (
    <div className="w-full h-60 mb-4">
      <StorySlider stories={stories} loggedInUser={loggedInUser} />
    </div>
  );
}
