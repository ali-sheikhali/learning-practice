import React from 'react'
import HeroHeader from '../components/HeroHeader'
import ItemsState from '../components/ItemsState'
import FeaturedCourses from '../components/FeaturedCourses'
import NewestCourse from '../components/NewestCourse'

function Home() {
  return (
    <div>
      <HeroHeader />
      <ItemsState />
      <FeaturedCourses />
      <NewestCourse />
    </div>
  )
}

export default Home