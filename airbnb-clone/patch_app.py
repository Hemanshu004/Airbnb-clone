import re

with open("src/App.jsx", "r") as f:
    text = f.read()

# 1. Add hooks
hooks = """
  const simTrackRef = useRef(null);
  const [simPage, setSimPage] = useState(1);
  const [totalSimPages, setTotalSimPages] = useState(3);

  useEffect(() => {
    const track = simTrackRef.current;
    if (track) {
      const updatePage = () => {
        const page = Math.round(track.scrollLeft / track.clientWidth) + 1;
        const total = Math.ceil(track.scrollWidth / track.clientWidth);
        setSimPage(page);
        setTotalSimPages(total);
      };
      track.addEventListener('scroll', updatePage);
      setTimeout(updatePage, 100);
      return () => track.removeEventListener('scroll', updatePage);
    }
  }, []);

  const handleSimNext = () => {
    if (simTrackRef.current) {
      simTrackRef.current.scrollBy({ left: simTrackRef.current.clientWidth, behavior: 'smooth' });
    }
  };

  const handleSimPrev = () => {
    if (simTrackRef.current) {
      simTrackRef.current.scrollBy({ left: -simTrackRef.current.clientWidth, behavior: 'smooth' });
    }
  };
"""
# Insert hooks after const [lightboxIndex, setLightboxIndex] = useState(0);
text = text.replace("const [lightboxIndex, setLightboxIndex] = useState(0);", 
                    "const [lightboxIndex, setLightboxIndex] = useState(0);\n" + hooks)

# 2. Update the HTML elements
# <span className="_klVRbI">2 / 3</span>
text = re.sub(r'<span className="_klVRbI">[^<]+</span>', r'<span className="_klVRbI">{simPage} / {totalSimPages}</span>', text)

# <button className="_kxdode" id="simPrev">
text = text.replace('<button className="_kxdode" id="simPrev">', '<button className="_kxdode" id="simPrev" onClick={handleSimPrev} disabled={simPage === 1}>')

# <button className="_kxdode" id="simNext">
text = text.replace('<button className="_kxdode" id="simNext">', '<button className="_kxdode" id="simNext" onClick={handleSimNext} disabled={simPage === totalSimPages}>')

# <div className="_duSenM" id="simTrack">
text = text.replace('<div className="_duSenM" id="simTrack">', '<div className="_duSenM" id="simTrack" ref={simTrackRef}>')

# Ensure useEffect and useRef are imported
if "useEffect" not in text:
    text = text.replace("useState,", "useState, useEffect, useRef,")
else:
    if "useRef" not in text:
        text = text.replace("useEffect,", "useEffect, useRef,")

with open("src/App.jsx", "w") as f:
    f.write(text)

