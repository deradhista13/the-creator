import Layout from "../components/Layout";
import { useTitle } from "../utils/hooks/useTittle";

const details = () => {
  useTitle("Creator Details");

  return (
    <Layout>
      <div className="hero-content flex-col lg:flex-row justify">
        <div className="card card-side backdrop-blur-xl shadow-xl items-center">
          <img
            src="https://source.unsplash.com/random/800x800/?person=1"
            className="w-1/4 h-1/4 shadow-2xl mx-10 my-10 "
          />
          <div className="mx-14 my-14 text-black">
            <h1 className="text-5xl font-bold ">Serena William</h1>
            <p className="pt-2 text-lg font-semibold">@Username</p>
            <p className="pt-2 text-md">Email: example@mail.com</p>
            <p className="pt-2 text-md">Phone: +62 81234568</p>
            <p className="pt-2 text-md">Website: website@example.com</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default details;
