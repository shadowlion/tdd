<template>
  <v-layout>
    <v-flex>
      <h1 class="display-2">Rules and Policies</h1>
      <ol>
        <li v-for="rule in rules" :key="rule.id">
          <b>{{ rule.title != null ? `${rule.title} - ` : '' }}</b><span v-html="rule.content" />
        </li>
      </ol>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data () {
    return {
      rules: [
        {
          title: 'COMPETITION CONDUCT',
          content: 'All competitors, while on the competition premises, shall conduct themselves in a civil and sportsmanlike manner. Each competitor is responsible to be in the ballroom ready to dance 30 minutes in advance of the scheduled time for any event.'
        },
        {
          title: 'PRO/AM COMPETITION',
          content: `
            <ul>
              <li>
                <b>Entries</b> – There is no limit to the total number of entries a student can enter in Pro/Am events. However, a student’s entries must be within three (3) consecutive Dance levels (i.e., B, OB and PS,) and 2 (two) age levels. Adult: actual age and younger. Junior level dancers may not compete in PT dance level.
              </li>
              <li>
                <b>Newcomers</b> – Open to beginning students for up to one year after their first ballroom competition.
              </li>
              <li>
                <b>Closed Categories (American and International)</b> – Applies to Bronze, Silver, and Gold categories. Material used should be based on the NDCA syllabus or NDCA member organization syllabus.
              </li>
              <li>
                <b>Proficiency</b> - A Proficiency Entry means you are not competing with the other dancers in your age group or level, but dancing for yourself. The judges use a point system to determine your placement. It is an opportunity to dance at an event and be scored based on your technique and overall presentation. This differs from the regular dance divisions where you are scored on comparison to those in your same age division and level. Since Proficiency Divisions are non-competitive, there are no points awarded towards Top Student, Top Teacher, or TDD Multi Dance Events.
              </li>
              <li>
                <b>Scholarships</b> - Pro/Am, Amateur and Juniors. Closed Scholarships are limited to Bronze, Silver and Gold Syllabus. Students competing in Silver single dance events may not dance in the Closed Bronze Scholarship. Students who compete in Gold Single Dances may not enter a Closed Silver Scholarship. In addition, Pro/Am, Amateur and Juniors to qualify for scholarship must be on Package or enter fifteen (15) single dance events plus one or more multi dance events per scholarship. In order to receive the full prize money scholarship competition must have a 3 (three) couple minimum, if only one or two couples total entered prize money will be cut in half.
              </li>
            </ul>
          `
        },
        {
          title: 'SOLOs',
          content: 'Lifts or drops are only allowed in Solo routines. Music must be 3 min or  less in length and should be provided on separate CD or iPod to Music Director 2 hour prior to performance.'
        },
        {
          title: 'ATTIRE',
          content: 'No costume restriction with exception for Juv and Pre-Teen. Please check NDCA rules on dress codes for Junior dancers.'
        },
        {
          title: 'LIABILITIES',
          content: 'No responsibility for loss or theft of articles left in changing rooms, ballrooms or hotel rooms can be accepted by the organizer, NDCA, or the hotel, and neither can they be held liable for any injury sustained by persons attending the Three Diamond Dancesport competition. Everyone attending does so at their own risk.'
        },
        {
          title: null,
          content: 'In any category with fewer than 3 entries the organizer reserves the right to eliminate the age and sex divisions and merge competitors into one division.'
        },
        {
          title: 'GENERAL ADMISSION',
          content: 'Tickets can be purchased <a href="https://firebasestorage.googleapis.com/v0/b/three-diamond-dancesport.appspot.com/o/2019%2Fdocs%2Fregistration%2FSummary%20Order%20Form.pdf?alt=media&token=7548bf1d-ae9f-4dbf-9c68-4eac09ae5c7a" target="_blank">in advance</a> or at the door and may be standing room only.'
        },
        {
          title: 'REFUND POLICY',
          content: `Cancellations received after May 1st, ${new Date().getFullYear()} will be charged a $50 processing fee per person. No refunds will be given for cancellations received after May 15th.`
        },
        {
          title: 'VIDEO RECORDING',
          content: 'NDCA rules prohibit the use of private video equipment. No video equipment will be allowed in the ballroom. There will be a professional video company present at the competition. NEW THIS YEAR, you may purchase a video press pass for $20 for your own personal video taping only.'
        },
        {
          title: 'NDCA REGISTRATION',
          content: 'Professional Competitors and Pro/Am Teachers must be registered annually with the National Registrar of NDCA. An official registration number is required to fill out the <a href="/registration">Entry Forms</a>. For further information, contact: National Registrar Dawid Schulz, NDCA, 288 Richards Building, Provo, UT 84602, via <a href="tel:8014228124">phone</a> or <a href="mailto:ds24dance@gmail.com">email</a>.'
        },
        {
          title: 'NDCA RULES',
          content: 'All persons attending the Three Diamond Dancesport, whether as spectators, competitors, officials, or guests of the organizer, shall be bound by the NDCA Rules, and by participating in this event automatically become obligated to adhere to them.'
        },
        {
          title: null,
          content: 'All entry forms must be accompanied by full payment in order to be processed and registered for the competition. Please make studio checks or money order/cashier’s check payable to ThreeDiamondDanceSport. Only studio checks and/or money order and cashier checks are accepted.'
        }
      ]
    }
  }
}
</script>
