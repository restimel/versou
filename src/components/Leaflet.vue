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

                <LCircle v-if="currentPosition && currentPositionAccuracy > AccuracyThreshold"
                    :lat-lng="currentPosition"
                    :radius="currentPositionAccuracy"
                    color="red"
                    fill
                    fillColor="purple"
                >
                    <LPopup>
                        {{text.accuracy.replace(/%s/, currentPositionAccuracy)}}
                    </LPopup>
                </LCircle>
                <LMarker v-if="currentPosition"
                    :lat-lng="currentPosition"
                >
                    <LIcon
                        :icon-url="currentPositionIcon"
                    />
                    <LTooltip>
                        {{text.position}}
                    </LTooltip>
                </LMarker>

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
                :title="text.centerTitle"
            >
                {{text.center}}
            </button>
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import store from '@/Store';
import {
    layers,
    getUrlIcon,
} from '@/tools/mapInfo';
import * as VueLeaflet from '@vue-leaflet/vue-leaflet';
import 'leaflet/dist/leaflet.css';
import { LatLngTuple } from 'leaflet';
import {
    LayerId, LayerProps,
} from '@/Types';

const textPosition = 'Votre position actuelle';
const textCenterTitle = 'Recentrer et suivre votre position';
const textCenter = 'Recentrer';
const textAccuracy = 'La précision de votre position est à %sm près.';

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
    LCircle,
} = VueLeaflet;

@Options({
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
        LCircle,
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

    /* constant */
    private AccuracyThreshold = 15;

    private wlistener: undefined | (() => void);

    get text() {
        return {
            accuracy: textAccuracy,
            position: textPosition,
            center: textCenter,
            centerTitle: textCenterTitle,
        };
    }

    get currentPositionIcon() {
        const icon = store.mapSettings.iconPosition;
        return getUrlIcon(icon);
    }

    get layerName(): LayerId {
        return store.mapSettings.layer;
    }

    get layer(): LayerProps {
        const id = this.layerName;
        let layer = layers.get(id);

        if (!layer) {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            layer = layers.get('Openstreetmap')!;
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

    get currentPositionAccuracy(): number {
        const path = this.recordedPath;
        const length = path.length;
        if (length === 0) {
            return 0;
        }
        return path[length -1].accuracy || 0;
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
        const height = box.height;
        el.style.height = `${height}px`;
    }

    private recenter() {
        this.followCenter = true;

        if (this.currentPosition) {
            this.center = this.currentPosition;
        }
    }

    mounted() {
        this.setSize();

        if (!this.wlistener) {
            this.wlistener = () => this.setSize();
            window.addEventListener('resize', this.wlistener);
        }
        this.recenter();
    }

    destroyed() {
        if (this.wlistener) {
            window.removeEventListener('resize', this.wlistener);
        }
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
