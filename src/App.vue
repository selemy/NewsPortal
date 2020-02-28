<template>
	<div id="app" class="container">
		<div class="row text-center">
			<div class="col-12">
				<router-link active-class="font-bold" :to="`/news`"><h1> НОВОСТИ </h1></router-link>				
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {}
  }
}
</script>

<style src="./assets/css/tailwind.css"></style>
