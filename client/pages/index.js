import React from "react";
import Dashboard from "../components/dashboard/dashboard";
import Search from "../components/search/search";

const Home = () => (
  <>
    <div className="my-5">
      <Search />
    </div>
    <div className="my-5">
      <Dashboard />
    </div>
  </>
);

export default Home;
