import Navbar from "./Components/Navbar";
import Me from "./Components/Me";
import Education from "./Components/Education";
import Technologies from "./Components/Technologies";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
      <div className="absolute -z-10 h-full w-full items-center px-0 py-24 bg-[radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      </div>
      <div className="flex flex-col min-h-screen w-full">
        <Navbar />
        <Me />
        <Technologies/>
        <Education/>
        <Projects/>
        <Contact/>
      </div>
      
    </div>
  );
};

export default App;
