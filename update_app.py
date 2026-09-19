import re

with open("airbnb-clone/src/App.jsx", "r") as f:
    content = f.read()

# 1. Add imports
imports = """import React, { useState } from 'react';
import PhotoTour from './components/PhotoTour';
import Lightbox from './components/Lightbox';
"""
if "import React" not in content:
    content = imports + content

# 2. Add state inside App
state_logic = """export default function App() {
  const [isPhotoTourOpen, setIsPhotoTourOpen] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openPhotoTour = () => setIsPhotoTourOpen(true);
  const closePhotoTour = () => setIsPhotoTourOpen(false);

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setIsLightboxOpen(true);
  };
  const closeLightbox = () => setIsLightboxOpen(false);
"""
content = content.replace("export default function App() {", state_logic)

# 3. Add onClick to hero grid buttons
content = content.replace(
    'id="heroGrid"><button className="_toiEJx" type="button"',
    'id="heroGrid"><button className="_toiEJx" type="button" onClick={openPhotoTour}'
)
content = content.replace(
    '</button><button className="_toiEJx" type="button"',
    '</button><button className="_toiEJx" type="button" onClick={openPhotoTour}'
)

# 4. Add onClick to showAllPhotos button
content = content.replace(
    'id="showAllPhotos"',
    'id="showAllPhotos" onClick={openPhotoTour}'
)

# 5. Add modals at the end of the App, just before the last </div>
modals = """
      <PhotoTour isOpen={isPhotoTourOpen} onClose={closePhotoTour} onPhotoClick={openLightbox} />
      <Lightbox isOpen={isLightboxOpen} onClose={closeLightbox} currentIndex={lightboxIndex} setCurrentIndex={setLightboxIndex} />
    </div>
  );
}"""

content = re.sub(r'</div\>\s*\);\s*\}\s*$', modals, content)

with open("airbnb-clone/src/App.jsx", "w") as f:
    f.write(content)

print("App.jsx updated successfully!")
