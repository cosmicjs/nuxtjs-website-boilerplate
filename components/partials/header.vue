<template>
    <div>
        <div class="container text-center">
            <nuxt-link to="/"><img :src="header.logo.url" alt=""  height="60px;"></nuxt-link>
        </div>
        <nav class="navbar navbar-default">
            <div class="container-fluid">
                <div class="navbar-header">
                    <div class="container">
                         <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>                        
                        </button>
                    </div>
                </div>
                <div class="collapse navbar-collapse" id="myNavbar">
                    <ul class="nav navbar-nav navbar-center" >
                       <li v-for="navElement in nav.metafields" :key="navElement.id">
                           <nuxt-link v-if="!navElement.children" :to="navElement.value">{{navElement.title}}</nuxt-link>
                                <a v-else class="dropdown-toggle" data-toggle="dropdown" href="#">{{navElement.title}}<span class="caret"></span></a>
                                <ul class="dropdown-menu">
                                    <li v-for="e in navElement.children" :key="e.id">
                                        <nuxt-link v-if="e.value[0] == '/'" :to="e.value">{{e.title}}</nuxt-link>
                                        <nuxt-link v-else :to="'/' + e.value">{{e.title}}</nuxt-link>
                                    </li>
                                </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>
<script>
export default {
    computed: {
        header(){
            return  this.$store.getters.getHeader
       },
       nav(){
           return this.$store.getters.getNav
       }
    },
}
</script>

<style>
    .navbar-nav ,.navbar-center {
        text-align:center;
    }
    .navbar-nav>li>a:active {
        color:#777;
    }
    
    @media (min-width: 768px) {
        .navbar-nav {
            width: 100%;
            text-align: center;
        }
        .navbar-nav > li {
            float: none;
            display: inline-block;
        }
        .navbar-nav > li.navbar-right {
            float: right !important;
        }
    }
</style>