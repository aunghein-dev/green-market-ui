import { motion } from "framer-motion";
export default function ReviewDisplayBox() {
  return (
    <motion.div
      className="w-[230px] h-[150px] border-[0.5px] rounded-[30px] bg-[var(--color-glasspane)]
                flex flex-col p-4 backdrop-blur-xs text-left"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{
        borderColor: "rgba(255, 255, 255, 0.2)",
      }}
    >
      <div className="flex flex-row items-center">
        <img
          className="profile"
          src="/reviewers/reviewer1.png"
          alt="reviewer photo"
        />
        <div className="flex flex-col ml-2">
          <p className="text-[0.8rem]">Alina Patel</p>
          <img className="stars" src="/ratings/4.5.svg" alt="4.5 stars" />
        </div>
      </div>
      <p className="text-[0.65rem] mt-2">
        Sustainable choices bring harmony to life. Eco-conscious living nurtures
        the planet and supports future generations with every step we take.
      </p>
    </motion.div>
  );
}
