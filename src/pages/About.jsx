
const About = () => {
  return (
    <div className=" flex justify-center items-start md:items-center text-white min-h-screen bg-blue-900 pt-14">
      <div className=" md:px-5 grid  md:grid-cols-2 md:gap-10 gap-16 grid-cols-1  justify-center items-around md:items-center">
        <div>
          <img
            className="w-full opacity-80"
            src="/images/car2.webp"
            alt="car-image"
          />
        </div>
        <div className="text-center md:text-start px-5 md:px-0">
          <h2 className="font-bold md:text-5xl text-4xl pb-10 ">
            Rent Your Favourite Car
          </h2>
          <p className="text-gray-200">
            Lorem ipsum dolor sit amet consectetur adipisicing accusantium sed
            itaque optio. Nesciunt, aperiam! Animi voluptas asperiores odit
            maiores assumenda iste unde non dolorum maiores assumenda iste unde
            non dolorum!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
