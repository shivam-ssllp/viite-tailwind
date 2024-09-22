import image from "./assets/bg.jpg";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="bg-red-500 font-secondary">
        Postmortemshala
        <h2 className="font-primary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quasi
          nulla obcaecati porro impedit laudantium tempore neque ducimus ea,
          doloremque quos. Quisquam ab alias nostrum corrupti explicabo. A,
          reprehenderit dicta.
        </h2>
        <img src={image} className="w-64" alt="" />
      </div>
    </>
  );
}

export default App;
