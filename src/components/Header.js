import React from "react"
import Purple from "./purple.png"

export default function Header() {
  return (
    <header className="header">
			<div className="header--name">
				<h1>CFPWLTCP</h1>
				<h4>(club for people who like the color purple)</h4>
			</div>
			<img className="header--image" src={Purple} alt="shades of the color purple"/>
    </header>
  )
}
