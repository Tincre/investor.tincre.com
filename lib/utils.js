/* eslint-disable no-unused-vars */

// import { useRef, useState, useEffect, MutableRefObject } from 'react';
import jwtDecode from "jwt-decode";
import dynamic from "next/dynamic";

let SafeValCap = dynamic(() => import("../components/SafeValCap"));

export function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
/**
 * A fetcher for useSwr
 *
 * @param uri string web endpoint
 * @param options object `fetch` options. See fetch documentation.
 * @returns JSON response
 */
const fetcher = async (uri, options) => {
  let fetchOptions = options;
  if (typeof options !== "object") fetchOptions = {};
  const response = await fetch(uri, fetchOptions); // TODO can we just send an undefined
  // param and avoid the options nonsense?
  return response.json();
};

/**
 * Decode a JWT token client side
 *
 * @param token string jwt (base64) encoded token
 * @returns decoded string token
 */
function clientJwtDecode(token) {
  if (!token)
    throw new Error(
      "Token must be defined or not null. Do better next time, thanks."
    );
  return jwtDecode(token); // Returns with the JwtPayload type
}

/**
 * A simple resolver for the safe note type
 *
 * @param safeType string "Cap", "Discount", or "MFN"
 * @returns React component
 */
function resolveSafeTypeToComponent(safeType) {
  return SafeValCap;
}
export { clientJwtDecode, fetcher, resolveSafeTypeToComponent };
