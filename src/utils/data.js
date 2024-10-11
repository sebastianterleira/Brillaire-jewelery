import Bracelet_1 from '../assets/images/Products/pebblestone-bracelet/item-img/bracelet_1.avif';
import Bracelet_2 from '../assets/images/Products/pebblestone-bracelet/item-img/bracelet_2.avif';
import Bracelet_full from '../assets/images/Products/pebblestone-bracelet/model-img/full.webp';
import Bracelet_zoom from '../assets/images/Products/pebblestone-bracelet/model-img/zoom.avif';
import Drip_1 from '../assets/images/Products/drippy-ring/item-img/drip_1.avif';
import Drip_2 from '../assets/images/Products/drippy-ring/item-img/drip_2.avif';
import Drip_3 from '../assets/images/Products/drippy-ring/item-img/drip_3.avif';
import Drip_4 from '../assets/images/Products/drippy-ring/item-img/drip_4.avif';
import Drip_5 from '../assets/images/Products/drippy-ring/item-img/drip_5.avif';
import Drip_full from '../assets/images/Products/drippy-ring/model-img/full.webp';
import Drip_zoom from '../assets/images/Products/drippy-ring/model-img/zoom.avif';
import Organic_1 from '../assets/images/Products/organic-ring/item-img/organic_1.avif';
import Organic_2 from '../assets/images/Products/organic-ring/item-img/organic_2.avif';
import Organic_3 from '../assets/images/Products/organic-ring/item-img/organic_3.avif';
import Organic_4 from '../assets/images/Products/organic-ring/item-img/organic_4.avif';
import Organic_5 from '../assets/images/Products/organic-ring/item-img/organic_5.avif';
import Organic_full from '../assets/images/Products/organic-ring/model-img/full.avif';
import Organic_zoom from '../assets/images/Products/organic-ring/model-img/zoom.avif';
import Small_pirate_1 from '../assets/images/Products/small-pirate-ring/item-img/small_pirate_1.avif';
import Small_pirate_2 from '../assets/images/Products/small-pirate-ring/item-img/small_pirate_2.avif';
import Small_pirate_3 from '../assets/images/Products/small-pirate-ring/item-img/small_pirate_3.avif';
import Small_pirate_4 from '../assets/images/Products/small-pirate-ring/item-img/small_pirate_4.avif';
import Small_pirate_5 from '../assets/images/Products/small-pirate-ring/item-img/small_pirate_5.avif';
import Small_pirate_full from '../assets/images/Products/small-pirate-ring/model-img/full.avif';
import Small_pirate_zoom from '../assets/images/Products/small-pirate-ring/model-img/zoom.avif';
import Battle_1 from '../assets/images/Products/battle-ring/item-img/battle_1.avif';
import Battle_2 from '../assets/images/Products/battle-ring/item-img/battle_2.avif';
import Battle_3 from '../assets/images/Products/battle-ring/item-img/battle_3.avif';
import Battle_4 from '../assets/images/Products/battle-ring/item-img/battle_4.avif';
import Battle_5 from '../assets/images/Products/battle-ring/item-img/battle_5.avif';
import Battle_full from '../assets/images/Products/battle-ring/model-img/full.avif';
import Battle_zoom from '../assets/images/Products/battle-ring/model-img/zoom.avif';
import Level_1 from '../assets/images/Products/level-ring/item-img/level_1.avif';
import Level_2 from '../assets/images/Products/level-ring/item-img/level_2.avif';
import Level_3 from '../assets/images/Products/level-ring/item-img/level_3.avif';
import Level_4 from '../assets/images/Products/level-ring/item-img/level_4.avif';
import Level_5 from '../assets/images/Products/level-ring/item-img/level_5.avif';
import Level_full from '../assets/images/Products/level-ring/model-img/full.avif';
import Level_zoom from '../assets/images/Products/level-ring/model-img/zoom.avif';
import big_pirate_1 from '../assets/images/Products/big-pirate-ring/item-img/big_pirate_1.avif';
import big_pirate_2 from '../assets/images/Products/big-pirate-ring/item-img/big_pirate_2.avif';
import big_pirate_3 from '../assets/images/Products/big-pirate-ring/item-img/big_pirate_3.avif';
import big_pirate_4 from '../assets/images/Products/big-pirate-ring/item-img/big_pirate_4.avif';
import big_pirate_5 from '../assets/images/Products/big-pirate-ring/item-img/big_pirate_5.avif';
import big_pirate_full from '../assets/images/Products/big-pirate-ring/model-img/full.avif';
import big_pirate_zoom from '../assets/images/Products/big-pirate-ring/model-img/zoom.avif';
import Damaged_1 from '../assets/images/Products/damaged-rosary/item-img/rosary_1.avif';
import Damaged_2 from '../assets/images/Products/damaged-rosary/item-img/rosary_2.avif';
import Damaged_3 from '../assets/images/Products/damaged-rosary/item-img/rosary_3.avif';
import Damaged_full from '../assets/images/Products/damaged-rosary/model-img/full.avif';
import Damaged_zoom from '../assets/images/Products/damaged-rosary/model-img/zoom.avif';

export const productsData = [
	{
		id: 1,
		name: 'Pebblestone Bracelet',
		url: 'pebblestone-bracelet',
		price: '$1290.00 CAD',
		description: 'Handcrafted sculptural pebblestone bracelet in sterling silver.',
		model: 'Model is 5ft4 and wears size S (7 1/4 inches).',
		sizes: {
			small: {
				name: 'US S - 19cm',
				stock: false,
			},
			medium: {
				name: 'US L - 25cm',
				stock: false,
			},
		},
		images: {
			item_img: [Bracelet_1, Bracelet_2],
			models_img: {
				full: Bracelet_full,
				zoom: Bracelet_zoom,
			},
		},
	},
	{
		id: 2,
		name: 'Drippy Ring',
		url: 'drippy-ring',
		price: '$225.00 CAD',
		description: `Handcrafted sculptural band ring in sterling silver.`,
		model: 'Model is 6ft3 and wears size 13 1/4.',
		details: ['· Logo engraved at inner band.', '· Textured at surface.'],
		sizes: {
			small: {
				name: 'US 8 1/2',
				stock: true,
			},
			medium: {
				name: 'US 10 1/4',
				stock: true,
			},
			large: {
				name: 'US 13 1/4',
				stock: true,
			},
		},
		images: {
			item_img: [
				Drip_1,
        Drip_2,
        Drip_3,
        Drip_4,
        Drip_5,
			],
			models_img: {
				full: Drip_full,
				zoom: Drip_zoom,
			},
		},
	},
	{
		id: 3,
		name: 'Organic Ring',
		url: 'organic-ring',
		price: '$270.00 CAD',
		description: 'Handcrafted sculptural band ring in sterling silver.',
		model: 'Model is 6ft3 and wears size 11 3/4.',
		details: ['· Logo engraved at inner band.', '· Textured at surface.'],
		sizes: {
			small: {
				name: 'US 4 3/4',
				stock: true,
			},
			medium: {
				name: 'US 5',
				stock: false,
			},
			large: {
				name: 'US 7',
				stock: true,
			},
			extraLarge: {
				name: 'US 9 1/4',
				stock: false,
			},
		},
		images: {
			item_img: [
        Organic_1,
        Organic_2,
        Organic_3,
        Organic_4,
        Organic_5,
			],
			models_img: {
				full: Organic_full,
				zoom: Organic_zoom,
			},
		},
	},
	{
		id: 4,
		name: 'Small Pirate Ring',
		url: 'small-pirate-ring',
		price: '$270.00 CAD',
		description: 'Handcrafted signet ring in sterling silver.',
		model: 'Model is 5ft4 and wears size 6 3/4.',
		details: ['· Logo engraved at inner band.'],
		sizes: {
			small: {
				name: 'US 4 3/4',
				stock: true,
			},
			medium: {
				name: 'US 5',
				stock: false,
			},
			large: {
				name: 'US 8',
				stock: false,
			},
		},
		images: {
			item_img: [
        Small_pirate_1,
        Small_pirate_2,
        Small_pirate_3,
        Small_pirate_4,
        Small_pirate_5,
			],
			models_img: {
				full: Small_pirate_full,
				zoom: Small_pirate_zoom,
			},
		},
	},
	{
		id: 5,
		name: 'Battle Ring',
		url: 'battle-ring',
		price: '$200.00 CAD',
		description: 'Handcrafted signet ring in sterling silver.',
		model: 'Model is 5ft7 and wears size 6 3/4.',
		details: ['· Logo engraved at inner band.', '· Textured at surface.'],
		sizes: {
			small: {
				name: 'US 3 3/4',
				stock: false,
			},
			medium: {
				name: 'US 4',
				stock: true,
			},
			large: {
				name: 'US 6',
				stock: false,
			},
			extraLarge: {
				name: 'US 9 1/4',
				stock: true,
			},
		},
		images: {
			item_img: [
        Battle_1,
        Battle_2,
        Battle_3,
        Battle_4,
        Battle_5,
			],
			models_img: {
				full: Battle_full,
				zoom: Battle_zoom,
			},
		},
	},
	{
		id: 6,
		name: 'Level Ring',
		url: 'level-ring',
		price: '$250.00 CAD',
		description: 'Handcrafted sculptural signet ring in sterling silver.',
		model: 'Model is 5ft11 and wears size 6 3/4.',
		details: ['· Logo engraved at inner band.', '· Textured at surface.'],
		sizes: {
			small: {
				name: 'US 4 3/4',
				stock: false,
			},
			medium: {
				name: 'US 5',
				stock: false,
			},
			medium: {
				name: 'US 6',
				stock: false,
			},
			extraLarge: {
				name: 'US 11 1/4',
				stock: false,
			},
		},
		images: {
			item_img: [
        Level_1,
        Level_2,
        Level_3,
        Level_4,
        Level_5,
			],
			models_img: {
				full: Level_full,
				zoom: Level_zoom,
			},
		},
	},
	{
		id: 7,
		name: 'Big Pirate Ring',
		url: 'big-pirate-ring',
		price: '$290.00 CAD',
		description: 'Handcrafted signet ring in sterling silver.',
		model: 'Model is 5ft4 and wears size 3.',
		details: ['· Logo engraved at inner band.'],
		sizes: {
			small: {
				name: 'US 4 3/4',
				stock: true,
			},
			medium: {
				name: 'US 4',
				stock: true,
			},
			large: {
				name: 'US 7 1/4',
				stock: false,
			},
			extraLarge: {
				name: 'US 12 1/4',
				stock: false,
			},
		},
		images: {
			item_img: [
        big_pirate_1,
        big_pirate_2,
        big_pirate_3,
        big_pirate_4,
        big_pirate_5,
			],
			models_img: {
				full: big_pirate_full,
				zoom: big_pirate_zoom,
			},
		},
	},
	{
		id: 8,
		name: 'Damaged Rosary',
		url: 'damaged-rosary',
		price: '$460.00 CAD',
		custom: true,
		sizes: {
			small: {
				name: 'US CUSTOM ORDER',
				stock: false,
			},
		},
		images: {
			item_img: [
        Damaged_1,
        Damaged_2,
        Damaged_3
			],
			models_img: {
				full: Damaged_full,
				zoom: Damaged_zoom,
			},
		},
	},
];
