import React from "react";
import Cardprofile from "../components/Cardprofile";
import Layout from "../components/Layout";

const homepage = () => {
  return (
    <Layout>
      <div className="grid grid-cols-4 gap-4 justify-items-center p-10">
        <div>
          <Cardprofile />
        </div>
      </div>
    </Layout>
  );
};

export default homepage;
