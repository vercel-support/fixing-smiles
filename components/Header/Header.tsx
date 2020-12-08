import { FaPhoneVolume } from 'react-icons/fa';
import Logo from 'public/logo.svg';

const Header = () => {
	return (
		<header className="flex py-8 px-12 justify-center sm:justify-between items-center">
			<Logo className="h-16 sm:h-12 md:h-16" />
			<nav className="hidden sm:block font-semibold">
				<ul className="flex items-center">
					<li>
						<a href="#" className="p-4 border-transparent">
							Inicio
						</a>
					</li>
					<li>
						<a href="#" className="p-4 border-transparent">
							Tratamientos
						</a>
					</li>
					<li>
						<a href="#" className="p-4 border-transparent">
							Nosotros
						</a>
					</li>
					<li>
						<a href="#" className="p-4 border-transparent">
							Contactanos
						</a>
					</li>
					<li className="ml-4 hidden md:block">
						<a
							href="tel:+5217224940675"
							className="flex items-center text-primary bg-white rounded-full px-6 py-4 shadow-brand hover:text-primary-light border-0"
						>
							<FaPhoneVolume /> (722) 494 0675
						</a>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
