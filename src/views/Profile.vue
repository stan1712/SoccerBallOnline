<template>
  <div>
    <v-row class="ma-5">
      <v-col cols="6" class="d-flex justify-end">
        <v-card class="ma-2 pa-5" max-width="395" elevation="2" outlined>
          <v-card-text>
            <v-row>
              <v-col cols="6">
                <v-avatar size="120" color="secondary">
                  <img
                    v-if="userInfo.avatar"
                    :src="userInfo.avatar"
                    class="pa-2"
                  />
                  <h1 class="display-1" v-else>
                    {{
                      $firebase.auth().currentUser.displayName[0].toUpperCase()
                    }}
                  </h1>
                </v-avatar>
              </v-col>
              <v-col cols="6" class="d-flex flex-row-reverse">
                <h3 style="font-size: 25px">PROFIL</h3>
              </v-col>
              <v-col cols="12">
                <v-form class="d-flex justify-start">
                  <v-container>
                    <v-text-field
                      v-model="userInfo.username"
                      label="Nom d'utilisateur"
                    ></v-text-field>

                    <v-text-field
                      v-model="userInfo.email"
                      label="E-mail"
                    ></v-text-field>

                    <v-divider class="my-5"></v-divider>

                    <v-text-field
                      v-model="userInfo.avatar"
                      label="Avatar"
                    ></v-text-field>
                  </v-container>
                </v-form>
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" block @click="update()">Sauvegarder</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

      <v-col cols="6">
        <v-card class="mb-4 ma-2 pa-5" max-width="395" elevation="2" outlined>
          <v-card-text>
            <v-row>
              <v-col cols="6" offset="6" class="d-flex flex-row-reverse">
                <h3 style="font-size: 25px">OPTIONS</h3>
              </v-col>
              <v-container class="px-0" fluid>
                <v-row class="">
                  <v-col class="py-0">
                    <div class="mt-5" v-if="darkMode == false">
                      <v-icon class="mr-5"> mdi-white-balance-sunny </v-icon
                      >Activer le mode jour
                    </div>
                    <div class="mt-5" v-if="darkMode == true">
                      <v-icon class="mr-5"> mdi-weather-night </v-icon>Activer
                      le mode nuit
                    </div>
                  </v-col>

                  <v-col cols="auto" class="py-0">
                    <v-switch
                      v-model="$vuetify.theme.dark"
                      @click="darkMode = !darkMode"
                    ></v-switch>
                  </v-col>
                </v-row>
              </v-container>
            </v-row>
          </v-card-text>
        </v-card>
        <v-card
          class="d-flex flex-column ma-2 mt-2 pa-5"
          max-width="395"
          elevation="2"
          outlined
        >
          <v-card-text>
            <v-row>
              <v-col cols="6"> </v-col>
              <v-col cols="6" class="d-flex flex-row-reverse">
                <h3 style="font-size: 25px">STATS</h3>
              </v-col>
              <v-container>
                <v-row>
                  <v-col class="d-flex align-center">
                    <p style="font-size: 15px">
                      Nombre de parties joué en ligne : <strong>100</strong>
                    </p>
                  </v-col>
                </v-row>
                <p style="font-size: 15px">
                  Nombre de but maximum dans une partie : <strong>12</strong>
                </p>

                <v-divider class="my-5"></v-divider>

                <p style="font-size: 15px">
                  Nombre de matchs gagné : <strong>33</strong>
                </p>

                <v-progress-linear
                  class="rounded-sm"
                  v-model="knowledge"
                  height="100"
                >
                  <strong>{{ Math.ceil(knowledge) }}%</strong>
                </v-progress-linear>
              </v-container>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Profile",

  data() {
    return {
      switch1: true,

      userInfo: this.$models.user,

      darkMode: false,

      knowledge: 33,
    };
  },
  methods: {
    update() {
      this.$firebase
        .auth()
        .currentUser.updateProfile({
          displayName: this.userInfo.username,
          photoURL: this.userInfo.avatar,
        })
        .then(() => {
          if (this.userInfo.email !== this.$firebase.auth().currentUser.email)
            this.$firebase.auth().currentUser.updateEmail(this.userInfo.email);

          this.$db
            .collection("users")
            .doc(this.$firebase.auth().currentUser.uid)
            .set(
              {
                username: this.userInfo.username,
                email: this.userInfo.email,
                avatar: this.userInfo.avatar,
              },
              {
                merge: true,
              }
            );
        });
    },
  },
  created() {
    this.$db
      .collection("users")
      .doc(this.$firebase.auth().currentUser.uid)
      .onSnapshot((user) => {
        this.userInfo = user.data();
      });
  },
};
</script>

<style>
</style>
