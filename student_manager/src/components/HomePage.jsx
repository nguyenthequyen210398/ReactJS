import { Outlet } from "react-router";
import Footer from "./Footer";
import Header from "./Header";
import { Link } from "react-router-dom";

function HomePage () {
    
    return<>
    <Header />
    <Link to="student">Students</Link>
    <hr></hr>
    <div>
      <Outlet /> 
    </div>
    <hr></hr>
    <Footer />
    </>
}

export default HomePage;