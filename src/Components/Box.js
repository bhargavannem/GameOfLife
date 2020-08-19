import React, { Component } from "react";
import "./Box.css";

export default class Box extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);

    this.state = { className: "dead" };
  }
  handleChange() {
    let patterns = [
      "Block",
      "Beehive",
      "Loaf",
      "Boat",
      "Tub",
      "Blinker",
      "Toad",
      "Beacon",
      "Pulsar",
      "Pentadecathlon",
      "Glider",
      "Light-Weight Spaceship",
      "Middle-Weight Spaceship",
      "Heavy-Weight Spaceship",
      "Gosper Glider Gun",
      "Simkin Glider Gun",
    ];
    
    if (
      document.getElementsByClassName("btnSelected").length > 0 &&
      document.getElementById("button").className === "inactive"
    ) {
      console.log("hyo");
      var str = document.getElementsByClassName("btnSelected")[0].className;
      str = str.substr(0, str.indexOf("btnSelected"));
      console.log(str);

      document.getElementsByClassName("btnSelected")[0].className = str;
    } else {
      if (document.getElementById("button").className === "inactive") {
        if (this.state.className == "dead") {
          this.setState({ className: "alive" });
        } else {
          this.setState({ className: "dead" });
        }
      }
    }
  }

  render() {
    return (
      <td
        className={this.state.className}
        id={this.props.id}
        onClick={this.handleChange}
        draggable="false"
      ></td>
    );
  }
}
