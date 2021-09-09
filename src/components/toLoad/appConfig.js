export let appConfig = {
	// PARAMETRES DE L'APPLICATION

	name: "SoccerBallOnline",
	URL: "www.soccerball.online",
	logoUrl: "https://stan1712.com/share/PicsArt_09-06-03.46.42.png",

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

	// MAINTENANCE - COMMENTER LE ROUTER AUTO VERS LA PAGE MAINTENANCE
	maintenanceMode: false

};
