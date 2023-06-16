function updateCalculate() {
    const playerField = document.getElementById('player-field');
    const newPlayerInputString = playerField.value;
    const newPlayerInput = parseInt(newPlayerInputString);
    playerField.value = '';


    const playerExpenceElement = document.getElementById('expence-field');
    const previousPlayerExpenceString = playerExpenceElement.innerText;

    const playerExpenceTotal = newPlayerInput * 5;
    playerExpenceElement.innerText = playerExpenceTotal;
    return playerExpenceTotal;
}

document.getElementById('btn-calculate').addEventListener('click', function () {


    updateCalculate();

})


document.getElementById('btn-total').addEventListener('click', function () {

    const expenceTotalElement = document.getElementById('expence-field');
    const previousExpenceTotalElementString = expenceTotalElement.innerText;
    const previousExpenceTotalElement = parseInt(previousExpenceTotalElementString);
    console.log(previousExpenceTotalElement);

    const managerField = document.getElementById('manager-field');
    const newManagerInputString = managerField.value;
    const newManagerInput = parseInt(newManagerInputString);
    managerField.value = '';
    console.log(newManagerInput);


    const coachField = document.getElementById('coach-field');
    const newCoachInputString = coachField.value;
    const newCoachInput = parseInt(newCoachInputString);
    coachField.value = '';
    console.log(newCoachInput);

    const totalTeamCostElement = document.getElementById('total-team-cost');
    const TeamCost = totalTeamCostElement.innerText;



    const totalTeamCost = previousExpenceTotalElement + newCoachInput + newManagerInput;
    totalTeamCostElement.innerText = totalTeamCost;

})