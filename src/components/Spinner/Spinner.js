import Loader, { ThreeDots } from 'react-loader-spinner';
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

export default function Spinner() {
  return (
    <div className="loaderContainer">
      <ThreeDots color="#ff751d" height={40} width={40} width="100%" />
    </div>
  );
}