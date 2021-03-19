import "./index.scss";
import { Button, Tile, TileVideo } from "mc-components";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const onClickHome = () => {
  window.location.href = "masterclass://home";
};

const onClickProfile = () => {
  window.location.href = "masterclass://profile";
};

export default function App() {
  const [sliderRef, slider] = useKeenSlider();

  return (
    <div className="mc-theme-dark">
      <div id="my-keen-slider" className="keen-slider" ref={sliderRef}>
        <div className="keen-slider__slide">
          <Tile aspectRatio="3x4">
            <TileVideo
              videoId={"6209442083001"}
              autoPlay
              loop
              muted
              controls={false}
              playsInline
            />
          </Tile>
          <div className="d-block mc-my-4 mc-text--center">
            <h5 className="mc-text-h5">Learn from the best.</h5>
            <p className="mc-opacity--muted">
              Online classes taught by the world's best. Gordon Ramsay, Stephen
              Curry, and more.
            </p>
          </div>
        </div>
        <div className="keen-slider__slide">
          <Tile aspectRatio="3x4">
            <TileVideo
              videoId={"6209442083001"}
              autoPlay
              loop
              muted
              controls={false}
              playsInline
            />
          </Tile>
          <div className="d-block mc-my-4 mc-text--center">
            <h5 className="mc-text-h5">Download and watch.</h5>
            <p className="mc-opacity--muted">
              Download digestable lessons bla bla offline and at any bla.
            </p>
          </div>
        </div>
        <div className="keen-slider__slide">
          <Tile aspectRatio="3x4">
            <TileVideo
              videoId={"6209442083001"}
              loop
              autoPlay
              muted
              controls={false}
              playsInline
            />
          </Tile>
          <div className="d-block mc-my-4 mc-text--center">
            <h5 className="mc-text-h5">Explore a range of topics.</h5>
            <p className="mc-opacity--muted">
              Perfect homemade pasta, or write a screenplay -- all with access
              to 103+ classes.
            </p>
          </div>
        </div>
      </div>
      <div className="d-flex flex-column mc-my-4">
        <Button fullWidth onClick={onClickHome}>
          Explore the app
        </Button>
        <Button fullWidth kind="link" onClick={onClickProfile}>
          Log in
        </Button>
      </div>
    </div>
  );
}
