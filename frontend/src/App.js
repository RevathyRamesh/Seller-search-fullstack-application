
import React from "react";
import Header from "./header";
import Footer from "./footer";
import SellerList from "./sellerslist";

const App = () => (
  <>
    {/* Header with Login functionality */}
    <Header />
    <main>
      {/* Main content */}
      <SellerList />
    </main>
    {/* Footer */}
    <Footer />
  </>
);

export default App;

