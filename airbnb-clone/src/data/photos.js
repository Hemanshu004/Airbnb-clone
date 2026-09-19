export const tourCategories = [
  {
    id: "living-room-1",
    title: "Living room 1",
    subtitle: "Sofa · Air conditioning · Ceiling fan · TV",
    photos: [
      "/photos/tour/living-room-1/living-room-1-01-wide-angle.jpeg",
      "/photos/tour/living-room-1/living-room-1-02-sofa-view.jpeg"
    ]
  },
  {
    id: "living-room-2",
    title: "Living room 2",
    subtitle: "Seating area",
    photos: [
      "/photos/tour/living-room-2/living-room-2-01-tv-area.jpeg"
    ]
  },
  {
    id: "full-kitchen",
    title: "Full kitchen",
    subtitle: "Cooking basics · Refrigerator",
    photos: [
      "/photos/tour/full-kitchen/full-kitchen-01-countertop.jpeg"
    ]
  },
  {
    id: "bedroom",
    title: "Bedroom",
    subtitle: "1 double bed",
    photos: [
      "/photos/tour/bedroom/bedroom-01-main.jpeg"
    ]
  },
  {
    id: "full-bathroom",
    title: "Full bathroom",
    subtitle: "Shower · Hot water",
    photos: [
      "/photos/tour/full-bathroom/full-bathroom-01-main.jpeg"
    ]
  },
  {
    id: "gym",
    title: "Gym",
    subtitle: "Treadmill · Weights",
    photos: [
      "/photos/tour/gym/gym-01-equipment.jpeg"
    ]
  },
  {
    id: "exterior",
    title: "Exterior",
    subtitle: "Building view",
    photos: [
      "/photos/tour/exterior/exterior-01-aerial-wide.jpeg",
      "/photos/tour/exterior/exterior-02-aerial-close.jpeg"
    ]
  },
  {
    id: "pool",
    title: "Pool",
    subtitle: "Shared pool · Hot tub",
    photos: [
      "/photos/tour/pool/pool-01-hot-tub.jpeg",
      "/photos/tour/pool/pool-02-atrium.jpeg",
      "/photos/tour/pool/pool-03-seating-hottub.jpeg"
    ]
  },
  {
    id: "additional-photos",
    title: "Additional photos",
    subtitle: "",
    photos: [
      "/photos/tour/additional-photos/additional-01-outdoor-seating.jpeg",
      "/photos/tour/additional-photos/additional-02-outdoor-seating-wide.jpeg"
    ]
  }
];

export const allPhotos = tourCategories.flatMap(cat => cat.photos);
