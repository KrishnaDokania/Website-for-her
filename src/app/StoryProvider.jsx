import { useState } from "react";
import StoryContext from "./StoryContext";

export default function StoryProvider({ children }) {

    const chapters = [
        "universe",
        "letter",
        "memories",
        "littleThings",
        "future",
        "finale",
    ];

    const [currentChapter, setCurrentChapter] = useState(0);

    const nextChapter = () => {
        setCurrentChapter((prev) =>
            Math.min(prev + 1, chapters.length - 1)
        );
    };

    const previousChapter = () => {
        setCurrentChapter((prev) =>
            Math.max(prev - 1, 0)
        );
    };

    return (
        <StoryContext.Provider
            value={{
                chapters,
                currentChapter,
                nextChapter,
                previousChapter,
            }}
        >
            {children}
        </StoryContext.Provider>
    );
}