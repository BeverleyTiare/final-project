import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./styles";

const Footer = () => {
	return (
		<footer className="bg-gray-200 p-4" style={{ marginTop: "auto"}}>
			<div className="container mx-auto text-center">
				<p className="text-gray-600">© 2023 Epigenetics.Co. All rights reserved.</p>
			</div>
		</footer>
	);
};
export default Footer;



