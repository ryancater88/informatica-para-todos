import HeaderComponent from "./components/header/headerComponent";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomepageComponent from "./pages/Homepage";
import { FooterComponent } from "./components/footer/footerComponent";


export function App() {
    return (
        <Router>
            <HeaderComponent/>
                <Routes>
                    <Route exact path="/" Component={HomepageComponent} />
                </Routes>
            <FooterComponent/>
        </Router>
    )
}