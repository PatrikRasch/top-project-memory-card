import React, { useState } from "react";
import "./level.css";

export default function Level(props) {
  return <div className="level">Level {props.level}</div>;
}
