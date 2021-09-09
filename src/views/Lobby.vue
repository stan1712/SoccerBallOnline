<template>
	<div>
		<v-container>
			<v-row>
				<v-col cols="12" sm="4" offset-sm="2">
					<v-card class="ma-5" color="white" height="400" elevation="2">
						<v-card-title> Limite de temps </v-card-title>
						<div class="d-flex flex-column mb-6">
							<v-btn depressed class="my-3 mx-7" color="secondary" elevation="2" x-large>
								1 min</v-btn>
							<v-btn depressed class="my-3 mx-7" color="secondary" elevation="2" x-large>
								2 min</v-btn>
							<v-btn depressed class="my-3 mx-7" color="secondary" elevation="2" x-large>
								3 min
							</v-btn>
						</div>

						<div class="mx-7 mt-12">
							<v-btn block elevation="2" outlined color="primary">
								<v-icon class="mr-2">mdi-flag-variant</v-icon>
								Jouer
							</v-btn>
						</div>
					</v-card>
				</v-col>

				<v-col cols="12" sm="4">
					<v-card class="ma-5" color="white" height="400" elevation="2">
						<v-card-title> Limite de but </v-card-title>

						<div class="d-flex flex-column mb-6">
							<v-btn depressed class="my-3 mx-7" elevation="2" color="secondary" x-large>
								5</v-btn>
							<v-btn depressed class="my-3 mx-7" elevation="2" color="secondary" x-large>
								10
							</v-btn>
							<v-btn depressed class="my-3 mx-7" elevation="2" color="secondary" x-large>
								15</v-btn>
						</div>

						<div class="mx-7 mt-12">
							<v-btn block elevation="2" outlined color="primary">
								<v-icon class="mr-2">mdi-flag-variant</v-icon>
								Jouer
							</v-btn>
						</div>
					</v-card>
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>


<script>
	export default {
		name: "Lobby",
	};

</script>

<style>
</style>
