import "./App.css";
import Carousel from "./components/Carousel";
import green15 from "./assets/green15.jpg";
import red17 from "./assets/red17.jpg";
import red20 from "./assets/red20.jpg";
import silver17 from "./assets/silver17.jpg";
import silver21 from "./assets/silver21.jpg";

const App = (): JSX.Element => {
  return <Carousel images={[green15, red17, red20, silver17, silver21]} />;
};

export default App;
