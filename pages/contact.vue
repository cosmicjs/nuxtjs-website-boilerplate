<template>
  <div>
      <div class="container">
          <div class="row">
          <div class="col-sm-6">
              <p class="h2">{{contact.title}}</p>
              <div v-html="contact.content"></div>
          </div>
          <div class="col-sm-6">
                  <div class="form-group">
                      <label for="name">Name</label>
                      <input type="text" v-model="contactMessage.name" placeholder="Ener your full name" name="name" class="form-control">
                  </div>
                  <div class="form-group">
                      <label for="email">Email</label>
                      <input type="text" v-model="contactMessage.email" placeholder="Enter your email address" name="email" class="form-control">
                  </div>
                  <div class="form-group">
                      <label for="phone">Phone (Optional)</label>
                      <input type="text" v-model="contactMessage.phone" placeholder="Enter your phone number" name="phone" class="form-control">
                  </div>
                  <div class="form-group">
                      <label for="message">Message</label>
                      <textarea name="message" v-model="contactMessage.message" class="form-control" placeholder="Enter a message" id="" cols="10" rows="5"></textarea>
                  </div>
                    <div class="alert alert-success success-message hidden">
                        {{ contact.metadata.contact_form_success_message.value }}
                    </div>
                    <div class="alert alert-danger error-message hidden">
                        Error
                    </div>
                  <button class="btn btn-primary" @click="sendMessage">Submit</button>
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
            }
        }
    },
    computed: {
        contact(){
            return this.$store.getters.getContactUs
        }
    },
    methods: {
        sendMessage(){
            this.$store.dispatch('sendMessage',this.contactMessage)
        }
    }
}
</script>
