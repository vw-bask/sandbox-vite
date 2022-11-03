<script setup>
import { useUserStore } from '../stores/users.js'
</script>

<template>

</template>

<style scoped>

</style>
<script>
import { mapState, mapActions } from 'pinia'

export default {
    computed: {
        ...mapState(useUserStore, { loggedIn: 'results' })
    },

    methods: {
        ...mapActions(useUserStore, ['fetchLoggedIn']),

        logUserIn() {
            // we'll populate this later
        }
    },

    created() {
        // when the template is created, we call this action
        this.fetchLoggedIn();
    }
};
</script>