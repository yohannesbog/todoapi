class Hero extends person {
constructor (name) {
    super (name);
    
}
    render() {
    
return `
<div style="padding-left:300px;"> 
<img src="images/hero.jpg" style="width:100px; height:100px;">
<p>Name: <strong>${this.name}</strong><p>
<p>Weapon: <strong>${this.weapon.name}</strong><p>
<p id="myhhealth">My Health: <strong>${ this.health}</strong><p>
<p id="herohealth">Villain's Health: <strong>${ this.health}</strong><p>

<p id="playing"> </p>
<button id="herro-attack"> Hero Attack</button>

</div>
`
    }
    

}
// const play1 = new Hero('yohannes')
// console.log(play1.render())