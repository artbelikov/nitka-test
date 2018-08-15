<template>
    <div class="cinema-room-aside" v-if="isSelectedSeats">
        <div class="selected-seats">
            <div class="title">Selected seats:</div>
            <div class="selected-seat-text" v-for="seat in readableSelectedSeats">{{seat}}</div>
        </div>
        <div class="cinema-room-aside-buttons">
            <button class="btn btn-ok" @click="buy">Buy</button>
            <button class="btn btn-cancel" @click="cancel">Cancel</button>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'AppCinemaRoomAside',
  computed: {
    ...mapGetters(['readableSelectedSeats', 'isSelectedSeats']),
  },
  methods: {
    buy() {
      this.$store.commit('buy');
    },
    cancel() {
      this.$store.commit('cancel');
    },
  },
};
</script>

<style scoped lang="scss">
.cinema-room-aside {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  &-buttons {
    .btn-ok {
      margin-right: 20px;
    }
  }
}
.selected-seats {
  .title {
    font-weight: bold;
  }
}
</style>
