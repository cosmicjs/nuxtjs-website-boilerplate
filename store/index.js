import Vuex from 'vuex'
import Request from '~/common/request'

function mapPages(pages) {
  var response = {};
  pages.map((page) => {
    switch(page.slug){
      case 'new-york-medical-services':
        response.new_york = page;
        break;
      case 'los-angeles-medical-services':
        response.los_angeles = page;
        break;
      case 'chicago-medical-services':
        response.chicago = page;
        break;
      case 'contact':
        response.contact = page;
        break;
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
      case 'search':
        response.search = page;
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
      case 'specialty-centers-and-programs':
        response.specialty = page;
        break;
      case 'deciding-on-care':
        response.deciding_on_care = page;
        break;
      case 'about-us':
        response.about_us = page;
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
        response.contact_info = global;
        break;
      case 'footer':
        response.footer = global;
        break;
    }
  })
  return response;
}

function mapBlog(blogs){
  var response = {}
  blogs.map((blog) => {
    response = blog
  })
  return response;
}

const state = {
  global : {
      header: {},
      nav: {},
      social: {},
      contact: {},
      footer: {}
  },
  pages: {
      home: {},
      about: {},
      blog: {},
      decidingOnCare: {},
      specialityCenter: {},
      los_angeles_medical_service: {},
      chicago_medical_service: {},
      new_york_medical_service: {},
      faqs: {},
      contact_us: {}

  },
  blogs: {}
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
    getAboutPage(state){
        return state.pages.about
    },
    getBlogPage(state) {
      return state.pages.blog
    },
    getDecidingOnCarePage(state) {
      return state.pages.decidingOnCare
    },
    getSpecialityCenterPage(state) {
      return state.pages.specialityCenter
    },
    getLosAngelesMedicalService(state) {
      return state.pages.los_angeles_medical_service
    },
    getChicagoMedicalService(state) {
      return state.pages.chicago_medical_service
    },
    getNewYorkMedicalService(state) {
      return state.pages.new_york_medical_service
    },
    getFaqs(state) {
      return state.pages.faqs
    },
    getBlog(state) {
      return state.blogs
    },
    getContactUs(state) {
      return state.pages.contact_us
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
  SET_ABOUT : (state, payload) => {
    state.pages.about = payload
  },
  SET_BLOG : (state, payload) => {
    state.pages.blog = payload
  },
  SET_DECIDE_ON_CARE : (state, payload) => {
    state.pages.decidingOnCare = payload
  },
  SET_SPECIALITY : (state, payload) => {
    state.pages.specialityCenter = payload
  },
  SET_CHICAGO_MEDICAL_SERVICE : (state, payload) => {
    state.pages.chicago_medical_service = payload
  },
  SET_New_YORK_MEDICAL_SERVICE : (state, payload) => {
    state.pages.new_york_medical_service = payload
  },
  SET_LOS_ANGELES_MEDICAL_SERVICE : (state, payload) => {
    state.pages.los_angeles_medical_service = payload
  },
  SET_FAQS : (state,payload) => {
    state.pages.faqs = payload
  },
  SET_BLOGS : (state,payload) => {
    state.blogs = payload
  },
  SET_CONTACT_US: (state,payload) => {
    state.pages.contact_us = payload
  }
}

const actions = {
  async getGlobals(context,payload){
    const Response = await Request.getGlobals();
    const Globals = Response.objects;
    const mapped_globals = mapGlobals(Globals);
    // console.log(mapped_globals.header);
    context.commit('SET_HEADERS' ,mapped_globals.header)
    context.commit('SET_NAV' ,mapped_globals.nav)
    return new Promise((resolve, reject) => {
      resolve();
    });
        // context.commit('SET_SOCIAL' ,Globals[3])
        // context.commit('SET_CONTACT' ,Globals[4])
        // context.commit('SET_FOOTER' ,Globals[5])
    
  },
  async getPages(context,payload){
    const Response = await Request.getPages();
    const Pages = Response.objects;
    const mapped_pages = mapPages(Pages);
    context.commit('SET_HOME' ,mapped_pages.home)
    context.commit('SET_ABOUT' ,mapped_pages.about_us)
    context.commit('SET_BLOG' ,mapped_pages.blog)
    context.commit('SET_FAQS' ,mapped_pages.faqs)
    context.commit('SET_DECIDE_ON_CARE' ,mapped_pages.deciding_on_care)
    context.commit('SET_SPECIALITY' ,mapped_pages.specialty)
    context.commit('SET_CHICAGO_MEDICAL_SERVICE' ,mapped_pages.chicago)
    context.commit('SET_New_YORK_MEDICAL_SERVICE' ,mapped_pages.new_york)
    context.commit('SET_LOS_ANGELES_MEDICAL_SERVICE' ,mapped_pages.los_angeles)
    context.commit('SET_CONTACT_US' ,mapped_pages.contact)
    return new Promise((resolve, reject) => {
      resolve();
    });
  },

  async getBlog(context,payload){
    const Response = await Request.getBlogs();
    const Blogs = Response.objects;
    context.commit('SET_BLOGS', Blogs)
    return new Promise((resolve, reject) => {
      resolve();
    });
  },
    getHeader(getters){
        return getters.getHeader
    },
    getNav(getters){
        return getters.getNav
    },
    getSocial(getters){
        return getters.social
    },
    getAboutPage(getters){
        return getters.getAboutPage
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
