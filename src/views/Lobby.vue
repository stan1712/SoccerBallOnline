<template>
	<div>
		<v-container>
			<v-row class="mt-4">
				<v-col cols="12" sm="4" offset-sm="2">
					<v-card elevation="2">
						<v-card-title>
							<v-row>
								<v-col cols="auto">
									Limite de temps
								</v-col>
								<v-spacer></v-spacer>
								<v-col cols="auto">
									<v-icon color="accent">mdi-alarm</v-icon>
								</v-col>
							</v-row>
						</v-card-title>

						<v-card-text>
							<v-btn class="my-6 col-12" block color="secondary" :outlined="time == -1" @click="time = -1">
								Aucune
							</v-btn>
							<v-btn class="my-6 col-12" block color="secondary" x-large :outlined="time == 1" @click="time = 1">
								1 min
							</v-btn>
							<v-btn class="my-6 col-12" block color="secondary" x-large :outlined="time == 2" @click="time = 2">
								2 min
							</v-btn>
							<v-btn class="my-6 col-12" block color="secondary" x-large :outlined="time == 3" @click="time = 3">
								3 min
							</v-btn>
						</v-card-text>
					</v-card>
				</v-col>

				<v-col cols="12" sm="4">
					<v-card elevation="2">
						<v-card-title>
							<v-row>
								<v-col cols="auto">
									Limite de but
								</v-col>
								<v-spacer></v-spacer>
								<v-col cols="auto">
									<v-icon color="accent">mdi-counter</v-icon>
								</v-col>
							</v-row>
						</v-card-title>

						<v-card-text>
							<v-btn class="my-6 col-12" block color="secondary" :outlined="buts == -1" @click="buts = -1">
								Aucune
							</v-btn>
							<v-btn class="my-6 col-12" block color="secondary" x-large :outlined="buts == 5" @click="buts = 5">
								5
							</v-btn>
							<v-btn class="my-6 col-12" block color="secondary" x-large :outlined="buts == 10" @click="buts = 10">
								10
							</v-btn>
							<v-btn class="my-6 col-12" block color="secondary" x-large :outlined="buts == 15" @click="buts = 15">
								15
							</v-btn>
						</v-card-text>
					</v-card>
				</v-col>

				<v-col cols="12" sm="8" offset-sm="2" offset-lg="0" lg="2">
					<v-card elevation="2">
						<v-card-title>
							<v-row>
								<v-col cols="auto">
									Mes parties
								</v-col>
							</v-row>
						</v-card-title>

						<v-card-text>
							<v-list>
								<v-list-item-group disabled color="primary">
									<v-list-item v-for="item in games" :key="item.id" @click="$router.replace({path: `/game/${item.id}`});">
										<v-list-item-content>
											<v-list-item-title v-text="item.name"></v-list-item-title>
											<v-list-item-subtitle v-if="item.options">
												<span v-if="item.options.buts && item.options.buts != -1">Max {{ item.options.buts }} but(s)</span>
												<span v-if="(item.options.buts && item.options.buts != -1) && (item.options.time && item.options.time != -1)">・</span>
												<span v-if="item.options.time && item.options.time != -1">Max {{ item.options.time }} minute(s)</span>
												
											</v-list-item-subtitle>
										</v-list-item-content>
									</v-list-item>
								</v-list-item-group>
							</v-list>
						</v-card-text>
					</v-card>
				</v-col>

				<v-col cols="8" offset="2">
					<v-btn block color="accent" outlined x-large @click="createGame()">
						<v-icon class="mr-2">mdi-flag-variant</v-icon>
						Lancer la partie
					</v-btn>
				</v-col>

				<v-col cols="8" offset="2">
					<v-img src="@/assets/ImageLobby.png" />
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>


<script>
	export default {
		name: "Lobby",
		data() {
			return {
				userInfo: this.$models.user,

				time: -1,
				buts: -1,

				games: []
			}
		},
		methods: {
			createGame() {
				function makeid(length) {
					var result = '';
					var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
					var charactersLength = characters.length;
					for (var i = 0; i < length; i++) {
						result += characters.charAt(Math.floor(Math.random() * charactersLength));
					}
					return result;
				}

				var id = makeid(6);

				this.$db.collection("games").doc(id).set({
					creationDate: new Date(),
					creator: this.userInfo.id,

					name: `Partie de ${this.userInfo.username}`,

					options: {
						time: this.time,
						buts: this.buts
					}
				});

				this.$router.replace({
					path: `/game/${id}`
				});
			}
		},
		created() {
			this.$db.collection("users").doc(this.$firebase.auth().currentUser.uid).onSnapshot((user) => {
				this.userInfo = {
					...user.data(),
					id: user.id
				};

					
				this.$db.collection("games").where("creator", "==", this.userInfo.id).onSnapshot((res) => {
					res.forEach((doc) => {
						this.games.push({
							...doc.data(),
							id: doc.id
						})
					})
				});
			});
		}
	};

</script>

<style>
</style>
