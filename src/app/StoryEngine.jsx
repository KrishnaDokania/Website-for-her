import Universe from "../chapters/Universe/Universe";

import useStory from "./useStory";

export default function StoryEngine() {

    const { currentChapter } = useStory();

    switch (currentChapter) {

        case 0:
            return <Universe />;

        default:
            return <Universe />;
    }
}