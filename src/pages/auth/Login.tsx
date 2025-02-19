import React, { useEffect, useRef } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  IconButton,
  InputAdornment,
  Link,
  styled,
  useTheme,
} from "@mui/material";
import { IonIcon } from "@components";
import { useNavigate } from "react-router-dom";

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  paddingTop: theme.spacing(2),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  background: "rgba(255, 255, 255, 0.9)",
  backdropFilter: "blur(10px)",
  borderRadius: "12px",
}));

const Login = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [formData, setFormData] = React.useState({
    nrk: "",
    password: "",
    fakePassword: "",
  });
  const theme = useTheme();
  const navigate = useNavigate();

  const handleChange = (prop: string) => (event: any) => {
    if (prop === "password") {
      const value = event.target.value;
      const fakePassword = Array(value.length).fill("•").join("");
      if (value.length < formData.password.length) {
        const lengthDiff = value.length - formData.password.length;
        return setFormData({ ...formData, fakePassword: fakePassword, [prop]: formData.password.slice(0, lengthDiff) });
      }
      return setFormData({ ...formData, fakePassword: fakePassword, [prop]: formData.password + value.slice(-1) });
    }

    // number only input
    if (prop === "nrk" && isNaN(event.target.value)) return;
    return setFormData({ ...formData, [prop]: event.target.value });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log("Login attempt:", formData);
    navigate("/app");
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: `linear-gradient(135deg, ${theme.palette.primary.main} 40%, ${theme.palette.primary.dark} 100%)`,
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container maxWidth="sm">
        <StyledPaper elevation={10}>
          <img src="/img/logo-ib.png" alt="logo" height={70} />
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ mt: theme.spacing(3) }}
          >
            Masuk untuk memulai sesi anda
          </Typography>

          <Box sx={{ width: "100%" }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="nrk"
              label="NRK"
              name="nrk"
              autoComplete="off"
              autoFocus
              value={formData.nrk}
              onChange={handleChange("nrk")}
              size="small"
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <IonIcon name="person-outline" />
                    </InputAdornment>
                  ),
                },
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="pwd"
              label="Password"
              type="text"
              id="password"
              autoComplete="off"
              value={showPassword ? formData.password : formData.fakePassword}
              onChange={handleChange("password")}
              size="small"
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <IonIcon name="lock-closed-outline" />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
                      >
                        {showPassword ? (
                          <IonIcon name="eye-off-outline" />
                        ) : (
                          <IonIcon name="eye-outline" />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                },
              }}
            />

            <Button
              type="button"
              fullWidth
              variant="contained"
              onClick={handleSubmit}
              sx={{
                mt: 3,
                mb: 2,
                py: 1.5,
                backgroundColor: "#1976d2",
                "&:hover": {
                  backgroundColor: "#1565c0",
                },
              }}
            >
              Sign In
            </Button>

            <Box sx={{ textAlign: "center", mt: 2 }}>
              <Typography variant="body2" color="text.secondary">
                Lupa password?{" "}
                <Link href="#" underline="hover" sx={{ fontWeight: 500 }}>
                  Hubungi Administrator
                </Link>
              </Typography>
            </Box>
          </Box>
        </StyledPaper>
      </Container>
    </Box>
  );
};

export default Login;
