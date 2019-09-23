<template>
  <div class="ui centered card">
    <h3 class="ui header">Connect to eJabberd Server</h3>

    <div class="content">
      <div class="ui form">
        <!-- Store info -->
        <form v-on:submit="submit" action="#" method="POST">
        <fieldset class="ui segment fields">
          <div class="field">
            <label>Domain</label>
           <input type="text" v-model="domain">
            <div class="ui pointing red basic label" v-show="errors['domain']">
              {{ errors['domain'] }}
            </div>
          </div>

          <div class="field" v-show="domain.length > 0">
            <label>Bosh URL</label>
            <input type="url" v-model="boshURL">
            <div class="ui pointing red basic label" v-show="errors['boshURL']">
              {{ errors['boshURL'] }}
            </div>
          </div>
        </fieldset>

        <!-- User info -->
        <fieldset class="ui segment fields">
          <div class="field">
            <label>login</label>
             <input type="text" v-model="login">
            <div class="ui pointing red basic label" v-show="errors['login']">
              {{ errors['login'] }}
            </div>
          </div>

          <div class="field">
            <label>Password</label>
            <input type="password" v-model="password">
            <div class="ui pointing red basic label" v-show="errors['password']">
              {{ errors['password'] }}
            </div>
          </div>

          <div class="field">
            <label>Room</label>
            <input type="text" v-model="room">
            <div class="ui pointing red basic label" v-show="errors['room']">
              {{ errors['room'] }}
            </div>
          </div>
        </fieldset>

        <div class="ui buttons">
          <button class="ui primary button" type="submit" @click="connect()">
            Connect to server
          </button>
        </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Autocomplete from './Autocomplete';
import { mapFields } from 'vuex-map-fields';
import {JSXC} from '@/xmpp/index'; 

export default {
  components: {
    Autocomplete, JSXC
  },

  data() {
    return {
      errors: {},       // for form validation
    };
  },

  computed: {
    ...mapFields([
      'form.domain',
      'form.boshURL',
      'form.login',
      'form.password',
      'form.room',
    ]),
  },

  mounted() {
    // fetch('https://randomuser.me/api/?results=50&nat=au&exc=login')
    //   .then(res => res.json())
    //   .then(res => {
    //     this.users = res.results.map(u => `${u.name.first} ${u.name.last}`);
    //   })
    //   .catch(() => {});
  },

  methods: {
    connect() {
      console.log(this.form);  
    //   if (this.validateForm()) {
        // continue
    //   }
    },
    submit(event) {
        event.preventDefault();
        alert('A');
    },

    // Validate form and return true if everything is ok
    validateForm() {
      this.errors = [];

      if (!this.domain) {
        this.errors['domain'] = 'Domain is required';
      }

      if (!this.boshURL) {
        this.errors['boshURL'] = 'Bosh URL is required';
      }

      if (!this.login) {
        this.errors['login'] = 'Login is required';
      }

      if (!this.password) {
        this.errors['password'] = 'Password is required';
      }

      if (!this.room) {
        this.errors['room'] = 'Room is required';
      }

      return Object.keys(this.errors).length === 0;
    },
  },
}
</script>
