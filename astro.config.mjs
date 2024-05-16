import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import remarkMath from 'remark-math';
import rehypeMathjax from 'rehype-mathjax';
// https://astro.build/config
export default defineConfig({
  site: 'https://ethqnol.github.io',
  base: '/',
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeMathjax],
  },
	integrations: [
		starlight({
			title: 'Chemistry Stoody Guide',
			social: {
				github: 'https://github.com/ethqnol/',
			},
			sidebar: [
				{
					label: 'Unit 1',
					items: [
						{ label: '1.01 Accuracy & Precision', link: '/unit1/standard1/' },
						{ label: '1.02 Measurement & SF', link: '/unit1/standard2/' },
						{ label: '1.03 Propagation of Error', link: '/unit1/standard3/' },
						{ label: '1.04 Scientific Notation', link: '/unit1/standard4/' },
						{ label: '1.05 Dimensional Analysis & SI Units', link: '/unit1/standard5/' },
						{ label: '1.06 Nature of Science', link: '/unit1/standard6/' },
						{ label: '1.07 Basic Properties of Matter', link: '/unit1/standard7/' },
						{ label: '1.08 Basic Particle Model', link: '/unit1/standard8/' },
						{ label: '1.09 [Advanced] Lattice Structures', link: '/unit1/standard9/' },
						
					],
					
				},
				{
					label: 'Unit 11',
					items: [
						{ label: '11.01 Ionic Equations & Enthalpy Cycles', link: '/unit11/standard1/' },
						{ label: '11.02 Reaction Types', link: '/unit11/standard2/' },
						{ label: '11.03 Single Displacement Reactions', link: '/unit11/standard3/' },
						{ label: '11.04 Voltaic & Electrolytic Cells', link: '/unit11/standard4/' },
					],
				},
				{
					label: 'Unit 12',
					items: [
						{ label: '12.01 Lewis Structures', link: '/unit12/standard1/' },
						{ label: '12.02 VSEPR Theory', link: '/unit12/standard2/' },
						{ label: '12.03 London Dispersion Forces', link: '/unit12/standard3/' },
						{ label: '12.04 Dipole Forces and Electronegativity', link: '/unit12/standard4/' },
						{ label: '12.05 Hydrogen Bonding', link: '/unit12/standard5/' },
						{ label: '12.06 Intermolecular Forces', link: '/unit12/standard6/' },
					],
				},
			],
		}),
	],
});
