import {
    ImageType,
    LayerId,
    LayerProps,
    MarkerSetting,
} from '@/Types';

export const layers: Map<LayerId, LayerProps> = new Map();
layers.set('Openstreetmap', {
    url: 'https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png',
    maxZoom: 20,
    attribution: '&copy; Openstreetmap France | &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
});
layers.set('satellite', {
    url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
});
// layers.set('carte IGN', {
//     url: 'https://wxs.ign.fr/{apikey}/geoportail/wmts?REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&STYLE={style}&TILEMATRIXSET=PM&FORMAT={format}&LAYER=GEOGRAPHICALGRIDSYSTEMS.MAPS&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}',
//     attribution: '<a target="_blank" href="https://www.geoportail.gouv.fr/">Geoportail France</a>',
//     bounds: [[-75, -180], [81, 180]],
//     minZoom: 2,
//     maxZoom: 18,
//     apikey: 'choisirgeoportail', // ← need API key
//     format: 'image/jpeg',
//     style: 'normal',
// } as any);

export const icons: Map<string, MarkerSetting> = new Map();
icons.set('none', {
    label: 'Aucun',
    url: '',
    type: 'url',
});
icons.set('trekker', {
    label: 'Trekker',
    url: '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',
    type: 'base64',
});
icons.set('trekkerWithoutBorder', {
    label: 'Trekker2',
    url: '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',
    type: 'base64',
});
icons.set('mapPointer', {
    label: 'Pointeur',
    url: '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',
    type: 'base64',
});

function getImagePrefix(type: ImageType): string {
    if (type === 'base64') {
        return 'data:image/png;base64,';
    }
    if (type === 'url') {
        return '';
    }
    return '';
}

export function getUrlIcon(iconId: string): string {
    const icon = icons.get(iconId);

    if (!icon) {
        return '';
    }

    const prefix = getImagePrefix(icon.type);

    return `${prefix}${icon.url}`;
}
