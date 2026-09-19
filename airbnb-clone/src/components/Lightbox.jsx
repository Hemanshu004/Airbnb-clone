import React, { useEffect } from 'react';
import { allPhotos, tourCategories } from '../data/photos';

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

  const getCurrentCategory = (index) => {
    let count = 0;
    for (const cat of tourCategories) {
      if (index < count + cat.photos.length) {
        return cat.title;
      }
      count += cat.photos.length;
    }
    return "";
  };

  const currentCategory = getCurrentCategory(currentIndex);

  return (
    <div 
      className="_zFbfbh" 
      aria-hidden={!isOpen} 
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 2000,
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'column',
        opacity: isOpen ? 1 : 0,
        visibility: isOpen ? 'visible' : 'hidden',
        transition: 'opacity 0.3s ease, visibility 0.3s ease'
      }}
    >
      <header style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        padding: '24px', 
        color: '#222',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10
      }}>
        <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-start' }}>
          <button 
            onClick={onClose} 
            style={{ 
              background: 'transparent', 
              border: 'none', 
              color: '#222', 
              cursor: 'pointer', 
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              padding: '0'
            }}
            aria-label="Back to grid"
          >
            <span style={{ width: '16px', height: '16px', display: 'flex' }}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" role="presentation" focusable="false" style={{display: 'block', height: '100%', width: '100%', fill: 'currentColor'}}><path fillRule="evenodd" d="M3 11.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-10-5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-10-5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z"></path></svg>
            </span>
          </button>
        </div>
        
        <div style={{ flex: 1, textAlign: 'center', fontSize: '16px', fontWeight: 600, color: '#222' }}>
          {currentCategory}
        </div>
        
        <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '16px' }}>
          <div style={{ fontSize: '14px', color: '#222', fontWeight: 400 }}>
            {currentIndex + 1} of {allPhotos.length}
          </div>
          <button 
            onClick={onClose} 
            style={{ 
              background: 'transparent', 
              border: 'none', 
              color: '#222', 
              cursor: 'pointer', 
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '32px',
              height: '32px',
              padding: 0
            }}
            aria-label="Close"
          >
            <span style={{ width: '16px', height: '16px', display: 'flex' }}>
              <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{display: 'block', height: '100%', width: '100%', fill: 'currentColor'}}><path d="M28 6.4L25.6 4 16 13.6 6.4 4 4 6.4 13.6 16 4 25.6 6.4 28 16 18.4 25.6 28 28 25.6 18.4 16z"></path></svg>
            </span>
          </button>
        </div>
      </header>
      
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', marginTop: '80px', marginBottom: '80px' }}>
        <button 
          onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
          style={{ 
            position: 'absolute', 
            left: '24px', 
            top: '50%', 
            transform: 'translateY(-50%)', 
            background: '#fff', 
            border: '1px solid #222', 
            borderRadius: '50%', 
            width: '48px', 
            height: '48px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            cursor: currentIndex === 0 ? 'default' : 'pointer', 
            opacity: currentIndex === 0 ? 0.28 : 1, 
            zIndex: 10,
            color: '#222',
            transition: 'transform 0.2s, background 0.2s'
          }}
          onMouseOver={(e) => {
            if (currentIndex !== 0) {
              e.currentTarget.style.background = '#F7F7F7';
            }
          }}
          onMouseOut={(e) => {
            if (currentIndex !== 0) {
              e.currentTarget.style.background = '#fff';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
            }
          }}
          onMouseDown={(e) => {
            if (currentIndex !== 0) {
               e.currentTarget.style.transform = 'translateY(-50%) scale(0.92)';
            }
          }}
          onMouseUp={(e) => {
            if (currentIndex !== 0) {
               e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
            }
          }}
          aria-label="Previous image"
        >
          <svg viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{display: 'block', height: '14px', width: '14px', fill: 'none', stroke: 'currentcolor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round'}}><path d="m20 28-12-12 12-12"></path></svg>
        </button>

        <img 
          src={allPhotos[currentIndex]} 
          alt={`Photo ${currentIndex + 1}`} 
          style={{ maxWidth: '80%', maxHeight: '100%', objectFit: 'contain' }}
        />

        <button 
          onClick={() => setCurrentIndex(prev => Math.min(allPhotos.length - 1, prev + 1))}
          style={{ 
            position: 'absolute', 
            right: '24px', 
            top: '50%', 
            transform: 'translateY(-50%)', 
            background: '#fff', 
            border: '1px solid #222', 
            borderRadius: '50%', 
            width: '48px', 
            height: '48px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            cursor: currentIndex === allPhotos.length - 1 ? 'default' : 'pointer', 
            opacity: currentIndex === allPhotos.length - 1 ? 0.28 : 1, 
            zIndex: 10,
            color: '#222',
            transition: 'transform 0.2s, background 0.2s'
          }}
          onMouseOver={(e) => {
            if (currentIndex !== allPhotos.length - 1) {
              e.currentTarget.style.background = '#F7F7F7';
            }
          }}
          onMouseOut={(e) => {
            if (currentIndex !== allPhotos.length - 1) {
              e.currentTarget.style.background = '#fff';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
            }
          }}
          onMouseDown={(e) => {
            if (currentIndex !== allPhotos.length - 1) {
               e.currentTarget.style.transform = 'translateY(-50%) scale(0.92)';
            }
          }}
          onMouseUp={(e) => {
            if (currentIndex !== allPhotos.length - 1) {
               e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
            }
          }}
          aria-label="Next image"
        >
          <svg viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{display: 'block', height: '14px', width: '14px', fill: 'none', stroke: 'currentcolor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round'}}><path d="m12 4 12 12-12 12"></path></svg>
        </button>
      </div>
    </div>
  );
}
