molarity = {
	nM: {
	  name: {
		singular: 'NanoMolar',
		plural: 'NanoMolars',
	  },
	  to_anchor: 1 / 1000000000,
	},
  
	µM: {
	  name: {
		singular: 'MicroMolar',
		plural: 'MicroMolars',
	  },
	  to_anchor: 1 / 1000000,
	},
  
	mM: {
	  name: {
		singular: 'MilliMolar',
		plural: 'MilliMolars',
	  },
	  to_anchor: 1 / 1000,
	},
  
	M: {
	  name: {
		singular: 'Molar',
		plural: 'Molars',
	  },
	  to_anchor: 1,
	},
  };
  
  module.exports = {
	metric: molarity
  , _anchors: {
	molarity: {
		unit: 'M'
	  , ratio: 1
	  }
	}
  };