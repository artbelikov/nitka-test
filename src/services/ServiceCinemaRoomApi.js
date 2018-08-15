class CinemaRoomApi {
  /**
   * Request imitation
   */
  async getSeats(room_id) {
    switch (room_id) {
      case 'CinemaPark-1':
        return this.$_generate(10, 16);
      default:
        return this.$_generate(10, 10);
    }
  }

  $_generate(rows, seats) {
    const soldSeatsNumber = 10;
    let result = {};
    let _rows = 0;
    while (_rows++ < rows) {
      let _seats = 0;
      while (_seats++ < seats) {
        let position = `${_rows}:${_seats}`;
        result[position] = {
          id: Math.random()
            .toString(36)
            .slice(3),
          position,
          selected: false,
          price: 100,
        };
      }
    }
    let keys = Object.keys(result);
    let shuffled = keys.sort(() => 0.5 - Math.random());
    let sold = shuffled.slice(0, soldSeatsNumber);
    sold.forEach(position => {
      result[position].sold = true;
    });
    return {
      rowsNumber: rows,
      seatsNumber: seats,
      seats: result,
    };
  }
}

export default CinemaRoomApi;
