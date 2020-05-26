percentageToSolid = {
	'%/(s)': {
	  name: {
		singular: 'percentSolid',
		plural: 'percentSolids',
	  },
	  to_anchor: 1,
	},
  };
  
  module.exports = {
	metric: percentageToSolid
  , _anchors: {
	percentageToSolid: {
		unit: '%/(s)'
	  , ratio: 1
	  }
	}
  };
  