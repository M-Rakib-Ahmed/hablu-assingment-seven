
import Footer from "./Footer";
import Navbar from "./Navbar";
import Hero from "./Hero";
import OurTrusted from "./OurTrusted";
import Card from "./Card";
import TraniSection from "./TraniSection";
import Hero2 from "./Hero2";
import AllocateSection from "./AllocateSection";
import EmbraceSection from "./EmbraceSection";


const MainLayout = () => {
    return (
        <div>
           {/*navbar  */}
            <div className="bg-[#02242A]">
                <div className="w-10/12 mx-auto">
                    <Navbar></Navbar>
                    <Hero></Hero>
                    <OurTrusted ></OurTrusted>
                    <Card></Card>
                    <TraniSection></TraniSection>
                    <Hero2></Hero2>
                    <AllocateSection></AllocateSection>
                    <EmbraceSection></EmbraceSection>

                </div>
           </div>
           {/* footer */}
           <Footer></Footer>
        </div>
    );
};

export default MainLayout;