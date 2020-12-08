import Head from 'next/head';
import Image from 'next/image';
import Layout from 'components/Layout';

export default function Home() {
	return (
		<>
			<Head>
				<title>Dentista Toluca Fixing Smiles - Consultorio Dental</title>
				<meta
					name="description"
					content="Fixing Smiles es su dentista privado en Toluca de Lerdo, Estado de México. Es un placer para nosotros proporcionar el mejor servicio a nuestros pacientes."
				/>
			</Head>
			<Layout>
				<section id="inicio" className="background-primary h-auto py-24">
					<div className="flex flex-col-reverse md:flex-row container-sm mx-auto gap-20">
						<div>
							<h1 className="text-primary font-bold text-4xl">
								Bienvenido al dentista Fixing&nbsp;Smiles en Toluca
							</h1>
							<p className="mt-4 text-lg">
								En Fixing Smiles disponemos de un equipo profesional de
								dentistas altamente calificados, comprometidos en ofrecerte un
								servicio de calidad con tecnología de avanzada.
							</p>
						</div>
						<div className="w-2/3">
							<div className="relative w-96 h-96">
								<Image
									src="/dulce.jpg"
									layout="fill"
									className="rounded-lg shadow-lg"
								/>
							</div>
							<span className="font-semibold mt-4 block">
								Dra. Dulce Maria Cid Paz
							</span>
							<em>Dentista</em>
						</div>
					</div>
				</section>
			</Layout>
		</>
	);
}
