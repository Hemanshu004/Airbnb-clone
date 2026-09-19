import re

with open("airbnb-clone/src/App.jsx", "r") as f:
    content = f.read()

# 1. Fix imports
if "import { useState }" not in content and "import React, { useState }" not in content:
    content = content.replace("import React from 'react';", "import React, { useState } from 'react';\nimport PhotoTour from './components/PhotoTour';\nimport Lightbox from './components/Lightbox';")

# 2. Fix the missing modals at the end
if "<PhotoTour " not in content:
    modals = """
      <PhotoTour isOpen={isPhotoTourOpen} onClose={closePhotoTour} onPhotoClick={openLightbox} />
      <Lightbox isOpen={isLightboxOpen} onClose={closeLightbox} currentIndex={lightboxIndex} setCurrentIndex={setLightboxIndex} />
    </>
  );
}"""
    content = re.sub(r'</\>\s*\);\s*\}\s*$', modals, content)

with open("airbnb-clone/src/App.jsx", "w") as f:
    f.write(content)

print("Fixed App.jsx")
