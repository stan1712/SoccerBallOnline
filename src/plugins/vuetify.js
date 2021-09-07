import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

import fr from 'vuetify/es5/locale/fr';
import en from 'vuetify/es5/locale/en';

Vue.use(Vuetify);

export default new Vuetify({
	treeShake: true,
	icons: {
		iconfont: 'mdi', // https://materialdesignicons.com/cdn/2.0.46/
	},
	theme: {
		dark: false,
		themes: {
			dark: {
				primary: '#1976D2',
				accent: '#FF4081',
				secondary: '#ffe18d',
				success: '#4CAF50',
				info: '#2196F3',
				warning: '#FB8C00',
				error: '#FF5252'
			},
			light: {
				primary: '#1976D2',
				accent: '#e91e63',
				secondary: '#30b1dc',
				success: '#4CAF50',
				info: '#2196F3',
				warning: '#FB8C00',
				error: '#FF5252'
			}
		}
	},
	lang: {
		locales: {
			fr,
			en
		},
		current: 'fr'
	}
});
