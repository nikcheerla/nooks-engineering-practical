import { Box } from "@material-ui/core";
import React from "react";
import { APP_NAME_TO_ICONS, AppHistoryEntry } from "../AppStore";

interface ListItemProps {
  entry: AppHistoryEntry & { timeSpent: number };
}
const ListItem: React.FC<ListItemProps> = ({ entry }) => {
  return (
    <Box display="flex" alignItems="center">
      <Box p={1}>
        <img
          alt="bla"
          src={APP_NAME_TO_ICONS[entry.appName].icon_url}
          style={{ width: 22, height: "auto" }}
        />
      </Box>
      <Box flex={1} color="#ACACAD">
        {entry.appName}
        <Box
          mt="5px"
          height={4}
          width="100%"
          bgcolor="#7840EE"
          borderRadius={100}
        ></Box>
      </Box>
      <Box color="#666666">{entry.timeSpent}</Box>
    </Box>
  );
};

export default ListItem;
