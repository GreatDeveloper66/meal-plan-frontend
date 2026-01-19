import { BrowserRouter } from "react-router-dom";
import { AppShell } from "../components/layout/AppShell";
import { Router } from "./Router";

export default function App() {
  return (
    <BrowserRouter>
      <AppShell>
        <Router />
      </AppShell>
    </BrowserRouter>
  );
}
