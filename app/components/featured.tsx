import { FeaturedPost } from "./feature-post";

export const Featured = () => {
  return (
    <div className="h-screen">
      <h1 className="text-xl md:text-3xl lg:text-7xl">
        Hey, <strong>Salman </strong> here! Discover
        <br />
        my stories and creative ideas.
      </h1>
      <FeaturedPost />
    </div>
  );
};
