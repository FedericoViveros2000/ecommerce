import axios from "axios";
const {
    VITE_API_PRODUCTS: urlProducts
} = import.meta.env;
const posts = {
    state: {
        posts: [],
        loadMoreArticles: false
    },
    getters: {
    },
    mutations: {
        setPosts(state, data){
            state.posts = data;
            state.loadMoreArticles = false;
        }
    },
    actions: {
        async getPosts({state, commit}, endpoint = `${urlProducts}?offset=0&limit=10`) {
            try{
                state.loadMoreArticles = true;
                let {data} = await axios.get(endpoint);
                commit("setPosts", data)
            }catch(err){    
                console.warn(err);
            }
        }
    }
}

export default posts;