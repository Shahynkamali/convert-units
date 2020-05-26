liquidUnits = {
	'%': {
	  name: {
		singular: 'percentage',
		plural: 'percentages',
	  },
	  to_anchor: 1,
	},
  
	'X': {
	  name: {
		singular: 'time',
		plural: 'times',
	  },
	  to_anchor: 1,
	},
  
	'U/mL': {
	  name: {
		singular: 'unit per mililiter',
		plural: 'units pers mililiter',
	  },
	  to_anchor: 1,
	},
  };
  
  module.exports = {
	metric: liquidUnits
  , _anchors: {
	liquidUnits: {
		unit: '%'
	  , ratio: 1
	  }
	}
  };
  