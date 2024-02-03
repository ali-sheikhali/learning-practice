import React from 'react'
import HeroHeader from '../components/HeroHeader'
import ItemsState from '../components/ItemsState'
import FeaturedCourses from '../components/FeaturedCourses'
import NewestCourse from '../components/NewestCourse'
import LatestBundles from '../components/LatestBundles'
import TrendingCategories from '../components/TrendingCategories'

function Home() {
  return (
    <div>
      <HeroHeader />
      <ItemsState />
      <FeaturedCourses />
      <NewestCourse />
      <LatestBundles />
      <TrendingCategories />
    </div>
  )
}

export default Home