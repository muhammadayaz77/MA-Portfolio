// pages/index.js
import Head from 'next/head';

export default function Projects() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <Head>
        <title>Grid Layout with Tailwind CSS</title>
        <meta name="description" content="Responsive grid layout with Next.js and Tailwind" />
      </Head>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-7xl">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="grid grid-cols-12 gap-8">
            {/* Left side - Grid 8 */}
            <div className="md:col-span-8">
              <div className="h-96 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg shadow-md overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb" 
                  alt="Beautiful landscape" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Right side - Grid 4 */}
            <div className="col-span-4 flex flex-col justify-between py-6"> {/* Changed to justify-between and added py-6 */}
              <div className="sp-6"> {/* Wrapped content in a div */}
                <h1 className="text-3xl font-bold text-gray-900">Discover Amazing Places</h1>
                
                <p className="text-gray-600">
                  Explore the world with our curated selection of breathtaking destinations. 
                  From majestic mountains to serene beaches, find your next adventure today.
                </p>
              </div>
              
                <button className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-1 px-2 rounded-lg font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200">
                  Explore
                </button>
                
                <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-4 rounded-lg font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200">
                  Learn More
                </button>
                
               
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}     