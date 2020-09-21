import React from "react"
import "style.css"
import "tailwindcss/dist/base.css"
import AnimationRevealPage from "helpers/AnimationRevealPage"
import GridWithFeaturedPost from "components/blogs/GridWithFeaturedPost"

function App() {
  return (
    <AnimationRevealPage disabled>
      <GridWithFeaturedPost />
    </AnimationRevealPage>

  )
}

export default App