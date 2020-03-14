class villain extends person {
    constructor(name) {
        super(name)
    }
    render() {
        return `
 <div style="padding-left:200px;"> 
 <img src="images/villain.jpg" style="width:100px; height:100px;">
 <p>Name:<strong>${this.name}</strong><p>
<p>Weapon:<strong>${this.weapon.name}</strong><p>
<p id="myvhealth">My Health: <strong>${this.health}</strong><p>
<p id="vilhealth">Hero's Health <strong>${this.health}</strong><p>

<p id="vilplaying"> </p>
<button id="vill-attack"> Villa Attack</button>
</div>
    `
    }

}
