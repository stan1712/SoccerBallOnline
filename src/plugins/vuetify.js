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
				primary: '#5c7c38',
				accent: '#009432',
				secondary: '#26361e',
				success: '#A3CB38',
				info: '#12CBC4',
				warning: '#EE5A24',
				error: '#ED4C67'
			},
			light: {
				primary: '#5c7c38',
				accent: '#009432',
				secondary: '#26361e',
				success: '#A3CB38',
				info: '#12CBC4',
				warning: '#EE5A24',
				error: '#ED4C67'
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
