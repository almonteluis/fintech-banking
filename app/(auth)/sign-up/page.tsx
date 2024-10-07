import AuthForm from "@/components/AuthForm";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import React, { useEffect, useState } from "react";

const SignUp = async () => {
  const loggedInUser = await getLoggedInUser();
  // console.log(loggedInUser)

  const VisitorAPI = require("visitorapi");

  VisitorAPI("bqm92VoxSyLi5zUnMAs4")
    .then((data) => {
      // handle the return data in json
      console.log(data);
    })
    .catch((error) => {
      // handle error
      console.error(error);
    });
  return (
    <section className="flex-center size-full max-sm:px-6">
      <AuthForm type="sign-up" />
    </section>
  );
};

export default SignUp;
