"use client";
import React from "react";
import useCategoryStore from "@/store/useCategoryStore";
import Product from "@/components/shop/product/Product";

const Dashboard = () => {
  const { categories } = useCategoryStore();

  return (
    <div className="admin-dashboard">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      {/* Add admin-specific components and content here */}
      <p>Welcome, Admin! Here you can manage.</p>
    </div>
  );
};

export default Dashboard;
