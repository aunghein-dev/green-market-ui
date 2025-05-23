import BgWrapper from "./atoms/BgWrapper";
import Button from "./typography/Button";
import PlantDisplayBox from "./atoms/PlantDisplayBox";
import ReviewDisplayBox from "./atoms/ReviewDisplayBox";
import RectPlantDisplayBox from "./atoms/RectPlantDisplayBox";
import { motion } from "framer-motion";

export default function Content() {
  return (
    <section>
      <BgWrapper>
        <div className="flex wrap justify-between mt-40 z-[50]">
          <div className="flex flex-col">
            <motion.div
              className="mb-17"
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <h1 className="text-[4rem] font-[500]">Breath Natural</h1>
              <p className="text-sm max-w-[500px]">
                Sustainable choices bring harmony to life. Eco-conscious living
                nurtures the planet and supports future generations with every
                step we take.
              </p>
              <div className="flex items-center mt-4 gap-3">
                <Button name="Explore" border />
                <Button
                  name="Live Demo..."
                  img={<img className="logo" src="/play.svg" alt="demo icon" />}
                />
              </div>
            </motion.div>
            <ReviewDisplayBox />
          </div>
          <div className="mt-14">
            <PlantDisplayBox
              border
              isDisplayBoot
              isDisplayShow
              imgUrl="/plants/plant1.png"
            />
          </div>
        </div>
        <div className="text-center mt-8 z-[50]">
          <h2 className="text-[1.4rem] font-[500] mb-12">Our Trendy Plants</h2>
          <RectPlantDisplayBox
            title={"For Small Desk Ai Plant"}
            description={
              "Sustainable choices bring harmony to life. Eco-conscious living nurtures the planet and supports future generations with every step we take."
            }
            price={"50,000"}
            imgUrl={"/plants/plant2.png"}
            imgAlt={"Plant 2"}
            isLeftSideImg
          />
          <RectPlantDisplayBox
            title={"For Small Desk Ai Plant"}
            description={
              "Sustainable choices bring harmony to life. Eco-conscious living nurtures the planet and supports future generations with every step we take."
            }
            price={"50,000"}
            imgUrl={"/plants/plant3.png"}
            imgAlt={"Plant 3"}
            isRightSideImg
          />
        </div>
      </BgWrapper>
    </section>
  );
}
