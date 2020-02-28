import VueRouter from 'vue-router'
import NewsList from './components/news/List'
import NewsDetails from './components/news/Profile'

export default new VueRouter({
    routes: [
        {
            path: '/news', // http://localhost:8080/users
            component: NewsList
        },
        {
            path: '/news/:id', // http://localhost:8080/users/1
            component: NewsDetails
        },       
    ],
    mode: 'history' // http://localhost:8080/#/users => http://localhost:8080/users
})