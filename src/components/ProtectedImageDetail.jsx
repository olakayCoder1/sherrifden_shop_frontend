import React, { useEffect } from 'react';

const ProtectedImageDetail = ({ src, alt }) => {
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
    <div className="shrink-0 max-w-md lg:max-w-lg mx-auto">
      <img className="w-full" src={src} alt={alt} />
    </div>
  );
};

export default ProtectedImageDetail;
