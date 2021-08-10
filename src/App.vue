<template>
  <v-app>
    <v-navigation-drawer app v-model="drawer" width="drawerWidth">
      <site-navi @close="toggleDrawer"/>
    </v-navigation-drawer>
    <v-app-bar app color="primary" dark hide-on-scroll>
      <v-app-bar-nav-icon @click="toggleDrawer" />
			<site-title />
      <v-spacer></v-spacer>
			<site-user />
		</v-app-bar>

    <v-main>
      <router-view />
    </v-main>

		<site-footer />
    <vue-progress-bar></vue-progress-bar>
  </v-app>
</template>

<script>
import SiteFooter from './components/layout/SiteFooter.vue';
import SiteTitle from './components/layout/SiteTitle.vue';
import SiteNavi from './components/layout/SiteNavi.vue';
import SiteUser from './components/layout/SiteUser.vue';

export default {
  components: { SiteTitle, SiteFooter, SiteNavi, SiteUser},
  name: "App",

  beforeCreate() {
		console.log('App.vue beforeCreate');
	},
	created() {
		console.log('App.vue created', this.$ssrContext);
	},
	beforeMount() {
		console.log('App.vue beforeMount');
	},
	mounted() {
		console.log('App.vue mounted');
	},
	serverPrefetch() {
		console.log('App.vue serverPrefetch');
		return new Promise((resolve, reject)=> {
			console.log('App.vue serverPrefetch Promise');
			resolve();
		})
	},

  data() {
    return {
      drawer : false,
    }
  },
  computed : {
    drawerWidth() {
      return this.$vuetify.breakpoint.xs ? '100%' : '360';
    }
  },
  methods : {
    toggleDrawer() {
      this.drawer = !this.drawer;
    }
  }
};
</script>