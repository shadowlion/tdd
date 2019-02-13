<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex v-for="i in 3" :key="`4${i}`" xs4>
        <v-card dark color="primary">
          <v-card-title primary-title>
            <div>
              <div class="headline">American Style - Single Dances</div>
              <!-- <span>Listen to your favorite artists and albums whenever and wherever, online and offline.</span> -->
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn flat dark target="_blank" href="http://www.orimi.com/pdf-test.pdf">View Pdf</v-btn>
            <v-spacer></v-spacer>
            <div class="text-xs-center">
              <v-chip text-color="white" color="info">
                <v-avatar class="info darken-4"><v-icon>star</v-icon></v-avatar>
               Pro/Am
              </v-chip>
            </div>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
