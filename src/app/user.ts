export class User {
    constructor(
        public userName: string,
        public email: string,
        public password: string,
        //public year, month, day: dropdown
        public refferredBy: string,
    ) { }
}
