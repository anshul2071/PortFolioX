import * as React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "next-themes";
import './index.css';
import { TooltipProvider } from '@radix-ui/react-tooltip';

const root = createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <ThemeProvider attribute={"class"}>
      <TooltipProvider delayDuration={200}>
      <BrowserRouter>
      <App/>
      </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </React.StrictMode>
)