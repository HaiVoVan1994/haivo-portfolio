<template>
  <section id="contact">
      <div class="container">
		   <AnimateOnVisible name="fade-right" duration="2000">
          <v-row justify="center" class="mb-4">
              <div class="title">
                <h1><u>Contact</u></h1>
              </div>
          </v-row>
		    <v-row justify="center" class="mb-4 title-wrapper">
              <div>
				   <h3 class="contact-form_title">Have a question or want to work together?</h3>
			  </div>
          </v-row>
          <v-row justify="center" class="row d-flex flex-wrap">
			  <v-col md="6">
				<v-form
					ref="form"
					v-model="valid"
					lazy-validation
				>
				<v-text-field
				dense
					v-model="name"
					label="Name"
					clearable
					:rules="nameRules"
				></v-text-field>

				<v-text-field
				dense
					v-model="email"
					label="E-mail"
					clearable
					:rules="emailRules"
					required
				></v-text-field>

				<v-textarea
				dense
					clearable
					v-model="message"
					:rules="messageRules"
					label="Message"
					required
					auto-grow
				></v-textarea>

				<v-btn
					:disabled="!valid"
					color="success"
					@click="send"
				>
				Send
				</v-btn>
				</v-form>
			</v-col>
          </v-row>
		  </AnimateOnVisible >
      </div>
  </section>
</template>

<script>
import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';

export default {
  data() {
    return {
			valid: true,
			name: '',
			nameRules: [
				v => !!v || 'Name is required'
			],
			email: '',
			emailRules: [
				v => !!v || 'E-mail is required',
				v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
			],
			message: null,
			messageRules: [
				v => !!v || 'Message is required',
			],
    	}
	},

	methods: {
		send () {
			this.$refs.form.validate()

			init("user_MvATqiiPf3XLG8crU9NVE");
			var templateParams = {
				from_name: this.name,
				from_mail: this.email,
				message: this.message
			};
			
			emailjs.send('service_pj4era8', 'template_9n63fzc', templateParams)
				.then(
					function(response) {}, 
					function(error) {
					console.log('FAILED...', error
				);
			});

			this.name = ''
			this.email = ''
			this.message = ''
		}
	}
}
</script>