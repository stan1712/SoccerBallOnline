export let models = {
	user: {
		'civility': "",
		'lastName': "",
		'firstName': "",

		'status': Number(),
		'funnel': Number(),

		'avatar': "",
		'job': "",

		'address': {
			'street': "",
			'city': "",
			'region': "",
			'country': "",
			'postalCode': "",
		},

		'phone': "",
		'email': "",
		'birthdate': "",
		'creationDate': "",
		'website': "",
		'bio': "",

		'contact': {
			'call': false,
			'mail': false,
			'sms': false,
			'preference': "",
		},

		'tva': {
			'number': "",
			'status': false
		},

		'bank_info': {
			'bank': "",
			'country': [],
			'iban': ""
		},

		'company': "",

		'notification': {
			'sync': {
				'mail': false,
				'app': false
			},
			'quote': {
				'mail': false,
				'app': false
			}
		}
	},
	
	company: {
		'siret': String(),

		'nCompany': Number(),
		'name': String(),

		'address': {
			'street': String(),
			'city': String(),
			'region': String(),
			'country': String(),
			'postalCode': String(),
		},

		'avatar': String(),

		'phone': String(),
		'email': String(),
		'creationDate': String(),
		'birthdate': String(),
		'website': String(),
		'bio': String(),

		'contact': {
			'call': false,
			'mail': false,
			'sms': false,
			'preference': String(),
		},

		'tva': {
			'number': String(),
			'status': false
		},

		'bank_info': {
			'bank': String(),
			'country': String(),
			'iban': String()
		},
	},

	project: {
		'avatar': String(),
		'content': String(),
		'due': String(),
		'status': Number(),
		'title': String(),
		'type': String(),
		'value': Number()
	},

	task: {
		'status': String(),
		'task': String(),

		'category': Number(),

		'content': String(),

		'priority': Number(),

		'creationDate': new Date(),
		'dueDate': '',

		'author': String(),

		'participants': Array(),

		'project': String(),
		'projectData': Object()
	},

	product: {
		'name': '',
		'value': '',
		'reference': '',

		'shortDesc': '',
		'longDesc': '',

		'pictures': [
			{
				'key': 0,
				'link': ''
			},
			{
				'key': 1,
				'link': ''
			},
			{
				'key': 2,
				'link': ''
			},
			{
				'key': 3,
				'link': ''
			},
		]
	},

	rank: {
		name: "",
		administration: false,
		enabled: true
	},

	team: {
		'name': '',
		'description': '',
		'logo': ''
	},

	quote: {
		'belongTo': '',
		'creationDate': new Date(),
		'customer': '',
		'discount': {
			'label': '',
			'value': ''
		},
		'dueDate': new Date(),
		'nQuote': '',
		'reference': '',
		'remark': '',
		'status': '',
		'value': ''
	},

	blog: {
		'id': String(),
		'creationDate': new Date(),
		'modificationDate': new Date(),
		'name': String()
	},

	blogArticle: {
		'author': String(),
		'modificationAuthor': String(),
		'creationDate': new Date(),
		'modificationDate': new Date(),

		'title': String(),
		'subTitle': String(),

		'shortDesc': String(),
		'longDesc': String(),

		'disclaimer': String(),

		'img': {
			'main': String(),
			'secondary': String()
		},

		'callToAction': "En savoir plus",

		'contact': false
	},

	remark: {
		'creationDate': new Date(),
		'author': String(),
		'content': String()
	},

	module: {
		'name': String(),
		'description': String()
	}
};