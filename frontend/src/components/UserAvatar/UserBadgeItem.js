import { CloseIcon } from "@chakra-ui/icons";
import { Box } from "@chakra-ui/react";
import React from "react";

const UserBadgeItem = ({ user, handleFunction }) => {
  return (
    <Box
      className="p-1 bg-pink-800 text-white	 rounded-lg m-2 text-[13px] cursor-pointer"
      variant="solid"
      onClick={handleFunction}
    >
      {user.name}
      <CloseIcon pl={1} />
    </Box>
  );
};

export default UserBadgeItem;
