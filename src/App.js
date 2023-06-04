import "./App.css";
import ReviewBox from "./Components/Review";
import pdfDisplay from "./Components/pdfDisplay";
import publishedBy from "./Components/publishedBy";

function App() {
    return (
        <div className="App">
            <div className="conatiner">
                <div className="left-section w-1/3 bg-rgb-12-31-48 overflow-y-scroll">
                    <ReviewBox />
                    <publishedBy></publishedBy>
                </div>
                <div className="right-section">
                    Chemistry Notes
                    <pdfDisplay />
                </div>
            </div>
        </div>
    );
}

export default App;
