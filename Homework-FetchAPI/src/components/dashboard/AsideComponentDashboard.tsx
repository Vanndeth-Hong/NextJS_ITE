"use client";

import {
  Sidebar,
  SidebarItem,
  SidebarItemGroup,
  SidebarItems,
} from "flowbite-react";
import { usePathname } from "next/navigation";
import { BiBuoy } from "react-icons/bi";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";

export function AsideComponentDashboard() {
  const pathName = usePathname();
  return (
    <div className="w-full ">
      <Sidebar aria-label="Sidebar with content separator example ">
        <SidebarItems>
          <SidebarItemGroup>
            <SidebarItem href="/dashboard" icon={HiChartPie}>
              Dashboard
            </SidebarItem>

            <SidebarItem
              className={
                pathName == "/dashboard/blogs" ? `bg-blue-100` : `bg-gray-100`
              }
              href="/dashboard/blogs"
              icon={HiUser}
            >
              Blog
            </SidebarItem>
            <SidebarItem href="/dashboard/products" icon={HiShoppingBag}>
              Products
            </SidebarItem>
            <SidebarItem href="/dashboard/setting" icon={HiShoppingBag}>
              Setting
            </SidebarItem>
          </SidebarItemGroup>
        </SidebarItems>
      </Sidebar>
    </div>
  );
}
