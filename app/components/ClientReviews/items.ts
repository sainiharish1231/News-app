interface Item {
  id: number;
  title: string;
  imageUrl: string;
}

interface Items {
  items: {
    bootstrap: any[]; // The type of elements in bootstrap is not clear from the provided JSON
    elastic: Item[];
  };
}

export const itemsData: Items = {
  items: {
    bootstrap: [], // Placeholder for bootstrap data
    elastic: [
      {
        id: 1,
        title: "Photoshoots",
        imageUrl:
          "https://res.cloudinary.com/kizmelvin/image/upload/v1645530542/kizmelvin/Carousel%20assets/luwadlin-bosman-J1oObe7WWjk-unsplash_f56oh3.jpg",
      },
      {
        id: 2,
        title: "Adventure",
        imageUrl:
          "https://res.cloudinary.com/kizmelvin/image/upload/v1645529949/kizmelvin/Carousel%20assets/ali-kazal-q9rpNOd1hcI-unsplash_fhaqzq.jpg",
      },
      {
        id: 3,
        title: "Events",
        imageUrl:
          "https://res.cloudinary.com/kizmelvin/image/upload/v1645530199/kizmelvin/Carousel%20assets/slim-emcee-jzdOX0XkXr8-unsplash_zocsdq.jpg",
      },
      {
        id: 4,
        title: "Discovery",
        imageUrl:
          "https://res.cloudinary.com/kizmelvin/image/upload/v1645530863/kizmelvin/Carousel%20assets/francisco-t-santos-YRcioOWh4mA-unsplash_1_yoowse.jpg",
      },
      {
        id: 5,
        title: "Sports",
        imageUrl:
          "https://res.cloudinary.com/kizmelvin/image/upload/v1645531100/kizmelvin/Carousel%20assets/markus-spiske-WUehAgqO5hE-unsplash_zi9wvh.jpg",
      },
    ],
  },
};

// Usage example:
console.log(itemsData.items.elastic[0].title); // Output: "Photoshoots"
console.log(itemsData.items.elastic[2].imageUrl); // Output: "https://res.cloudinary.com/kizmelvin/image/upload/v1645530199/kizmelvin/Carousel%20assets/slim-emcee-jzdOX0XkXr8-unsplash_zocsdq.jpg"
