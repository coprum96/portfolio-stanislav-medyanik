import Header from './../components/header/Header'

const Home = () => {
    return (
		<>
			<Header />
			<main className="section">
				<div className="container">
					<ul className="content-list">
						<li className="content-list__item">
							<h2 className="title-2">Frontend</h2>
							<p>
							JavaScript, TypeScript. HTML5, CSS3, Bootstrap, Canvas, jQuery, React, Redux, MongoDB, Node.js, Git, GitHub, REST API design, Agile, Scrum, Web App Architecture (MVC)
							</p>
						</li>
						<li className="content-list__item">
							<h2 className="title-2">Backend</h2>
							<p>NodeJS, MySQL, MongoDB, JSON Web Token, SQLite, PostgreSQL, NPM </p>
						</li>
					</ul>
				</div>
			</main>
		</>
	);
}

export default Home;