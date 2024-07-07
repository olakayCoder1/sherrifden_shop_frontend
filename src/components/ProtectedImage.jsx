import React, { useEffect, useState } from 'react';
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { Link} from 'react-router-dom';

const ProtectedImage = ({ src, alt , index , imageTitle}) => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);

  const [isHovered, setIsHovered] = useState(false);

  // Base dimensions
  const baseWidth = 100;
  const baseHeight = 100;

  // Calculate dimensions based on hover state
  const width = isHovered ? baseWidth * 1.8 : baseWidth;
  const height = isHovered ? baseHeight * 1.8 : baseHeight;

  useEffect(() => {
    const handleContextMenu = (e) => {
      if (e.target.tagName === 'IMG') {
        e.preventDefault();
      }
    };
    document.addEventListener('contextmenu', handleContextMenu);
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);

  return (
    <motion.div 
        initial={{ scale: 1 }}
        animate={{ scale: isHovered ? 1.08 : 1 }}
        transition={{ duration: 0.5 }}
        // style={{ backgroundColor: 'blue' }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className="group relative rounded-md">
        <div 
          
          className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        <img 
          
          src={src}
          alt={alt}
          draggable="false"
          className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
          
        </div>
        <div className="mt-4 flex justify-between">
          <div>
              <h3 className="text-sm text-gray-700">
              <Link  to={'/products/details'}>
                  <span aria-hidden="true" className="absolute inset-0"></span>
                  {imageTitle}
              </Link>
              </h3>
              {/* <p className="mt-1 text-sm text-gray-500">Black</p> */}
          </div>
        <p className="text-sm font-medium text-gray-900">$35</p>
        {index % 3 !== 0 && (
          <span className='absolute top-0 text-xs text-white bg-black p-1 px-2 rounded-full border-gray-600 border'>
            sold out
          </span>
        )}
        
        </div>
    </motion.div>
  );
};

export default ProtectedImage;
