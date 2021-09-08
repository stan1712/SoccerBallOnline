<template>
	<v-container>
		<v-row>
			<v-col cols="12" sm="6">

				<v-card>
					<v-card-title>
						<span class="display-1">Se connecter</span>
					</v-card-title>
					<v-card-text>
						<form>
							<v-text-field label="Email" v-model="login.email"></v-text-field>

							<v-text-field label="Mot de passe" type="password" v-model="login.password"></v-text-field>

							<v-btn class="mt-6" color="primary" large block @click="login_method()">Se connecter</v-btn>
						</form>
					</v-card-text>
				</v-card>

			</v-col>
			
			<v-col cols="12" sm="6">

				<v-card>
					<v-card-title>
						<span class="display-1">S'inscrire</span>
					</v-card-title>
					<v-card-text>
						<form>
							<v-text-field label="Nom d'utilisateur" v-model="signup.username"></v-text-field>

							<v-text-field label="Email" v-model="signup.email"></v-text-field>
							
							<v-row>
								<v-col cols="12" sm="6">
									<v-text-field label="Mot de passe" type="password" v-model="signup.password"></v-text-field>
								</v-col>
								<v-col cols="12" sm="6">
									<v-text-field label="Confirmation de mot de passe" type="password" v-model="signup.confpassword"></v-text-field>
								</v-col>
							</v-row>

							<v-btn class="mt-6" color="primary" large block @click="signup_method()">S'inscrire</v-btn>
						</form>
					</v-card-text>
				</v-card>

			</v-col>
		</v-row>
	</v-container>
</template>

<script>
	export default {
		name: "Access",

		data() {
			return {
				login: {
					email: '',
					password: ''
				},
				signup: {
					username: '',
					email: '',
					password: '',
					confpassword: ''
				}
			};
		},

		methods: {
			async login_method() {
				try {
					await this.$firebase.auth().signInWithEmailAndPassword(this.login.email, this.login.password);

					this.$router.replace({
						path: "/"
					});
				} catch (error) {
					console.log(error);
				}
			},

			signup_method() {
				this.$firebase.auth().createUserWithEmailAndPassword(this.signup.email, this.signup.password).then(credentials => {
					credentials.user.updateProfile({
						displayName: this.signup.username
					});

					this.$db.collection("users").doc(credentials.user.uid).set({
						username: this.signup.username,
						email: this.signup.email,
						creationDate: new Date()
					});
				});
			}
		}
	}
</script>

<style scoped>
</style>