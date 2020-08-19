<template>
    <div>
        <h1 v-text="title"></h1>
        <h2 v-text="subtitle"></h2>
    </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
    computed: {
        ...mapState(["title","subtitle"])
    }
}
</script>
