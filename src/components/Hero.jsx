import skyline from "./images/Skyline.png";
/**Used img-fluid to make sure the hero goes all the way across the screen */

export default function Hero() {
  return (
    <div className="hero">
      <img className="img-fluid" src={skyline} alt="Vegas skyline at night" />
    </div>
  );
}
