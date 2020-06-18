<template>
  <v-app>
    <v-navigation-drawer
            app
            v-model="drawer"
            temporary
    >
      <v-list>
        <v-list-item
                v-for="link of links"
                :key="link.title"
                :to="link.url"
                router
                exact
        >
          <v-list-item-icon>
            <v-icon >{{link.icon}}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title v-text="link.title" ></v-list-item-title>
          </v-list-item-content>

        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-card
            color="grey lighten-4"
            flat
            height="70px"
            tile
    >
      <v-toolbar dense dark color="primary" >
        <v-app-bar-nav-icon
        @click=" drawer = !drawer"
        class="hidden-md-and-up"
        ></v-app-bar-nav-icon>

        <v-toolbar-title>
          <router-link to="/" tag="span" class="pointer">
            Ad application
          </router-link>
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn
                  v-for="link in links"
                  :key="link.title"
                  :to="link.url"
                  text
          >
            <v-icon left>{{link.icon}}</v-icon>
            {{link.title}}
          </v-btn>
        </v-toolbar-items>

      </v-toolbar>
    </v-card>
    <v-content>

        <router-view></router-view>

    </v-content>

  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      links: [
        {title: 'Login', icon: 'mdi-lock', url: '/login'},
        {title: 'Registration', icon: 'mdi-face', url: '/registration'},
        {title: 'Orders', icon: 'mdi-bookmark', url: '/orders'},
        {title: 'New ad', icon: 'mdi-note', url: '/new'},
        {title: 'My ads', icon: 'mdi-linux', url: '/list'}
      ]
    }
  }
}
</script>
<style scoped>
  .pointer {
    cursor: pointer;
  }
</style>
