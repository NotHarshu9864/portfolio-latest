import { SectionTitle } from '../components/section-title.component';

const timeline = [
	{
		title: 'Experience',
		items: [
			{
				title: 'Developer',
				place: '@Quicktoppers',
				timePeriod: '2020 - Present',
				description: (
					<ul>
						<li>
							Contributed significantly to the development of main project{''}
							<strong>QuickToppers</strong>, a pivotal project for education and
							increasing exam progreaa.
						</li>
						<li>
							Designed and developed multiple interactive data visualization
							dashboards.
						</li>
						<li>Built several Android applications using React Native.</li>
					</ul>
				),
			},
		],
	},
	{
		title: 'Certification',
		items: [
			{
				title: 'Developer',
				place: 'QuickToppers',
				timePeriod: '2020 - Present',
				description: (
					<ul>
						<li>
							Earned a Security certification from the ScammerAlert.
						</li>
						<li>
							Awarded for securing the top position in ScammerAlert, Moderating servers 
							and punishing 1500+ scammers
						</li>
					</ul>
				),
			},
		],
	},
	{
		title: 'Education',
		items: [
			{
				title: 'CLASS 10TH',
				place: 'GST GLOBAL SCHOOL',
				timePeriod: '2017 - Present',
				description: '',
			},
		],
	},
];

export const AboutMe = () => {
	return (
		<section
			className='about-me container'
			id='about-me'
		>
			<div>
				<SectionTitle
					title='About'
					subTitle='ME'
				/>
			</div>
			<div>
				<div className='intro'>
					<p style={{ marginTop: '20px' }}>
						👋 Hey, I'm Krishna, a Full Stack Developer. 
					</p>
					<p>
						I've been working with <strong>React</strong> and{' '}
						<strong>Node</strong> for the past <strong>three years</strong>,
						building web applications that are fast, scalable and user-friendly.
					</p>
					<p>
						I like solving problems, learning new things, and experimenting with
						different technologies. When I'm not coding, I'm probably working on
						a side project or exploring something new.
					</p>
				</div>
				<div>
					{timeline.map(({ items, title }, idx) => (
						<div
							className='timeline'
							key={idx}
						>
							<h1>{title}</h1>
							{items.map(({ title, place, timePeriod, description }, idx) => (
								<div
									className='timeline-list'
									key={idx}
								>
									<div className='timeline-item'>
										<p className='designation'>{title}</p>
										<p className='place'>
											{place} | {timePeriod}
										</p>
										<div className='timeline-description'>{description}</div>
									</div>
								</div>
							))}
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
