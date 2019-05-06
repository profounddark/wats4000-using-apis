<template>
    <div>
        <h2>Nav Bar</h2>
        <nav>
            <router-link v-for="routes in links"
                v-bind:key="routes.id"
                :to="`${routes.page}`">{{routes.text}}</router-link>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'Navigation',
    data () {
        return {
            links: [
                {
                    id: 0,
                    text: 'Rhymesaurus',
                    page: '/Rhymesaurus'
                },
                {
                    id: 1,
                    text: 'Friendfinder',
                    page: '/Friendfinder'
                },
                {
                    id: 2,
                    text: 'Adjectivizer',
                    page: '/Adjectivizer'
                }
            ]
        }
    }
}
</script>
<style>
    nav a {
        text-transform: uppercase;
        text-decoration: none;
        padding: 0.5rem;
        color: white;
        border:solid;
        border-width: .25rem 0 .25rem .25rem;
        border-color: black;
        background-color: darkslategray;
    }
    nav a:last-child {
        border-right-width: .25rem;
    }
    nav a:hover {
        background-color: lightslategray;
    }

</style>