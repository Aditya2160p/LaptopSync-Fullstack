import './products.css';
import sample from "./assets/asus.mp4"
import sample1 from "./assets/alienware.mp4"
import sample2 from "./assets/razer.mp4"
import sample3 from "./assets/omen.mp4"
function Products() {
    return (
        <body>
            <video autoPlay muted loop id="asusVideo">
                <source src={sample} type="video/mp4" />
            </video>
            <video autoPlay muted loop id="alienwareVideo">
                <source src={sample1} type="video/mp4" />
            </video>
            <video autoPlay muted loop id="razerVideo">
                <source src={sample2} type="video/mp4" />
            </video>
            <video autoPlay muted loop id="omenVideo">
                <source src={sample3} type="video/mp4" />
            </video>
            <a href="#">
                <div className="v11_2"></div>
            </a>
            <a href="#">
                <div className="v11_3"></div>
            </a>
            <a href="#">
                <div className="v11_4"></div>
            </a>
            <a href="#">
                <div className="v11_5"></div>
            </a>
        </body>
    )
}
export default Products;