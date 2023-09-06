import { Play } from "../Svg";

function ShowcaseVideo() {
  return (
    <div
      className="lg:h-[568px] md:h-[450px] h-[396px] w-full bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{
        backgroundImage: "url(/images/videoCover.png)",
      }}
    >
      <div className="cursor-pointer bg-primary rounded-full w-[101px] h-[101px] flex items-center justify-center">
        <Play width={48} height={48} />
      </div>
    </div>
  );
}

export default ShowcaseVideo;
