import { useEffect } from "react";

export default function useInit(callback, depends = [], options = { backForward: false }) {
  useEffect(() => {
    callback();

    if (options.backForward) {
      window.addEventListener('popstate', callback);
      return () => {
        window.removeEventListener('popstate', callback);
      };
    }
  }, depends);
}