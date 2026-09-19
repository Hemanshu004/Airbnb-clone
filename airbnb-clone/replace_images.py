import re

with open("src/App.jsx", "r") as f:
    text = f.read()

imgs = list(re.finditer(r'<img([^>]+)src="https://images.unsplash.com[^"]+"([^>]*)>', text))

replacements = [
    # 0: Search icon
    "/photos/icons/searchbar-house.png",
    # 1-5: Hero Grid
    "/photos/hero/hero-01-living-room-wide.jpeg",
    "/photos/hero/hero-02-bedroom.jpeg",
    "/photos/hero/hero-03-hot-tub.jpeg",
    "/photos/hero/hero-04-living-room-sofa.jpeg",
    "/photos/hero/hero-05-exterior-aerial.jpeg",
    # 6: Hosted by Mirashya Homes
    "/photos/avatars/host-mirashya-homes.jpeg",
    # 7: Where you'll sleep - Bedroom
    "/photos/tour/bedroom/bedroom-01-main.jpeg",
    # 8: Where you'll sleep - Living room
    "/photos/tour/living-room-1/living-room-1-02-sofa-view.jpeg",
    # 9: Meet your host
    "/photos/avatars/host-mirashya-homes.jpeg",
    # 10, 11: Laurels for 4.95 badge
    "/photos/icons/laurel-left.png",
    "/photos/icons/laurel-right.png",
    # 12-21: Review tags (Comfort, Accuracy, Hot tub, Condition, Hospitality, Cleanliness, Amenities, Decor, Indoor spaces, Location)
    "/photos/icons/indoor-spaces.png",
    "/photos/icons/accuracy.png",
    "/photos/icons/hot-tub.png",
    "/photos/icons/condition.png",
    "/photos/icons/hospitality.png",
    "/photos/icons/cleanliness.png",
    "/photos/icons/amenities.png",
    "/photos/icons/decor.png",
    "/photos/icons/indoor-spaces.png",
    "/photos/icons/location.png",
    # 22-25: Reviewers
    "/photos/avatars/reviewer-01.jpeg",
    "/photos/avatars/reviewer-02.jpeg",
    "/photos/avatars/reviewer-03.jpeg",
    "/photos/avatars/reviewer-04.jpeg",
    # 26: Host Mirashya Homes (small)
    "/photos/avatars/host-mirashya-homes.jpeg",
    # 27-32: Co-hosts
    "/photos/avatars/cohost-01.jpg",
    "/photos/avatars/cohost-02.jpg",
    "/photos/avatars/cohost-03.jpg",
    "/photos/avatars/cohost-01.jpg",
    "/photos/avatars/cohost-02.jpg",
    "/photos/avatars/cohost-03.jpg",
    # 33-35: Nearby listings
    "/photos/raw/s1.jpeg",
    "/photos/raw/s2.jpeg",
    "/photos/raw/s3.jpeg"
]

default_photo = "/photos/tour/living-room-1/living-room-1-01-wide-angle.jpeg"

new_text = text
offset = 0

for i, m in enumerate(imgs):
    new_src = replacements[i] if i < len(replacements) else default_photo
    new_tag = f'<img{m.group(1)}src="{new_src}"{m.group(2)}>'
    start = m.start() + offset
    end = m.end() + offset
    new_text = new_text[:start] + new_tag + new_text[end:]
    offset += len(new_tag) - (end - start)

with open("src/App.jsx", "w") as f:
    f.write(new_text)

print(f"Replaced {len(imgs)} images.")

