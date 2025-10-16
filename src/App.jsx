import { useEffect, useRef } from "react";
import { scrollFix } from "./utils/Scroll";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import MainBody from "./Body/MainBody";
import { VisibilityProvider } from "./utils/Visibilitycontext";
import ToastWrapper from "./utils/ToastWrapper";
import UserContextProvider from "./Context/UserContextProvider";
  
function App() {
  useEffect(() => {
    scrollFix(); // Execute initially
    window.addEventListener("scroll", scrollFix);
    return () => window.removeEventListener("scroll", scrollFix);
  }, []);

  const contactRef = useRef(null);
  const aboutRef = useRef(null);
  const homeRef = useRef(null);
  const whyRef = useRef(null);

  return (
    <>
      <ToastWrapper />
      {/* <ScrollLine/> */}
      {/* <Privacy /> */}
      {/* <ScrollLine /> */}
      {/* <UserContextProvider> */}
        <VisibilityProvider>
          <Navbar
            contactRef={contactRef}
            aboutRef={aboutRef}
            homeRef={homeRef}
          />
          <MainBody
            contactRef={contactRef}
            aboutRef={aboutRef}
            homeRef={homeRef}
            whyRef={whyRef}
          />
        </VisibilityProvider>
        <Footer />
        {/* <Blog/> */}
        <VisibilityProvider>
          {/* <Navbar /> */}
          {/* <ProDesc /> */}
          {/* <MainBody/> */}
        </VisibilityProvider>
      {/* </UserContextProvider> */}
    </>
  );
}

export default App;
