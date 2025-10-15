"use client";

import { useLenis } from "./Scrool";


export default function ClientWrapper({ children }) {
  useLenis();
  return children;
}
