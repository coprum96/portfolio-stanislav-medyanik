import telegram from '../img/icons/telegram.svg';
import whatsup from '../img/icons/whatsup.svg';
const Contacts = () => {
    return (
		<main className="section">
			<div className="container">
				<h1 className="title-1">Contacts</h1>

				<ul className="content-list">
					<li className="content-list__item">
						<h2 className="title-2">Location</h2>
						<p>Tel-Aviv, Israel</p>
					</li>
					<li className="content-list__item">
						<h2 className="title-2">Phone</h2>
						<p>
							<a href="tel:+972535249638">+972 (53) 524-96-38</a>
						</p>
					</li>
					<li className="content-list__item">
						<h2 className="title-2">Telegram / WhatsApp</h2>
						<p>
							<a href="https://t.me/coprum">
								<img src={telegram} alt="Link" 
								className="icon" />
							</a>
							<a href="https://wa.me/79119068159" >
								<img src={whatsup} alt="Link" className="icon" />
							</a>
						</p>
					</li>
					<li className="content-list__item">
						<h2 className="title-2">Email</h2>
						<p>
							<a href="mailto:stanislavmedyanik@gmail.com">
								stanislavmedyanik@gmail.com
							</a>
						</p>
					</li>
				</ul>
			</div>
		</main>
	);
}

export default Contacts;