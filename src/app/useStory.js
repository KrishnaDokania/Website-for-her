import { useContext } from "react";
import StoryContext from "./StoryContext";

export default function useStory() {
    return useContext(StoryContext);
}