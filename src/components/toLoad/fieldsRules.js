export let fieldsRules = {
	required: function (param, fem = false) {
		var output = fem ? [
			v => !!v || "Une " + param + " est requise.",
		] : [
			v => !!v || "Un " + param + " est requis.",
		];
		
		return output;
	},
	email: [
		v => (!v || v.length < 10 || /.+@.+\..+/.test(v)) || "L'e-mail doit être valide.",
	],
	phone: [
		v => !!v || "Un numéro de téléphone est requis.",
		v => (v && v.length >= 10) || "Le numéro de téléphone doit être supérieur à 10 charactères."
	],
	password: function (pass) {
		var output = [
			v => pass == v || "Les mots de passes ne correspondent pas",
		]

		return output;
	}
}