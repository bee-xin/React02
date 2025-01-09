import { useState } from "react";
import Content from "./Content";
import Nav from "./Nav";
import Footer from "./Footer";
import "./App.css";
function App() {
  const [content, setContent] = useState("Home");
  console.log(content);
  return (
    <>
      <Nav setContent={setContent} />
      <Content content={content} />
      <Footer setContent={setContent}/>
      
    </>
  );
}

export default App;
