import ReviewDisplayBox from "./atoms/ReviewDisplayBox";

export default function CustomerReview() {
  return (
    <section className="text-center mt-22">
      <h1 className="text-[1.4rem] font-[500]">Customer Review</h1>
      <div className="flex flex-wrap justify-evenly mt-12">
        <ReviewDisplayBox />
        <ReviewDisplayBox />
        <ReviewDisplayBox />
      </div>
    </section>
  );
}
