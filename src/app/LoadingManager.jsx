import { motion } from "framer-motion";

export default function LoadingManager() {
    return (
        <motion.div
            className="fixed inset-0 flex items-center justify-center bg-[#020617] z-50"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
        >
            <div className="text-center">
                <h1 className="text-3xl text-white font-light">
                    The Universe Wrote Our Story
                </h1>

                <p className="text-pink-300 mt-4">
                    Loading...
                </p>
            </div>
        </motion.div>
    );
}