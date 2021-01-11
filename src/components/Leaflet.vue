<template>
    <div class="leaflet-map-container">
        <div class="leaflet-map" ref="leaflet">
            <LMap
                class="leaflet-map"

                v-model:zoom="zoom"
                v-model:center="center"
                @dragend="onmove"
            >
                <LTileLayer v-if="layerName === 'satellite'"
                    url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'"
                    attribution="Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
                ></LTileLayer>
                <LTileLayer v-else
                    :url="layer.url"
                    :maxZoom="layer.maxZoom"
                    :attribution="layer.attribution"
                ></LTileLayer>

                <LMarker v-if="currentPosition"
                    :lat-lng="currentPosition"
                >
                    <LIcon
                        :icon-url="currentPositionIcon"
                    />
                    <LTooltip>
                        {{textPosition}}
                    </LTooltip>
                </LMarker>

                <!-- <LMarker :lat-lng="center" draggable
                >
                    <LPopup>
                    lol
                    </LPopup>
                </LMarker> -->

                <LPolyline
                    :lat-lngs="currentPath"
                    color="green"
                ></LPolyline>
            </LMap>
        </div>
        <div v-if="canCenter"
            class="actions"
        >
            <button
                @click="recenter"
                :title="textCenterTitle"
            >
                {{textCenter}}
            </button>
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import store from '@/Store';
import { icons, layers } from '@/tools/mapInfo';
import * as VueLeaflet from '@vue-leaflet/vue-leaflet';
import 'leaflet/dist/leaflet.css';
import { LatLngTuple } from 'leaflet';
import {
    LayerId, LayerProps,
} from '@/Types';

const textPosition = 'Votre position actuelle';
const textCenterTitle = 'Recentrer et suivre votre position';
const textCenter = 'Recentrer';

const {
    LMap,
    LIcon,
    LTileLayer,
    LMarker,
    LControlLayers,
    LTooltip,
    LPopup,
    LPolyline,
    LPolygon,
    LRectangle,
} = VueLeaflet;

@Options({
    // props: {
    //     center: Array,
    //     zoom: Number,
    // },
    // provide() {
    //     return {
    //         map: computed(() => this.map),
    //     };
    // },
    components: {
        LMap,
        LIcon,
        LTileLayer,
        LMarker,
        LControlLayers,
        LTooltip,
        LPopup,
        LPolyline,
        LPolygon,
        LRectangle,
    },
    watch: {
        currentPosition() {
            if (this.followCenter) {
                this.center = this.currentPosition;
            }
        },
    },
})
export default class Leaflet extends Vue {
    private center: LatLngTuple = [46.5, 2.4];
    private zoom = 6;
    private followCenter = true;

    get textPosition() {
        return textPosition;
    }

    get textCenter() {
        return textCenter;
    }

    get texCenterTitle() {
        return textCenterTitle;
    }

    get currentPositionIcon() {
        const icon = store.mapSettings.iconPosition;
        const data = icons.get(icon);
        if (!data) {
            return undefined;
        }
        return `data:image/png;base64,${data}`;
    }

    get layerName(): LayerId {
        return store.mapSettings.layer;
    }

    get layer(): LayerProps {
        const id = this.layerName;
        let layer = layers.get(id);

        if (!layer) {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            layer = layers.get('openStreetMap')!;
        }

        return layer;
    }

    get recordedPath() {
        return store.currentPath.path;
    }

    get currentPath() {
        const path = this.recordedPath;
        return path.map((point) => {
            return [point.lat, point.lng] as LatLngTuple;
        });
        // return [
        //     [47.334852, -1.509485],
        //     [47.342596, -1.328731],
        //     [47.241487, -1.190568],
        //     [47.234787, -1.358337],
        //     this.center,
        // ];
    }

    get currentPosition(): LatLngTuple | undefined {
        const path = this.currentPath;
        const length = path.length;

        if (!length) {
            return undefined;
        }

        const lastIdx = length -1;

        return path[lastIdx];
    }

    get canCenter() {
        return !this.followCenter && !!this.currentPosition;
    }

    private onmove() {
        this.followCenter = false;
    }

    private setSize() {
        const el = this.$refs.leaflet as HTMLDivElement;
        const parent = el.parentElement;

        if (!parent) {
            return;
        }

        const box = parent.getBoundingClientRect();
        console.log('box', box.height);
        const height = box.height;
        el.style.height = `${height}px`;
        // this.map && this.map.invalidateSize();
        setTimeout(() => {
            console.log('center', this.center, this.zoom);
            this.center = [40.5, 3.4];
            setTimeout(() => {
                console.log('center2', this.center, this.zoom);
                this.center = [0, 0];
                this.zoom = 8;
            }, 5000);
        }, 5000);
    }

    private recenter() {
        this.followCenter = true;

        if (this.currentPosition) {
            this.center = this.currentPosition;
        }
    }

    private log(a: string) {
        console.log(a);
    }

    // updateSlots() {
    //     const slots = this.$slots.default;
    //     if (!slots) {
    //         return;
    //     }
    //     const elements = slots();

    //     console.log('elements', elements.length);
    //     // elements.forEach((slot: any) => {
    //     //     console.log('slot', slot);
    //     //     slot.props.map = this.map;
    //     // });
    // }

    mounted() {
        // const el = this.$refs.leaflet as HTMLDivElement;

        this.setSize();

        // const map = L.map(el).setView([42.505, 1], this.zoom);
        // const map = L.map(el).setView(this.center, this.zoom);
        console.log('should start');

        // this.map = map;

        // L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        //     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        //     maxZoom: 18,
        //     id: 'mapbox/streets-v11',
        //     tileSize: 512,
        //     zoomOffset: -1,
        // }).addTo(map);

        // console.log('mounted', this.$slots, map);
        // this.updateSlots();
    }
}
</script>

<style scoped>
.leaflet-map-container {
    height: 100%;
    width: 100%;
}
.leaflet-map {
    width: 100%;
}
.actions {
    position: fixed;
    z-index: 800;
    bottom: 2em;
    right: 1em;
    box-shadow: -2px 5px 10px black;
}
.actions button {
    padding: 1em;
}
</style>
