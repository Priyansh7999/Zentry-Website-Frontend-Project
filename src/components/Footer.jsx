import React, { useEffect, useRef } from 'react';

export default function Footer() {
  const footerRef = useRef(null);
  const zentryRef = useRef(null);
  const navItemsRef = useRef([]);
  
  useEffect(() => {
    const footer = footerRef.current;
    const zentryText = zentryRef.current;
    const navItems = navItemsRef.current;
    
    if (footer) {
      footer.style.transform = 'translateY(100%)';
      footer.style.transition = 'transform 1.2s cubic-bezier(0.77, 0, 0.175, 1)';
      setTimeout(() => {
        footer.style.transform = 'translateY(0)';
      }, 100);
    }
    
    if (zentryText) {
      zentryText.style.opacity = '0';
      zentryText.style.transform = 'scale(0.8)';
      zentryText.style.transition = 'all 1.5s cubic-bezier(0.77, 0, 0.175, 1)';
      
      setTimeout(() => {
        zentryText.style.opacity = '1';
        zentryText.style.transform = 'scale(1)';
      }, 600);
    }
    
    navItems.forEach((item, index) => {
      if (item) {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = `all 0.8s cubic-bezier(0.77, 0, 0.175, 1) ${index * 0.1}s`;
        
        setTimeout(() => {
          item.style.opacity = '1';
          item.style.transform = 'translateY(0)';
        }, 800 + index * 100);
      }
    });
  }, []);
  
  const addToRefs = (el) => {
    if (el && !navItemsRef.current.includes(el)) {
      navItemsRef.current.push(el);
    }
  };
  
  return (
    <div className='relative w-full overflow-hidden'>
      <div 
        ref={footerRef}
        className='relative w-full bg-gradient-to-br from-purple-600 via-violet-600 to-indigo-700 text-white overflow-hidden'
        style={{ minHeight: '60vh' }}
      >
        <div className="relative w-full overflow-hidden">
          <div 
            ref={zentryRef}
            className="relative w-full h-full flex items-center justify-center py-4 sm:py-6 lg:py-8"
          >
            <div className="text-center px-2">
              <h1 
                className="text-white font-black tracking-tighter leading-none select-none"
                style={{ 
                  fontSize: 'clamp(4rem, 15vw, 24rem)',
                  textShadow: '0 0 30px rgba(255,255,255,0.3)',
                  background: 'linear-gradient(45deg, #ffffff, #e0e7ff, #c7d2fe)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                ZENTRY
              </h1>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 border border-white/20 rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white/20 rotate-45"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-12 lg:mb-16">
            <div ref={addToRefs} className="space-y-6">
              <h3 className="text-lg font-bold text-purple-200 tracking-wider">EXPLORE</h3>
              <div className="space-y-4">
                {['Home', 'Prologue', 'About', 'Contact'].map((item, index) => (
                  <a 
                    key={item}
                    href="#" 
                    className="block text-white hover:text-purple-200 transition-all duration-300 hover:translate-x-2 text-lg font-medium"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
            
            <div ref={addToRefs} className="space-y-6">
              <h3 className="text-lg font-bold text-purple-200 tracking-wider">PRODUCTS</h3>
              <div className="space-y-4">
                {['Radiant', 'Nexus ↗', 'Zigma', 'Azul'].map((item, index) => (
                  <a 
                    key={item}
                    href="#" 
                    className="block text-white hover:text-purple-200 transition-all duration-300 hover:translate-x-2 text-lg font-medium"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            <div ref={addToRefs} className="space-y-3 sm:space-y-4 lg:space-y-6">
              <h3 className="text-sm sm:text-base lg:text-lg font-bold text-purple-200 tracking-wider">FOLLOW US</h3>
              <div className="space-y-2 sm:space-y-3 lg:space-y-4">
                {['Discord', 'X', 'Youtube', 'Medium'].map((item, index) => (
                  <a 
                    key={item}
                    href="#" 
                    className="block text-white hover:text-purple-200 transition-all duration-300 hover:translate-x-1 sm:hover:translate-x-2 text-sm sm:text-base lg:text-lg font-medium"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
            
            <div ref={addToRefs} className="space-y-3 sm:space-y-4 lg:space-y-6">
              <h3 className="text-sm sm:text-base lg:text-lg font-bold text-purple-200 tracking-wider">RESOURCES</h3>
              <div className="space-y-2 sm:space-y-3 lg:space-y-4">
                {['Media Kit'].map((item, index) => (
                  <a 
                    key={item}
                    href="#" 
                    className="block text-white hover:text-purple-200 transition-all duration-300 hover:translate-x-1 sm:hover:translate-x-2 text-sm sm:text-base lg:text-lg font-medium"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="relative z-10 border-t border-white/20">
          <div className="max-w-7xl mx-auto px-8 py-6 flex flex-col md:flex-row justify-between items-center">
            <div ref={addToRefs} className="flex items-center space-x-4 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-white/20 rounded transform rotate-45"></div>
              <span className="text-sm text-purple-200">Made By Priyansh Saxena</span>
            </div>
            <div ref={addToRefs}>
              <a href="#" className="text-sm text-purple-200 hover:text-white transition-colors duration-300">
                PRIVACY POLICY
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}