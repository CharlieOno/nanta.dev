<template>
    <Layout>
        <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-4 col-xl-3">
                <img class="profile" src="/jpg/photo.jpg" alt="nanta"/>
            </div>
            <div class="col-sm-12 col-md-12 col-lg-8 col-xl-9">
                <h1 class="fw-bold center-v nanta">Développeuse Web<br>Full-Stack</h1>
            </div>
            <hr class="mb-4 mt-3">
            <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <form @submit.prevent="sendEmail">
                    <div class="form-group mb-2">
                        <label for="name">Votre nom</label>
                        <input type="text" v-model="name" name="name" class="form-control" id="name" aria-describedby="nameHelp" placeholder="Entrez votre nom">
                    </div>
                    <div class="form-group mb-4">
                        <label for="email">Votre e-mail</label>
                        <input type="email" v-model="name" name="name" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Entrez votre e-mail">
                    </div>
                    <div class="form-group mb-4">
                        <textarea class="form-control" v-model="message" d="message" rows="5"></textarea>
                    </div>
                    <div class="form-group mb-4">
                        <vue-recaptcha 
                            ref="recaptcha" 
                            sitekey="6Lfzc8QfAAAAAHX0ihj-1obWInb_F6xcAXdHy3Gr"
                            @verify="onCaptchaVerified"
                            @expired="onCaptchaExpired"
                        >
                        </vue-recaptcha>
                    </div>
                    <button class="btn btn-success text-right" type="submit" :disabled="status !== 'success'">Envoyer</button>
                </form>
            </div>
        </div>
  </Layout>
</template>

<script>
import emailjs from 'emailjs-com';
import { VueRecaptcha } from 'vue-recaptcha';

export default {
  name: 'Contact',
  components: {
      'vue-recaptcha': VueRecaptcha
  },
  data() {
    return {
      name: '',
      email: '',
      message: '',
      status: ''
    }
  },
  methods: {
    sendEmail(e) {
        emailjs.sendForm('service_nq4vnrz', 'template_dz264th', e.target, 'ALEvIm1z0MLDzorE5', {
            name: this.name,
            email: this.email,
            message: this.message
        })
      this.name = ''
      this.email = ''
      this.message = ''
      this.status = ''
      this.$refs.recaptcha.reset();
    },
    onCaptchaVerified(key) {
        this.status = "success";
        // this.$refs.recaptcha.execute(key);
    },
    onCaptchaExpired() {
      this.$refs.recaptcha.reset();
    }
  }
}
</script>

<style>

.profile {
    border-radius: 50%;
    width: 100%;
}

.center-v {
    align-items: center;
    display: flex;
    line-height: normal;
}

</style>