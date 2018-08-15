<template>
  <div class="grid-container">
    <div class="header">
      <h1>Avengers 4</h1>
    </div>
    <div class="aside">
      <AppCinemaRoomAside/>
    </div>
    <div class="room">
      <AppCinemaRoom :roomId="'fg245y24g'"/>
    </div>
  </div>
</template>

<script>
import CinemaRoomApi from './services/ServiceCinemaRoomApi';
import AppCinemaRoom from './components/AppCinemaRoom.vue';
import AppCinemaRoomAside from './components/AppCinemaRoomAside.vue';

export default {
  name: 'app',
  components: {
    AppCinemaRoom,
    AppCinemaRoomAside,
  },
  provide: {
    cinemaRoomApi: new CinemaRoomApi(),
  },
};
</script>

<style lang="scss">
body {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  color: #000000;
  margin: 0;
}
.grid-container {
  width: 1024px;
  margin: 0 auto;
  display: grid;
  height: 100%;
  grid-template-columns: auto 300px;
  grid-template-rows: min-content auto;
  grid-template-areas: 'header header' 'room aside';
}
.room {
  grid-area: room;
}
.aside {
  grid-area: aside;
}
.header {
  grid-area: header;
}
.btn {
  line-height: 32px;
  height: 32px;
  padding: 0 20px;
  border-radius: 3px;
  outline: none;
  border: none;
  color: #fff;
  cursor: pointer;
  &-ok {
    background-color: #3d46b4;
  }
  &-cancel {
    background-color: #ffb300;
  }
}
</style>
