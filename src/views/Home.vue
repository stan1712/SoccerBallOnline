<template>
	<div>

		<section id="base">
			<v-row no-gutters>
				<v-img :min-height="'calc(100vh - ' + $vuetify.application.top + 'px)'" src="https://cdn.shopify.com/s/files/1/0177/9630/products/joueurs-acier-babyfoot.jpg?v=1493063869" alt="Arrière plan d'accueil">
					<template v-slot:placeholder>
						<v-row class="fill-height ma-0" align="center" justify="center">
							<v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
						</v-row>
					</template>

					<v-theme-provider dark>
						<v-container fill-height>
							<v-row align="center" class="white--text mx-auto" justify="center">
								<v-col class="white--text text-center" cols="12" tag="h1">

									<span :class="[$vuetify.breakpoint.smAndDown ? 'display-3': 'display-4']" class="font-weight-black grey--text text--darken-4">
										Soccer Ball Online
									</span>

									<br>

									<span :class="[$vuetify.breakpoint.smAndDown ? 'display-1' : 'display-2']" class="font-weight-light white--text">
										LA référence en matière de Babyfoot en ligne.
									</span>

								</v-col>

								<v-btn aria-label="Poursuivre la visite du site" class="align-self-end" fab outlined @click="$vuetify.goTo('#description')">
									<v-icon>mdi-chevron-double-down</v-icon>
								</v-btn>
							</v-row>
						</v-container>
					</v-theme-provider>
				</v-img>
			</v-row>
		</section>

		<v-container>

			<section id="description">
				<v-row>
					<v-col cols="12" sm="6">
						<v-card class="mb-4 ma-2 pa-4" height="300" width="700" elevation="2" >
							<v-card-title class="d-flex justify-center"> Description du jeu </v-card-title>

							<v-card-text class="d-flex justify-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</v-card-text>
						</v-card>
					</v-col>
					<v-col cols="12" sm="6">
						<v-img src="https://picsum.photos/800" />
					</v-col>
				</v-row>
			</section>

			<section class="mb-4 ma-2 pa-4">
				<v-row >
					<v-col cols="40" sm="8" >
						<v-card class="mb-4 ma-2 pa-4" height="350" width="700" elevation="2" >
							<v-card-title class="d-flex justify-center"> Crédits </v-card-title>

							<p class="d-flex justify-center">Projet Workshop réalisé sur 5 jours par quatre B2 de l'EPSI Bordeaux et 2 SN2.</p>
							<v-list class="d-flex justify-center"> <br>
								Stanislas Castaybert <br>
								Kilyan Maillard <br>
								Begüm Cetin <br>
								Matheo Carlier <br>
								Theo Melendreras <br>
								Ilias Lazaar <br>
								Gaignierre Cyrille
							</v-list>
						</v-card>
					</v-col>
				</v-row>
			</section>
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
