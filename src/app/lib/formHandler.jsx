"use server";
import { connectDB } from "./utils";
import { user, product } from "./models";
import bycrypt from "bcrypt";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { signIn } from "../auth";

export const Adduser = async (formData) => {
  "use server";
  // const username = formData.get("username");
  // const email = formData.get("email");
  // const password = formData.get("password");
  // const phone = formData.get("phone");
  // const userType = formData.get("userType");
  // const userActive = formData.get("userActive");
  // const desc = formData.get("desc");

  const { username, email, password, phone, userType, userActive, desc, img } =
    Object.fromEntries(formData);

  try {
    connectDB();
    const salt = await bycrypt.genSalt(10);
    const hashpass = await bycrypt.hash(password, salt);

    const newUser = new user({
      username,
      email,
      password: hashpass,
      phone,
      userType,
      userActive,
      desc,
      img
    });

    await newUser.save();
  } catch (error) {
    console.log(error.message);
    throw new Error("Fail add user");
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const deleteUser = async (formData) => {
  "use server";
  const id = formData.get("id");
  try {
    connectDB();
    await user.findByIdAndDelete(id);
  } catch (error) {
    console.log(error.message);
    throw new Error("delete user is failed");
  }
  redirect("/dashboard/users");
};

export const updateUser = async (formData) => {
  const {
    id,
    username,
    email,
    password,
    phone,
    userType,
    userActive,
    desc,
    img
  } = Object.fromEntries(formData);

  // console.log("update user id is ", id);

  const updateData = {
    id,
    username,
    email,
    password,
    phone,
    userType,
    userActive,
    desc,
    img
  };

  Object.keys(updateData).forEach(
    (key) => (updateData[key] === "" || undefined) && delete updateData[key]
  );

  try {
    await user.findByIdAndUpdate(id, updateData);
    // console.log("user update is complete");
  } catch (error) {
    console.log(error.message);
    throw new Error("user update is failed");
  }
  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const Addproduct = async (formData) => {
  "use server";
  // console.log("add products");
  const { title, price, stock, size, color, decs } =
    Object.fromEntries(formData);

  try {
    connectDB();
    const newProduct = new product({
      title,
      price,
      stock,
      size,
      color,
      decs
    });

    await newProduct.save();
  } catch (error) {
    console.log(error.message);
    throw new Error("add prouduct is failed");
  }

  revalidatePath("/dashboard/products/add");
  redirect("/dashboard/products");
};

export const updateProduct = async (formData) => {
  const { id, title, price, stock, size, color, decs } =
    Object.fromEntries(formData);
  // console.log("product id is => ", id);

  const productData = {
    id,
    title,
    price,
    stock,
    size,
    color,
    decs
  };

  Object.keys(productData).forEach(
    (pd) => (productData[pd] === "" || undefined) && delete productData[pd]
  );
  try {
    connectDB();
    await product.findByIdAndUpdate(id, productData);
  } catch (error) {
    console.log(error.message);
    throw new Error("update product is failed");
  }
  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

export const deleteProduct = async (formData) => {
  "use server";
  const { id } = Object.fromEntries(formData);
  // console.log("delete product id is ", id);

  try {
    connectDB();
    await product.findByIdAndDelete(id);
  } catch (error) {
    console.log(error.message);
    throw new Error("Product delete fail");
  }
  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

export const loginData = async (formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", {username, password});
  } catch (error) {
    // console.log(error.message);
    // throw new Error("login Data Error");
    return {err: "wrong credentails"};
  }
};
