import HeaderComponent from "./components/header/headerComponent";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { FooterComponent } from "./components/footer/footerComponent";
import HomepageComponent from "./pages/homepage/Homepage";
import { CoursesComponent } from "./pages/courses/Courses";
import SistemasOperacionaisCompoenent from "./pages/sistemasOperacionais/SistemasOperacionais";


export function App() {
    return (
        <Router>
            <HeaderComponent/>
                <Routes>
                    <Route exact path="/" Component={HomepageComponent} />
                    <Route exact path="/home" Component={HomepageComponent} />
                    <Route exact path="/course" Component={CoursesComponent} />
                    <Route exact path="/course/so" Component={SistemasOperacionaisCompoenent} />
                </Routes>
            <FooterComponent/>
        </Router>
    )
}