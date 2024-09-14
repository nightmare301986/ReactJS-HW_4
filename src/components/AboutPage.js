import { Link } from "react-router-dom";
import './AboutPage.css';
function AboutPage() {
   
    return (
        <div className="aboutpage">
        <h1>О нас</h1>
        <Link to="/">Главная страница</Link>
        </div>
    );
}
export default AboutPage;