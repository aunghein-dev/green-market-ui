import Button from "../typography/Button";
import { motion } from "framer-motion";
export default function RectPlantDisplayBox(props) {
  const animationProps = props.isLeftSideImg
    ? {
        initial: { opacity: 0, x: 100 },
        animate: { opacity: 1, x: 0 },
        transition: { delay: 0.3, duration: 1 },
      }
    : {
        initial: { opacity: 0, x: -100 },
        animate: { opacity: 1, x: 0 },
        transition: { delay: 0.3, duration: 1 },
      };

  return (
    <motion.div
      className="
             relative w-full h-[200px] border-[0.5px] backdrop-blur-xs px-15 mb-18 z-[50]
             bg-[var(--color-glasspane)] rounded-[60px] flex flex-row justify-between items-center"
      style={{
        borderColor: "rgba(255, 255, 255, 0.2)",
      }}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.01 }}
    >
      {props.isLeftSideImg && (
        <div>
          <motion.div
            className="absolute top-[-48px] left-[-15px] w-[300px] h-[calc(100%+70px)] z-[2]"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <img
              className="w-[100%] h-[90%] object-cover"
              src={props.imgUrl}
              alt={props.imgAlt}
            />
          </motion.div>
        </div>
      )}

      <motion.div className="w-[400px] text-left" {...animationProps}>
        <h3 className="text-[1rem]">{props.title}</h3>
        <p className="text-[0.65rem] mt-2 mb-2">{props.description}</p>
        <span className="text-[0.9rem] font-[500]">Ks. {props.price}/-</span>
        <div className="flex flex-row items-center gap-3 mt-2">
          <Button name="Buy Now" border />
          <Button
            border
            withPadding={true}
            img={<img className="icon" src="/bag.svg" alt="add to cart logo" />}
          />
        </div>
      </motion.div>

      {props.isRightSideImg && (
        <div>
          <motion.div
            className="absolute top-[-68px] right-[-15px] w-[300px] h-[calc(100%+70px)] z-[2]"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <img
              className="w-[100%] h-[90%] object-cover"
              src={props.imgUrl}
              alt={props.imgAlt}
            />
          </motion.div>
        </div>
      )}
    </motion.div>
  );
}
