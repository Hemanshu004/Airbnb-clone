import React, { useEffect } from 'react';
import { allPhotos } from '../data/photos';

export default function Lightbox({ isOpen, onClose, currentIndex, setCurrentIndex }) {
  useEffect(() => {
    if (!isOpen) return;
    
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        setCurrentIndex(prev => (prev > 0 ? prev - 1 : prev));
      } else if (e.key === 'ArrowRight') {
        setCurrentIndex(prev => (prev < allPhotos.length - 1 ? prev + 1 : prev));
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, setCurrentIndex]);

  if (!isOpen) return null;

  return (
    <div 
      className="_zFbfbh" 
      aria-hidden={!isOpen} 
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 2000,
        backgroundColor: '#000',
        display: 'flex',
        flexDirection: 'column',
        opacity: isOpen ? 1 : 0,
        visibility: isOpen ? 'visible' : 'hidden',
        transition: 'opacity 0.3s ease, visibility 0.3s ease'
      }}
    >
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '24px', color: '#fff' }}>
        <button 
          onClick={onClose} 
          style={{ background: 'transparent', border: 'none', color: '#fff', cursor: 'pointer', padding: '8px' }}
          aria-label="Close lightbox"
        >
          <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{display: 'block', height: '16px', width: '16px', fill: 'currentColor'}}>
            <path d="m20 28-11.3-11.3a1 1 0 0 1 0-1.4L20 4"></path>
          </svg>
        </button>
        <div style={{ fontSize: '16px', fontWeight: 500 }}>
          {currentIndex + 1} / {allPhotos.length}
        </div>
        <div style={{ display: 'flex', gap: '16px' }}>
           <button style={{ background: 'transparent', border: 'none', color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{display: 'block', height: '16px', width: '16px', fill: 'none', stroke: 'currentColor', strokeWidth: 2}}><path d="m27 18v9c0 1.1046-.8954 2-2 2h-18c-1.10457 0-2-.8954-2-2v-9m11-15v21m-10-11 9.2929-9.29289c.3905-.39053 1.0237-.39053 1.4142 0l9.2929 9.29289" fill="none"></path></svg>
          </button>
          <button style={{ background: 'transparent', border: 'none', color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <svg viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{display: 'block', height: '16px', width: '16px', fill: 'currentColor'}}><path d="M16 28C7 22 3 16 3 10.5A6.5 6.5 0 0 1 16 8a6.5 6.5 0 0 1 13 2.5C29 16 25 22 16 28z"></path></svg>
          </button>
        </div>
      </header>
      
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
        <button 
          onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
          style={{ position: 'absolute', left: '32px', top: '50%', transform: 'translateY(-50%)', background: '#fff', border: 'none', borderRadius: '50%', width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: currentIndex === 0 ? 'not-allowed' : 'pointer', opacity: currentIndex === 0 ? 0.5 : 1, zIndex: 10 }}
        >
          <svg viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{display: 'block', height: '16px', width: '16px', fill: 'none', stroke: '#000', strokeWidth: 4}}><path d="m20 28-11.3-11.3a1 1 0 0 1 0-1.4L20 4"></path></svg>
        </button>

        <img 
          src={allPhotos[currentIndex]} 
          alt={`Photo ${currentIndex + 1}`} 
          style={{ maxWidth: '100%', maxHeight: '85vh', objectFit: 'contain' }}
        />

        <button 
          onClick={() => setCurrentIndex(prev => Math.min(allPhotos.length - 1, prev + 1))}
          style={{ position: 'absolute', right: '32px', top: '50%', transform: 'translateY(-50%)', background: '#fff', border: 'none', borderRadius: '50%', width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: currentIndex === allPhotos.length - 1 ? 'not-allowed' : 'pointer', opacity: currentIndex === allPhotos.length - 1 ? 0.5 : 1, zIndex: 10 }}
        >
          <svg viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{display: 'block', height: '16px', width: '16px', fill: 'none', stroke: '#000', strokeWidth: 4}}><path d="m12 4 11.3 11.3a1 1 0 0 1 0 1.4L12 28"></path></svg>
        </button>
      </div>
    </div>
  );
}
