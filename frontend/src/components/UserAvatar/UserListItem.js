import { Avatar, Box, Text } from "@chakra-ui/react";
import React from "react";

const UserListItem = ({ user, handleFunction }) => {
  return (
    <Box
      onClick={handleFunction}
      cursor="pointer"
      className="bg-[#E8E8E8] hover:bg-[#38B2AC] w-full flex items-center text-black px-3 py-2 mb-2 rounded-lg"
    >
      <Avatar
        className="mr-2 size-4 cursor-pointer"
        name={user.name}
        src={user.pic}
      />
      <Box>
        <Text>{user.name}</Text>
        <Text className="text-sm">
          <b>Email : </b>
          {user.email}
        </Text>
      </Box>
    </Box>
  );
};

export default UserListItem;
