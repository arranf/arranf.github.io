<template>
<div>
    <ul class="inline">
        <li v-for="(skill, index) in list">{{skill}}{{(index < list.length - 1) ? ',' : ''}}</li>
    </ul>
</div>
</template>

<script>
export default {
    props: {
        list: {
            type: Array,
            required: true
        }
    }
}
</script>

<style scoped>
ul.inline {
    padding: 0;
    margin-top: 0;
}

ul.inline li {
    display: inline-block; 
    padding-right: 0.5em;
    font-size: 90%;
    opacity: 0.8;
    color: #777777;
}
</style>
