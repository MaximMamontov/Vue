<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="text--secondary mb-3">Create new ad</h1>
        <v-form v-model="valid" ref="form" validation class="mb-3">
          <v-text-field
                  name="title"
                  label="Ad title"
                  type="text"
                  v-model="title"
                  required
                  :rules="[v => !!v || 'Title is required']"
          ></v-text-field>
          <v-textarea
                  name="description"
                  label="Ad description"
                  type="text"
                  v-model="description"
                  multi-line
                  :rules="[v => !!v || 'Description is required']"
          ></v-textarea>
        </v-form>
        <v-layout row class="mb-3">
          <v-flex xs12>
            <v-btn class="warning">
              Upload
              <v-icon right dark>mdi-cloud-upload</v-icon>
            </v-btn>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs12>
            <img src="" height="100">
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs12>
            <v-switch
                    label="Add to promo?"
                    v-model="promo"
                    color="primary"
            ></v-switch>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs12>
            <v-spacer></v-spacer>
            <v-btn
                    :disabled="!valid"
                    class="success"
                    @click="createAd"
            >
              Create ad
            </v-btn>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        title: '',
        description: '',
        promo: false,
        valid: false
      }
    },
    methods: {
      createAd () {
        if (this.$refs.form.validate()) {
          // logic
          const ad = {
            title: this.title,
            description: this.description,
            promo: this.promo,
            imageSrc: 'data:image/png;base64,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'
          }

          this.$store.dispatch('createAd', ad)
        }
      }
    }
  }
</script>