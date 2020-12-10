const src = JSON.parse(`["some","values","in","an","array","もちろん","日本語も","OK!"]`);  // Can be loaded from a static file

const thisBuildId = parseInt(process.env.CIRCLE_NODE_INDEX);
const totalNumOfBuilds = parseInt(process.env.CIRCLE_NODE_TOTAL);

for (let iter = thisBuildId; iter < src.length; iter += totalNumOfBuilds) {
    console.log(src[iter]);
}
