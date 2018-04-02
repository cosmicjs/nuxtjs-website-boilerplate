import Vuex from 'vuex'
import Vue from 'vue'
import Request from '~/common/request'
import _ from 'lodash'
import VeeValidate from 'vee-validate'
Vue.use(VeeValidate)
function mapPages(pages) {
  var response = {};
  pages.map((page) => {
    switch(page.slug){
      case 'faqs':
        response.faqs = {};
        response.faqs.title = 'FAQs'
        page.metafields.map((obj) => {
          response.faqs[obj.key] = obj.children
        });
        break;
      case 'blog':
        response.blog = page;
        break;
      case 'home':
        response.home = {};
        page.metafields.map((obj) => {
          if(obj.key == 'carousel' || obj.key == 'blurbs'){
            response.home[obj.key] = obj.children
          }
          else
            response.home[obj.key] = obj;
        });
        break;
    }
  })
  return response;
}

function mapGlobals(globals){
  var response = {};
  globals.map((global) => {
    switch(global.slug){
      case 'contact-form':
        response.contact_form = global;
        break;
      case 'header':
        response.header = global;
        break;
      case 'nav':
        response.nav = global;
        break;
      case 'social':
        response.social = global;
        break;
      case 'contact-info':
        response.contact_info = global
        break;
      case 'footer':
        response.footer = global;
        break;
    }
  })
  return response;
}
const state = {
  global : {
      header: {},
      nav: {},
      social: {},
      contact_info: {},
      footer: {},
      contact_form: {}
  },
  pages: {
      home: {},
      blog: {},
      faqs: {},
  },
  page:{},
  blogs: {},
  blog: {},
  search: {},
  search_data: [],
}

const getters = {
  getHeader(state){
    return state.global.header
  },
  getNav(state){
      return state.global.nav
  },
  getSocial(state){
      return state.global.social
  },
  getHomeData(state){
      return state.pages.home
  },
  getBlogPage(state) {
    return state.pages.blog
  },
  getFaqs(state) {
    return state.pages.faqs
  },
  getBlog(state) {
    return state.blogs
  },
  getSearchData(state) {
    return state.search_data 
  },
  getContactInfo(state) {
    return state.global.contact_info
  },
  getFooter(state) {
    return state.global.footer
  },
  getContactForm(state) {
    return state.global.contact_form
  },
  getSelectedBlog(state) {
    return state.blog 
  },
  getPage: (state) => (slug) => {
    return _.find(state.page, function(o) { return o.slug == slug; });
  }
}

const mutations = {
  SET_HEADERS : (state , payload) => {
    state.global.header = payload
  },
  SET_NAV : (state , payload) => {
    state.global.nav = payload
  },
  SET_SOCIAL : (state , payload) => {
    state.global.social = payload
  },
  SET_CONTACT : (state , payload) => {
    state.global.contact = payload
  },
  SET_FOOTER : (state , payload) => {
    state.global.footer = payload
  },
  SET_HOME : (state, payload) => {
    state.pages.home = payload
  },
  SET_BLOG : (state, payload) => {
    state.pages.blog = payload
  },
  SET_FAQS : (state,payload) => {
    state.pages.faqs = payload
  },
  SET_BLOGS : (state,payload) => {
    state.blogs = payload
  },
  SET_SEARCH_DATA: (state, payload) => {
    state.search_data = payload
  },
  SET_CONTACT_INFO: (state, payload) => {
    state.global.contact_info = payload
  },
  SET_CONTACT_FORM: (state, payload) => {
    state.global.contact_form = payload
  },
  SET_SEARCH: (state, payload) => {
    state.search = payload
  },
  SET_SELECTED_BLOG: (state,payload) => {
    state.blog = payload
  },
  SET_PAGE: (state,payload) => {
    state.page = payload;
  }
}

const actions = {

  async nuxtServerInit(context,payload){
    const PagesResponse = await Request.getPages();
    const Pages = PagesResponse.objects;
    const BlogsResponse = await Request.getBlogs();
    const Blogs = BlogsResponse.objects;
    const SearchResponse = await Request.getSearchData();
    const Search = SearchResponse.objects;
    const Response = await Request.getGlobals();
    const Globals = Response.objects;
    if(Search){
      context.commit('SET_SEARCH',Search)
    }
    if(Blogs){
      context.commit('SET_BLOGS', Blogs)
    }
    if(Pages){
      context.commit('SET_PAGE',Pages)
      const mapped_pages = mapPages(Pages);
      context.commit('SET_HOME' ,mapped_pages.home)
      context.commit('SET_BLOG' ,mapped_pages.blog)
      context.commit('SET_FAQS' ,mapped_pages.faqs)
    }
    if(Globals){
      const mapped_globals = mapGlobals(Globals);
      context.commit('SET_HEADERS' ,mapped_globals.header.metadata)
      context.commit('SET_NAV' ,mapped_globals.nav)
      context.commit('SET_CONTACT_INFO',mapped_globals.contact_info.metadata)
      context.commit('SET_SOCIAL',mapped_globals.social.metadata)
      context.commit('SET_FOOTER',mapped_globals.footer.metadata)
      context.commit('SET_CONTACT_FORM',mapped_globals.contact_form.metadata)
    }
  },
  getSearchData(context, payload){
    let objects = this.state.search;
    let search_results = [];
    objects.forEach(object => {
      if(object.title.toLowerCase().indexOf(payload) !== -1 || object.content.toLowerCase().indexOf(payload) !== -1){
        object.teaser = object.content.replace(/(<([^>]+)>)/ig,"").substring(0, 300)
        if (object.type_slug === 'blogs')
              object.permalink = '/blog/' + object.slug
            else
              object.permalink = '/' + object.slug
              search_results.push(object)
      }
      if (!_.find(search_results, { _id: object._id })) {
        object.metafields.forEach(metafield => {
          if(metafield.value.toLowerCase().indexOf(payload) !== -1 && !_.find(search_results, { _id: object._id })) {
            object.teaser = object.content.replace(/(<([^>]+)>)/ig,"").substring(0, 300)
            if (object.type_slug === 'blogs')
              object.permalink = '/blog/' + object.slug
            else
              object.permalink = '/' + object.slug
              search_results.push(object)
          } 
        })
      }
    });
    context.commit('SET_SEARCH_DATA', search_results)
    return new Promise((resolve, reject) => {
      resolve();
    });
  },
  async sendMessage(context,payload){
    var data = payload
    var contact = this.getters.getContactForm
    const Response = await Request.contactForm(data,contact);
    return Response
  },
  getBlog(context,payload){
    this.state.blogs.forEach(element => {
      if(element.slug == payload){
        context.commit('SET_SELECTED_BLOG',element)
      }else{
        context.commit('SET_SELECTED_BLOG',null)
      }
    });
  }
}

const createStore = () => {
  return new Vuex.Store({
    state,
    getters,
    mutations,
    actions
  })
}

export default createStore