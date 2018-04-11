<template>
    <v-select :flat="flat" :solo-inverted="flat" append-icon="search" v-on:input="onSelect" :items="cities" label="Cidade" autocomplete item-text="name" item-value="id"></v-select>
</template>
<script>
export default {
    props: {flat:{ type: Boolean, required: false, default: false }},
    data: () => ({ cities: [] }),
    created() { axios.get('./cities').then(response => { this.cities = response.data }).catch(error => { alert("Ocorreu um erro ao tentar carregar as cidades"); }); },
    methods:{
        onSelect(value){ this.$emit('select', value); }
    }
}
</script>