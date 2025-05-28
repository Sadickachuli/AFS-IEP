import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page Not Found - Ghana IEP</title>
        <meta name="description" content="The page you're looking for could not be found." />
      </Helmet>

      <div className="container min-h-[70vh] flex items-center justify-center py-12">
        <div className="text-center">
          <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Page Not Found</h2>
          <p className="text-gray-600 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link to="/" className="btn-primary">
            Return Home
          </Link>
        </div>
      </div>
    </>
  )
} 