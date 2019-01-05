<template>
    <a :href="'https://github.com/' + url">
        <!-- <img src="https://unpkg.com/simple-icons@latest/icons/github.svg" /> -->
        <img src="./github.svg" />
        <p>{{url}}</p>
    </a>
</template>

<script>
export default {
    props: {
        url: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>
    img {
        height: 1em;
        width: 1em;
    }

    p {
        display: inline;
         color: #888888;
    }
</style>
