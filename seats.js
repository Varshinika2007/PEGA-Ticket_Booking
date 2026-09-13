let selectedSeats = JSON.parse(localStorage.getItem("selectedSeats") || "[]");
const booking = JSON.parse(localStorage.getItem("booking") || "{}");
const seatPrice = Number(booking.price) || 250;


function selectSeat(seat) {

    const seatName = seat.innerText;


    if (selectedSeats.includes(seatName)) {

        selectedSeats =
            selectedSeats.filter(
                item => item !== seatName
            );

        seat.classList.remove("selected");

    } else {

        selectedSeats.push(seatName);

        seat.classList.add("selected");
    }


    document.getElementById("selectedSeats").innerText =
        selectedSeats.length > 0
            ? selectedSeats.join(", ")
            : "None";


    document.getElementById("totalPrice").innerText =
        selectedSeats.length * seatPrice;

    localStorage.setItem("selectedSeats", JSON.stringify(selectedSeats));
}

document.querySelectorAll(".seat").forEach(seat => {
    if (selectedSeats.includes(seat.innerText)) {
        seat.classList.add("selected");
    }
});

document.getElementById("selectedSeats").innerText =
    selectedSeats.length > 0 ? selectedSeats.join(", ") : "None";
document.getElementById("totalPrice").innerText = selectedSeats.length * seatPrice;