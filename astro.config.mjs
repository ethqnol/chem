import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import remarkMath from 'remark-math';
import rehypeMathjax from 'rehype-mathjax';
// https://astro.build/config
export default defineConfig({
  site: 'https://ethqnol.github.io',
  base: '/chem',
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeMathjax],
  },
	integrations: [
		starlight({
			title: 'Chemistry Stoody Guide',
            customCss: [
                './src/styles/inline.css',
            ],
			social: {
				github: 'https://github.com/ethqnol/',
			},
			sidebar: [
				{
					label: 'Unit 1',
					items: [
						{ label: '1.01 Accuracy & Precision', link: '/unit01/standard1/' },
						{ label: '1.02 Measurement & SF', link: '/unit01/standard2/' },
						{ label: '1.03 Propagation of Error', link: '/unit01/standard3/' },
						{ label: '1.04 Scientific Notation', link: '/unit01/standard4/' },
						{ label: '1.05 Dimensional Analysis & SI Units', link: '/unit01/standard5/' },
						{ label: '1.06 Nature of Science', link: '/unit01/standard6/' },
						{ label: '1.07 Basic Properties of Matter', link: '/unit01/standard7/' },
						{ label: '1.08 Basic Particle Model', link: '/unit01/standard8/' },
						{ label: '1.09 [Advanced] Lattice Structures', link: '/unit01/standard9/' },
						
					],
					
				},
				
				{
					label: 'Unit 5',
					items: [
						{ label: '5.01 Moles', link: '/unit05/standard1/' },
						{ label: '5.02 Ideal Gas Law', link: '/unit05/standard2/' },
						{ label: '5.03 Empirical & Molecular Formulas', link: '/unit05/standard3/' },
						{ label: '5.04 Molarity', link: '/unit05/standard4/' },
						{ label: '5.05 Stoichiometry', link: '/unit05/standard5/' },
					
					],
				},
				{
					label: 'Unit 6',
					items: [
						{ label: '6.01 Reaction Profiles', link: '/unit06/standard1/' },
						{ label: '6.02 Energy Stoichiometry', link: '/unit06/standard2/' },
						{ label: '6.03 Hess\'s Law', link: '/unit06/standard3/' },
						{ label: '6.04 [Advanced] Entropy & Thermodynamic Favorability', link: '/unit06/standard4/' },
						{ label: '6.05 Collision Theory', link: '/unit06/standard5/' },
						{ label: '6.06 Reaction Rates', link: '/unit06/standard6/' },
					
					],
				},
				{
					label: 'Unit 7',
					items: [
						{ label: '7.01 Element Properties & Groups', link: '/unit07/standard1/' },
						{ label: '7.02 Valency & Nomenclature', link: '/unit07/standard2/' },
						{ label: '7.03 Mendeleev\'s Table', link: '/unit07/standard3/' },
						{ label: '7.04 Reaction Types', link: '/unit07/standard4/' },
						{ label: '7.05 Activity Series', link: '/unit07/standard5/' },
						{ label: '7.06 Precipitates', link: '/unit07/standard6/' },
					
					],
				},
				{
					label: 'Unit 8',
					items: [
						{ label: '8.01 Structural Isomers & Formulas', link: '/unit08/standard1/' },
						{ label: '8.02 Sterioisomerism', link: '/unit08/standard2/' },
					
					],
				},
				{
					label: 'Unit 9',
					items: [
						{ label: '9.01 Coulomb\'s Law', link: '/unit09/standard1/' },
						{ label: '9.02 Thomson Model', link: '/unit09/standard2/' },
						{ label: '9.03 Rutherford Model', link: '/unit09/standard3/' },
						{ label: '9.04 Nuclear Processes', link: '/unit09/standard4/' },
						{ label: '9.05 Mass Spectrometry', link: '/unit09/standard5/' },
					
					],
				},
				{
					label: 'Unit 10',
					items: [
						{ label: '10.01 Photoelectric Effect', link: '/unit10/standard1/' },
						{ label: '10.02 Bohr\'s Model', link: '/unit10/standard2/' },
						{ label: '10.03 Shell Model & Quantum Mechanics', link: '/unit10/standard3/' },
					
					],
				},
				{
					label: 'Unit 11',
					items: [
						{ label: '11.01 Ionic Equations', link: '/unit11/standard1/' },
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
