import Vue from 'vue';
import '@fortawesome/fontawesome-free/css/all.css'
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

const opts = { 
    icons: {
        iconfont: 'fa'
    },
    theme: {
        dark: true,
    }
}

export default new Vuetify({
    opts
});
