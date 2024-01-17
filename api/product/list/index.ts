import {Request, Response} from "express";

export default async (req:Request, res:Response) => {
    const {page, limit} = req.query;

    res.json({message: "Product api working properly", data: [page, limit]});
};