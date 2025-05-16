import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    pauseOnHover: false,
  };

  return (
    <>
      <div className="w-full  h-[60vh] sm:h-screen bg-blue-900 flex items-start justify-center overflow-hidden max-w-screen">
        <div className="w-full max-w-screen relative">
          <Slider {...settings}>
            <div className="relative ">
              <img
                src="/src/assets/images/car1.jpeg"
                alt="Slide 1"
                className="w-full  h-[60vh] sm:h-screen object-cover  object-center opacity-75"
              />
              <div className="absolute text-center top-1/3 left-1/2 transform -translate-x-1/2 w-[90%] max-w-xl  text-white">
                <h2 className="lg:text-6xl md:text-5lg text-4xl font-bold mb-2 ">
                  Drive Your Dream
                </h2>
                <p className="text-2xl md:text-4xl font-semibold w-full max-w-x">
                  Explore our exclusive car collection
                </p>
              </div>
            </div>

            <div className="relative">
              <img
                src="/src/assets/images/hyundai-motor-group-FvK8d346m_s-unsplash.jpg"
                alt="Slide 2"
                className="w-full  h-[60vh] sm:h-screen object-cover  opacity-75"
              />
              <div className="absolute text-center top-1/3 left-1/2 transform -translate-x-1/2 w-[90%] max-w-xl  text-white">
                <h2 className="lg:text-6xl md:text-5lg text-4xl font-bold mb-2">
                  Comfort & Style
                </h2>
                <p className="text-2xl md:text-4xl font-semibold">
                  Modern vehicles that suit your lifestyle
                </p>
              </div>
            </div>

            <div className="relative">
              <img
                src="/src/assets/images/car4.jpeg"
                alt="Slide 3"
                className="w-full h-[60vh] sm:h-screen object-cover opacity-75"
              />
              <div className="absolute text-center top-1/3 left-1/2 transform -translate-x-1/2 w-[90%] max-w-xl  text-white">
                <h2 className="lg:text-6xl md:text-5lg text-4xl font-bold mb-2">
                  Luxury Performance
                </h2>
                <p className="text-2xl  md:text-4xl font-semibold">
                  Rent premium cars at great rates
                </p>
              </div>
            </div>
          </Slider>
        </div>
      </div>
      <div className="bg-white py-12 px-4 text-blue-900 md:hidden block">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-gray-700 mb-6">
            We offer a wide range of premium cars for rent with outstanding
            service and support
          </p>
          <Link
            to="/about"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded transition"
          >
            Learn More
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
