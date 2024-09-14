import { ArrowRightIcon } from "lucide-react";
import GradientButton from "./gradient-button";
import PlantImage from "/plant.jpg";

export const FeaturedPost = () => {
  return (
    <div className="py-10 flex flex-col md:flex-row w-full gap-5">
      <div className="flex-3">
        <img src={PlantImage} className="h-full w-full" />
      </div>
      <div className="flex-4 space-y-3">
        <h2 className="text-2xl font-bold">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </h2>
        <p className="text-justify">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </p>
        <GradientButton type="button">
          <ArrowRightIcon className="size-4" />
          Read more
        </GradientButton>
      </div>
    </div>
  );
};
