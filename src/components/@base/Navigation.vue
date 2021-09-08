<template>
	<div>

		<v-app-bar app dark v-bind:color="isTransparent">
			<v-img alt="Vuetify Logo" class="shrink mr-2" contain src="https://infographart.com/ressources/logos/IFGA/LogoIFGA_1_2x_W.png" transition="scale-transition" width="55" />

			<router-link tag="div" :to="{ path: '/' }" style="cursor: pointer;">
				<h2 class="font-weight-thin">{{ $appConfig.name }}</h2>
			</router-link>

			<v-spacer></v-spacer>

			<v-btn icon @click="drawer = !drawer">
				<v-icon>mdi-account</v-icon>
			</v-btn>
		</v-app-bar>

		<v-navigation-drawer v-model="drawer" absolute bottom temporary right>
			<v-row class="mt-2">
				<template v-if="$firebase.auth().currentUser">
					<v-col cols="4" offset="4">
						<v-avatar color="secondary" size="70">
							<img v-if="$firebase.auth().currentUser.photoURL" :src="$firebase.auth().currentUser.photoURL" class="pa-2">
							<h1 class="display-1" v-else>{{ $firebase.auth().currentUser.displayName[0].toUpperCase() }}</h1>
						</v-avatar>
					</v-col>
					<v-col cols="12" class="pt-0">
						<h2 class="text-center">Salut {{$firebase.auth().currentUser.displayName}} !</h2>
					</v-col>
				</template>
				<template v-else>
					<v-col cols="12">
						<h2 class="text-center">Vous n'êtes pas connecté</h2>
					</v-col>
				</template>
			</v-row>
			<v-divider class="my-4"></v-divider>
			<v-list nav dense>
				<v-list-item-group active-class="primary--text text--accent-4">
					<template v-if="!$firebase.auth().currentUser">
						<v-list-item link router to="/access">
							<v-list-item-title>Se connecter</v-list-item-title>
						</v-list-item>

						<v-list-item link router to="/access">
							<v-list-item-title>S'inscrire</v-list-item-title>
						</v-list-item>
					</template>

					<template v-else>
						<v-list-item link router to="/profile">
							<v-list-item-title>Mon profil</v-list-item-title>
						</v-list-item>

						<v-divider class="my-4"></v-divider>

						<v-list-item link router @click="signOut()">
							<v-list-item-content>
								<v-list-item-title>Déconnexion</v-list-item-title>
							</v-list-item-content>

							<v-list-item-icon>
								<v-icon>mdi-logout</v-icon>
							</v-list-item-icon>
						</v-list-item>
					</template>
				</v-list-item-group>
			</v-list>
		</v-navigation-drawer>

	</div>
</template>

<script>
export default {
	name: 'Navigation',
	props: ['isTransparent'],
	data() {
		return {
			drawer: false,
		}
	},
	methods: {
		async signOut() {
			try {
				await this.$firebase.auth().signOut();
				this.$router.replace({
					path: "/access"
				});
			} catch (err) {
				console.log(err);
			}
				
		}
	}
}
</script>

<style>

</style>