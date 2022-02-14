const DATA = [
  {
    name: 'Tropical Muddle',
    flavour: 'Lime And Mint',
    quantity: 1,
    price: 199,
    id: 1,
    color: '#FFD800',
    description:
      'Fresh Mint & Lime makes up for an amazing tropical concoction. Beat the heat with this zesty and refreshing flavour burst.',
    pairings: {
      mocktail: 'For a Tropical Muddle: 2 iceburst cubes + 120ml soda',
      cocktail: '2 iceburst cubes + White Rum (50ml) + Soda(100ml)',
    },
    /*eslint-disable */
    backdropImage: 'https://i.ibb.co/QCyQsNb/tropical-Muddle-Backdrop.jpg',
    posterFrontImage:
      'https://i.ibb.co/BnXHQKn/tropical-Muddle-Front-Poster.jpg',
    posterBackImage: 'https://i.ibb.co/BnXHQKn/tropical-Muddle-Back-Poster.jpg',
  },
  {
    name: 'Spanish Summer',
    flavour: 'Cranberry And Cinnamon',
    quantity: 1,
    price: 199,
    id: 2,
    color: '#e75480',
    description:
      'Teleport yourself to a sunny beach in Spain while you sip upon a burst of fruity and berrylicious flavors.',
    pairings: {
      mocktail: 'For a Spanish Summer : 2 iceburst cubes + Soda (120 ml)',
      cocktail: ' 2 iceburst cubes + Any wine of your choice (120 ml)',
    },
    /*eslint-disable */
    backdropImage: 'https://i.ibb.co/VMkGx4Y/spanish-Summer-Backdrop.jpg',
    posterFrontImage:
      'https://i.ibb.co/bdWD905/spanish-Summer-Front-Poster.jpg',
    posterBackImage: 'https://i.ibb.co/QCBRZ5c/spanish-Summer-Back-Poster.jpg',
  },
  {
    name: 'Botanical Cooler',
    flavour: 'Cucumber And Ginger',
    quantity: 1,
    price: 199,
    id: 4,
    color: '#228b22',
    description:
      'This garden fresh concoction is a medley of cucumber, rosemary and ginger giving you a botanical burst of flavors.',
    pairings: {
      mocktail: '2 iceburst cubes + Soda ( 120 ml )',
      cocktail: '2 iceburst cubes + Gin ( 50 ml ) Top up with Tonic.',
    },
    /*eslint-disable */
    backdropImage: 'https://i.ibb.co/c3525Xb/botanical-Cooler-Backdrop.jpg',
    posterFrontImage:
      'https://i.ibb.co/jWr2YbL/botanical-Cooler-Front-Poster.jpg',
    posterBackImage:
      'https://i.ibb.co/Kh101kZ/botanical-Cooler-Back-Poster.jpg',
  },
  {
    name: 'Blush Spritzer',
    flavour: 'Watermelon And Basil',
    quantity: 1,
    price: 199,
    id: 3,
    color: '#ff0000',
    description: `Who doesn't love Watermelon, especially when its blush red complemented with fresh Basil and Star Anise. Enjoy this sweet & aromatic burst of flavors.`,
    pairings: {
      mocktail: '2 iceburst cubes + Soda ( 120 ml )',
      cocktail: '2 iceburst cubes + Vodka ( 50 ml ) Top up with Soda',
    },
    /*eslint-disable */
    backdropImage: 'https://i.ibb.co/SXyQPs2/blush-Spritzer-Backdrop.jpg',
    posterFrontImage:
      'https://i.ibb.co/s3vQbTG/blush-Spritzer-Front-Poster.jpg',
    posterBackImage: 'https://i.ibb.co/pRZVDNT/blush-Spritzer-Back-Poster.jpg',
  },
  {
    name: 'Freshpesso',
    flavour: 'Coffee And Vanilla',
    quantity: 1,
    price: 199,
    id: 5,
    color: '#654321',
    description:
      'Get an energetic jolt from this burst of fresh roasted coffee with an essence of French Vanilla.',
    pairings: {
      mocktail: '2 iceburst cubes + Cold Milk ( 120 ml )',
      cocktail: '2 iceburst cubes + Vodka ( 50 ml)',
    },
    /*eslint-disable */
    backdropImage: 'https://i.ibb.co/6NBD07J/freshpesso-Backdrop.jpg',
    posterFrontImage: 'https://i.ibb.co/BCwmzKv/freshpesso-Front-Poster.jpg',
    posterBackImage: 'https://i.ibb.co/VWbb6V8/freshpesso-Back-Poster.jpg',
  },
];

const allProducts = JSON.parse(JSON.stringify(DATA));

export default allProducts;
