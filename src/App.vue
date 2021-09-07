<template>
	<v-app>
		<Navigation/>

		<v-main style="background-color: #e3e3e3" class="px-5 mt-4">
			<router-view></router-view>
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
			//
		}),
	};

</script>
