<template>
	<div>
		<v-container>
			<v-row>
				<v-col cols="6" sm="3">
					<v-card>
						<v-card-title>
							<div class="text-overline">
								SCORE ROUGE
							</div>
						</v-card-title>
						<v-card-text>
							<h1 class="display-1 red--text font-weight-black" align="center">{{ redScore }}</h1>
						</v-card-text>
						<v-card-actions>
							<v-row>
								<v-col cols="6">
									<v-btn block color="red" class="white--text" small @click="redScore++">+</v-btn>
								</v-col>
								<v-col cols="6">
									<v-btn block color="red" class="white--text" small @click="redScore--">-</v-btn>
								</v-col>
							</v-row>
						</v-card-actions>
					</v-card>
				</v-col>

				<v-col cols="12" sm="6" order="first" order-sm="0">

					<v-card>
						<v-card-text align="center">
							<h1 class="display-1 black--text">{{ gameInfo.name }}</h1>
							<h4>
								<span v-if="userCreator.username">
									<v-icon color="accent" small>mdi-account-outline</v-icon>
									Créateur : {{ userCreator.username }}
								</span>

								<br/>

								<span v-if="gameInfo.creationDate">
									<v-icon color="accent" small>mdi-clock-outline</v-icon>
									Créée le {{ $moment(gameInfo.creationDate.toDate()).format("DD/MM/YYYY à HH:mm") }}
								</span>
							</h4>
						</v-card-text>
					</v-card>

				</v-col>

				<v-col cols="6" sm="3">
					<v-card>
						<v-card-title>
							<div class="text-overline">
								SCORE BLEU
							</div>
						</v-card-title>
						<v-card-text>
							<h1 class="display-1 blue--text font-weight-black" align="center">{{ blueScore }}</h1>
						</v-card-text>
						<v-card-actions>
							<v-row>
								<v-col cols="6">
									<v-btn block color="blue" class="white--text" small @click="blueScore++">+</v-btn>
								</v-col>
								<v-col cols="6">
									<v-btn block color="blue" class="white--text" small @click="blueScore--">-</v-btn>
								</v-col>
							</v-row>
						</v-card-actions>
					</v-card>
				</v-col>
			</v-row>

			<v-card class="mt-8" height="500">
				
			</v-card>

			<v-row>

				<v-col cols="12" sm="6">
					<v-card class="mt-8">
						<v-card-title>
							<div class="text-overline">
								Contrôles
							</div>
						</v-card-title>
						<v-card-text>
							<v-row>
								<v-col cols="12" sm="6">
									<v-img src="https://www.hayscisd.net/cms/lib/TX02204837/Centricity/Domain/1178/arrowKeys-300x205.png" max-width="300px"></v-img>
								</v-col>
								<v-col cols="12" sm="6">
									<p>Flèche gauche/droite = Sélectionner une rangée de joueurs</p>
									<p>Flèche haut/bas = Déplacer les joueurs sur la ligne</p>
								</v-col>
							</v-row>
						</v-card-text>
					</v-card>
				</v-col>

				<v-col cols="12" sm="6">
					<v-card class="mt-8">
						<v-card-title>
							<div class="text-overline">
								Partie
							</div>
						</v-card-title>
						<v-card-text>
							<v-text-field label="Nom de la partie" v-model="gameInfo.name"></v-text-field>

							<v-row class="mt-5">
								<v-col cols="12" md="6" class="pt-0">
									<v-btn block color="primary" @click="saveGame()">Sauvegarder</v-btn>
								</v-col>
								<v-col cols="12" md="6" class="pt-0">
									<v-btn block color="error" @click="deleteGame()">Supprimer la partie</v-btn>
								</v-col>
							</v-row>
						</v-card-text>
					</v-card>
				</v-col>

			</v-row>
		</v-container>
	</div>
</template>

<script>
	export default {
		name: "Game",
		props: ['id'],

		data() {
			return {
				gameInfo: {},
				userCreator: this.$models.user,

				redScore: 0,
				blueScore: 0
			}
		},
		watch: {
			redScore: function() {
				if(this.redScore < 0) this.redScore = 0;

				this.updateScore("red", this.redScore);
			},
			blueScore: function() {
				if(this.blueScore < 0) this.blueScore = 0;

				this.updateScore("blue", this.blueScore);
			}
		},
		methods: {
			updateScore(team, score){
				this.$db.collection("games").doc(this.id).set({
					scores: {
						[team]: score
					}
				}, { 
					merge: true
				});
			},
			saveGame() {
				this.$db.collection("games").doc(this.id).set({
					...this.gameInfo
				}, { 
					merge: true
				});
			},
			deleteGame() {
				// Voir pour un modal
			}
		},
		created(){
			this.$db.collection("games").doc(this.id).onSnapshot((doc) => {
				if(!doc.data()) return;

				this.gameInfo = {
					...doc.data(),
					id: doc.id
				};
				
				if(this.gameInfo.creator) {
					this.$db.collection("users").doc(this.gameInfo.creator).get().then((doco) => {
						this.userCreator = doco.data();
					})
				}
			});
		}
	}
</script>