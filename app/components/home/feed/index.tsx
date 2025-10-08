import { Suspense } from "react";
import Stories from "./story/stories/stories";
import Story from "../../skeletons/story";
import AddPost from "./postbox/addpost/addpost";
import Feeder from "./feeder";

export default function Feed() {
  return (
    <div className="xl:w-[40%] lg:w-[95%] xl:ml-[30%] lg:ml-[30%] w-full">
      <AddPost />
      <Suspense fallback={<Story />}>
        <Stories />
      </Suspense>
      <Feeder />
    </div>
  );
}
