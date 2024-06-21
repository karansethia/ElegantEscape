import Hero from "../components/Hero";

type HomeProps = {};

const Home = ({}: HomeProps) => {
  return (
    <div className="w-screen">
      <Hero />
    </div>
  );
};

export default Home;
