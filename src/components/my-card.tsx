import React from "react";
import { Box } from "@material-ui/core";
import MyCardItem from "./my-card-item";
import { APP_NAME_TO_ICONS, AppHistoryEntry } from "../AppStore";

interface MyCardProps {
  entries: Record<string, AppHistoryEntry[]>;
}

const MyCard: React.FC<MyCardProps> = ({ entries }) => {
  const keys = Object.keys(entries);

  const appList: (AppHistoryEntry & { timeSpent: number })[] = keys.map(
    (key) => {
      // const appArray = { ...entries[key] };
      const timeSpent = entries[key].length * 5;

      return { timeSpent, ...entries[key][0] };
    }
  );

  return (
    <Box bgcolor="#4A4A4A" p={2} borderRadius={14}>
      <Box display="flex">
        <Box display="flex" flex={1}>
          <Box color="white">Work Activity</Box>
          <Box color="#ACACAD" pl={1}>
            Past 1h
          </Box>
        </Box>
        <Box color="#666666">Time spent</Box>
      </Box>
      <Box py={2}>
        {appList.map((app) => (
          <MyCardItem entry={app} />
        ))}
      </Box>
    </Box>
  );
};

export default MyCard;
