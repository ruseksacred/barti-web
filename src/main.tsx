import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

import "./styles/globals.css";
import "./styles/navbar.css";
import "./styles/hero.css";
import "./styles/services.css";
import "./styles/footer.css";
import "./styles/contact.css";
import "./styles/faq.css";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <App />
    </StrictMode>
);
