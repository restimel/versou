<template>
    <div class="settings">
        <Back/>
        <h1>Geolocation settings</h1>
        <Form
            :values="fields"
            @input="onChange"
        />
    </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import store from '@/Store';
import Back from '@/components/Back.vue';
import Form from '@/components/Form.vue';
import {
    FieldSelectOption,
    FormItem,
    LayerId,
} from '@/Types';
import notification from '@/Notification';
import {
    layers,
    icons,
    getUrlIcon,
} from '@/tools/mapInfo';

const textMustBeInteger = 'Cette valeur doit être un nombre entier positif.';

@Options({
    components: {
        Back,
        Form,
    },
})
export default class GeolocSettings extends Vue {
    private refreshTimeComment = '';
    get fields(): Partial<FormItem>[] {
        const geolocSettings = store.geolocSettings;
        const mapSettings = store.mapSettings;
        return [{
            type: 'emptyLine',
        }, {
            id: 'refreshTime',
            label: 'Délai de rafraichissement de la position',
            title: 'Temps entre 2 enregistrements de positions',
            type: 'number',
            unit: 'secondes',
            value: Math.round(geolocSettings.refreshTime / 1000),
            min: 1,
            comment: this.refreshTimeComment,
        }, {
            id: 'highPrecision',
            label: 'Utiliser une plus grande précision GPS',
            title: 'Cette fonctionnalité peut consommer plus de batterie',
            type: 'boolean',
            value: geolocSettings.highPrecision,
        }, {
            type: 'emptyLine',
        }, {
            id: 'layer',
            label: 'Fond de carte',
            type: 'select',
            value: mapSettings.layer,
            options: Array.from(layers, ([layerId]) => ({
                text: layerId,
                value: layerId,
            } as FieldSelectOption)),
        }, {
            id: 'iconPosition',
            label: 'Marqueur de votre position',
            type: 'select',
            value: mapSettings.iconPosition,
            options: Array.from(icons, ([iconId, icon]) => ({
                text: icon.label,
                value: iconId,
            } as FieldSelectOption)),
        }, {
            label: 'Aperçu du marqueur',
            type: 'image',
            value: getUrlIcon(mapSettings.iconPosition),
        }];
    }

    private onChange(fieldId: string, value: string) {
        switch(fieldId) {
            case 'refreshTime': {
                const time = +value * 1000;
                if (Number.isFinite(time) && time > 0) {
                    store.geolocSettings.refreshTime = time;
                    this.refreshTimeComment = '';
                } else {
                    this.refreshTimeComment = textMustBeInteger;
                }
                break;
            }
            case 'highPrecision':
                store.geolocSettings.highPrecision = !!value;
                break;
            case 'layer':
                if (layers.has(value as LayerId)) {
                    store.mapSettings.layer = value as LayerId;
                }
                break;
            case 'iconPosition':
                if (icons.has(value)) {
                    store.mapSettings.iconPosition = value;
                }
                break;
            default:
                notification(`field id "${fieldId}" does not exists`, {type: 'error'});
        }
    }
}
</script>
