import logo from "../assets/logo.png";

export default function Home() {
  return (
    <div className="home fullscreen padding">
      <img src={logo} alt="Game title" class="logo" />
      <form action="" className="form text-light">
        <strong>TEAM</strong>
        <button className="neutral">
          <h2>RED</h2>
        </button>
        <button className="neutral">
          <h2>BLUE</h2>
        </button>
      </form>
    </div>
  );
};
