import React from 'react';
import { tourCategories, allPhotos } from '../data/photos';

export default function PhotoTour({ isOpen, onClose, onPhotoClick }) {
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
    <div className={`_KpcKWX ${isOpen ? '_PjnNJs' : ''}`} aria-hidden={!isOpen}>
      <header className="_TCWfOg">
        <div className="_ffpbhP">
          <button className="_bNHEUf" aria-label="Close" onClick={onClose}>
            <span>
              <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{display: 'block', height: '100%', width: '100%', fill: 'none', stroke: 'currentColor', strokeWidth: 3, overflow: 'visible'}}>
                <g fill="none">
                  <path d="M20 28 8.7 16.7a1 1 0 0 1 0-1.4L20 4"></path>
                </g>
              </svg>
            </span>
          </button>
        </div>
        <div className="_usJUoS">Photo tour</div>
        <div className="_bLFgMg">
          <button className="_EmrQRK" type="button">
            <span className="_oQmVpq">
              <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{display: 'block', height: '100%', width: '100%', fill: 'none', stroke: 'currentColor', strokeWidth: 2, overflow: 'visible'}}>
                <path d="m27 18v9c0 1.1046-.8954 2-2 2h-18c-1.10457 0-2-.8954-2-2v-9m11-15v21m-10-11 9.2929-9.29289c.3905-.39053 1.0237-.39053 1.4142 0l9.2929 9.29289" fill="none"></path>
              </svg>
            </span>
          </button>
          <button className="_EmrQRK _nfavct" type="button">
            <span className="_oQmVpq">
              <svg viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{display: 'block', height: '100%', width: '100%', fill: 'currentColor'}}>
                <path d="M16 28C7 22 3 16 3 10.5A6.5 6.5 0 0 1 16 8a6.5 6.5 0 0 1 13 2.5C29 16 25 22 16 28z"></path>
              </svg>
            </span>
          </button>
        </div>
      </header>

      <div className="_EpiBQR">
        <div className="_hKlfpJ">
          {/* Thumbnails Navigation */}
          <div className="_tHVclZ" style={{ marginTop: '24px' }}>
            {tourCategories.map(cat => (
              <button 
                key={cat.id} 
                className="_gKVFNL" 
                onClick={() => {
                  document.getElementById(cat.id)?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <img src={cat.photos[0]} alt={cat.title} />
                <div className="_tAbhrW">{cat.title}</div>
              </button>
            ))}
          </div>

          {/* Sections */}
          <div className="_MbzoEk">
            {categoriesWithOffsets.map(cat => (
              <div key={cat.id} id={cat.id} className="_AWcqip" style={{ marginTop: '24px', paddingTop: '32px' }}>
                <div className="_yZYwUW">
                  <h2 className="_AnkvRF">{cat.title}</h2>
                  {cat.subtitle && <div className="_hvJgUS">{cat.subtitle}</div>}
                </div>
                <div className={`_wdcjGJ ${cat.photos.length > 1 ? '_DLVRjk' : '_vmCONz'}`}>
                  {cat.photos.map((photo, idx) => (
                    <button 
                      key={photo} 
                      className="_GXrMIo" 
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
