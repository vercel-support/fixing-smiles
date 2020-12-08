import data from './data.json';

const StructuredData = () => {
	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{
				__html: JSON.stringify(data),
			}}
		/>
	);
};

export default StructuredData;
