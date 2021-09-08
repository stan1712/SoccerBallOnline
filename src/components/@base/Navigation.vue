<template>
		<v-app-bar app dark v-bind:color="isTransparent" prominent shrink-on-scroll>
			<v-img alt="Vuetify Logo" class="shrink mr-2" contain src="https://infographart.com/ressources/logos/IFGA/LogoIFGA_1_2x_W.png" transition="scale-transition" width="55" />

			<router-link tag="div" :to="{ path: '/' }" style="cursor: pointer;">
				<h2 class="font-weight-thin">{{ $appConfig.name }}</h2>
			</router-link>
	</v-app-bar>
</template>

<script>
export default {

}
</script>

<style>

</style>