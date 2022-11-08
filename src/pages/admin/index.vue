<script setup>
import TopNav from '../../components/TopNav.vue';
//import gql from 'graphql-tag';
import { useQuery } from '@vue/apollo-composable';
import CHARACTERS_QUERY from '../../apollo/queries/Characters.js';
/* const CHARACTERS_QUERY = gql`
  query Characters {
    characters {
      results {
        id
        name
        image
      }
    }
  }` */
const { result, loading, error } = useQuery(CHARACTERS_QUERY);
</script>

<template>
    <TopNav/>
    <h1 class="mb-6">Admin: Testing out Apollo/GQL</h1>
    <p v-if="error">Something went wrong...</p>
    <p v-if="loading">Loading...</p>
    <p v-else v-for="character in result.characters.results" :key="character.id">
        {{ character.name }}
    </p>
</template>
<style>

</style>

<script>

export default {
    name: 'Admin',
    components: {
        TopNav
    },
    /* setup() {
        const { result, loading, error } = useQuery(CHARACTERS_QUERY);
        return {
            result,
            loading,
            error
        }
    }, */
    computed: {},

    mounted() {
    },

    data() {
        return {
            result: "",
            loading: "",
            error: ""
        };
    },
};
</script>