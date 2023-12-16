import Img1 from "/public/cardImage/Rectangle_1.png";
import Img2 from "/public/cardImage/Rectangle_2.png";
import Img3 from "/public/cardImage/Rectangle_3.png";
import Card from "@/components/Card";

const cardDetails = [
  {
    image: Img1,
    title: "This is a one line title",
    description: "Two line paragraph Lorem ipsum dolor sit amet, consectetur",
    regularPrice: 1050,
    offerPrice: 750,
    time: 10,
    view: 308,
    book: 17,
  },
  {
    image: Img2,
    title: "This is a one line title",
    description: "Two line paragraph Lorem ipsum dolor sit amet, consectetur",
    regularPrice: 750,
    time: 10,
    view: 308,
    book: 17,
  },
  {
    image: Img3,
    title: "This is a one line title",
    description: "Two line paragraph Lorem ipsum dolor sit amet, consectetur",
    time: 10,
    view: 308,
    book: 17,
  },
];

const CardSection = () => {
  return (
    <div>
      <section className="items-center grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto py-10 px-5">
        {cardDetails.map((card, index) => (
          <div className="col-span-1" key={index}>
            <Card
              image={card.image}
              title={card.title}
              description={card.description}
              regularPrice={card.regularPrice}
              offerPrice={card.offerPrice}
              time={card.time}
              view={card.view}
              book={card.book}
            />
          </div>
        ))}
      </section>
    </div>
  );
};

export default CardSection;
