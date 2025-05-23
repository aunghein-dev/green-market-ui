import Button from "../typography/Button";
import { motion } from "framer-motion";
export default function BestDisplayBoot() {
  return (
    <div
      className="
               relative w-full h-[320px] border-[0.5px] backdrop-blur-xs px-15 mb-18 z-[50]
               bg-[var(--color-glasspane)] rounded-[60px] flex flex-row justify-between items-center"
      style={{
        borderColor: "rgba(255, 255, 255, 0.2)",
      }}
    >
      <div>
        <motion.div
          className="absolute top-[-68px] left-[-100px] w-[500px] h-[calc(100%+120px)] z-[2]"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <img
            className="w-[100%] h-[90%] object-cover"
            src="/plants/plant6.png"
            alt="Our Best O2"
          />
        </motion.div>
      </div>

      <motion.div
        className="w-[400px] text-left"
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h3 className="text-[1rem]">
          We Have Small And Best O2 Plants Collection’s
        </h3>
        <span className="text-[0.65rem] mt-2 mb-2">
          Sustainable choices bring harmony to life. Eco-conscious living
          nurtures the planet and supports future generations with every step we
          take.
        </span>
        <br />
        <span className="text-[0.65rem] mt-2 mb-2">
          Caring for nature begins with every mindful choice. Sustainable living
          isn’t just a trend—it’s a commitment to the Earth, our communities,
          and future generations.
        </span>
        <div className="flex flex-row items-center gap-5 mt-8 justify-between">
          <Button name="Explore" border />
          <div className="flex flex-row items-center gap-2">
            <img className="icon" src="/left-arrow.svg" alt="left arrow" />
            <div className="align-baseline">
              <span className="text-[0.8rem]">01/</span>
              <span className="text-[0.65rem]">04</span>
            </div>

            <img className="icon" src="/right-arrow.svg" alt="right arrow" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
