import React , {component  } from "react";
import ProgressBar from './HealthBar'

var remHealth = 100;
class Attack extends React.Component {
    constructor(props) {
        super(props);
        this.rippleClickFunction = this.rippleClickFunction.bind(this);
    }
    genRan () {
        return Math.ceil(Math.random() * 21);
    }
    checkHealth(health,status) {
        var s = 'You'
        if (status == 1){
            var s = 'Enemy'
        } 

            if (health < 0){
            return this.gameOver();
            }
    }
    gameOver() {
        alert("you died!!");
    }
    rippleClickFunction () {
        
        var enHealth = parseInt(document.getElementsByClassName("progress-bar")[1].style.width);
        console.log("Enemy")
        var x = Math.ceil(Math.random() * 21);
        enHealth = enHealth - x;
        console.log("health",enHealth)
        document.getElementsByClassName("progress-bar")[1].style.width = enHealth+'%';
        this.checkHealth(enHealth,1)
        var userHealth = parseInt(document.getElementsByClassName("progress-bar")[0].style.width);
        // console.log(123) 

        
    }
    render() {
        return(
            <div>
                <button className="btn btn-danger btn-sm" onClick = {this.rippleClickFunction}>Attack</button>
            </div>
        );
    }
}
export default Attack 


















































































































































































