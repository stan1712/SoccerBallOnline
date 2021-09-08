<template>
	<div>
		<div class=big  style=" background-size: 100%; background-image: url(https://cdn.discordapp.com/attachments/884355153682112513/884772207832760410/PicsArt_09-07-09.46.29.png);"> 
		
			<v-btn class="d-flex justify-center" color="primary" elevation="2" outlined >
				oui
			</v-btn>

		</div>
		<div>
			<h1 class="d-flex justify-center" >Déscription du jeu</h1>
			<v-card class="pa-4">
			<p class="d-flex justify-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
			</v-card>
		</div>
		<div>
			<h1 class="d-flex justify-center">trailer</h1>
			<v-card class="pa-4">
			<p class="d-flex justify-center"></p>
			</v-card>
		</div>
		<div>
			<h1 class="d-flex justify-center">Crédits</h1>
			<v-card class="pa-4">
				<p class="d-flex justify-center">Projet Workshop réalisé sur 5 jours par quatre B2 de l'EPSI Bordeaux et 2 SN2.</p>
				<v-list class="d-flex justify-center"> 
					Stanislas Castaybert <br>
					Kylian Maillard <br>
					Begüm Cetin <br>
					Matheo Carlier <br>

				</v-list>
			</v-card>
		</div>
	</div>

</template>

<script>
	export default {
		name: "Home"

	}
</script>

<style>
	.big{
		min-height: 180vh;
		width: 100%;
	}
	

</style>