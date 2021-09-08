<template>
	<div>
		<v-container>
			<v-row>
				<v-col cols="3">
					<v-card>
						<v-card-title>
							<div class="text-overline">
								SCORE ROUGE
							</div>
						</v-card-title>
						<v-card-text>
							<h1 class="display-1" align="center">0</h1>
						</v-card-text>
					</v-card>
				</v-col>

				<v-col cols="6">

				</v-col>

				<v-col cols="3">
					<v-card>
						<v-card-title>
							<div class="text-overline">
								SCORE BLEU
							</div>
						</v-card-title>
						<v-card-text>
							<h1 class="display-1" align="center">0</h1>
						</v-card-text>
					</v-card>
				</v-col>
			</v-row>

			<v-card class="mt-8" height="500">
				<v-card-text>
					
				</v-card-text>
			</v-card>

			<v-card class="mt-8">
				<v-card-title>
					<div class="text-overline">
						Contrôles
					</div>
				</v-card-title>
			</v-card>
		</v-container>
	</div>
</template>

<script>
	export default {
		name: "Game",
		props: ['id'],

		data() {
			return {
				gameInfo: {}
			}
		},
		created(){
			this.$db.collection("games").doc(this.id).onSnapshot((doc) => {
				if(!doc.data()) return;

				this.gameInfo = {
					...doc.data(),
					id: doc.id
				}
			})
		}
	}
</script>