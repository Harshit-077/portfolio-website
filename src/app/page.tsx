import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
	return (
		<div className="bg-[rgb(32,23,23)] text-aliceblue min-h-screen w-screen box-border">
			<nav className="flex justify-around h-[8.6vh] w-screen box-border fixed top-[20px]">
				<ul className="flex px-[1vh]">
					<li className="text-orange-400" id="ao">
						<Link href="#">HS</Link>
					</li>
				</ul>
				<ul className="flex justify-between text-gray-300 ">
					<li id="one">
						<Link href="/" className="text-orange-400 p-1">Home</Link>
					</li>
					<li>
						<Link href="#uno" className="p-1">Services</Link>
					</li>
					<li>
						<Link href="#container" className="p-1">About me</Link>
					</li>
					<li>
						<Link href="/projects" className="p-1">Projects</Link>
					</li>
					<li>
						<Link href="#contact-container" className="p-1">Contact me</Link>
					</li>
				</ul>
				<ul className="flex justify-end items-center text-black bg-orange-400 rounded-[9px] px-3 max-w-[100px] overflow-hidden whitespace-nowrap text-sm">
					<li>
						<a
							target="_blank"
							href="https://www.linkedin.com/in/harshitsharma77"
							rel="noopener noreferrer"
							title="LinkedIn Profile"
						>
							Hire me
						</a>
					</li>
				</ul>
			</nav>

			<main className="p-[0.4em] m-[1.6em] text-[1.8em]">
				<div className="flex flex-col sm:flex-row justify-between items-center">
					<div className="space-y-4">
						<h4>Hi I am</h4>
						<h2 className="indent-[1%]">Harshit Sharma</h2>
						<h1 className="text-orange-400 text-left indent-[2%]">Machine Learning Developer</h1>
						<div className="flex space-x-4">
							<a href="https://www.instagram.com/harshit_sharma280/" target="_blank" rel="noopener noreferrer" title="Instagram Profile">
								<Image src="/instagram.svg" alt="Instagram" width={40} height={40} />
							</a>
							<a href="https://www.linkedin.com/in/harshitsharma77" target="_blank" rel="noopener noreferrer" title="LinkedIn Profile">
								<Image src="/linkedin.svg" alt="LinkedIn" width={40} height={40} />
							</a>
							<a href="https://github.com/Harshit-077" target="_blank" rel="noopener noreferrer" title="GitHub Profile">
								<Image src="/github.svg" alt="GitHub" width={40} height={40} />
							</a>
						</div>
					</div>
					<div className="hidden sm:block bg-[#242424] rounded-full w-[600px] h-[600px] mt-8 sm:mt-0">
						<Image src="/comp.svg" alt="Profile Icon" width={600} height={600} className="rounded-full object-cover" />
					</div>
				</div>
			</main>

			<section id="uno">
				<h1>Services</h1>
				<h2>
					I am proficient in multiple programming languages like HTML5, CSS3, Python,
					C, C++, Java, Oracle SQL, MySQL, NumPY, Pandas, Matplotlib
				</h2>
			</section>

			<div className="services-boxes">
				{/* First box group */}
				<div>
					<Image src="/web-development-svgrepo-com.svg" alt="Web Dev" width={64} height={64} />
					<h1>Web Site Creation</h1>
					<p>Creating Interactive web design for any type of website</p>
				</div>
				<div>
					<Image src="/database-svgrepo-com.svg" alt="Database" width={64} height={64} />
					<h1>Database Creation</h1>
					<p>Designing and managing relational databases efficiently.</p>
				</div>
				<div>
					<Image src="/standard-objects-svgrepo-com.svg" alt="DSA" width={64} height={64} />
					<h1>Data Structures</h1>
					<p>Solving complex problems using DSA with C++ and Java.</p>
				</div>
				{/* Second box group */}
				<div>
					<Image src="/ai-svgrepo-com.svg" alt="AI" width={64} height={64} />
					<h1>Generative AI</h1>
					<p>Working with generative models to build AI-based solutions.</p>
				</div>
				<div>
					<Image src="/machine-learning-03-svgrepo-com.svg" alt="ML" width={64} height={64} />
					<h1>Machine Learning</h1>
					<p>Training models and analyzing data using ML frameworks.</p>
				</div>
				<div>
					<Image src="/internet-media-os-svgrepo-com.svg" alt="OS" width={64} height={64} />
					<h1>Operating System</h1>
					<p>Conceptual understanding and implementation of OS fundamentals.</p>
				</div>
			</div>

			<section>
				<div id="container" className="container">
					<div className="about-me">
						<h1>About Me</h1>
						<h2>User Interface And User Experience And Also Video Editing</h2>
						<div className="content">
							<div className="image">
								<Image src="/comp.svg" alt="Profile" width={150} height={150} />
							</div>
							<div className="description">
								<p>A software engineer, the modern-day architect of digital realms... (shortened)</p>
								<a href="/downloads/PortFolio.pdf" download className="download-cv" title="Download Harshit's CV">
									Download CV
								</a>
							</div>
						</div>
					</div>

					<div className="skills">
						<div className="skill">
							<Image src="/java-svgrepo-com.svg" alt="Java" width={48} height={48} />
							<p>70%<br />Java</p>
						</div>
						<div className="skill">
							<Image src="/html.svg" alt="HTML" width={48} height={48} />
							<p>100%<br />Web Development</p>
						</div>
						<div className="skill">
							<Image src="/c.svg" alt="C++" width={48} height={48} />
							<p>100%<br />C++</p>
						</div>
						<div className="skill">
							<Image src="/cog-svgrepo-com.svg" alt="ML" width={48} height={48} />
							<p>90%<br />Machine Learning</p>
						</div>
						<div className="skill">
							<Image src="/database-svgrepo-com copy.svg" alt="DBMS" width={48} height={48} />
							<p>80%<br />DBMS</p>
						</div>
					</div>
				</div>

				<div id="contact-container" className="contact-container">
					<div className="contact-form">
						<h1>Contact me</h1>
						<p>Cultivating Connections: Reach Out And Connect With Me</p>
						<form>
							<div className="form-row">
								<input type="text" name="name" placeholder="Name" />
								<input type="email" name="email" placeholder="Email" />
							</div>
							<div className="form-row">
								<input type="tel" name="phone" placeholder="Phone Number" />
								<select id="service" name="service" title='Service of Interest'>
									<option value="" disabled>Service Of Interest</option>
									<option value="Figma_Design">Figma Design/ Web Development</option>
									<option value="Database_Management">Database Management</option>
									<option value="Artificial_Intelligence">Artificial Intelligence</option>
									<option value="DSA">DSA using C++ or Java</option>
								</select>
							</div>
							<div className="form-row">
								<input type="text" name="timeline" placeholder="Timeline" />
								<textarea name="details" placeholder="Project Details..." />
							</div>
							<button type="submit">Send</button>
						</form>
					</div>
				</div>
			</section>

			<footer className="bottom">
				<h1>HS</h1>
				<ul className="mid_nav" id="mew">
					<li><Link href="/">Home</Link></li>
					<li><Link href="#uno">Services</Link></li>
					<li><Link href="#container">About me</Link></li>
					<li><Link href="/projects">Projects</Link></li>
					<li><Link href="#contact-container">Contact me</Link></li>
				</ul>
				<div className="bot">
					<a href="https://www.instagram.com/harshit_sharma280/" title="Instagram Profile">
						<Image src="/instagram.svg" alt="Instagram" width={24} height={24} />
					</a>
					<a href="https://www.linkedin.com/in/harshitsharma77" title="LinkedIn Profile">
						<Image src="/linkedin.svg" alt="LinkedIn" width={24} height={24} />
					</a>
					<a href="https://github.com/Harshit-077" title="GitHub Profile">
						<Image src="/github.svg" alt="GitHub" width={24} height={24} />
					</a>
				</div>
				<div className="maut">
					<p>
						<Image src="/email-icon.svg" alt="Email" width={16} height={16} />
						harshitsharma.0777@gmail.com
					</p>
					<p>
						<Image src="/phone-line-icon.svg" alt="Phone" width={16} height={16} />
						+91 9682357686
					</p>
				</div>
				<div className="line" />
			</footer>
		</div>
	);
}
