<template>
	<div>
		<div class="big d-flex justify-center " style=" background-size: 100%; background-image: url(https://cdn.discordapp.com/attachments/884355153682112513/884772207832760410/PicsArt_09-07-09.46.29.png);">
			<v-btn class="d-flex justify-center " fab outlined @click="$vuetify.goTo('#description')">
				<i class="fa fa-chevron-down" aria-hidden="true"></i>
			</v-btn>

		</div>

		<v-container>

			<v-row>
				<v-col cols="12" sm="6">
					<v-card rounded="xl" class="mb-4 ma-2 pa-4" height="300" width="700" elevation="2" outlined>
						<v-card-title class="d-flex justify-center"> Description du jeu </v-card-title>

						<v-card-text class="d-flex justify-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</v-card-text>
					</v-card>
				</v-col>
				<v-col cols="12" sm="6">
					<v-img src="https://picsum.photos/800" />
				</v-col>
			</v-row>


			<v-row>
				<v-col cols="12" sm="6">
					<v-img src="https://picsum.photos/700" />
				</v-col>
				<v-col cols="12" sm="6">
					<v-card rounded="xl" class="mb-4 ma-2 pa-4" height="300" width="700" elevation="2" outlined>
						<v-card-title class="d-flex justify-center"> Trailler </v-card-title>
					</v-card>
				</v-col>


			</v-row>


			<v-row>
				<v-col cols="12" sm="6">
					<v-card rounded="xl" class="mb-4 ma-2 pa-4" height="300" width="700" elevation="2" outlined>
						<v-card-title class="d-flex justify-center"> Crédits </v-card-title>

						<p class="d-flex justify-center">Projet Workshop réalisé sur 5 jours par quatre B2 de l'EPSI Bordeaux et 2 SN2.</p>
						<v-list class="d-flex justify-center"> <br>
							Stanislas Castaybert <br>
							Kilyan Maillard <br>
							Begüm Cetin <br>
							Matheo Carlier <br>

						</v-list>
					</v-card>
				</v-col>
				<v-col cols="12" sm="6">
					<v-img src="https://picsum.photos/600" />
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>

<script>
	export default {
		name: "Home"

	}

</script>

<style>
	.big {
		min-height: 180vh;
		width: 100%;
	}

</style>
