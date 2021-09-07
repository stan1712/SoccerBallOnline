export let functions = {
	goTo: function (link, param = "_blank") {
		window.open(link, param);
	},

	findWithAttr: function (array, attr, value) {
		for(var i = 0; i < array.length; i += 1) {
			if(array[i][attr] === value) {
				return i;
			}
		}
		return -1;
	},

	getNextIndex: function(array, n) {
		var numbers = [];

		if (array.length > 1) {
			array.forEach((item) => {
				numbers.push(Number(item[n]));
			});

			if (!Math.max(...numbers)) {
				return 1;
			}

			return Math.max(...numbers) + 1;
		} else {
			return 1;
		}
	},
};
