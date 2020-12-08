import React from 'react';
import { FaChevronRight, FaFacebookSquare, FaInstagram } from 'react-icons/fa';

import Logo from 'public/logo.svg';

const Footer = () => {
	return (
		<footer className="px-4 py-8 sm:px-12">
			<div className="flex flex-col justify-between md:flex-row">
				<div>
					<Logo className="h-16" />
					<div className="mt-4">
						<ul className="flex gap-4">
							<li>
								<h3>Dirección</h3>
								<p>
									Paseo de las Flores 552-746
									<br />
									Delegación San Lorenzo Tepaltitlán I<br />
									Residencial las Flores
									<br />
									50018 Toluca de Lerdo
								</p>
								<p>
									<a
										href="https://www.google.com/maps/place/Paseo+de+las+Flores+552,+Delegaci%C3%B3n+San+Lorenzo+Tepaltitl%C3%A1n+I,+Residencial+las+Flores,+50018+Toluca+de+Lerdo,+M%C3%A9x.,+Mexico/@19.3132266,-99.6331278,17z/data=!3m1!4b1!4m5!3m4!1s0x85cd8a0083c5ff27:0xd2f3396951b23011!8m2!3d19.3132266!4d-99.6309391"
										target="_blank"
										rel="noreferrer"
										className="flex items-center text-primary hover:text-primary-light border-0 font-semibold mt-2"
									>
										Ver en el mapa <FaChevronRight className="ml-2" />
									</a>
								</p>
							</li>
							<li>
								<h3>Telefóno</h3>
								<p>
									<a href="tel:+5217224940675">(722) 494 0675</a>
								</p>
								<h3 className="mt-4">Horarios</h3>
								<p>
									Lun - Sab:
									<br className="md:hidden" />
									<span> 9:00 am - 6:00 pm</span>
								</p>
							</li>
						</ul>
					</div>
				</div>
				<div className="flex flex-end flex-col pt-6">
					<h3>Servicios</h3>
					<ul className="grid grid-cols-2 xl:grid-cols-3 gap-4 uppercase tracking-wide pt-2">
						<li>Diseño de sonrisa</li>
						<li>Ortodoncia</li>
						<li>Implantología</li>
						<li>Carillas Dentales</li>
						<li>Blanqueamiento Dental</li>
						<li>Prótesis Bucales</li>
						<li>Resinas De Alta Estética</li>
						<li>Endodoncia</li>
						<li>Cirugía Maxilofacial</li>
						<li>Odontopediatría</li>
						<li>Periodoncia</li>
					</ul>
				</div>
			</div>
			<div className="border-t-2 border-gray-100 mt-8 pt-8 flex justify-between">
				<ul className="flex">
					<li className="mr-4">
						<a
							href=""
							target="_blank"
							className="text-2xl text-primary hover:text-primary-light"
						>
							<FaFacebookSquare />
						</a>
					</li>
					<li>
						<a
							href=""
							target="_blank"
							className="text-2xl text-primary hover:text-primary-light"
						>
							<FaInstagram />
						</a>
					</li>
				</ul>
				<span>
					&copy; {new Date().getFullYear()} <strong>Fixing Smiles</strong>{' '}
					Consultorio Dental Toluca
				</span>
			</div>
		</footer>
	);
};

export default Footer;
