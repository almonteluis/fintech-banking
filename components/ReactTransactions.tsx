import { Account, RecentTransactionsProps } from "@/types";
import Link from "next/link";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BankTabItem } from "./BankTabItem";
import BankInfo from "./BankInfo";
import TransactionsTable from "./TransactionsTable";

const RecentTransactions = ({
  accounts,
  transactions = [],
  appwriteItemId,
  page = 1,
}: RecentTransactionsProps) => {
  const trans = transactions;
  console.log(trans);
  return (
    <section className="recent-transactions">
      <header className="flex item-center justify-center">
        <h2 className="recent-transaction-label">Recent Transactions</h2>
        <Link
          href={`/transaction-history/?id=${appwriteItemId}`}
          className="view-all-button"
        ></Link>
      </header>
      <Tabs defaultValue={appwriteItemId} className="w-full">
        <TabsList className="recent-transaction-tablist">
          {accounts.map((account: Account) => (
            <TabsTrigger key={account.id} value={account.appwriteItemId}>
              <BankTabItem
                key={account.id}
                account={account}
                appwriteItemId={appwriteItemId}
              />
            </TabsTrigger>
          ))}
        </TabsList>
        <TabsContent value="account">
          Make changes to your account here.
        </TabsContent>
        {accounts.map((account: Account) => (
          <TabsContent
            key={account.id}
            value={account.appwriteItemId}
            className="space-y-4"
          >
            <BankInfo
              account={account}
              appwriteItemId={account.appwriteItemId}
              type="full"
            />

            <TransactionsTable transactions={transactions} />
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
};

export default RecentTransactions;
