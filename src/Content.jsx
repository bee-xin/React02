import Copyright from "./Copyright";
import Terms from "./Terms";
import Maap from "./Maap";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
function Content({ content }) {
  switch (content) {
    case "Home":
      return <Home/>;
    case "About":
      return <About/>;
    case "Contact":
      return <Contact/>;
    case "Copyright":
      return <Copyright />;
    case "Terms":
      return <Terms />;
    case "Maap":
      return <Maap />;
  }
}

export default Content;
