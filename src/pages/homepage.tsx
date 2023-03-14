import axios from "axios";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Cardprofile from "../components/Cardprofile";
import Layout from "../components/Layout";
import { useTitle } from "../utils/hooks/useTittle";
import { CreatorTypes } from "../utils/types/type";

const homepage = () => {
  useTitle("The Creators");
  const [creators, setCreator] = useState<CreatorTypes[]>([]);

  useEffect(() => {
    listCreator();
  }, []);

  function listCreator() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((creator) => {
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

  function handlerFavorite(creator: CreatorTypes) {
    const getCreator = localStorage.getItem("AddFavorite");

    if (getCreator) {
      let parseCreator: CreatorTypes[] = JSON.parse(getCreator);
      const creatorExist = parseCreator.find((item) => item.id === creator.id);

      if (creatorExist) {
        alert("Creator Favoritemu sudah ditambahkan");
      } else {
        parseCreator.push(creator);
        localStorage.setItem("AddFavorite", JSON.stringify(parseCreator));
      }
    } else {
      localStorage.setItem("AddFavorite", JSON.stringify([creator]));
    }
    alert("Creator favoritemu sudah ditambahkan");
  }

  return (
    <Layout>
      <h1 className="text-2xl font-bold text-center p-10">List Creator</h1>
      <div className="grid grid-cols-4 gap-3 justify-items-center p-10">
        {creators.map((creator) => (
          <Cardprofile
            id={creator.id}
            name={creator.name}
            username={creator.username}
            onClickFav={() => handlerFavorite(creator)}
          />
        ))}
      </div>
    </Layout>
  );
};

export default homepage;
