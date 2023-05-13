import { conn } from "./db"


export default async function handler(req,res){
 if(req.method === "GET"){
    try {
        const allOrders = await conn.query('SELECT * from orders')
        res.status(200).json(allOrders.rows)
    } catch (error) {
        res.status(401).json(error)
    }
 }
}