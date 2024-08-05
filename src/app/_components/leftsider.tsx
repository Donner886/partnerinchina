"use client"

import { CustomFlowbiteTheme, Sidebar} from "flowbite-react";
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser } from "react-icons/hi";

import { useRouter } from 'next/navigation'


// below is customized stylesheet for sidebar
const customTheme: CustomFlowbiteTheme["sidebar"] = {
  "item":{
        "base": "flex items-center justify-center rounded-lg p-2 text-sm font-normal text-gray-900 hover:bg-gray-100 cursor-pointer dark:text-white dark:hover:bg-gray-700",
  }
}


export default function Leftsider() {
  const router = useRouter()
  return (
    <Sidebar theme={customTheme} className="static h-screen w-1/5" aria-label="Sidebar with multi-level dropdown example">
      <Sidebar.Items className="px-5 text-sm">
        <Sidebar.ItemGroup>
          <Sidebar.Item icon={HiChartPie} onClick={() =>router.push("/erp/dashboard") }>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Collapse className="text-sm font-medium" icon={HiShoppingBag} label="E-commerce">
            <Sidebar.Item onClick={() =>router.push("/erp/ecommerce") }>Products</Sidebar.Item>
            <Sidebar.Item onClick = { () => router.push("/erp/ecommerce")} >Sales</Sidebar.Item>
            <Sidebar.Item onClick = { () => router.push("/erp/ecommerce")} >Refunds</Sidebar.Item>
            <Sidebar.Item onClick = { () => router.push("/erp/ecommerce")} >Shipping</Sidebar.Item>
          </Sidebar.Collapse>
          <Sidebar.Item onClick = { () => router.push("/erp/inbox")} icon={HiInbox}>
            Inbox
          </Sidebar.Item>
          <Sidebar.Item onClick = { () => router.push("/erp/users")} icon={HiUser}>
            Users
          </Sidebar.Item>
          <Sidebar.Item onClick = { () => router.push("/erp/products")} icon={HiShoppingBag}>
            Products
          </Sidebar.Item>
          <Sidebar.Item onClick = { () => router.push("/erp/signin")} icon={HiArrowSmRight}>
            Sign In
          </Sidebar.Item>
          <Sidebar.Item onClick = { () => router.push("/erp/signout")} icon={HiTable}>
            Sign Up
          </Sidebar.Item>

        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}

