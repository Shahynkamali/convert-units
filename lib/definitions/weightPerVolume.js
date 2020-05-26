weightPerVolume = {
	'μg/mL': {
	  name: {
		singular: 'Microgram/MilliLiter',
		plural: 'Micrograms/MilliLiters',
	  },
	  to_anchor: 1 / 1000,
	},
	'μg/μL': {
	  name: {
		singular: 'Microgram/MicroLiter',
		plural: 'Micrograms/MicroLiters',
	  },
	  to_anchor: 1,
	},
	'mg/mL': {
	  name: {
		singular: 'Milligram/MilliLiter',
		plural: 'Milligrams/MilliLiters',
	  },
	  to_anchor: 1,
	},
	'g/L': {
	  name: {
		singular: 'Gram/Liter',
		plural: 'Grams/Liter',
	  },
	  to_anchor: 1,
	},
};
  
  module.exports = {
	metric: weightPerVolume
  , _anchors: {
	weightPerVolume: {
		unit: 'mg/mL'
	  , ratio: 1
	  }
	}
  };
  