<template>
    <div>
        <navigation :flat="flat" />
        <v-main class="pt-0">
        <div v-if="isLoaded">
            <about size="size" :about="findObjectBySlug('about')" :links="findObjectBySlug('sociallinks')" />
            <experience :exp="findObjectBySlug('experiences')"/>
            <skills :skills="findObjectBySlug('skills')"/>
            <projects :projects="findObjectBySlug('projects')"/>
            <blogSection />
            <contact />
        </div>
        </v-main>
        <v-scale-transition>
            <v-btn
                fab
                v-show="fab"
                v-scroll="onScroll"
                dark
                fixed
                bottom
                right
                color="secondary"
                @click="toTop"
            >
                <v-icon>fas fa-arrow-up</v-icon>
            </v-btn>
        </v-scale-transition>
    </div>
</template>

<script>
import navigation from "../components/Navigation"
import about from "../components/About"
import skills from "../components/Skills"
import contact from "../components/Contact"
import experience from "../components/Experience"
import blogSection from "../components/BlogSection"
import projects from "../components/Projects"
import { bucket } from "../service/cosmic.js"

export default {
    components: {
        navigation,
        about,
        skills,
        contact,
        experience,
        blogSection,
        projects
    },

    data: () => ({
        fab: null,
        color: "",
        flat: null,
        isLoaded: false,
        dataPorfolio: null
    }),

    created() {
        const top = window.pageYOffset || 0
        if (top <= 60) {
            this.flat = true
        }
        
        this.fetchPortfolios()
    },

    mounted() {
        this.$vuetify.theme.dark = true
    },

    methods: {
        onScroll(e) {
        if (typeof window === "undefined") return;
            const top = window.pageYOffset || e.target.scrollTop || 0
            this.fab = top > 60
        },

        toTop() {
            this.$vuetify.goTo(0)
        },
        
        fetchPortfolios() {
            this.isLoaded = false
            bucket.getObjects({
            query: {
                type: 'portfolios'
            },
                props: 'slug, metadata'
            }).then(data => {
                this.isLoaded = true
                this.dataPorfolio = data.objects
            })
        },

        findObjectBySlug(slugName) {
            if (this.dataPorfolio && slugName != "") {
                var result = this.dataPorfolio.filter(obj => {
                    return obj.slug === slugName
                })

                if (result.length > 0) {
                    return result[0].metadata
                }
                return null
            }
        }
    },

    watch: {
        fab(value) {
            if (value) {
                this.flat = false
            } else {
                this.flat = true
            }
        }
    }
}
</script>