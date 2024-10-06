import { custom } from "astro:schema";

export const productsData = [
  {
    id: 1,
    name: "Pebblestone Bracelet",
    url: "pebblestone-bracelet",
    price: "$1290.00 CAD",
    description: "Handcrafted sculptural pebblestone bracelet in sterling silver.",
    model: "Model is 5ft4 and wears size S (7 1/4 inches).",
    sizes: {
      small: {
        name: "US S - 19cm",
        stock: false
      },
      medium: {
        name: "US L - 25cm",
        stock: false
      },
    },
    images: {
      item_img: [
        "https://www.jovier.ca/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0597%2F2793%2F7588%2Fproducts%2FDSC00614-3.png%3Fv%3D1668538052&w=1920&q=75",
        "https://www.jovier.ca/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0597%2F2793%2F7588%2Fproducts%2Fbracelet_2.png%3Fv%3D1668538052&w=1920&q=75"
      ],
      models_img: {
        full: "https://www.jovier.ca/_next/image?url=%2Fimages%2Ffirst_collection%2Fhei%2FstandingDog.png&w=1920&q=75",
        zoom: "https://www.jovier.ca/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0597%2F2793%2F7588%2Fproducts%2Fcropped_09d7a7a9-a71d-4f67-8a0d-4154c8b1d699-_1.png%3Fv%3D1668538052&w=1920&q=75"
      }
    }
  },
  {
    id: 2,
    name: "Drippy Ring",
    url: "drippy-ring",
    price: "$225.00 CAD",
    description: `Handcrafted sculptural band ring in sterling silver.`,
    model: "Model is 6ft3 and wears size 13 1/4.",
    details: [
      "· Logo engraved at inner band.",
      "· Textured at surface.",
    ],
    sizes: {
      small: {
        name: "US 8 1/2",
        stock: true
      },
      medium: {
        name: "US 10 1/4",
        stock: true
      },
      large: {
        name: "US 13 1/4",
        stock: true
      },
    },
    images: {
      item_img: [
        "https://www.jovier.ca/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0597%2F2793%2F7588%2Fproducts%2Fdrip.png%3Fv%3D1661644166&w=1920&q=75",
        "https://www.jovier.ca/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0597%2F2793%2F7588%2Fproducts%2Fdrip_4.png%3Fv%3D1661644166&w=1920&q=75",
        "https://www.jovier.ca/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0597%2F2793%2F7588%2Fproducts%2Fdrip_2.png%3Fv%3D1661644166&w=1920&q=75",
        "https://www.jovier.ca/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0597%2F2793%2F7588%2Fproducts%2Fdrip_5.png%3Fv%3D1661644166&w=1920&q=75",
        "https://www.jovier.ca/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0597%2F2793%2F7588%2Fproducts%2Fdrip_3.png%3Fv%3D1661644166&w=1920&q=75"
      ],
      models_img: {
        full: "https://www.jovier.ca/_next/image?url=%2Fimages%2Ffirst_collection%2Fgod%2Fsmoking.png&w=1920&q=75",
        zoom: "https://www.jovier.ca/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0597%2F2793%2F7588%2Fproducts%2Fcropped_2c36ed85-0e74-402c-aba6-321f58b39928.png%3Fv%3D1661747854&w=1920&q=75"
      }
    }
  },
  {
    id: 3,
    name: "Organic Ring",
    url: "organic-ring",
    price: "$270.00 CAD",
    description: "Handcrafted sculptural band ring in sterling silver.",
    model: "Model is 6ft3 and wears size 11 3/4.",
    details: [
      "· Logo engraved at inner band.",
      "· Textured at surface.",
    ],
    sizes: {
      small: {
        name: "US 4 3/4",
        stock: true
      },
      medium: {
        name: "US 5",
        stock: false
      },
      large: {
        name: "US 7",
        stock: true
      },
      extraLarge: {
        name: "US 9 1/4",
        stock: false
      }
    },
    images: {
      item_img: [
        "https://www.jovier.ca/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0597%2F2793%2F7588%2Fproducts%2Forganic_1.png%3Fv%3D1666134317&w=1920&q=75",
        "https://www.jovier.ca/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0597%2F2793%2F7588%2Fproducts%2Forganic_2.png%3Fv%3D1666134317&w=1920&q=75",
        "https://www.jovier.ca/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0597%2F2793%2F7588%2Fproducts%2Forganic_3.png%3Fv%3D1666134317&w=1920&q=75",
        "https://www.jovier.ca/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0597%2F2793%2F7588%2Fproducts%2Forganic_4.png%3Fv%3D1666134317&w=1920&q=75",
        "https://www.jovier.ca/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0597%2F2793%2F7588%2Fproducts%2Forganic_5.png%3Fv%3D1666134317&w=1920&q=75"
      ],
      models_img: {
        full: "https://www.jovier.ca/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0597%2F2793%2F7588%2Fproducts%2Fstanding.png%3Fv%3D1666134317&w=1920&q=75",
        zoom: "https://www.jovier.ca/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0597%2F2793%2F7588%2Fproducts%2Fcropped_09d7a7a9-a71d-4f67-8a0d-4154c8b1d699.png%3Fv%3D1666134317&w=1920&q=75"
      }
    }
  },
  {
    id: 4,
    name: "Small Pirate Ring",
    url: "small-pirate-ring",
    price: "$270.00 CAD",
    description: "Handcrafted signet ring in sterling silver.",
    model: "Model is 5ft4 and wears size 6 3/4.",
    details: [
      "· Logo engraved at inner band.",
    ],
    sizes: {
      small: {
        name: "US 4 3/4",
        stock: true
      },
      medium: {
        name: "US 5",
        stock: false
      },
      large: {
        name: "US 8",
        stock: false
      },
    },
    images: {
      item_img: [
        "https://www.jovier.ca/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0597%2F2793%2F7588%2Fproducts%2Fsmall_pirate.png%3Fv%3D1661644298&w=1920&q=75",
        "https://www.jovier.ca/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0597%2F2793%2F7588%2Fproducts%2Fsmall_pirate_2.png%3Fv%3D1661644298&w=1920&q=75",
        "https://www.jovier.ca/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0597%2F2793%2F7588%2Fproducts%2Fsmall_pirate_4.png%3Fv%3D1661644298&w=1920&q=75",
        "https://www.jovier.ca/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0597%2F2793%2F7588%2Fproducts%2Fsmall_pirate_5.png%3Fv%3D1661644298&w=1920&q=75",
        "https://www.jovier.ca/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0597%2F2793%2F7588%2Fproducts%2Fsmall_pirate_3.png%3Fv%3D1661644298&w=1920&q=75"
      ],
      models_img: {
        full: "https://www.jovier.ca/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0597%2F2793%2F7588%2Fproducts%2Fhand_crossed.png%3Fv%3D1661747741&w=1920&q=75",
        zoom: "https://www.jovier.ca/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0597%2F2793%2F7588%2Fproducts%2Fdog_cropped_08c6d15f-5399-417d-8d52-cd7ab827d638.png%3Fv%3D1661747741&w=1920&q=75"
      }
    }
  },
  {
    id: 5,
    name: "Battle Ring",
    url: "battle-ring",
    price: "$200.00 CAD",
    description: "Handcrafted signet ring in sterling silver.",
    model: "Model is 5ft7 and wears size 6 3/4.",
    details: [
      "· Logo engraved at inner band.",
      "· Textured at surface.",
    ],
    sizes: {
      small: {
        name: "US 3 3/4",
        stock: false
      },
      medium: {
        name: "US 4",
        stock: true
      },
      large: {
        name: "US 6",
        stock: false
      },
      extraLarge: {
        name: "US 9 1/4",
        stock: true
      }
    },
    images: {
      item_img: [
        "https://www.jovier.ca/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0597%2F2793%2F7588%2Fproducts%2Fbattle.png%3Fv%3D1661755104&w=1920&q=75",
        "https://www.jovier.ca/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0597%2F2793%2F7588%2Fproducts%2Fbattle_5.png%3Fv%3D1661755104&w=1920&q=75",
        "https://www.jovier.ca/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0597%2F2793%2F7588%2Fproducts%2Fbattle_2.png%3Fv%3D1661755104&w=1920&q=75",
        "https://www.jovier.ca/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0597%2F2793%2F7588%2Fproducts%2Fbattle_4.png%3Fv%3D1661755104&w=1920&q=75",
        "https://www.jovier.ca/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0597%2F2793%2F7588%2Fproducts%2Fbattle_3.png%3Fv%3D1661755102&w=1920&q=75"
      ],
      models_img: {
        full: "https://www.jovier.ca/_next/image?url=%2Fimages%2Ffirst_collection%2Fdutan%2Fstanding_relax.png&w=1920&q=75",
        zoom: "https://www.jovier.ca/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0597%2F2793%2F7588%2Fproducts%2FDSC00310.png%3Fv%3D1664474979&w=1920&q=75"
      }
    }
  },
  {
    id: 6,
    name: "Level Ring",
    url: "level-ring",
    price: "$250.00 CAD",
    description: "Handcrafted sculptural signet ring in sterling silver.",
    model: "Model is 5ft11 and wears size 6 3/4.",
    details: [
      "· Logo engraved at inner band.",
      "· Textured at surface.",
    ],
    sizes: {
      small: {
        name: "US 4 3/4",
        stock: false
      },
      medium: {
        name: "US 5",
        stock: false
      },
      medium: {
        name: "US 6",
        stock: false
      },
      extraLarge: {
        name: "US 11 1/4",
        stock: false
      }
    },
    images: {
      item_img: [
        "https://www.jovier.ca/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0597%2F2793%2F7588%2Fproducts%2Flevel.png%3Fv%3D1661644128&w=1920&q=75",
        "https://www.jovier.ca/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0597%2F2793%2F7588%2Fproducts%2Flevel_2.png%3Fv%3D1661644128&w=1920&q=75",
        "https://www.jovier.ca/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0597%2F2793%2F7588%2Fproducts%2Flevel_3.png%3Fv%3D1661644128&w=1920&q=75",
        "https://www.jovier.ca/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0597%2F2793%2F7588%2Fproducts%2Flevel_4.png%3Fv%3D1661644128&w=1920&q=75",
        "https://www.jovier.ca/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0597%2F2793%2F7588%2Fproducts%2Flevel_5.png%3Fv%3D1661644128&w=1920&q=75"
      ],
      models_img: {
        full: "https://www.jovier.ca/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0597%2F2793%2F7588%2Fproducts%2Fstanding_d825a4f9-32ec-47e2-9eb4-77ce20443062.png%3Fv%3D1661748059&w=1920&q=75",
        zoom: "https://www.jovier.ca/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0597%2F2793%2F7588%2Fproducts%2Fcropped_e8526e50-5a7b-4480-8391-abf9925432be.png%3Fv%3D1661748059&w=1920&q=75"
      }
    }
  },
  {
    id: 7,
    name: "Big Pirate Ring",
    url: "big-pirate-ring",
    price: "$290.00 CAD",
    description: "Handcrafted signet ring in sterling silver.",
    model: "Model is 5ft4 and wears size 3.",
    details: [
      "· Logo engraved at inner band.",
    ],
    sizes: {
      small: {
        name: "US 4 3/4",
        stock: true
      },
      medium: {
        name: "US 4",
        stock: true
      },
      large: {
        name: "US 7 1/4",
        stock: false
      },
      extraLarge: {
        name: "US 12 1/4",
        stock: false
      }
    },
    images: {
      item_img: [
        "https://www.jovier.ca/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0597%2F2793%2F7588%2Fproducts%2Fbig_pirate.png%3Fv%3D1661805621&w=1920&q=75",
        "https://www.jovier.ca/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0597%2F2793%2F7588%2Fproducts%2Fbig_pirate_2.png%3Fv%3D1661805621&w=1920&q=75",
        "https://www.jovier.ca/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0597%2F2793%2F7588%2Fproducts%2Fbig_pirate_4.png%3Fv%3D1661805621&w=1920&q=75",
        "https://www.jovier.ca/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0597%2F2793%2F7588%2Fproducts%2Fbig_pirate_3.png%3Fv%3D1661805615&w=1920&q=75",
        "https://www.jovier.ca/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0597%2F2793%2F7588%2Fproducts%2Fbig_pirate_5.png%3Fv%3D1661805613&w=1920&q=75"
      ],
      models_img: {
        full: "https://www.jovier.ca/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0597%2F2793%2F7588%2Fproducts%2Fstanding_big_pirate.png%3Fv%3D1661755240&w=1920&q=75",
        zoom: "https://www.jovier.ca/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0597%2F2793%2F7588%2Fproducts%2Fcropped_31e59184-d210-49c3-b6b1-1baf325572bb.png%3Fv%3D1661755241&w=1920&q=75"
      }
    }
  },
  {
    id: 8,
    name: "Damaged Rosary",
    url: "damaged-rosary",
    price: "$460.00 CAD",
    custom: true,
    sizes: {
      small: {
        name: "US CUSTOM ORDER",
        stock: false
      },
    },
    images: {
      item_img: [
        "https://www.jovier.ca/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0597%2F2793%2F7588%2Ffiles%2FIMG_1578-Edit.png%3Fv%3D1689531227&w=1920&q=75",
        "https://www.jovier.ca/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0597%2F2793%2F7588%2Ffiles%2FIMG_1566.png%3Fv%3D1689531226&w=1920&q=75",
        "https://www.jovier.ca/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0597%2F2793%2F7588%2Ffiles%2FIMG_1555-Edit.png%3Fv%3D1689531226&w=1920&q=75"
      ],
      models_img: {
        full: "https://www.jovier.ca/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0597%2F2793%2F7588%2Ffiles%2FIMG_1536.png%3Fv%3D1689531226&w=1920&q=75",
        zoom: "https://www.jovier.ca/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0597%2F2793%2F7588%2Ffiles%2FIMG_1555-Edit.png%3Fv%3D1689531226&w=1920&q=75"
      }
    }
  },
]