<template>
	<v-app>
		<Navigation :isTransparent="transparent" />

		<v-main style="background-color: #e3e3e3">
			<transition name="fade" mode="out-in">
				<router-view :class="margins"></router-view>
			</transition>
		</v-main>
	</v-app>
</template>

<script>
	import Navigation from '@/components/@base/Navigation';

	export default {
		name: 'App',

		components: {
			Navigation,
		},

		data: () => ({
			margins: "mt-4 px-5",
			transparent: "primary", //primary
		}),

		watch: {
			$route: function() {
				if(this.$route.path === "/") this.margins = "px-5";
			}
		}
	};

</script>
