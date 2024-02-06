import React from "react";
import HeroHeader from "../components/HeroHeader";
import ItemsState from "../components/ItemsState";
import FeaturedCourses from "../components/FeaturedCourses";
import NewestCourse from "../components/NewestCourse";
import LatestBundles from "../components/LatestBundles";
import TrendingCategories from "../components/TrendingCategories";
import JoinUs from "../components/JoinUs";
import Become from "../components/Become";
import ClubPoint from "../components/ClubPoint";

function Home() {
  return (
    <div>
      <HeroHeader />
      <ItemsState />
      <FeaturedCourses />
      <NewestCourse />
      <TrendingCategories />
      <LatestBundles />
      <JoinUs />
      <Become />
      <ClubPoint />
     
    </div>
  );
}

export default Home;
