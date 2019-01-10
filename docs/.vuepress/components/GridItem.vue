<template>
<div class="item" :class="itemClass">
    <slot /> <span :class="badgeClass"> <Badge v-if="badge" :type="badgeColor" :text="badgeText"  /></span>
</div>
</template>

<script>
export default {
    props: {
        badge: {
            type: [Object, String]
        },
        classes: [Array, String]
    },
    computed: {
        itemClass () {
            const is33 = this.classes === '33' || (Array.isArray(this.classes) && this.classes.indexOf('33') > -1)
            const is100 = this.classes === '100' || (Array.isArray(this.classes) && this.classes.indexOf('100') > -1)
            return {
                'w-33': is33,
                'w-100': !is33 && is100,
                'p-1': is33,
                'p-1-0-l': !is33 && is100
            }
        },
        badgeClass() {
            return {
                right: this.badge && this.badge.position && this.badge.position === 'right'
            }
        },
        badgeText() {
            if (this.badge && typeof(this.badge) === 'string') {
                return this.badge;
            }
            return this.badge.text;
        },
        badgeColor() {
            if (this.badge && this.badge.type) {
                return this.badge.type;
            }
            return 'tip';
        }
    }
}
</script>

<style lang="stylus" scoped>
.item
  flex 1
  border-bottom 1px solid #d8d3d3


.p-1 
  padding 0.75em


.p-1-0-l
  padding 0.5em 0.5em 0.5em 0em
  
.w-33
  min-width 25%

.w-100
  min-width 100%

@media print
  .p-1 
    padding 0.1em

  .p-1-0-l
    padding 0 0.1em 0.1em 0em

  .item
    border-bottom none

</style>
