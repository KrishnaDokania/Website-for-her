import { motion } from "framer-motion";

export default function UniverseButton({ onClick }) {
    return (
        <motion.button
            onClick={onClick}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 7, duration: .8 }}
            whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(255,107,154,.5)"
            }}
            whileTap={{ scale: .97 }}
            className="
            mt-16
            rounded-full
            border
            border-white/20
            bg-white/10
            backdrop-blur-xl
            px-10
            py-4
            text-white
            font-medium
            tracking-wide
            "
        >
            Begin Our Story ✨
        </motion.button>
    );
}