import uic from "./../img/projects/uic.png";
import chat from "./../img/projects/chat.png";
import stas from "./../img/projects/stas.png";
import quiz from "./../img/projects/quiz.png";
import book from "./../img/projects/bookme.png";
import autoteile from "./../img/projects/autoteile.png";
import realworld from "./../img/projects/realworld.png";





const projects = [
	{
		title: 'Autoteile',
		img: autoteile,
		imgBig: autoteile,
		skills: 'React, Firebase, Mantine, MongoDB',
		gitHubLink: 'https://github.com/coprum96/AutoTeile',
		internetLink: 'https://autoteile.vercel.app/'
	},
	{
		title: 'Real World',
		skills: 'Nest.js, Angular',
		img: realworld,
		imgBig: realworld,
		gitHubLink: 'https://github.com/coprum96/book-me',
		internetLink: 'https://demo.realworld.io/#/'
	},
	{
		title: 'Portfolio HTML',
		img: stas,
		imgBig: stas,
		skills: 'JavaScript, HTML, CSS',
		gitHubLink: 'https://portfolio-coprum96.vercel.app/',
		internetLink: 'https://portfolio-coprum96.vercel.app/'
	},
	{
		title: 'Chat App',
		img: chat,
		imgBig: chat,
		skills: 'Node.js, Socket.io',
		gitHubLink: 'https://github.com/coprum96/ChatApp',
	},
	{
		title: 'JsQuiz',
		img: quiz,
		imgBig: quiz,
		skills: 'JavaScript, HTML, CSS',
		gitHubLink: 'https://github.com/coprum96/jsQuiz.git',
		internetLink: 'https://js-quiz-pi.vercel.app/'
	},
	{
		title: 'Lending Page Unified Insurance Center',
		skills: 'JavaScript, HTML, CSS',
		img: uic,
		imgBig: uic,
		gitHubLink: 'https://github.com/coprum96/unified-insurance-center',
		internetLink: 'https://unified-insurance-center.vercel.app/'
	},
	{
		title: 'Book Me',
		skills: 'React, Redux',
		img: book,
		imgBig: book,
		gitHubLink: 'https://github.com/coprum96/book-me',
	},

];

export {projects}