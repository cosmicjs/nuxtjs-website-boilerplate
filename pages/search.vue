<template>
  <div>
       <div class="container">
            <div id="imaginary_container"> 
                <h1>Search</h1>
                <div class="input-group stylish-input-group">
                    <input type="text" v-model="searchField" class="form-control"  placeholder="Search" @keyup.enter = 'searchResult'>
                    <span class="input-group-addon">
                        <button type="submit">
                            <span class="glyphicon glyphicon-search"></span>
                        </button>  
                    </span>
                </div>
            </div>
            <div v-for="s in search" :key="s.id">
                <h2>
                    {{s.title}}
                </h2> 
                <p>
                    {{s.teaser}}
                </p>
                <div>
                    <nuxt-link :to="s.permalink">Read more</nuxt-link>
                </div>
            </div>
       </div>
  </div>
</template>
<script>
export default {
    data(){
        return{
            searchField : '',
        }
    },
   computed: {
      search(){
        return this.$store.getters.getSearchData
      }
  },
  methods: {
      searchResult(){
          if(this.searchField != ''){ 
            this.$store.dispatch('getSearchData',this.searchField);
          }else{
            this.$store.dispatch('getSearchData',null);
          }
      }
  }
}
</script>

<style>
    #imaginary_container{
        margin-top:2%; /* Don't copy this */
        margin-bottom: 4%;
    }
    .stylish-input-group .input-group-addon{
        background: white !important; 
    }
    .stylish-input-group .form-control{
        border-right:0; 
        box-shadow:0 0 0; 
        border-color:#ccc;
    }
    .stylish-input-group button{
        border:0;
        background:transparent;
    }
    h1{
        color: #666;
    }
    .form-control {
        width: 100%;
        height: 44px;
        padding: 6px 12px;
        background-color: #fff;
        border: 1px solid #ccc;
        border-radius: 4px;
        transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
    }
</style>
