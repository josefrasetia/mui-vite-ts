import Grid from "@mui/material/Grid2";
import { Card, Typography } from "@mui/material";
import {
  People as PeopleIcon,
  ShoppingCart as ShoppingCartIcon,
  BarChart as BarChartIcon,
} from "@mui/icons-material";
import { StatsCard } from "@components";

const Dashboard = () => {
  return (
    <>
      <Grid container spacing={2} sx={{ mb: 2 }}>
        <Grid size={{ xs: 6, sm: 6, md: 3 }}>
          <StatsCard
            title="Total Users"
            value="2,300"
            icon={<PeopleIcon fontSize="large" />}
          />
        </Grid>
        <Grid size={{ xs: 6, sm: 6, md: 3 }}>
          <StatsCard
            title="Total Orders"
            value="1,520"
            icon={<ShoppingCartIcon fontSize="large" />}
          />
        </Grid>
        <Grid size={{ xs: 6, sm: 6, md: 3 }}>
          <StatsCard
            title="Revenue"
            value="$45,000"
            icon={<BarChartIcon fontSize="large" />}
          />
        </Grid>
        <Grid size={{ xs: 6, sm: 6, md: 3 }}>
          <StatsCard
            title="Growth"
            value="+25%"
            icon={<BarChartIcon fontSize="large" />}
          />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 8 }}>
          <Card
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: { xs: 240, sm: 400 },
            }}
          >
            <Typography variant="h6" gutterBottom>
              Sales Overview
            </Typography>
            {/* Add your chart component here */}
          </Card>
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <Card
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: { xs: 240, sm: 400 },
            }}
          >
            <Typography variant="h6" gutterBottom>
              Recent Activities
            </Typography>
            {/* Add your activities list here */}
          </Card>
        </Grid>
        <Grid size={{ xs: 12 }}>
          <Card sx={{ p: 2, display: "flex", flexDirection: "column" }}>
            <Typography variant="h6" gutterBottom>
              Latest Orders
            </Typography>
            {/* Add your orders table here */}
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
