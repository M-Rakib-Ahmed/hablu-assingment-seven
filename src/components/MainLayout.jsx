
import Footer from "./Footer";
import Navbar from "./Navbar";
import Hero from "./Hero";
import OurTrusted from "./OurTrusted";
import Card from "./Card";
import TraniSection from "./TraniSection";
import Hero2 from "./Hero2";
import AllocateSection from "./AllocateSection";


const MainLayout = () => {
    return (
        <div>
           {/*navbar  */}
           <Navbar></Navbar>
           <Hero></Hero>
           <OurTrusted ></OurTrusted>
           <Card></Card>
           <TraniSection></TraniSection>
           <Hero2></Hero2>
           <AllocateSection></AllocateSection>
          
           {/* footer */}
           <Footer></Footer>
        </div>
    );
};

export default MainLayout;