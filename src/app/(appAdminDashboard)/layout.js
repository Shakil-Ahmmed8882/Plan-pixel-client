"use client";

import "@/styles/globals.css";
import PrivateRoute from "@/components/Common/PrivateRoute";
import TanstackProvider from "@/Providers/TanstackProvider";
import { IoIosArrowForward } from "react-icons/io";
import { useState } from "react";
import { usePathname } from "next/navigation";
import AdminDashboardSidebar from "./admin-dashboard/Components/Sidebar/AdminDashboardSidebar";
import AdminDashboardNavbar from "./admin-dashboard/Components/Navbar/AdminDashboardNavbar";
import AdminDrawer from "./admin-dashboard/Components/Drawer/AdminDrawer";

export default function DashboardLayout({ children }) {
    const [openSidebar, setOpenSidebar] = useState(false);

    const toggleSidebar = () => {
        setOpenSidebar(!openSidebar);
    };
    return (
        <section>
            <TanstackProvider>
                <PrivateRoute>
                    <div className="grid grid-cols-12 min-h-screen relative">
                        {openSidebar && (
                            <div className="absolute w-full left-0 top-0 h-screen  bg-indigo-950/10 backdrop-blur-sm z-50 xl:hidden block">
                                <div className="w-80 bg-white h-full relative">
                                    <AdminDrawer
                                        setOpenSidebar={setOpenSidebar}
                                    />
                                    <button
                                        onClick={toggleSidebar}
                                        className="border-2 p-1 flex items-center justify-center absolute bg-white rounded-full top-1/4 transform -translate-y-1/2 -right-3 z-40"
                                    >
                                        <IoIosArrowForward className="inline text-xl rotate-180" />
                                    </button>
                                </div>
                            </div>
                        )}
                        <div className="xl:col-span-2 col-span-0 xl:block hidden">
                            <AdminDashboardSidebar />
                        </div>

                        <div className="xl:col-span-10 col-span-12 xl:ms-0 ms-5">
                            <div className={`flex`}>
                                <div className="sticky top-0">
                                    <div className="md:w-4 w-2 h-screen border-r-2 xl:hidden block relative">
                                        <button
                                            onClick={toggleSidebar}
                                            className="border-2 p-1 flex items-center justify-center absolute bg-white rounded-full top-1/4 transform -translate-y-1/2 md:-left-0 -left-2 "
                                        >
                                            <IoIosArrowForward className="inline text-xl" />
                                        </button>
                                    </div>
                                </div>
                                <div className="grow">
                                    <div className="">
                                        <AdminDashboardNavbar />
                                    </div>

                                    <div className="p-4">{children}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </PrivateRoute>
            </TanstackProvider>
        </section>
    );
}
