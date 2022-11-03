<script setup>
import TopNav from '../components/TopNav.vue';
import Users from '../components/Users.vue';

</script>

<template>
    <TopNav />
    <h1 class="text-3xl font-bold underline">Index</h1>
</template>
<style>

</style>

<script>
export default {
    components: {
        TopNav, Users
    },

    computed: {},

    mounted() {
    },

    data() {
        return {
        };
    },
};
</script>