import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

// NextJS doesn't provide a way to set query params. This hook provides both read and
// write functionality.
export default function useQueryParams() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();

    const createQueryString = useCallback(
      (name: string, value: string) => {
        const params = new URLSearchParams(searchParams);
        params.set(name, value);

        return params.toString();
      },
      [searchParams],
    );

    const setQueryParam = (key: string, value: string) => {
      router.push(`${pathname}?${createQueryString(key, value)}`);
    };

    return { queryParams: searchParams, setQueryParam };
  }
