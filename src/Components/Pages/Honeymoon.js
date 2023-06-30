import background from '../../images/background-main.png';
import venmo from '../../images/venmo.svg';
import zelle from '../../images/zelle.svg';

const Honeymoon = () => {
	return (
		<div className="w-full flex-col page background-overlay">
			<h2 className="text-6xl w-10/12 mx-auto my-8 font-parisienne text-center">
				Honeymoon Fund
			</h2>
			<div className="divider"></div>
			<div className="mx-auto leading-8 font-edu content-background p-3 w-10/12 flex flex-col">
				<div className="mx-auto whitespace-nowrap text-md md:text-2xl">
					<p>Thank you for celebrating our special day,</p>
					<p>we appreciate your love in every way,</p>
					<p>The greatest gift of all has been your time,</p>
					<p>I hope this doesn't seem out of line.</p>
					<p>But if you wish to give, we have a humble request,</p>
					<p>a small donation to our fund would be best.</p>
					<p>For a romantic getaway, thanks to you,</p>
					<p>we will cherish the memories through and through.</p>
					<p>If however, you found a gift on the way,</p>
					<p>not to worry, because we will love it anyway!</p>
				</div>
			</div>
			<div className="divider"></div>
			<p className="font-edu mb-4 w-full text-center md:text-3xl">
				Below are the links to our fund!
			</p>
			<div className="w-10/12 md:w-1/2 flex flex-col md:flex-row items-center justify-between">
				<div className="w-1/2 my-1 p-2 max-w-xs">
					<a
						href="venmo"
						target="_blank"
					>
						<img
							className="scale-75"
							src={venmo}
							alt="Venmo Link"
						/>
					</a>
				</div>
				<div className="w-1/2 my-1 p-2 max-w-xs">
					<a
						href="zelle"
						target="_blank"
					>
						<img
							src={zelle}
							alt="Zelle Link"
						/>
					</a>
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
