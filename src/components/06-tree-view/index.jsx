import { useState } from "react";
import MenuList from "./menu-list";
import reactLogo from '../../assets/react.svg';

export default function TreeView({ sideMenu = [] }) {

   return <section id="tree-view" className="p-3 font-mono">

      <div className="flex gap-2 p-2 items-center justify-center md:justify-start">

         <img className="h-5 hidden md:flex" src={reactLogo} alt="React Logo" />

         <h1 className="text-3xl font-bold text-slate-300">Menu</h1>

      </div>

      <MenuList menuList={sideMenu} />

   </section>

};