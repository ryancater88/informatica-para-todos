import HeaderComponent from "./components/header/headerComponent";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { FooterComponent } from "./components/footer/footerComponent";
import HomepageComponent from "./pages/homepage/Homepage";
import { CoursesComponent } from "./pages/courses/Courses";
import SistemasOperacionaisCompoenent from "./pages/sistemasOperacionais/SistemasOperacionais";
import ConectandoInternetComponent from "./pages/conectandoInternet/ConectandoInternetComponent";
import ProblemasInternetComponent from "./pages/problemasInternet/ProblemasInternetComponent";
import ConfiguracoesWindowsComponent from "./pages/configuracoesWindows/ConfiguracoesWindowsComponent";
import InstalandoImpressoraComponent from "./pages/instalandoImpressora/InstalandoImpressoraComponent";
import ProblemasImpressoraComponent from "./pages/problemasImpressora/ProblemasImpressoraComponent";
import SobreComponent from "./pages/sobre/SobreComponent";


export function App() {
    
    return (
        <Router>
            <HeaderComponent/>
                <Routes>
                    <Route exact path="/" Component={HomepageComponent} />
                    <Route exact path="/home" Component={HomepageComponent} />
                    <Route exact path="/about" Component={SobreComponent} />
                    <Route exact path="/course" Component={CoursesComponent} />
                    <Route exact path="/course/so" Component={SistemasOperacionaisCompoenent}/>
                    <Route exact path="/course/connectnetwork" Component={ConectandoInternetComponent}/>
                    <Route exact path="/course/networkproblems" Component={ProblemasInternetComponent}/>
                    <Route exact path="/course/windowsconfig" Component={ConfiguracoesWindowsComponent}/>
                    <Route exact path="/course/printersetup" Component={InstalandoImpressoraComponent}/>
                    <Route exact path="/course/printerproblems" Component={ProblemasImpressoraComponent}/>
                </Routes>
            <FooterComponent/>
        </Router>
    )
}