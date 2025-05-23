import PlantDisplayBox from "./atoms/PlantDisplayBox";

export default function TopSelling() {
  return (
    <section className="text-center mt-28">
      <h1 className="text-[1.4rem] font-[500]">Our Top Selling</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-6.5 gap-y-22 mt-28 z-[50]">
        <PlantDisplayBox border imgUrl="/plants/plant1.png" />
        <PlantDisplayBox border imgUrl="/plants/plant2.png" />
        <PlantDisplayBox border imgUrl="/plants/plant3.png" />
        <PlantDisplayBox border imgUrl="/plants/plant4.png" />
        <PlantDisplayBox border imgUrl="/plants/plant5.png" />
        <PlantDisplayBox border imgUrl="/plants/plant6.png" />
      </div>
    </section>
  );
}
