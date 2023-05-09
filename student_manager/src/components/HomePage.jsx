import { Outlet } from "react-router";
import Footer from "./Footer";
import Header from "./Header";

function HomePage () {
    
    return<>
    <Header />
    <hr></hr>
    <div>
      <Outlet /> 
    </div>
    <hr></hr>
    <Footer />
    </>
}

export default HomePage;