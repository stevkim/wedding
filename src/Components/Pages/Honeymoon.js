import { useEffect, useState } from 'react';
import background from '../../images/background-main.png';
import venmo from '../../images/venmo.svg';
import zelle from '../../images/zelle.svg';
import Alert from '../Utilities/alert';

const POEM = [
	'Thank you for celebrating our special day,',
	'we appreciate your love in every way,',
	'The greatest gift of all has been your time,',
	"I hope this doesn't seem out of line.",
	'But if you wish to give, we have a humble request,',
	'a small donation to our fund would be best.',
	'For a romantic getaway, thanks to you,',
	'we will cherish the memories through and through.',
	'If however, you found a gift on the way,',
	'not to worry, because we will love it anyway!',
];

const Honeymoon = () => {
	const [poem, setPoem] = useState(false);
	const [msg, setMsg] = useState('');

	useEffect(() => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: 'smooth',
		});
		setPoem(true);
	}, []);

	const handleClick = async () => {
		let email = 'stephxuzy96@gmail.com';
		navigator.clipboard.writeText(email).then(() => {
			setMsg('E-mail copied to your clipboard!');
			setTimeout(() => {
				setMsg('');
			}, 5000);
		});
	};

	return (
		<div className="w-full flex-col page background-overlay">
			{msg !== '' && <Alert msg={msg} />}
			<h2 className="text-6xl w-10/12 mx-auto mt-8 mb-4 font-parisienne text-center">
				Honeymoon Fund
			</h2>
			<div className="divider"></div>
			<div className="mx-auto leading-8 font-edu w-10/12 flex flex-col">
				<div className="mx-auto whitespace-nowrap text-md md:text-2xl content-background p-4 shadow-lg overflow-hidden">
					{POEM.map((text, index) => {
						return (
							<p
								key={text}
								className={`poem ${poem ? 'poem-focus' : ''}`}
								style={{ transitionDelay: 0 + index * 50 + 'ms' }}
							>
								{text}
							</p>
						);
					})}
				</div>
			</div>
			<div className="divider"></div>
			<div className="w-10/12 md:w-1/2 flex flex-wrap items-center justify-between my-8">
				<p className="font-edu mb-2 w-full text-center md:text-3xl">
					Below are the links to our fund!
				</p>
				<div className="w-1/2 my-1 p-2 max-w-xs">
					<a
						href="https://venmo.com/u/Steph-Xu"
						target="_blank"
						rel="noreferrer"
					>
						<img
							className="scale-75"
							src={venmo}
							alt="Venmo Link"
						/>
					</a>
				</div>
				<div className="w-1/2 my-1 p-2 max-w-xs relative">
					<img
						src={zelle}
						alt="Zelle Link"
						onClick={handleClick}
					/>
				</div>
			</div>
			<img
				src={background}
				className="background"
				alt="background"
			/>
		</div>
	);
};

export default Honeymoon;
