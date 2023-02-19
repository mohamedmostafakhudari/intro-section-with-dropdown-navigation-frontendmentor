import React from "react";
import { useState } from "react";
import { createPortal } from "react-dom";
export default function Menu({ children }) {
  return <>{createPortal(children, document.getElementById("menu"))}</>;
}
