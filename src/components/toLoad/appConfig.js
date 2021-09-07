export let appConfig = {
	// PARAMETRES DE L'APPLICATION

	name: "Base",
	URL: "www.infographart.com",
	logoUrl: "https://infographart.com/ressources/logos/IFGA/LogoIFGA.svg",

	transitionOpen: "https://hostcrush.cloud/echange/VueDesignProps/Transitions/Rounded-1-Close.png",
	transitionOpenLazy: "https://hostcrush.cloud/echange/VueDesignProps/Transitions/Rounded-1-Close_Lazy.png",
	transitionClose: "https://hostcrush.cloud/echange/VueDesignProps/Transitions/Rounded_1-Close.png",
	transitionCloseLazy: "https://hostcrush.cloud/echange/VueDesignProps/Transitions/Rounded_1-Lazy-Close.png",

	// SOCIALS

	socialFacebook: "",
	socialYoutube: "",

	socials: [{
		displayName: 'Facebook',
		link: 'https://www.facebook.com/',
		icon: 'mdi-facebook',
	}, {
		displayName: 'Youtube',
		link: 'https://www.youtube.com/',
		icon: 'mdi-youtube',
	}],

	//CONTACT

	contactInFooter: true, // Ajouter le(s) adresse(s) dans le footer ? (bool)

	contactName1: "",
	contactNumber1: "",
	contactAdress1: "",
	contactAdressMap1: "",


	contact2: false, // Utiliser seconde adresse ? (bool)

	contactName2: "",
	contactNumber2: "",
	contactAdress2: "",
	contactAdressMap2: "",


	//HORAIRES

	contactHours: [{
		day: 'Lundi',
		ma: '08:00 - 12:00',
		am: '14:00 - 17:00',
	}, {
		day: 'Mardi',
		ma: '08:00 - 12:00',
		am: '14:00 - 17:00',
	}, {
		day: 'Mercredi',
		ma: '08:00 - 12:00',
		am: '14:00 - 17:00',
	}, {
		day: 'Jeudi',
		ma: '08:00 - 12:00',
		am: '14:00 - 17:00',
	}, {
		day: 'Vendredi',
		ma: '08:00 - 12:00',
		am: '14:00 - 17:00',
	}],





	// MAINTENANCE - COMMENTER LE ROUTER AUTO VERS LA PAGE MAINTENANCE
	maintenanceMode: false

};
