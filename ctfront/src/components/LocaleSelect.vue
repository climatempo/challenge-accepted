<template>
    <div>
        <b-input-group>
            <b-form-input v-model="locale" @input="localeChange" class="rounded-0 border-right-0"></b-form-input>
            <b-input-group-append>
                <span class="input-group-text"><span class="fa fa-search"></span></span>
            </b-input-group-append>
        </b-input-group>
        <b-list-group>
            <b-list-group-item v-if="emptyResult" disabled>Nenhum resultado</b-list-group-item>
            <b-list-group-item v-for="locale in locales" :key="locale.id" href="#" @click="localeClick(locale)">
                {{ localeName(locale) }}</b-list-group-item>
        </b-list-group>
    </div>
</template>

<script>
    import {mapActions, mapState} from "vuex";

    export default {
        name: 'LocaleSelect',
        data() {
            return {
                locale: null,
                emptyResult: false,
                searchLocked: false
            }
        },
        computed: {
            ...mapState("weather", {
                locales: state => state.locales
            })
        },
        methods: {
            ...mapActions("weather", ["ActionGetLocales", "ActionEmptyLocales"]),
            localeChange(search) {
                this.emptyResult = false;
                if (search.length > 2 && !this.searchLocked) {
                    this.searchLocked = true;
                    this.ActionGetLocales(search).then(result => {
                        if (result.length < 1) this.emptyResult = true;
                        this.searchLocked = false;
                    });
                } else {
                    this.ActionEmptyLocales();
                }
            },
            localeClick(locale) {
                this.$emit('change', locale);
                this.locale = locale.name;
                this.ActionEmptyLocales();
            },
            localeName(locale) {
                return locale.name + "/" + locale.state;
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .input-group-text {
        background-color: #fff;
        border-radius: 0;
    }

</style>
