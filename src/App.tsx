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
import Impact from '@/pages/Impact'
import Partners from '@/pages/Partners'
import Volunteers from '@/pages/Volunteers'

// Placeholder pages
const Donate = () => <div className="container py-20 text-center"><h1 className="text-4xl font-bold mb-4">Donate</h1><p className="text-lg">Support IEP Ghana. Online donation coming soon!</p></div>;
const Partnership = () => <div className="container py-20 text-center"><h1 className="text-4xl font-bold mb-4">Partnership</h1><p className="text-lg">Become a partner. Partnership form and info coming soon!</p></div>;

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
        <Route path="/volunteers" element={<Volunteers />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/partnership" element={<Partnership />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  )
} 