<template>
    <div class="main-content">
        <breadcumb :page="$t('countries')" :folder="$t('settings.show')"/>
        <b-card class="wrapper">
            <g-list resource="country" :endPoint="route('settings.countries.fetch')"/>

            <!--<datatable :columns="columns" @sort="sortBy" :sortKey="sortKey" :source="source" ref="datatable">-->
                <!--<template slot="is_active" slot-scope="{item}">-->
                    <!--<span class="center-btns">-->
                        <!--<span :class="{'badge': true, 'badge-success': item.is_active , 'badge-danger' : !item.is_active}">-->
                            <!--{{item.is_active ? 'Active' : 'Inactive' }}-->
                        <!--</span>-->
                    <!--</span>-->
                <!--</template>-->

                <!--<template slot="flag_url" slot-scope="{item}">-->
                    <!--<div class="flag">-->
                        <!--<img :src="item.flag_url">-->
                    <!--</div>-->
                <!--</template>-->
                <!--<template slot="actions" slot-scope="{item}">-->
                    <!--<b-dropdown variant="primary  btn-sm" id="dropdown-1" offset="-25" text="Options" class="mb-2">-->
                        <!--<b-dropdown-item>-->
                            <!--<router-link :to="'/settings/countries/edit/'+item.id">-->
                                <!--<i class="i-Eraser-2 text-15 text-success mr-2"></i>-->
                                <!--Edit-->
                            <!--</router-link>-->
                        <!--</b-dropdown-item>-->
                        <!--<b-dropdown-item @click="changeStatus(item)">-->
                            <!--<i :class="{'i-Block-Window text-15 text-warning':item.is_active , 'i-Yes text-15 text-primary' : !item.is_active}"></i>-->
                            <!--{{item.is_active ? 'Deactivate' : 'Activate' }}-->
                        <!--</b-dropdown-item>-->
                        <!--<b-dropdown-item @click="deleteCountry(item)">-->
                            <!--<i class="i-Close-Window text-15 text-danger"></i>-->
                            <!--Delete-->
                        <!--</b-dropdown-item>-->
                        <!--<b-dropdown-divider></b-dropdown-divider>-->
                        <!--<b-dropdown-item>-->
                            <!--<router-link :to="'/settings/cities/list/'+item.id">-->
                                <!--<i class="i-Eraser-2 text-15 text-success mr-2"></i>-->
                                <!--Cities-->
                            <!--</router-link>-->
                        <!--</b-dropdown-item>-->
                    <!--</b-dropdown>-->
                    <!--&lt;!&ndash;<span class="center-btns">&ndash;&gt;-->
                    <!--&lt;!&ndash;<router-link :to="'/settings/countries/edit/'+item.id">&ndash;&gt;-->
                    <!--&lt;!&ndash;<a href="javascript:;">&ndash;&gt;-->
                    <!--&lt;!&ndash;<i class="i-Eraser-2 text-25 text-success mr-2"></i>&ndash;&gt;-->
                    <!--&lt;!&ndash;</a>&ndash;&gt;-->
                    <!--&lt;!&ndash;</router-link>&ndash;&gt;-->
                    <!--&lt;!&ndash;<a href="javascript:;" @click="changeStatus(item)">&ndash;&gt;-->
                    <!--&lt;!&ndash;<i :class="{'i-Close-Window text-25 text-danger':item.is_active , 'i-Restore-Window text-25 text-primary' : !item.is_active}"></i>&ndash;&gt;-->
                    <!--&lt;!&ndash;</a>&ndash;&gt;-->
                    <!--&lt;!&ndash;</span>&ndash;&gt;-->
                <!--</template>-->
            <!--</datatable>-->
        </b-card>
    </div>
</template>

<script>
    import {makeRequest, routes} from "../../../util/axios";
    import Datatable from "../../../components/datatable/Datatable";

    export default {
        metaInfo: {
            title: "Countries list"
        },
        components: {datatable: Datatable},
        data() {
            return {
                sortKey: '',
                // columns: [
                //     {width: '10%', label: '#', name: 'id'},
                //     {width: '25%', label: 'Name', name: 'name'},
                //     {width: '20%', label: 'Nationality', name: 'nationality'},
                //     {width: '15%', label: 'Currency', name: 'currency'},
                //     {width: '15%', label: 'Mobile Prefix', name: 'mobile_prefix'},
                //     {width: '15%', label: 'Flag', name: 'flag_url'},
                //     {width: '15%', label: 'Status', name: 'is_active', class: 'vgt-left-align text-right'},
                //     {width: '15%', label: 'Actions', name: 'actions', class: 'vgt-left-align text-right'}
                // ],
                source: '',
            }
        },
        created() {
            this.source = routes.settings.countries.fetch();
        },
        methods: {
            sortBy(key) {
                this.sortKey = key;
            },
            changeStatus(item) {
                let self = this;
                makeRequest(
                    'PATCH',
                    routes.settings.countries.activate(item.id),
                    {
                        is_active: !item.is_active
                    },
                    function (response) {
                        if (response.data.status === 200) {
                            self.$refs.datatable.fetch(self.$refs.datatable.pagination.currentPage)
                        }
                    },
                    function (xhr) {

                    }
                )
            },
            deleteCountry(item) {
                let self = this;
                makeRequest(
                    'DELETE',
                    routes.settings.countries.delete(item.id),
                    {
                        is_active: !item.is_active
                    },
                    function (response) {
                        if (response.data.status === 200) {
                            self.$refs.datatable.fetch(self.$refs.datatable.pagination.currentPage);
                            self.$bvToast.toast(self.$t('deleted_successfully'), {
                                title: '',
                                variant: '',
                                solid: true
                            });
                        }
                    },
                    function (xhr) {

                    }
                )
            }
        }
    };
</script>
