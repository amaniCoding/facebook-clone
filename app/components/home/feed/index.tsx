import { Suspense } from "react";
import Stories from "./story/stories/stories";
import Story from "../../skeletons/story";
import AddPost from "./postbox/addpost/addpost";
import Feeder from "./feeder";
import { LoggedInUser } from "./types";

export default function Feed({ loggedInUser }: { loggedInUser: LoggedInUser }) {
  return (
    <div className="w-[37%] ml-[30%] ">
      <AddPost loggedInUser={loggedInUser} />
      <Suspense fallback={<Story />}>
        <Stories loggedInUser={loggedInUser} />
      </Suspense>
      <Feeder />
    </div>
  );
}
