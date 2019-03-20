<template>
  <v-dialog v-model="dialog" max-width="500px">
    <template v-slot:activator="{ on }">
      <v-btn color="primary" class="darken-2" dark v-on="on">More Info</v-btn>
    </template>
    <v-card>
      <v-card-title class="headline grey lighten-2" primary-title>
        Workshops and Social Dance Information
      </v-card-title>
      <v-card-text>
        <h1>Saturday, June 1st, 2019</h1>
        <h2>Workshops</h2>
        <p>All workshops are $30 each. Take a look below to see workshops and times:</p>
        <ol>
          <li>4:30 - 5:15pm | American Smooth | Irina Sarukhanyan</li>
          <li>5:30 - 6:15pm | International Latin | Sam Sodano</li>
          <li>6:30 - 7:15pm | American Rhythm | Bill Sparks</li>
        </ol><br>
        <p>3 workshops - $80</p>
        <p>2 workshops - $55</p>
        <p>At the door - $40/person</p>
        <p></p>
        <h2>Social Dance Party &amp; Show</h2>
        <h3>7:30 - 11:00pm</h3>
        <p>
          Admission at the door:<br>
          Adults - $15<br>
          Collegiate - $10<br>
          All Juniors - $5
        </p>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <small>
          <ul>
            <li>
              You may reserve with a credit card by calling
              <a href="tel:4124187462">(412) 418-7462</a>
              OR a check made out to Rozana Sweeney. Please mail it to the following:<br>
              <strong>6 Fenway Road</strong><br>
              <strong>Pittsburgh, PA</strong><br>
            </li>
            <li>
              Walk-ins are welcome, but we can't promise you space.
            </li>
            <li>
              Dance shoes are a must!
            </li>
            <li>
              Deadline for Online Registration ends May 20, 2019.
            </li>
            <li>
              Deadline for the
              <a href="https://firebasestorage.googleapis.com/v0/b/three-diamond-dancesport.appspot.com/o/2019%2Fdocs%2Fregistration%2FSummary%20Order%20Form.pdf?alt=media&token=7548bf1d-ae9f-4dbf-9c68-4eac09ae5c7a" target="_blank">Workshop form</a>
              ends May 1st, 2019.
            </li>
          </ul>
        </small>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data () {
    return {
      dialog: false
    }
  }
}
</script>
