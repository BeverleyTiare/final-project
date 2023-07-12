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



// <footer class="bg-gray-200 p-4">
// <div class="container mx-auto text-center">
//   <p class="text-gray-600">© 2023 Epigenetics.Co. All rights reserved.</p>
// </div>
// </footer>



// <Box>
// 		<h1 style={{ color: "indigo",
// 					textAlign: "center",
// 					marginTop: "-50px" }}>
// 			Epigenetics & Sleep
// 		</h1>
// 		<Container>
// 			<Row>
// 			<Column>
// 				<Heading>About Us</Heading>
// 				<FooterLink href="#">Aim</FooterLink>
// 				<FooterLink href="#">Vision</FooterLink>
// 				<FooterLink href="#">Privacy</FooterLink>
// 			</Column>
// 			<Column>
// 				<Heading>Services</Heading>
// 				<FooterLink href="#">Consultants</FooterLink>
// 				<FooterLink href="#">Lifestyle Focus</FooterLink>
// 			</Column>
// 			<Column>
// 				<Heading>Contact Us</Heading>
// 				<FooterLink href="#">Sydney</FooterLink>
// 				<FooterLink href="#">London</FooterLink>
// 				<FooterLink href="#">Paris</FooterLink>
// 				<FooterLink href="#">Televiv</FooterLink>
// 			</Column>
// 			<Column>
// 				<Heading>Social Media</Heading>
// 				<FooterLink href="#">
// 				<i className="fab fa-instagram">
// 					<span style={{ marginLeft: "10px" }}>
// 					Instagram
// 					</span>
// 				</i>
// 				</FooterLink>
// 				<FooterLink href="#">
// 				<i className="fab fa-twitter">
// 					<span style={{ marginLeft: "10px" }}>
// 					Twitter
// 					</span>
// 				</i>
// 				</FooterLink>
// 				<FooterLink href="#">
// 				<i className="fab fa-youtube">
// 					<span style={{ marginLeft: "10px" }}>
// 					Youtube
// 					</span>
// 				</i>
// 				</FooterLink>
// 			</Column>
// 			</Row>
// 		</Container>
// 		</Box>