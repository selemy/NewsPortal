<template>
    <div id="users-list" class="container overflow-auto">
        <div class="searchbar">
            <form>
                <input class="form-control" type="text" placeholder="поиск..." v-model="searchTitle">
            </form>
        </div>
        <div class="row text-center">
            <div class="col-4" v-for="history in filterNews" :key="history.id">
                <router-link tag="a" :to="`/news/${history.id}`">{{ history.title }}</router-link>
                <h6>{{ history.description }}</h6>
                <img  class="w-100 p-3" :src="history.img">
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    export default {
        name: "List",
        data() {
            return{
                searchTitle: ''
            }
        },
        computed: {
            ...mapGetters([
                'news'
            ]),
            filterNews() {
                return this.$store.state.news.filter((history) => {
                    return history.title.toLowerCase().match(this.searchTitle.toLowerCase());
                });
            },
        }
    }
    
</script>

<style></style>