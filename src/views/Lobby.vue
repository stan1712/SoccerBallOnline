<template>
	<div>

		<v-row>
			<v-card class="col-8 offset-2" color="white" height="450" outlined rounded="xl" shaped elevation="2">
				<v-row>
					<v-col cols="12" sm="6">
						<v-card class="ma-5" color="white" height="400" outlined rounded="xl" shaped elevation="2">
							<v-card-title> Limite de temps </v-card-title>
							<div class="d-flex flex-column mb-6">
								<v-btn depressed class="my-3 mx-7" color="green" elevation="2" x-large>
									1 min</v-btn>
								<v-btn depressed class="my-3 mx-7" color="green" elevation="2" x-large>
									2 min</v-btn>
								<v-btn depressed class="my-3 mx-7" color="green" elevation="2" x-large>
									3 min </v-btn>
							</div>


							<v-btn block depressed elevation="2" fab icon raised rounded color="green">
								Jouer
								<v-icon>mdi-flag-variant
								</v-icon>
							</v-btn>
						</v-card>
					</v-col>

					<v-col cols="12" sm="6">
						<v-card class="ma-5" color="white" height="400" outlined rounded="xl" shaped elevation="2">
							<v-card-title> Limite de but </v-card-title>

							<div class="d-flex flex-column mb-6">
								<v-btn depressed class="my-3 mx-7" elevation="2" color="green" x-large>
									5</v-btn>
								<v-btn depressed class="my-3 mx-7" elevation="2" color="green" x-large> 10 </v-btn>
								<v-btn depressed class="my-3 mx-7" elevation="2" color="green" x-large> 15</v-btn>
							</div>

							<div class="d-flex align-end">
								<v-btn block elevation="2" fab icon raised rounded color="green"> Jouer
									<v-icon>mdi-flag-variant
									</v-icon>
								</v-btn>
							</div>

						</v-card>
					</v-col>
				</v-row>


			</v-card>
		</v-row>

	</div>
</template>

<script>
	export default {
		name: "Lobby"

	}

</script>

<style>

</style>
