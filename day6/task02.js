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
}

let tripDetailes = new ubarTrip("xyz","chennai","bangaluru",343,5);

console.log(tripDetailes);
console.log(tripDetailes.totalPricetoPay);
