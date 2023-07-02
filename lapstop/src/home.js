import sample from "./assets/introvid.mp4"
import './home.css';
function Home() {
    return (
        <body>
            <video autoPlay muted loop id="myVideo">
                <source src={sample} type="video/mp4" />
            </video>
            <div className="logo"></div>
        </body>
    )
}

export default Home;