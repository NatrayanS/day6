//task 02. a class to calculate the uber price.
console.log("a class to calculate the uber price");

class ubarTrip{
    constructor(custName,pickupPoint,dropPoint,totalDistanceInKM,perKmChargesInRS,totalPricetoPay){
        this.custName = custName;
        this.pickupPoint = pickupPoint;
        this.dropPoint = dropPoint;
        this.totalDistanceInKM =totalDistanceInKM;
        this.perKmChargesInRS = perKmChargesInRS;
        this.totalPricetoPay = totalPricetoPay=totalDistanceInKM*perKmChargesInRS;
    }
    getTripRecipt(){
        return `Hi Dear Valuable Customer Mr/Ms.${this.custName} Welcome to UBER,\nYour Journey From ${this.pickupPoint} to ${this.dropPoint}.\nTotal Distance is ${this.totalDistanceInKM}KM and per KM Chargers is Just Rs.${this.perKmChargesInRS}/-.\nTotal Amount to pay just Rs.${this.totalPricetoPay}/- only. \nThank you`;
    }
}

let tripDetailes = new ubarTrip("xyz","chennai","bangaluru",343,5);
let charges = tripDetailes.totalPricetoPay
console.log(tripDetailes);

console.log(tripDetailes.getTripRecipt());
