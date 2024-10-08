import React from "react";
import HeaderBox from "@/components/header-box";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import RightSidebar from "@/components/RightSidebar";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";

const Home = async () => {
  // const loggedIn = {
  //   firstName: "Jorge",
  //   lastName: "Almonte",
  //   email: "almonteluis92@gmail.com",
  // };

  const loggedIn = await getLoggedInUser();
  if (!loggedIn) redirect("/sign-in");

  return (
    <section className="home">
      <div className="home-content">
        <HeaderBox
          type="greeting"
          title="Welcome,"
          user={loggedIn?.name || "Guest"}
          subtext="Access and manage your account and transactions efficiently"
        />
        <TotalBalanceBox
          accounts={[]}
          totalBanks={1}
          totalCurrentBalance={5650.34}
        />
        RECENT TRANSACTIONS
      </div>
      <RightSidebar
        user={loggedIn}
        banks={[{ currentBalance: 1234.23 }, { currentBalance: 5231.12 }]}
      />
    </section>
  );
};

export default Home;
