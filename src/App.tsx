import * as React from "react";
import { AnimatePresence } from "framer-motion";
import Preloader from "./components/Preloader";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import AppRoute from "./routes/AppRoute";

const App: React.FC = () => {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const t = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <Preloader key="loader" onFinish={() => setLoading(false)} />
        )}
      </AnimatePresence>

      {!loading && (
        <>
          <NavBar />
          <AppRoute />
          <Footer />
        </>
      )}
    </>
  );
};

export default App;
