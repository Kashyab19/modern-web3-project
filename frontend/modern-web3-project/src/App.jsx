import {Welcome, Footer, Services, Transactions, GlobalNavbar} from "./components";

const App = ()  => {

  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <GlobalNavbar/>
        <Welcome/>
      </div>
      <Services/>
      <Transactions/>
      <Footer/>
    </div>

  )
}

export default App
