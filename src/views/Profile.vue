<template>
	<div>
		<v-row class="ma-5">
			<v-col cols="6" class="d-flex justify-end">
				<v-card rounded="xl" class="ma-2 pa-5" height="610" max-width="395" elevation="2" outlined>
					<v-row>
						<v-col cols="6">
							<v-avatar size="120">
								<img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
							</v-avatar>
						</v-col>
						<v-col cols="6" class="d-flex flex-row-reverse">
							<h3 style="font-size: 25px">PROFILE</h3>
							<v-col class="d-flex align-end">
								<h4 class="grey--text text--darken-2" style="font-size: 18px">
									Kikyris
								</h4>
							</v-col>
						</v-col>
						<v-col cols="12">
							<p class="grey--text text--darken-2 mb-0" style="font-size: 18px">
								adresse.mail@epsi-workshop.com
							</p>
							<v-form v-model="valid" class="d-flex justify-start">
								<v-container>
									<v-row>
										<v-col cols="12">
											<v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
										</v-col>
									</v-row>
								</v-container>
							</v-form>
						</v-col>

					</v-row>
				</v-card>
			</v-col>

			<v-col cols="6">
				<v-card rounded="xl" class="mb-4 ma-2 pa-5" height="130" max-width="395" elevation="2" outlined>
					<v-row>
						<v-col cols="6"> </v-col>
						<v-col cols="6" class="d-flex flex-row-reverse">
							<h3 style="font-size: 25px">OPTIONS</h3>
						</v-col>
						<v-container class="px-0" fluid>
							<v-switch v-model="switch1" :label="`Light theme: ${switch1.toString()}`"></v-switch>
						</v-container>
					</v-row>
				</v-card>
				<v-card rounded="xl" style="border-radius: 20px" class="d-flex flex-column ma-2 mt-2 pa-5" height="465" max-width="395" elevation="2" outlined>
					<v-row>
						<v-col cols="6"> </v-col>
						<v-col cols="6" class="d-flex flex-row-reverse">
							<h3 style="font-size: 25px">STATS</h3>
						</v-col>
					</v-row>
				</v-card>
			</v-col>
		</v-row>
	</div>
</template>

<script>
	export default {
		name: "Profile",

		data() {
			return {
				switch1: true,

				email: '',
				emailRules: [
					v => !!v || 'E-mail is required',
					v => /.+@.+/.test(v) || 'E-mail must be valid',
				],
			};
		},
	};

</script>

<style>
</style>
