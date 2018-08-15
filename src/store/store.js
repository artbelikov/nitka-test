import Vuex from 'vuex';

export default () =>
  new Vuex.Store({
    state: {
      rowsNumber: 0,
      seatsNumber: 0,
      seats: {},
      selectedSeats: {},
    },
    mutations: {
      setRoomConfig(state, { seatsNumber, rowsNumber, seats }) {
        state.seatsNumber = seatsNumber;
        state.rowsNumber = rowsNumber;
        state.seats = seats;
      },
      selectSeat(state, seat) {
        seat.selected = true;
        state.seats[seat.position] = seat;
        state.selectedSeats[seat.id] = seat;
        state.selectedSeats = { ...state.selectedSeats };
      },
      deselectSeat(state, seat) {
        seat.selected = false;
        state.seats[seat.position] = seat;
        delete state.selectedSeats[seat.id];
        state.selectedSeats = { ...state.selectedSeats };
      },
      cancel(state) {
        for (let seat of Object.values(state.selectedSeats)) {
          state.seats[seat.position].selected = false;
        }
        state.selectedSeats = {};
      },
      buy(state) {
        for (let seat of Object.values(state.selectedSeats)) {
          state.seats[seat.position].sold = true;
          state.seats[seat.position].selected = false;
        }
        state.selectedSeats = {};
        setTimeout(() => {
          alert('Thank you for your order!');
        }, 10);
      },
    },
    getters: {
      readableSelectedSeats(state) {
        return Object.values(state.selectedSeats).map(seat => {
          let split = seat.position.split(':');
          return `row ${split[0]}, seat ${split[1]}`;
        });
      },
      isSelectedSeats(state) {
        return Boolean(Object.keys(state.selectedSeats).length);
      },
    },
  });
