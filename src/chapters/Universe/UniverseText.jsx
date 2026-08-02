import { motion } from "framer-motion";
import { universeStory } from "./universe.data";
import UniverseButton from "./UniverseButton";

export default function UniverseText() {

    return (

        <div className="absolute inset-0 z-20 flex items-center justify-center px-6">

            <div className="text-center max-w-4xl">

                {universeStory.map((line, index) => (

                    <motion.p
                        key={index}
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: index * .8,
                            duration: .9
                        }}
                        className={`
                        ${
                            index === 8
                                ? "text-5xl md:text-7xl font-semibold text-pink-300 mt-8"
                                : "text-xl md:text-4xl text-white/90 mt-4"
                        }
                        `}
                    >
                        {line}
                    </motion.p>

                ))}

                <UniverseButton />

            </div>

        </div>

    );

}