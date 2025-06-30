import * as React from "react";
import {AnimatePresence} from "framer-motion";
import Preloader from "./components/Preloader";
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import AppRoutes from "./routes/AppRoute";
import { useEffect ,useState} from "react";



const App: React.FC =() => {

  
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const tOut = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(tOut);
  }, []);


  return (
    <>
    <AnimatePresence>
      {loading && <Preloader key = "loader" onFinish={() => setLoading(false)} /> }

    </AnimatePresence>
    {!loading && (
      <>
      <NavBar/>
      <AppRoutes/>
      <Footer/>
      </>
    )}
    </>
  );
}


export default App;