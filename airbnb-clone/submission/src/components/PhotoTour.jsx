import React, { useEffect, useRef } from 'react';
import { tourCategories } from '../data/photos';
import { lockScroll, unlockScroll, trapFocus } from '../utils/modalManager';

export default function PhotoTour({ isOpen, onClose, onPhotoClick }) {
  const modalRef = useRef(null);
  const previousFocusRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;
    
    previousFocusRef.current = document.activeElement;
    lockScroll();

    if (modalRef.current) {
      const focusableEls = Array.from(modalRef.current.querySelectorAll(
        'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
      )).filter(el => el.offsetWidth > 0 || el.offsetHeight > 0);
      if (focusableEls.length > 0) {
        focusableEls[0].focus();
      }
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'Tab') {
        if (modalRef.current) {
          trapFocus(modalRef.current, e);
        }
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      unlockScroll();
      if (previousFocusRef.current) {
        previousFocusRef.current.focus();
      }
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // We can use a simple way to track global index for Lightbox.
  // We'll pre-calculate the offset for each category so that
  // when we click a photo in category i, index j, the global index is offset + j.
  let currentOffset = 0;
  const categoriesWithOffsets = tourCategories.map(cat => {
    const withOffset = { ...cat, offset: currentOffset };
    currentOffset += cat.photos.length;
    return withOffset;
  });

  return (
    <div ref={modalRef} role="dialog" aria-modal="true" className={`phototour-div-4 ${isOpen ? 'phototour-div-6' : ''}`} aria-hidden={!isOpen}>
      <header className="phototour-header">
        <div className="phototour-div-8">
          <button className="phototour-close" aria-label="Close" onClick={onClose}>
            <span>
              <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{display: 'block', height: '100%', width: '100%', fill: 'none', stroke: 'currentColor', strokeWidth: 3, overflow: 'visible'}}>
                <g fill="none">
                  <path d="M20 28 8.7 16.7a1 1 0 0 1 0-1.4L20 4"></path>
                </g>
              </svg>
            </span>
          </button>
        </div>
        <div className="phototour-photo-tour">Photo tour</div>
        <div className="phototour-div-7">
          <button className="phototour-share" type="button" aria-label="Share">
            <span className="herogallery-span">
              <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{display: 'block', height: '100%', width: '100%', fill: 'none', stroke: 'currentColor', strokeWidth: 2, overflow: 'visible'}}>
                <path d="m27 18v9c0 1.1046-.8954 2-2 2h-18c-1.10457 0-2-.8954-2-2v-9m11-15v21m-10-11 9.2929-9.29289c.3905-.39053 1.0237-.39053 1.4142 0l9.2929 9.29289" fill="none"></path>
              </svg>
            </span>
          </button>
          <button className="phototour-share" type="button" aria-label="Save">
            <span className="herogallery-span">
              <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{display: 'block', height: '100%', width: '100%', fill: 'none', stroke: 'currentColor', strokeWidth: 2, overflow: 'visible'}}>
                <path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z"></path>
              </svg>
            </span>
          </button>
        </div>
      </header>

      <div className="phototour-div-3">
        <div className="phototour-div-9">
          {/* Thumbnails Navigation */}
          <div className="phototour-photo-categories" id="tourNav" aria-label="Photo categories">
            {tourCategories.map(cat => (
              <button 
                key={cat.id} 
                className="phototour-element-2" 
                onClick={() => {
                  document.getElementById(cat.id)?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <img src={cat.photos[0]} alt={cat.title} />
                <div className="hostsection-rating">{cat.title}</div>
              </button>
            ))}
          </div>

          {/* Sections */}
          <div className="phototour-div-5">
            {categoriesWithOffsets.map(cat => (
              <div key={cat.id} id={cat.id} className="phototour-div">
                <div className="phototour-div-13">
                  <h2 className="phototour-h2">{cat.title}</h2>
                  {cat.subtitle && <div className="phototour-div-10">{cat.subtitle}</div>}
                </div>
                <div className={`phototour-div-12 ${cat.photos.length > 1 ? 'phototour-div-2' : 'phototour-div-11'}`}>
                  {cat.photos.map((photo, idx) => (
                    <button 
                      key={photo} 
                      className="phototour-element" 
                      onClick={() => onPhotoClick(cat.offset + idx)}
                      style={cat.photos.length % 2 !== 0 && idx === 0 && cat.photos.length > 1 ? { gridColumn: '1 / -1' } : {}}
                    >
                      <img src={photo} alt={`${cat.title} ${idx + 1}`} loading="lazy" />
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
