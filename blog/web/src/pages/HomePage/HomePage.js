import { Link, routes } from '@redwoodjs/router'
import BlogLayout from 'src/layouts/BlogLayout'

const HomePage = () => {
  return (
    <>
      <BlogLayout>
        <p>This page is the home!</p>
      </BlogLayout>
    </>
  )
}

export default HomePage
