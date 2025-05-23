import { motion } from "framer-motion";
import Button from "../typography/Button";

export default function PlantDisplayBox(props) {
  const isDisplayBoot = props.isDisplayBoot ? "w-[280px]" : "";

  return (
    <motion.div
      className={`relative ${isDisplayBoot} h-[310px] border-[0.5px] 
        backdrop-blur-xs bg-[var(--color-glasspane)] rounded-[40px] 
        overflow-visible hover:shadow-xl transition-all duration-300`}
      style={{
        borderColor: "rgba(255, 255, 255, 0.2)",
      }}
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Image sticking out 30% from the top */}
      <motion.div
        className="absolute top-[-30%] left-0 w-full h-[300px] z-[50]"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <img
          className="w-full h-full object-contain object-top"
          src={props.imgUrl}
          alt="Plant"
        />
      </motion.div>

      {/* Conditional Text Section */}
      {props.isDisplayShow ? (
        <motion.div
          className="absolute bottom-10 left-0 pl-8 pr-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <p className="text-[0.8rem] font-[300]">Trendy House Plant</p>
          <div className="flex justify-between items-center text-[1.1rem] font-[300] mt-2 mb-2">
            <p className="mr-16">Calathea Plant</p>
            <img className="icon" src="/right-arrow.svg" alt="arrow" />
          </div>
          <Button name="Buy Now" border />
        </motion.div>
      ) : (
        <motion.div
          className="absolute bottom-6 text-left pl-8 pr-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <p className="text-[1.1rem] font-[300]">Trendy House Plant</p>
          <p className="text-[0.8rem] font-[300] mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
          <div className="flex flex-row items-center gap-3 mt-4">
            <span className="text-[0.9rem] font-[500]">Ks. 50,000/-</span>
            <Button
              border
              withPadding={true}
              img={
                <img className="icon" src="/bag.svg" alt="add to cart logo" />
              }
            />
          </div>
        </motion.div>
      )}

      {/* Pointer */}
      {props.isDisplayShow && (
        <motion.div
          className="absolute bottom-5 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.4 }}
        >
          <img
            className="logo"
            src="/slider-pointer.svg"
            alt="slider pointer"
          />
        </motion.div>
      )}
    </motion.div>
  );
}
