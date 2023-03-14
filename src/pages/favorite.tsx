import React, { useEffect, useState } from "react";
import Cardprofile from "../components/Cardprofile";
import Layout from "../components/Layout";
import { useTitle } from "../utils/hooks/useTittle";
import { CreatorTypes } from "../utils/types/type";

const favorite = () => {
  useTitle("Favorite Creator");
  const [creators, setCreator] = useState<CreatorTypes[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    const getFavorite = localStorage.getItem("AddFavorite");
    if (getFavorite) {
      setCreator(JSON.parse(getFavorite));
    }
  }

  function removeFavorite(creator: CreatorTypes) {
    let dupeCreator: CreatorTypes[] = creators.slice();
    const filterData = dupeCreator.filter((item) => item.id !== creator.id);

    localStorage.setItem("FavoriteCreator", JSON.stringify(filterData));
    alert(`${creator.name} from your favorite creator`);
  }

  return (
    <Layout>
      <h1 className="text-2xl font-bold text-center p-10">
        My Favorite Creator
      </h1>
      <div className="grid grid-cols-4 gap-4 justify-items-center p-10">
        {creators.map((creator: CreatorTypes) => (
          <Cardprofile
            id={creator.id}
            name={creator.name}
            username={creator.username}
            onClickFav={() => removeFavorite(creator)}
          />
        ))}
      </div>
    </Layout>
  );
};

export default favorite;
