import { Link, Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

function HomePage() {

    return <>
        <Header></Header>
        <h1>Wellcome!!!</h1>
        <Link to="post">Posts</Link>
        <hr></hr>
        <div className="PostApp">

            <Outlet />
        </div>
        <hr></hr>
        <Footer></Footer>
    </>
}

export default HomePage;