import About from "../../About/About";
import WhyChooseUs from "../../WhyChooseUs/WhyChooseUs";
import Banner from "../Banner/Banner";
import Card from "../Card/Card";
import ContactUs from "../ContactUs/ContactUs";
// import FeaturesCard from "../FeaturesCard/FeaturesCard";


const Home = () => {
    return (
        <div>
          <Banner></Banner>
          {/* <FeaturesCard></FeaturesCard> */}
          <WhyChooseUs></WhyChooseUs> 
          <About></About>
          <ContactUs></ContactUs>
          <Card></Card>
        </div>
    );
};

export default Home;