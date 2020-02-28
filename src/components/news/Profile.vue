<template>
	<div id="news-profile">
		<div class="row text-center">
			<div class="col-12" v-for="history in news" :key="history.id">
				<template v-if="history.id == id">
					<h3>{{ history.title }}</h3>
					<img  class="w-100 p-3" :src="history.image">
					<h4>{{ history.description }}</h4>
					<h6>{{ history.article }}</h6>
				</template>
			</div>
		</div>
		<a href="/news">Вернуться к списку новостей</a>
	</div>
</template>

<script>
	
	import {mapGetters} from 'vuex'
	export default {
		name: "news",
		data(){
			return {
				title: "Profile",
				id: this.$route.params['id'],
				image: this.$route.params['image'],
				description: this.$route.params['description']
			}
		},
		methods: {
			back() {
				this.$router.push('/news')
			}
		},
		computed: mapGetters([
			'news'
		]),
	}

</script>