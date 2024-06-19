import Button from "./conponents/button"
import { Layaut } from "./conponents/layaut"
import Navbar from "./conponents/navbar"
import Bloques from "./conponents/bloques"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Inicio from "./pages/inicio"
import Cursos from "./pages/cursos"
import Imagenes from "./pages/imagenes"
import Footer from "./conponents/footer"
import { Box } from "@chakra-ui/react"


function App() {


  return (
    <>
       <Box w='100%'  bgGradient='linear(to-l, #111827, #233876)' >
      <div className=" min-h-screen">
        <Navbar></Navbar>
       
        
         <Routes>
           <Route path="/" element={<Inicio></Inicio>}></Route>
           <Route path="/cursos" element={<Cursos></Cursos>}></Route>
           <Route path="/imagenes" element={<Imagenes></Imagenes>}></Route>
           <Route path="*" element={<Navigate to="/"></Navigate>}></Route>
        
         </Routes>
         
         <Layaut>
        </Layaut>
       
        {/* <Footer></Footer> */}
      </div>
      </Box>
   
    </>
  )
}



export default App

