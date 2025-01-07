import { Request , Response , NextFunction } from "express";
import { ServerModel } from "../schemas/db";

export async function initializeRequestCount() {
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

export async function increaseReqCount(req:Request, res:Response, next:NextFunction) {
    try {
        // Find the document
        const serverData = await ServerModel.findOne({ id: "reqCount" });
        if (!serverData) {
            res.status(404).json({
                message: "Document with id 'reqCount' not found!"
            });
            return
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