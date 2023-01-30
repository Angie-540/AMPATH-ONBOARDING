function CompoundInterest() {
    var principal = 10000;
    var rate = 0.03;
    var years = 5;
    var times = 2;
    var amount = principal * Math.pow(1.0 + rate / times, times * years);
    var interest = amount - principal;
    console.log(interest)
}
CompoundInterest()