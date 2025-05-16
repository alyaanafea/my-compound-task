
const About = () => {
  return (
    <div className=" justify-center flex pt-10 items-center text-white m-auto min-h-screen bg-blue-900">
      <div className="px-3 md:px-5 grid  md:grid-cols-2 gap-10 grid-cols-1 m-auto  justify-center items-center">
        <div>
          <img
            className="w-full opacity-80"
            src="/src/assets/images/car2.webp"
            alt="car-image"
          />
        </div>
        <div className="text-center md:text-start">
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
