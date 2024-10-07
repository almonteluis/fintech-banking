"use server";

import { SignUpParams } from "@/types";
import { createAdminClient, createSessionClient } from "../appWrite";
import { ID } from "node-appwrite";
import { cookies } from "next/headers";
import { parseStringify } from "../utils";

export const SignIn = async () => {
  try {
    //Mutation /database /
  } catch (error) {
    console.error("Error", error);
  }
};
export const SignUp = async (userData: SignUpParams) => {
  const { email, password, firstName, lastName } = userData;

  try {
    // Create user account
    const { account } = await createAdminClient();

    const newUserAccount = await account.create(
      ID.unique(),
      email,
      password,
      `${firstName} ${lastName}`
    );
    const session = await account.createEmailPasswordSession(email, password);

    cookies().set("appwrite-session", session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    });

    return parseStringify(newUserAccount);
  } catch (error) {
    console.error("Error", error);
  }
};

// ... your initilization functions

export async function getLoggedInUser() {
  try {
    const { account } = await createSessionClient();
    const user = await account.get();
    return parseStringify(user);
  } catch (error) {
    return null;
  }
}

export async function getStates() {
  const headers = new Headers();
  headers.append("X-CSCAPI-KEY", process.env.CSCAPI_KEY || "");

  const requestOptions = {
    method: "GET",
    headers: headers,
  };

  try {
    const response = await fetch(
      "https://api.countrystatecity.in/v1/states",
      requestOptions
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error fetching states:", error);
    return [];
  }
}
