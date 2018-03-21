<template>
  <div>
        <footer id="footer">
            <div class="container">
                <div class="row">
                <div class="col-sm-8" style="margin-top:50px;">
                    <label class="mb-20">Contact Us</label>
                    <br />
                    <br>
                    <label>Phone:</label>
                    <br />
                    <div class="p">{{contactInfo.phone}}</div>
                    <label>Email:</label>
                    <br />
                    <div class="p"><a :href="'mailto:'+contactInfo.email">{{contactInfo.email}}</a></div>
                    <label>Address:</label><br />
                    <div class="p" v-html="contactInfo.address">{{contactInfo.address}}</div>
                </div>
                <div class="col-sm-4" style="margin-top:50px;">
                    <h4 class="mb-20">Connect</h4>
                    <div class="mb-20">
                        <br>
                        <a class="mr-10" style="margin-right:10px;" :href="social.facebook" target="_blank">
                            <i class="fa fa-facebook "></i>
                        </a>
                        <a class="mr-10" style="margin-right:10px;" :href="social.twitter" target="_blank">
                            <i class="fa fa-twitter "></i>
                        </a>
                        <a class="mr-10" style="margin-right:10px;" :href="social.google_plus" target="_blank">
                            <i class="fa fa-google-plus "></i>
                        </a>
                    </div>
                    <br>
                    <div class="style"> &copy; 2018 {{footer.company_title}}
                    </div>
                    <br>
                    <br>
                    <a href="https://cosmicjs.com" target="_blank">
                    <img class="pull-left mr-15 relative" src="https://cosmicjs.com/images/logo.svg" width="28" height="28">
                    <span style="margin-left:10px; color: #666">Proudly powered by Cosmic JS</span>
                    </a>
                </div>
                </div>
            </div>
        </footer>
  </div>
</template>
<script>
export default {
  computed: {
      contactInfo() {
        return this.$store.getters.getContactInfo
      },
      social(){
        return this.$store.getters.getSocial
      },
      footer(){
          return this.$store.getters.getFooter
      }
  },
}
</script>

<style>
    footer{
        height: 350px;
        background-color:#f0f0f0;
        margin-top: 5%;
        border-top: 1px solid #e7e7e7;
        background-color: #f8f8f8;
    }
    .fa-facebook, .fa-twitter, .fa-google-plus{
        font-size: 26px;
    }
    label,h4{
        color:#666;
    }
    a{
        color: #131982;
    }
    .style{
        font-family: Roboto,sans-serif;
        font-size: 15px;
        line-height: 2;
        color: #666;
    }
</style>
