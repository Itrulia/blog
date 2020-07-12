import React, { memo } from 'react';
import { Container } from '../src/components/container/container';
import { H1 } from '../src/components/typography/headings';
import { Paragraph } from '../src/components/typography/paragraphs';
import { Header } from '../src/components/header/header';

const Article = Container.withComponent('article');

export const About = memo(() => (
	<main>
		<Header>
			<H1>
				👋 Grüezi! <br />
				I‘m Karl and I <strong>love</strong> food.
			</H1>

			<Paragraph>
				Let me show you how easy it is to be a great home cook.
			</Paragraph>
		</Header>

		<Article>
			<Paragraph>
				I have always loved to use my hands, I have played Handball,
				play the piano since over a decade and my job is it to create
				websites and mobile apps.
			</Paragraph>

			<Paragraph>
				My family have all been full of great cooks but I always
				disliked the food I made myself. It was just never good enough,
				so I gave up. Everyone that knows me could have told you that I
				truly never fully give something up. So when I moved out from
				home and left Switzerland I started cooking again.
			</Paragraph>

			<Paragraph>
				I started baking, noting down what works, what didn't work and
				what is missing. Cheesecake quickly became my most baked cake,
				due to its simplicity and versatility. You can make it sweet by
				adding fruits, chocolate or candy, but you can also make it
				savory by using a different kind of cheese.
			</Paragraph>

			<Paragraph>
				Baking cheesecake quickly became too simple for me and I visited
				a culinary school in Cologne after work to properly learn how to
				cook. This has taught me how to <em>properly</em> (I guess?) use
				a knife but also the chemistry behind cooking.
			</Paragraph>

			<Paragraph>
				Fast forward to today. After work I spend most of my time
				cooking, watching my favourite chefs (
				<a
					href="https://www.instagram.com/joshuaweissman"
					target="_blank"
				>
					Joshua Weissman
				</a>
				{' and '}
				<a
					href="https://www.instagram.com/thedessertsnob"
					target="_blank"
				>
					Rie McClenny
				</a>
				) on Youtube and research my next project in the kitchen. I also
				started collecting kitchen knives and am quite addicted I must
				say.
			</Paragraph>
		</Article>
	</main>
));

export default About;
