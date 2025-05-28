import { Routes, Route } from 'react-router-dom'
import Layout from '@/components/layout/Layout'
import Home from '@/pages/Home'
import Programs from '@/pages/Programs'
import About from '@/pages/About'
import Blog from '@/pages/Blog'
import BlogPostPage from '@/pages/BlogPost'
import Contact from '@/pages/Contact'
import Apply from '@/pages/Apply'
import NotFound from '@/pages/NotFound'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPostPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  )
} 