<template>
    <div class="home">
        <Leaflet />
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Leaflet from '@/components/Leaflet.vue';

@Options({
    components: {
        Leaflet,
    },
})
export default class Home extends Vue {
}
</script>
