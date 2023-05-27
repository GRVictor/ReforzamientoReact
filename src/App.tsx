import { Route, Navigate, Routes } from "react-router-dom";
import { Default, Header, Home } from "./common/screens";
import { MainTypeScript } from "./components/typescript/MainTypeScript";
import { MainHook } from "./hooks/MainHook";

export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/typescript" element={<MainTypeScript />} />
        <Route path="/hooks" element={<MainHook />} />
        <Route path="/default" element={<Default />} />
        <Route path="/*" element={<Navigate to={"/default"} />} />
      </Routes>
    </div>
  );
}
