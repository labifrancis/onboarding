// gatsby-node.js
exports.createPages = async ({ graphql, actions }) => {
	const { createRedirect } = actions;
		
	createRedirect({
    fromPath: `/blog/*`,
    toPath: `https://labifrancis.com/about-me/*`,
    statusCode: 200,
  });
}
