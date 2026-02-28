import { Route, Routes } from "react-router-dom"
import { Layout } from "./components/Layout/Layout"
import Home from "./pages/Home"
import Movies from "./pages/Movies"
import MovieDetail from "./pages/MovieDetail"
import Favourites from "./pages/Favourites"
import NotFound from "./pages/NotFound"

function App() {

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/movies/:id" element={<MovieDetail />} />
        <Route path="/favourites" element={<Favourites />}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  )
}

export default App