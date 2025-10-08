import StorySlider from "../storyslider/story-slider";
import { stories } from "@/app/seed/story";

export default async function Stories() {
  return (
    <div className="w-full h-60 mb-4">
      <StorySlider stories={stories} />
    </div>
  );
}
