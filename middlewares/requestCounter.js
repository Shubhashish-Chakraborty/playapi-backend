const { ServerModel } = require('../schemas/db');

async function initializeRequestCount() {
    try {
        // Check if the document exists
        const existingDoc = await ServerModel.findOne({ id: "reqCount" });
        if (!existingDoc) {
            // If not, create the document
            await ServerModel.create({ id: "reqCount", request: 0 });
            console.log("Request count initialized to 0.");
        } else {
            console.log("Request count document already exists.");
        }
    } catch (e) {
        console.error("Error initializing request count:", e);
    }
}

async function increaseReqCount(req, res, next) {
    try {
        // Find the document
        const serverData = await ServerModel.findOne({ id: "reqCount" });
        if (!serverData) {
            return res.status(404).json({
                message: "Document with id 'reqCount' not found!"
            });
        }

        // Update the request count
        await ServerModel.updateOne(
            { id: "reqCount" },
            { $set: { request: serverData.request + 1 } } // Increment the count
        );

        // Call next middleware
        next();
    } catch (e) {
        console.error("Error in increaseReqCount middleware:", e);
        res.status(500).json({
            message: "BACKEND IS DOWN, SOMETHING WENT WRONG!"
        });
    }
}

module.exports = {
    increaseReqCount: increaseReqCount,
    initializeRequestCount: initializeRequestCount
};