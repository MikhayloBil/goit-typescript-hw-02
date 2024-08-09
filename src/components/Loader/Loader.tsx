import { Circles } from "react-loader-spinner";

const Loader: React.FC = () => {
  return (
    <div className="loader">
      <Circles color="#00BFFF" height={80} width={80} />
    </div>
  );
};

export default Loader;
