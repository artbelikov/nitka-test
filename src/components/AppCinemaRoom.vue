<template>
    <div class="cinema-room">
        <div v-if="rowsNumber && seatsNumber">
            <div class="cinema-room-row" :key="r" v-for="r in rowsNumber">
                <AppSeat :seat="seats[`${r}:${s}`]" :key="s" v-for="s in seatsNumber"/>
            </div>
        </div>
    </div>
</template>

<script>
import AppSeat from './AppSeat.vue';
import { mapState } from 'vuex';

export default {
  name: 'AppCinemaRoom',
  inject: ['cinemaRoomApi'],
  props: {
    roomId: String,
  },
  components: {
    AppSeat,
  },
  computed: {
    ...mapState(['seats', 'rowsNumber', 'seatsNumber']),
  },
  methods: {
    async loadSeats() {
      const seatsData = await this.cinemaRoomApi.getSeats(this.roomId);
      this.$store.commit('setRoomConfig', seatsData);
    },
  },
  created() {
    this.loadSeats();
  },
};
</script>

<style scoped lang="scss">
.cinema-room {
}
.cinema-room-row {
  display: flex;
  margin: 5px -5px;
  justify-content: center;
}
</style>
