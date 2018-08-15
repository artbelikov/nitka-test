<template>
    <div class="cinema-room-seat" @click="click" :class="{'sold': seat.sold, 'selected': seat.selected}">
        {{seat.position}}
    </div>
</template>

<script>
export default {
  name: 'AppSeat',
  props: {
    seat: Object,
  },
  methods: {
    click() {
      this.$store.commit(
        this.seat.selected ? 'deselectSeat' : 'selectSeat',
        this.seat
      );
    },
  },
};
</script>

<style scoped lang="scss">
.cinema-room-seat {
  border: 1px solid #2b2b2b;
  border-radius: 3px;
  margin: 0 5px;
  width: 64px;
  background-color: #167e28;
  color: #fff;
  height: 64px;
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: center;
  user-select: none;
  &.sold {
    background-color: #b0010b;
    pointer-events: none;
  }
  &.selected {
    color: #000;
    background-color: #ece356;
  }
}
</style>
