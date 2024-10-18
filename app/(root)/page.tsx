import React from "react";
import HeaderBox from "@/components/header-box";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import RightSidebar from "@/components/RightSidebar";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";
import { getAccount, getAccounts } from "@/lib/actions/bank.actions";
import { SearchParamProps } from "@/types";
import RecentTransactions from "@/components/ReactTransactions";

const Home = async ({ searchParams: { id, page } }: SearchParamProps) => {
  const currentPage = Number((page as string) || 1);
  const loggedIn = await getLoggedInUser();
  const accounts = await getAccounts({
    userId: loggedIn.$id,
  });

  const fullName = loggedIn?.firstName + " " + loggedIn?.lastName;

  if (!accounts) return;

  const accountData = accounts?.data;

  const appwriteItemId = (id as string) || accountData[0]?.appwriteItemId;

  const account = await getAccount({ appwriteItemId });
  console.log({ account });

  if (!loggedIn) redirect("/sign-in");

  return (
    <section className="home">
      <div className="home-content">
        <HeaderBox
          type="greeting"
          title="Welcome,"
          user={fullName || "Guest"}
          subtext="Access and manage your account and transactions efficiently"
        />
        <TotalBalanceBox
          accounts={accountData}
          totalBanks={accounts?.totalBanks}
          totalCurrentBalance={accounts?.totalCurrentBalance}
        />
        <RecentTransactions
          accounts={accountData}
          transactions={account?.transactions}
          appwriteItemId={appwriteItemId}
          page={currentPage}
        />
      </div>
      <RightSidebar
        user={loggedIn}
        transactions={accounts?.transactions}
        banks={accountData?.slice(0, 2)}
      />
    </section>
  );
};

export default Home;
