
import { user, product } from "./models";
import { connectDB } from "./utils"

export const fetchUser = async(q, page) => {
    const PAGE_LIMIT = 2;
    const regex = new RegExp(q , "i");
    try {
        connectDB();
        const count = await user.find({username: {$regex: regex}}).length;
        const users = await user.find({username: {$regex : regex}}).limit(PAGE_LIMIT).skip(PAGE_LIMIT * (page -1));
        let data = {users, count};
        return data;

    } catch (error) {
        console.log(error);
        throw new Error("User Fetch is fail");
    }
}

export const singleUser = async(id) => {
    try {
        connectDB();
        const single = await user.findById(id);
        return single;

    } catch (error) {
        console.log(error.message)
    }
}

export const fetchProduct = async(q , page) => {
    // console.log(q);
    const regex = new RegExp(q, "i");
    const PAGE_LIMIT = 2;
    try {
        connectDB();
        const count = await product.find({title:{$regex: regex}}).count();
        const products = await product.find({title: {$regex: regex}}).limit(PAGE_LIMIT).skip(PAGE_LIMIT * (page -1));
        const data = {count, products};
        return data;
    } catch (error) {
        console.log(error);
        throw new Error("product fetch is fail");
    }
}

export const SingleProduct = async(id) => {
    try {
        connectDB();
        const productSingle = await product.findById(id);
        return productSingle;
    } catch (error) {
        console.log(error.message);
        throw new Error("Single produt is failed");
    }
}