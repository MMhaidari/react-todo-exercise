import { Routes, Route } from "react-router-dom";
import './App.css';

import Home from "./Routes/Home";
import About from "./Routes/About";
import NotMatch from "./Routes/NotMatch";
import Layout from "./components/Layout";

const TodoApp = () => {
  return (
    <Routes>
      <Route  path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotMatch />} />
      </Route>
    </Routes>
  );
};
export default TodoApp;
