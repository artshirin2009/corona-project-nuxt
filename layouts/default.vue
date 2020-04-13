<template>
  <div>
    
    <v-app id="inspire">
      
      <Dialog />
      <Navbar />

      <v-content>
        <v-container fluid>
          <nuxt />
        </v-container>
      </v-content>
      <v-footer color="indigo" app>
        <span class="white--text">&copy; 2019</span>
      </v-footer>
    </v-app>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar';
import Dialog from '@/components/Dialog';
export default {
  components: { Navbar, Dialog }
}
</script>