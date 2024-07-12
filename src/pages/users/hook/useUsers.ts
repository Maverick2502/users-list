import type { ChangeEvent } from "react";
import { useState } from "react";
import useSWR from "swr";

import { UsersInfoI } from "../../../models/users.model";

const URL = "https://fakestoreapi.com/users";

const fetcher = async (url: string): Promise<UsersInfoI[]> => {
  const response = await fetch(url);
  if (!response.ok) throw new Error("Failed to fetch users");
  return response.json();
};

const useUsers = () => {
  const [searchUser, setSearchUser] = useState<string>("");

  const { data, error, isLoading } = useSWR<UsersInfoI[]>(URL, fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
  });

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchUser(e.target.value);
  };

  const filteredData =
    data?.filter((user) =>
      [user.name.firstname, user.email, user.phone].some((field) =>
        field.toLowerCase().includes(searchUser.toLowerCase())
      )
    ) || [];

  return { error, filteredData, handleOnChange, isLoading };
};

export { useUsers };
