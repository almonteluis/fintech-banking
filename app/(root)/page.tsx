import React from "react";
import HeaderBox from "@/components/header-box";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import RightSidebar from "@/components/RightSidebar";

const Home = () => {
  const loggedIn = {
    firstName: "Jorge",
    lastName: "Almonte",
    email: "almonteluis92@gmail.com",
  };
  return (
    <section className="home">
      <div className="home-content">
        <HeaderBox
          type="greeting"
          title="Welcome,"
          user={loggedIn?.firstName || "Guest"}
          subtext="Access and manage your account and transactions efficiently"
        />
        <TotalBalanceBox
          accounts={[]}
          totalBanks={1}
          totalCurrentBalance={5650.34}
        />
      </div>
      <RightSidebar
        user={loggedIn}
        banks={[{ currentBalance: 1234.23 }, { currentBalance: 5231.12 }]}
      />
    </section>
  );
};

export default Home;
