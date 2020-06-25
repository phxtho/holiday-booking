export class FlightPlan {
    constructor (
        public depatureLocation ?: string,
        public destinationLocation ?: string,
        public depatureDate ?: string,
        public returnDate ?: string,
        public adultCount ?: number
    ) {}
}
