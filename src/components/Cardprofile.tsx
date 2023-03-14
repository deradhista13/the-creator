import { FC } from "react";
import { FiArrowUpRight, FiStar } from "react-icons/fi";
import { useNavigate } from "react-router";

interface CardProps {
  name?: string;
  username?: string;
  id?: number;
  onClickFav?: () => void;
}

const Cardprofile: FC<CardProps> = ({ id, name, username, onClickFav }) => {
  const navigate = useNavigate();

  return (
    <div className="card w-64 bg-base-100 shadow-xl rounded-none">
      <figure className="p-5 rounded-none">
        <img
          src="https://source.unsplash.com/random/800x800/?person=1"
          alt={name}
        />
      </figure>
      <div className="px-5">
        <h2 className="card-title text-base">{name}</h2>
        <p className="italic font-medium">@{username}</p>
        <div className="card-actions justify-end m-3">
          <button
            className="btn btn-square btn-sm"
            onClick={() => navigate("/detail_profil")}
          >
            <FiArrowUpRight />
          </button>
          <button className="btn btn-square btn-sm" onClick={onClickFav}>
            <FiStar />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cardprofile;
