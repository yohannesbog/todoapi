document.addEventListener('DOMContentLoaded', () => {


    const  heroType = prompt ("enter name ", "Hero")
    const  villType = prompt ("enter name ", "Villain-Robot")

    const player = new Hero(heroType);
    const Robot = new villain(villType);

// Equip a weapon for each player (the name is just a string and the damage is a random number)
player.equipWeapon(new weapon('Ball'));
Robot.equipWeapon(new weapon('Batton'));


// Creating variables out of the parts of the DOM we want to update.

const containerHero = document.getElementById('hero');
const containerVill = document.getElementById('villain');

// Render the HTML of the players with stats onto the screen

containerHero.innerHTML= player.render();
containerVill.innerHTML= Robot.render();

// console.log(player.render())
herroattackbutton= document.getElementById('herro-attack')
herroattackbutton.addEventListener('click', function(){
    player.attack(Robot)

    let villhealth = Robot.health;
    document.getElementById('herohealth').innerHTML = `<h1>Villain's Health : ${villhealth}</h1>`;
    if (Robot.health <= 0) {
        herroattackbutton.disabled = true;
        document.getElementById("playing").innerHTML = `Congratulations!  Victory! Click Reset to play again`;
        villattackButton.disabled = true;
        document.getElementById('myvhealth').innerHTML = `<h3>My Health: ${villhealth}</h3>`

    }

})

villattackButton= document.getElementById('vill-attack')
villattackButton.addEventListener('click', function(){
    Robot.attack(player)

    let herohealth = player.health;
    document.getElementById('vilhealth').innerHTML = `<h1>Hero's Health: ${herohealth}</h1>`;
    if (player.health <= 0) {
        villattackButton.disabled = true;
        document.getElementById("vilplaying").innerHTML = `Congratulations!  Game over! Click Reset to play again`;
        herroattackbutton.disabled = true;
        document.getElementById('myhhealth').innerHTML = `<h3>My Health: ${herohealth}</h3>`
        document.getElementById('myvhealth').innerHTML = `<h3>My Health: ${villhealth}</h3>`

        


    }

})

reset= document.getElementById('reset')

reset.addEventListener('click', function(){
location.reload();
//     containerHero.innerHTML= player.render();
// containerVill.innerHTML= Robot.render();
})


})




