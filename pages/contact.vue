<template>
  <div>
      <div class="container">
          <div class="row">
          <div class="col-sm-6">
              <p class="h2">{{contact.title}}</p>
              <div v-html="contact.content"></div>
          </div>
          <div class="col-sm-6">
                  <div class="form-group" :class="{'has-error': errors.has('name') }">
                      <label for="name">Name</label>
                      <input type="text" 
                      v-model="contactMessage.name" 
                      placeholder="Ener your full name" 
                      v-validate="'required'" 
                      data-vv-name="name"
                      class="form-control">
                  </div>
                  <div class="form-group" :class="{'has-error': errors.has('email') }">
                      <label for="email">Email</label>
                      <input type="text" 
                      v-model="contactMessage.email" 
                      v-validate="'required'" 
                      data-vv-name="email"
                      placeholder="Enter your email address" 
                      name="email" 
                      class="form-control"> 
                  </div>
                  <div class="form-group">
                      <label for="phone">Phone (Optional)</label>
                      <input type="text" 
                      v-model="contactMessage.phone" 
                      placeholder="Enter your phone number" 
                      class="form-control">
                  </div>
                  <div class="form-group" :class="{'has-error': errors.has('message') }">
                        <label for="message">Message</label>
                        <textarea name="message" 
                        v-model="contactMessage.message" 
                        v-validate="'required'" 
                        data-vv-name="message"
                        class="form-control" 
                        placeholder="Enter a message" 
                        cols="10" rows="5"></textarea>
                  </div>
                    <div v-if="successMessage" class="alert alert-success ">
                        {{ successMessage }}
                    </div>
                    <div v-if="errorMessage" class="alert alert-danger">
                        {{errorMessage}}
                    </div>
                  <button class="btn btn-primary btn-lg" @click="sendMessage">Submit</button>
          </div>
      </div>
      </div>
  </div>
</template>
<script>
export default {
    data(){
        return{
            contactMessage: {
                name: null,
                email: null,
                phone: null,
                message: null
            },
            errorMessage: null,
            successMessage: null
        }
    },
    computed: {
        contact(){
            return this.$store.getters.getPage(this.$route.name)
        }
    },
    methods: {
        sendMessage(){
            this.$validator.validateAll().then(res => {
               if(res){
                    var res = this.$store.dispatch('sendMessage',this.contactMessage)
                    res.then(response => {
                        console.log('response', response)
                        if(!response || !response.status){
                            this.errorMessage = response.message
                        }else{
                            this.successMessage = response.message
                        }
                    })
               }
            })
           
        }
    }
}
</script>
<style>
    p{
    font-family: Roboto,sans-serif;
    font-size: 15px;
    line-height: 2;
    color: #666
  }
  .h2,label{
     color: #666;
  }
  .btn-primary {
        color: #fff;
        background-color: #131982;
        border-color: #10156c;
    }
    .btn-primary:hover{
        background-color:#10156c;
    }
</style>
