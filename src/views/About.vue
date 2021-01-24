<template>
    <div class="about">
        <Back />
        <h1>À propos</h1>
        <p>{{textInformation}}</p>
        <Form :values="values" />
        <h2>Credit</h2>
        <ul>
            <li>treking icons made by <a href="https://www.flaticon.com/free-icon/trekking_776537" title="monkik">monkik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></li>
            <li>marker icon made by <a href="https://www.flaticon.com/authors/dinosoftlabs" title="DinosoftLabs">DinosoftLabs</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a></li>
            <li>placeholder icon made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a></li>
        </ul>
    </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Back from '@/components/Back.vue';
import Form from '@/components/Form.vue';
import appConfig from '@/appConfig.json';

@Options({
    components: {
        Back,
        Form,
    },
})
export default class About extends Vue {
    get textInformation() {
        return `Cette application n'utilise aucun cookie. Toutes les informations
        sont stockées uniquement sur votre appareil. Vous pouvez les exporter et
        les importer. Un accès internet est nécessaire pour afficher les fonds de cartes.`;
    }

    get values() {
        return [{
            label: 'Program name',
            value: appConfig.name,
            type: 'rawText',
        }, {
            label: 'Version',
            value: appConfig.version,
            type: 'rawText',
        }, {
            label: 'Author',
            value: appConfig.author,
            type: 'rawText',
        }, {
            label: 'License',
            value: appConfig.license,
            type: 'rawText',
        }, {
            type: 'empty',
        }, {
            label: 'Description',
            value: appConfig.description,
            type: 'rawText',
        }];
    }
}
</script>
