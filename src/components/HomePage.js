import { Link } from "react-router-dom";

function HomePage() {
   
    return (
        <div className="shadowbox">
        <h1>Главная страница</h1>
        <Link to="/about">О нас</Link>
        </div>
    );
}
export default HomePage;