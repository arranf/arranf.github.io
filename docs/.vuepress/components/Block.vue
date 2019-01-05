<template>
<div class="block">
    <h3 style="margin-bottom: 0; padding-bottom: 0;">{{title}}</h3>
    <h4 v-if="subtitle" style="display: inline;">{{subtitle}}</h4> <span v-if="years" class="right"><Badge :text="years" /></span>

    <p><slot></slot></p>
</div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        },
        subtitle: {
            type: String
        },
        years: {
            type: String
        }
    }
}
</script>

<style scoped>
.right {
    float: right;
}

.block {
    margin-bottom: 4em;
    border-bottom: 1px solid #eeeff0;
}
</style>