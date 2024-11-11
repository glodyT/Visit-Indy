import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="border-b py-4 px-4 sm:px-10 bg-white tracking-wide relative z-50">
      <div className='max-w-7xl w-full mx-auto flex flex-wrap items-center gap-4'>
        <a href="/" className="flex items-center space-x-3 lg:pr-16 pr-6">
        <img src="/images/logo.png" alt="Logo" className="w-8 h-8 object-contain cursor-pointer" />
          <h2 className="font-normal text-2xl leading-6 text-gray-800">Indianapolis</h2>
        </a>

        <div className={`lg:flex lg:ml-12 lg:items-center lg:gap-x-8 ${isMenuOpen ? 'block' : 'hidden'} lg:!block`}>
          <nav className="lg:flex lg:space-x-6">
            <ul className="lg:flex lg:gap-x-6 max-lg:space-y-3">
              <li className="max-lg:border-b max-lg:py-3 px-3">
                <a href='#attractions' className='hover:text-blue-600 block font-bold transition-all'>
                  Attractions
                </a>
              </li>
              <li className="max-lg:border-b max-lg:py-3 px-3">
                <a href='#dining' className='hover:text-blue-600 block font-bold transition-all'>
                  Dining
                </a>
              </li>
              <li className="max-lg:border-b max-lg:py-3 px-3">
                <a href='#events' className='hover:text-indigo-600 block font-bold transition-all'>
                  Events
                </a>
              </li>
              <li className="max-lg:border-b max-lg:py-3 px-3">
                <a href='#culture' className='hover:text-indigo-600 block font-bold transition-all'>
                  Culture
                </a>
              </li>
              <li className="max-lg:border-b max-lg:py-3 px-3">
                <a href='#about' className='hover:text-indigo-600 block font-bold transition-all'>
                  About
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className='flex ml-auto items-center'>
          <button className='bg-indigo-600 hover:bg-indigo-700 text-white flex items-center transition-all font-semibold rounded-md px-5 py-3'>
            Plan Your Visit
            <svg xmlns="http://www.w3.org/2000/svg" className="w-[14px] fill-current ml-2" viewBox="0 0 492.004 492.004">
              <path d="M484.14 226.886 306.46 49.202c-5.072-5.072-11.832-7.856-19.04-7.856-7.216 0-13.972 2.788-19.044 7.856l-16.132 16.136c-5.068 5.064-7.86 11.828-7.86 19.04 0 7.208 2.792 14.2 7.86 19.264L355.9 207.526H26.58C11.732 207.526 0 219.15 0 234.002v22.812c0 14.852 11.732 27.648 26.58 27.648h330.496L252.248 388.926c-5.068 5.072-7.86 11.652-7.86 18.864 0 7.204 2.792 13.88 7.86 18.948l16.132 16.084c5.072 5.072 11.828 7.836 19.044 7.836 7.208 0 13.968-2.8 19.04-7.872l177.68-177.68c5.084-5.088 7.88-11.88 7.86-19.1.016-7.244-2.776-14.04-7.864-19.12z" />
            </svg>
          </button>

          <button 
            onClick={toggleMenu}
            className='lg:hidden ml-4 p-2 rounded-md hover:bg-gray-100'
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;