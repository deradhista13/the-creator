import axios from "axios";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Cardprofile from "../components/Cardprofile";
import Layout from "../components/Layout";

interface CreatorTypes {
  id: number;
  name: string;
  username: string;
}

const homepage = () => {
  const [creators, setCreator] = useState<CreatorTypes[]>([]);

  useEffect(() => {
    listCreator();
  }, []);

  function listCreator() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((creator) => {
        //console.log(creator);
        setCreator(creator.data);
      })
      .catch((error) => {
        Swal.fire({
          title: "Gagal",
          text: error.response.data.message,
          icon: "error",
          confirmButtonAriaLabel: "ok",
        });
      });
  }

  return (
    <Layout>
      <div className="grid grid-cols-4 gap-4 justify-items-center p-10">
        {creators.map((creator) => (
          <Cardprofile
            id={creator.id}
            name={creator.name}
            username={creator.username}
          />
        ))}
      </div>
    </Layout>
  );
};

export default homepage;
