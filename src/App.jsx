import { Container } from "@mui/material"
import Home from "./components/pages/Home"
import Header from './components/layouts/Header';
// import Footer from "./components/layouts/Footer";


const App = () => {
  return (
    <Container maxwidth="xl">
      <Header />
      <Home />
      {/* <Footer /> */}
    </Container>
  )
}

export default App
