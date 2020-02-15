function BankAccount(name, balance){
    this.name = name;
    this.balance = balance;
}



BankAccount.prototype.withdrawal = function(amount){
   
    this.balance = this.balance - amount;
    return this.balance;
}

BankAccount.prototype.depositTwo = function(amount){
    this.balance = this.balance + amount;
    return this.balance;
}









// User Interface
$(document).ready(function(){
    var account;
    $("#open-account").click(function(){
    
        $(".funds").show();
        
        var name = $("#name").val();
        var initialDeposit = parseInt($("#initial-deposit").val());
        account = new BankAccount(name, initialDeposit);
        showBalance(account.balance);
        $('.initial-form').hide();
    });

    $('#withdraw').click(function() {
        var withdrawal = parseInt($('#withdrawal-amount').val(), 10); // adding base is a good practice
        var newAmount = account.withdrawal(withdrawal);
        showBalance(newAmount);
    });

    $('#deposit').click(function() {
        var deposit = parseInt($('#deposit-amount').val(), 10); // adding base is a good practice
        var newAmount = account.depositTwo(deposit);
        showBalance(newAmount);
    });
    
    function showBalance(amount) {
        $("#balance").html(amount);
    }


})