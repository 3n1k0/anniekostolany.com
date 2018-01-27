import React from 'react';
import { Page, Photo } from './Page';
import BookNowButton from '../BookNowButton';

export default () => (
	<Page
		title="Dreamy beach photoshoot"
		description=" Is this girl a French model or a bohemian bride? She's full of life and always ready to smile back, just like the city of Marseille."
		image="dreamy_beach/23539526988_24cbf3c0c5_k.jpg"
	>
		<Photo file="dreamy_beach/23539538448_d820efbc30_k.jpg" />
		<Photo file="dreamy_beach/37391818431_5b94d5ba6e_k.jpg" />
		<Photo file="dreamy_beach/23539532788_a309e1598d_k.jpg" />
		<Photo file="dreamy_beach/23539530998_5ba860b73b_k.jpg" />
		<Photo file="dreamy_beach/37391809721_708e4240c6_k.jpg" />
		<Photo file="dreamy_beach/37391808491_85a11b0338_k.jpg" />
		<Photo file="dreamy_beach/23539526988_24cbf3c0c5_k.jpg" />
		<Photo file="dreamy_beach/37391794761_789acb98cf_k.jpg" />
		<Photo file="dreamy_beach/37361195732_b5815be886_k.jpg" />
		<Photo file="dreamy_beach/st.jpg" />
		<Photo file="dreamy_beach/37391781721_de9fa7bc64_k.jpg" />
		<BookNowButton />
	</Page>
);
