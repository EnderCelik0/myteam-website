import { Outlet } from "react-router-dom";
import Nav from "../components/navbar";
import Footer from "../components/footer";
import Wrapper from "../components/wrapper";

function App() {
  return (
    <div className="selection:text-white min-h-screen font-livvic selection:bg-midnight-green">
      <Wrapper bg="bg-midnight-green">
        <Nav />
      </Wrapper>

      <Outlet />

      <Wrapper bg="bg-dark-green">
        <Footer />
      </Wrapper>
    </div>
  );
}

export default App;
