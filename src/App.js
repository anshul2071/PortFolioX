import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { AnimatePresence } from "framer-motion";
import Preloader from "./components/Preloader";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import AppRoute from "./routes/AppRoute";
const App = () => {
    const [loading, setLoading] = React.useState(true);
    React.useEffect(() => {
        const t = setTimeout(() => setLoading(false), 3000);
        return () => clearTimeout(t);
    }, []);
    return (_jsxs(_Fragment, { children: [_jsx(AnimatePresence, { children: loading && (_jsx(Preloader, { onFinish: () => setLoading(false) }, "loader")) }), !loading && (_jsxs(_Fragment, { children: [_jsx(NavBar, {}), _jsx(AppRoute, {}), _jsx(Footer, {})] }))] }));
};
export default App;
