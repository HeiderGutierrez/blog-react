import './assets/sass/main.scss';
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BlogPost from "./pages/BlogPost";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/blog/:id" Component={BlogPost} />
          <Route path='*' Component={NotFound} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
