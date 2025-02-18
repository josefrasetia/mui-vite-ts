import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";

const StatsCard: React.FC<{
  title: string;
  value: string;
  icon: React.ReactNode;
}> = ({ title, value, icon }) => (
  <Card sx={{ height: "100%" }}>
    <CardContent>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography color="textSecondary" variant="subtitle2">
            {title}
          </Typography>
          <Typography variant="h4">{value}</Typography>
        </Box>
        <Box sx={{ color: "primary.main" }}>{icon}</Box>
      </Box>
    </CardContent>
  </Card>
);

export default StatsCard;
