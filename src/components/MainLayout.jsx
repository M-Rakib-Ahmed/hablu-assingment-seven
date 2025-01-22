
import Footer from "./Footer";
import Navbar from "./Navbar";
import Hero from "./Hero";
import OurTrusted from "./OurTrusted";
import Card from "./Card";
import TraniSection from "./TraniSection";


const MainLayout = () => {
    return (
        <div>
           {/*navbar  */}
           <Navbar></Navbar>
           <Hero></Hero>
           <OurTrusted ></OurTrusted>
           <Card></Card>
           <TraniSection></TraniSection>
          
           {/* footer */}
           <Footer></Footer>
        </div>
    );
};

export default MainLayout;