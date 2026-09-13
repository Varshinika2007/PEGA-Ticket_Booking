function makePayment(event) {

    event.preventDefault();

    const booking = JSON.parse(localStorage.getItem("booking") || "{}");
    const seats = JSON.parse(localStorage.getItem("selectedSeats") || "[]");
    const confirmedBooking = {
        ...booking,
        seats,
        total: seats.length * (Number(booking.price) || 0),
        id: `TKF${Date.now().toString().slice(-8)}`
    };
    localStorage.setItem("confirmedBooking", JSON.stringify(confirmedBooking));

    window.location.href = "ticket.html";
}