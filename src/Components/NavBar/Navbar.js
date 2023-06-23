import { useContext } from 'react';
import Logo from '../../images/logo.jpg';
import { Link } from 'react-router-dom';
import MenuIcon from '../Utilities/menu-icon';
import { NavContext } from '../../App';

const NavBar = () => {
	const Links = [
		{ name: 'TIMELINE', link: 'timeline' },
		{ name: 'WEDDING PARTY', link: 'wedding-party'},
		{ name: 'GIFT REGISTRY', link: 'registry' },
		{ name: 'TABLE SEATING', link: 'table-seating' },
	];
	const { nav, openNav } = useContext(NavContext);

	return (
		<div
			className="w-full md:static fixed top-0 left-0 mx-auto z-50 shadow-lg"
			onClick={(e) => e.stopPropagation()}
		>
			<div className="flex md:flex-col bg-white items-center justify-between px-7 pb-0 overflow-hidden h-[50px] md:h-auto">
				<div className="flex items-center">
					<Link
						to={'/'}
						onClick={() => openNav(false)}
					>
						<img
							src={Logo}
							className="w-20 h-auto"
							alt="Wedding Logo"
						/>
					</Link>
				</div>
				<div className="hidden md:flex text-center flex-col md:z-auto -z-2">
					<span className="text-8xl font-parisienne">Steph & Steven</span>
					<span className="mb-1 font-oswald">July 9, 2023 - Snohomish, WA</span>
				</div>
				<div
					onClick={() => openNav(!nav)}
					className="cursor-pointer md:hidden"
				>
					<MenuIcon prop={nav} />
				</div>
				<ul
					className={`md:flex md:items-center md:pb-2 pb-2 md:static absolute left-0 md:w-auto w-full bg-white md:pl-0 pl-3 md:z-auto z-[-1] transition-all duration-500 ease-in md:opacity-100 opacity-0 ${
						nav ? 'top-[50px] opacity-95' : 'top-[-100px]'
					}`}
				>
					{Links.map((link) => {
						return (
							<li
								key={link.name}
								className="font-oswald md:ml-10 md:my-2 mb-3 cursor-pointer hover:underline underline-offset-4 decoration-gray-400 indent-2"
							>
								<Link
									to={link.link}
									onClick={() => openNav(false)}
								>
									{link.name}
								</Link>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
};

export default NavBar;
