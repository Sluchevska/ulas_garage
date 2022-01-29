import { Routes, Route, Navigate } from "react-router-dom";
import { Suspense } from "react";

import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Spinner from "./components/Spinner/Spinner";
import Main from "./components/Main/Main";

function App() {
  return (
    <div>
      <Header />
          <Navigation />
          <Main/>
      <Suspense fallback={<Spinner />}>
        <Routes>
          {/* <Route path="/" element={<Navigate replace to="home" />} />
          <Route path="home" element={<MainView />} /> */}
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
